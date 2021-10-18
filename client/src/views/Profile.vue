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


        <div class="container is-max-widescreen">
          <div class = 'column'>
            <figure class="image is-128x128" style="padding-top: 5%">
            <img class="is-rounded" src="../assets/8d2.jpg">
          </figure>

          <div class="field" style="padding: 7%;">
            <label class="label">Username</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text" placeholder="New User">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
            <p class="help is-success">This username is available</p>
          </div>

          <div class="field" style=" padding-left: 7%; padding-right: 7%;">
            <label class="label">Old Password</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="password" placeholder="********">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
        
          <div class="field" style="padding-top: 7%; padding-left: 7%; padding-right: 7%;">
            <label class="label">New Password</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="password" placeholder="********" >
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
        <p class="control">
            <button class="button">
            Submit
            </button>
        </p>
          </div>
        </div>
    </div>
</template>