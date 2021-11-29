

<template>

<div>
    <div class="home" style="position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;">
    

  <img src="../assets/homescreen.png" style="position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%;">

  </div>
      <div class="container is-max-widescreen" style="">
      <div class="card has-background-warning">
    <form class="section" @submit.prevent="login()">
      <div class="field">
        <p class="control has-icons-left has-icons-right" style="padding:5%">
            <input class="input" type="username" placeholder="Email" v-model="email" style="">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left" style="padding:5%" >
            <input class="input" type="password" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button">
            Login
            </button>
        </p>
        </div>
  </form>
      </div>
  </div>
  </div>
</template>

<script>
import Session from "../services/session.js";

export default {
    data: ()=>({
        email: null,
        password: null,
        Session
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        }
    }
}
</script>

<style>
</style>