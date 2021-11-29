<template>
    <div class="buttons" v-if="!Session.user">
          <a class="button is-warning">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" @click="login">
            Log in
          </a>
    </div>
    <div v-else>
        <p><strong>Hello {{name}}</strong></p>
        <div class="button is-warning" @click = "logout">
            Logout
        </div>
    </div>

</template>

<script>
import Session from "../services/session";
export default {
    data (){
        return ({ 
            Session
        })
    },
    methods: {
        login(){
            this.$router.push('/login');
            //this.Session.Login();
        }
    },
    computed:{
        name(){
            return this.Session.user.FirstName;
        }
    }
}
</script>

<style>
</style>