const Users = require( "./users");
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('posts');
module.exports.collection = collection;

const list = [
    { 
        src: "https://m.media-amazon.com/images/I/61BKzHXYxML._AC_UL320_.jpg",
        alt: "Placeholder image",
        caption: "Got These weigths 5 weeks ago, and I still can't do more than 3 reps =(",
        time: Date(),
        user_handle: "@johnsmith",
        isPublic: true,
    },
    { 
        src: "https://www.bodybuilding.com/fun/images/2015/how-much-weight-should-you-lift-tablet-600x338.jpg",
        alt: "Placeholder image",
        caption: "Your Hard days r my warmups. #sigmagrindset",
        time: Date(),
        user_handle: "@BF3000",
        isPublic: true,
    },
    { 
        src: "https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2021/02/1140x2602-joan-mac-donald.jpg",
        alt: "Buff Granny",
        caption: "This is my mom at 145 years of age. What's your excuse.",
        time: Date(),
        user_handle: "@BF3000",
        isPublic: true,
    },
    { 
        src: "https://i.ebayimg.com/images/g/IxsAAOSwxupfTjxr/s-l300.jpg",
        alt: "75 pound bumbells.",
        caption: "I used to curl these when I was 7. You and I are not the same.",
        time: Date(),
        user_handle: "@BF3000",
        isPublic: true,
    },
    { 
        src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fit-young-man-sweating-after-a-gym-workout-session-royalty-free-image-947330890-1548092275.jpg",
        alt: "sweaty man",
        caption: "The first step is always the hardest. Don't give up on yourself.",
        time: Date(),
        user_handle: "@Alavi5",
        isPublic: true,
    },
];

const addOwnerPipeline = [
    {"$lookup" : {
        from: "users",
        localField: 'user_handle',
        foreignField: 'handle',
        as: 'user',
    }},
    {$unwind: "$user"},
    { $project: { "owner.password": 0}}
];

module.exports.GetAll = function GetAll() {
    return collection.aggregate(addOwnerPipeline).toArray();
}

module.exports.GetWall = function GetWall(handle) {
    return collection.aggregate(addOwnerPipeline).match({ user_handle: handle }).toArray();
}


module.exports.GetFeed_ = function GetFeed_(handle) {
    //  The "SQL" way to do things
    const query = Users.collection.aggregate([
        {$match: { handle }},
        {"$lookup" : {
            from: "posts",
            localField: 'following.handle',
            foreignField: 'user_handle',
            as: 'posts'
        }},
        {$unwind: '$posts'},
        {$replaceRoot: { newRoot: "$posts" } },
    ].concat(addOwnerPipeline));
    return query.toArray();

}

module.exports.GetFeed = async function (handle) {
    //  The "MongoDB" way to do things. (Should test with a large `following` array)
    const user = await Users.collection.findOne({ handle });
    if(!user){
        throw { code: 404, msg: 'No such user'};
    }
    const targets = user.following.filter(x=> x.isApproved).map(x=> x.handle).concat(handle)
    const query = collection.aggregate([
        {$match: { user_handle: {$in: targets} } },
     ].concat(addOwnerPipeline));
    return query.toArray();
}


module.exports.Get = function Get(post_id) { return collection.findOne({_id: new ObjectId(post_id) }); }

module.exports.Add = async function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
    post.time = Date();
    
    const response = await collection.insertOne(post);
    
    post.id = response.insertedId;

    return { ...post };
}
module.exports.Update = async function Update(post_id, post) {
    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(post_id) }, 
        { $set: post },
        { returnDocument: 'after'}
    );

    return results.value;
}
module.exports.Delete = async function Delete(post_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(post_id) })

    return results.value;
} 

module.exports.Search = q => collection.find({ caption: new RegExp(q,"i") }).toArray();

module.exports.Seed = async ()=>{
    for (const x of list) {
        await this.Add(x)
    }
}