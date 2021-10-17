<template>
    <div>
        <figure class="image is-128x128" style="padding-top: 5%;">
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
    </div>
</template>