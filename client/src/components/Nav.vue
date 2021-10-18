<template>
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="../../../images/yolked.png" width="112" height="28">
              </a>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active': navBarIsActive}" @click="navBarIsActive = !navBarIsActive">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbar" class="navbar-menu" :class="{'is-active': isActive }">
              <div class="navbar-start">
                <a class="navbar-item" href="/">
                  Home
                </a>
          
                <a class="navbar-item" href="/about">
                  Info
                </a>
          
                <a class="navbar-item" href="/exercises">
                    Exercises
                  </a>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Diet
                  </a>
          
                  <div class="navbar-dropdown">
                    <a class="navbar-item" href="/calorie">
                      Calorie Counter
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="/snacks">
                      Healthy Snacks
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="/recipes">
                      Healthy Recipes
                    </a>
                    
                  </div>
                </div>

                <a class="navbar-item" href="/profile">
                  Profile
                </a>

                <a class="navbar-item" href="/share">
                  Share
                </a>


              </div>
          
              <div class="navbar-end">
      <div class="navbar-item">
            <login-badge />
        </div>
     </div>
            </div>
          </nav>
</template>

<script>
import LoginBadge from './LoginBadge';
export default {
    data(){
        return {
            isActive: false
        }
    },
    components: {
        LoginBadge,
    }
}
</script>

<style>
</style>
