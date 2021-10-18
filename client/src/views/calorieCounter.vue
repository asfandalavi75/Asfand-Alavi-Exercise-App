<template>
    <div>
        
        <div class="home" style="position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;">
    

          <img src="../assets/bg2.png" style="position: absolute; 
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0; 
          margin: auto; 
          min-width: 50%;
          min-height: 50%;">

        </div>

        <div class="block" style="padding-left: 5%; padding-top: 2%;">
            
            <p> This page will allow user's to set there goal caloric intake, and also see how much they have consumed, and how much more they  
              can eat before surpassing there goal. 
            </p>
            

            
          </div>

          <div class="container is-max-widescreen">
            <div class="field" style="padding: 5%;">
            <label class="label">Calories Goal </label>
            <div class="control">
              <input class="input" type="number" placeholder="Goal" v-model.number="goal">
            </div>
          </div>
        
            <div class="field" style="padding: 5%;">
              <label class="label"> Calories Consumed </label>
              <div class="control">
                <input class="input" type="number" placeholder="Consumed" v-model.number = "consumed">
              </div>
            </div>
            <a class="button is-warning" @click="calculate">
            Calculate
            </a>

            <div class="field" style="padding: 5%;">
            <label class="label"> Caloric deficit (if number is NEGATIVE, you are over your goal). </label>
            <div class="control">
              <input type="number" v-model.number = "result">
            </div>
          </div>


         </div>
    </div>
</template>
<script>
export default {
  data: ()=>({
        goal: null ,
        consumed: null,
        result: null,
    }),
    methods: {
        calculate(){
          this.result = this.goal - this.consumed;
        } 
    }

}
</script>