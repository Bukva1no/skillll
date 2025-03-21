<template>
    <div class="register">
      


      <div class="reg">
        <div class="frame-120">
            <h1 class="reg-title">Регистрация</h1>
            <form @submit.prevent="handleRegister">
              <div class="frame-119">
                  <input type="text" v-model="username" placeholder="Логин" class="reg-input">
                  <input type="password" v-model="password" placeholder="Пароль" class="reg-input">
                  <input type="email" v-model="email" placeholder="Почта" class="reg-input">
                  <button type="submit" class="reg-button">Зарегистрироваться</button>
              </div>
          </form>
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
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        email: '',
      };
    },
    methods: {
      handleRegister() {
        alert('Вы зарегистрировались как ' + this.username);
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  @import '/src/component/reset.css';
  @import '/src/component/reg.css';
  
  .register {
    text-align: center;
    margin-top: 50px;
  }
  
  
 
  </style>