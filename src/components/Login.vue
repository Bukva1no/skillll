<template>


    <header>
        <button @click="registBut" class="register-button">Регистрация</button>
      </header>

    
    <div class="frame-121">
        <div class="frame-120">
        <h1 class="login-title">Вход</h1>
          
        <form @submit.prevent="handleLogin">
        <div class ="frame-119">
          <input type="text" v-model="username" placeholder="Почта / Номер телефона" class="login-input">
          <input type="password" v-model="password" placeholder="Пароль" class="login-input">
          <button class="login-button">Войти</button>
        </div>
      </form>

</div>
      <div class="forgot">
        <p class="login-forgot">
          Забыли пароль? <a href="#">Восстановить</a>
        </p>
    </div>
    </div>
    <div class="ellipses-container">
        <div class="ellipse ellipse-1"></div>
        <div class="ellipse ellipse-2"></div>
        <div class="ellipse ellipse-3"></div>
      </div>
      <div class="ellipses-container-right">
        <div class="ellipse right-ellipse-1"></div>
        <div class="ellipse right-ellipse-2"></div>
        <div class="ellipse right-ellipse-3"></div>
    </div>
    <div class="ellipses-container-left">
        <div class="ellipse left-ellipse-1"></div>
        <div class="ellipse left-ellipse-2"></div>
        <div class="ellipse left-ellipse-3"></div>
    </div>




     
    
  </template>
  
  <script>
import router from '@/router';

  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        alert('Вы вошли как ' + this.username);
        this.$router.push('/workspace');
      },
      registBut (){
        this.$router.push('/Register');
      }
    }
  };
  </script>
  
  <style scoped>
  @import '/src/component/theme.css' ;
  
  </style>