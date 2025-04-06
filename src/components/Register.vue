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
  
  
  .register {
    text-align: center;
    margin-top: 50px;
  }
  
  .frame-120 {
    width: 491px;
    height: 466px;
    gap: 60px;
    display: flex;
    flex-direction: column;
    text-align: justify;
    align-items: center;
    top: 217px;
    left: 475px;
}

.frame-119 {
    position: relative;
    flex-direction: column;
      width: 497px; /* Фиксированная ширина */
      height: 466px; /* Адаптивная высота */
      gap: 24px; /* Задаем промежуток между элементами внутри фрейма */
      display: flex; 
      flex-direction: column;
  }

  .reg-title{
    width: 254px;
    height: 44px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 43.88px;
    text-align:justify;
    color: #E66385;

}
  
.reg-input {
    width: 497px;
    height: 76px;
    border-radius: 15px;
    padding-top: 16px;
    padding-right: 24px;
    padding-bottom: 16px;
    padding-left: 24px;
    gap: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 29.26px;
    color: rgba(0, 0, 0, 0.5);
    text-align: justify;
    background-color: #E73C6833;
    border: none;
    
}

.reg-input::placeholder {
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color: rgba(0, 0, 0, 0.5);
}
.reg-button {
    width: 497px;
    height: 62px;
    border-radius: 15px;
    padding-top: 16px;
    padding-right: 24px;
    padding-bottom: 16px;
    gap: 10px;
    background-color: #E66385;
    color: #FFFFFF; /* Белый цвет текста */
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 29.26px;
    text-align: center;
    border: none;
  }
 
  </style>