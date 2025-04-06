<template>


    <header>
        <button @click="registBut" class="register-button">Регистрация</button>
      </header>

    
    <div class="frame-121">
        <div class="frame-120">
        <h1 class="login-title">Вход</h1>
          
        <form @submit.prevent="handleLogin">
        <div class ="frame-119">
          <input type="text" v-model="user.username" placeholder="Почта / Номер телефона" class="login-input">
          <input type="password" v-model="user.password" placeholder="Пароль" class="login-input">
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
  

  <script setup>
  import router from '@/router';
  import {ref} from 'vue';
  
  const user = ref({
  username: '',
  password: ''
});
  console.log (user.value);


function handleLogin() {
  if (!user.value.username || !user.value.password) {
    alert('Заполните все поля ');
    return;
  }
  alert('Вы вошли как ' + user.value.username);
  router.push('/workspace');
}
const registBut = ()=>{
        router.push('/Register');
      }
 </script>

  
  
  <style >
  

  * {
  box-sizing: border-box;
}


  
  .register-button {
  position: fixed;
  right: 24px;
  width: 251px;
  height: 62px;
  border-radius: 15px;
  border: 1px solid gray;
  padding: 16px 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 29.26px;
  color: #8529CE;
  background-color: white;
  cursor: pointer;
  text-align: center;
}

.register-button:hover {
  background-color: #f0f0f0;
}


.frame-121 {
  position: relative;
  flex-direction: column;
    width: 491px; /* Фиксированная ширина */
    height: 455px; /* Адаптивная высота */
    gap: 24px; /* Задаем промежуток между элементами внутри фрейма */
    z-index: 0
}
.frame-120 {
    width: 497px;
    height: 366px;
    gap: 60px;
    display: flex;
    flex-direction: column;
    text-align: justify;
    align-items: center;
}
.login-title{
    width: 97px;
    height: 44px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 43.88px;
    text-align:justify;
    color: #8529CE;

}
.frame-119{
    position: relative;
    flex-direction: column;
    width: 497px; /* Фиксированная ширина */
    height: 466px; /* Адаптивная высота */
    gap: 24px; /* Задаем промежуток между элементами внутри фрейма */
    display: flex; 
    flex-direction: column;
}
.login-input{
  width: 497px;
  height: 76px;
  border-radius: 15px;
  padding-top: 16px;
  padding-right: 24px;
  padding-bottom: 16px;
  padding-left: 24px;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400px;
  font-size: 24px;
  line-height: 29.26px;
  color: rgba(0, 0, 0, 0.5);
  text-align: justify;
  background-color: rgba(151, 103, 198, 0.2); 
  border: none;
  z-index: 0;
}
.login-button {
  width: 497px;
  height: 62px;
  border-radius: 15px;
  padding-top: 16px;
  padding-right: 24px;
  padding-bottom: 16px;
  gap: 10px;
  background-color: #8529CE; /* Фиолетовый фон */
  color: #FFFFFF; /* Белый цвет текста */
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 29.26px;
  text-align: center;
  border: none;
}

.forgot .login-forgot a {
  color: #8529CE; /* Фиолетовый цвет для ссылки */
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 29.26px;
  letter-spacing: 0%;
  text-align: justify;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-thickness:auto ;
}
  
* {
  box-sizing: border-box;
}





.forgot{
  margin-top: auto;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 29.26px;
  letter-spacing: 0%;
  text-align: justify;
  color: black;
  width: 402px;
  height: 29px;
  gap: 24px;
  position: relative;
  top: 24px; /* Спускает элемент на 24px вниз */

}



.reg-title{
  width: 97px;
  height: 44px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 43.88px;
  text-align:justify;
  color: #8529CE;

}
  </style>