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
                <a class="navbar-item" @click="home" actice-class="is-active">
                  Home
                </a>
          
                <a class="navbar-item" @click="about" actice-class="is-active">
                  Info
                </a>
          
                <a class="navbar-item" @click="exercises" actice-class="is-active">
                    Exercises
                  </a>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Diet
                  </a>
          
                  <div class="navbar-dropdown">
                    <a class="navbar-item" @click="calorie" actice-class="is-active">
                      Calorie Counter
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" @click="snacks" actice-class="is-active">
                      Healthy Snacks
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" @click="recipes" actice-class="is-active">
                      Healthy Recipes
                    </a>
                    
                  </div>
                </div>

                <a class="navbar-item" @click="profile" actice-class="is-active">
                  Profile
                </a>

                <a class="navbar-item" @click="share" actice-class="is-active">
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
import LoginBadge from '../components/Loginbadge.vue';
export default {
    data(){
        return {
            isActive: false
        }
    },
    methods: {
        home(){
            this.$router.push('/');
            
        },
        about(){
            this.$router.push('/about');
            
        },
        exercises(){
            this.$router.push('/exercises');
            
        },
        calorie(){
            this.$router.push('/calorie');
            
        },
        snacks(){
            this.$router.push('/snacks');
            
        },
        recipes(){
            this.$router.push('/recipes');
            
        },
        profile(){
            this.$router.push('/profile');
            
        },
        share(){
            this.$router.push('/share');
            
        }
    },
    components: {
        LoginBadge,
    }
}
</script>

<style>
</style>
