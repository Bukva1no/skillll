<template>
    <div class="home">
     


      <header class="header">
        <div class="wrapper">
            <div class="header_wrapper">
                <div class="header_text">
                    <a href="index.html" class="header_name">SKILLMASTER</a>
                </div>
    
                <nav class="header_nav">
                    <ul class="header_list">
                        <li class="header_item">
                            <a href="#!" class="header_link">о нас </a>
                        </li>   
    
                        <li class="header_item">
                            <a href="#!" class="header_link">цены</a>
                        </li>
                        
                        <li class="header_item">
                            <a href="#!" class="header_link">скачать сейчас</a>
                        </li>
    
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <main class="main">
        <section class="fon_skill">
            <div class="wrapper">
               <div class="logo_skill">
                <img :src="imageLogo" alt="Описание изображения">
               </div>
               <p class="intro_subtext">
                ИГРАЙ И РАЗВИВАЙ ГИБКИЕ НАВЫКИ ПРЯМО В СВОЕМ ТЕЛЕФОНЕ    
               </p>
               <div class="vibor">
                <button @click="navigateToRegister" class="button button_redy " >НАЧАТЬ СЕЙЧАС</button>
                <button @click="navigateToLogin" class="button button_now" >УЖЕ ЕСТЬ АККАУНТ</button>
              </div>
               <p class="golov">
                <img :src="golova" alt="гг">
               </p>
            </div>
        </section>
        
    </main>




      
      
    </div>
  </template>
  
  <script setup>

          
        import logo from '@/assets/svg/skillmaster.svg';

    
        import { ref } from 'vue';
        const imageLogo = ref(logo); 

        import logG from '@/assets/svg/Frame_198.svg';

        const golova = ref(logG); 




  </script>





  <script>



  export default {
    methods: {
      navigateToLogin() {
        this.$router.push('/login');
      },
      navigateToRegister() {
        this.$router.push('/register');
      }
    }
  };
  </script>
  
  <style scoped>
  
  @import '/src/component/srift.css';

      .wrapper {
        max-width: 1280px;
        margin: 0 auto;
        
        
    }

    
      .header{
        background-color:  rgba(142, 56, 210, 1);
        min-height: 77px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
    }

    .header_wrapper{
      max-width: 1280px;
      min-height: 77px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      display: flex; /* Используем flexbox для выравнивания элементов */
      align-items: center; /* Выравниваем по вертикали */
      justify-content: space-between; /* Выравниваем элементы по горизонтали */
      padding: 0 80px; /* Добавляем отступы по бокам */
      margin: 0 auto; /* Центрируем контент */
    
      }

      .header_text {
    display: flex;
    justify-content: flex-start;
}   

.header_name{
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color:  rgba(255, 255, 255, 1);
    text-decoration: none;
    text-align: justify;
    width: 171px;
    letter-spacing: -1.1%;
    height: 37px;
    top: 20px;
    left: 80px;
    position: fixed;
    
}

.header_nav{
    width: 421px;
    height: 21px;
    top: 28px;
    right: 0px;
    gap: 40px;
    position: fixed;
    display: flex;
}    


.header_list{
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
}

.header_item:last-child{
    margin-right: 0;
}

.header_link{
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    color:  rgba(255, 255, 255, 1);
    text-decoration: none;
}



.header_link:hover, .header_link:focus, .header_link:active{
    opacity: 0.75;
}

.main{
    width: calc(100% - 160px); /* 100% ширины - 80px отступ слева и справа */
    height: 649px;
    position: absolute;
    top: 60px;
    left: 80px;
    right: 80px; /* отступ справа */

   
}

.logo_skill{
    padding-top: 133px;
    width: 1280px;
    height: 132px;
    margin-bottom: 262px;
}

.intro_subtext{
    /* играй и развивай гибкие навыки прямо в своем телефоне */

width: 666px;
height: 70px;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 150%;
margin-bottom: 60px;
color: #000000;
margin-right: 109px;
}

.button {
    display: block; /* Задаем блочный элемент */
    margin: 20px 0; /* Увеличиваем отступы между кнопками */
    
  }
.button_redy{
    /* Frame 171 */

/* Auto layout */
color: white;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 57px;
gap: 10px;


width: 484px;
height: 56px;
left: 80px;
top: 529px;

/* сирен */
background: #9E56D8;
border-radius: 25px;
border: 1px solid #8529CE;

  }

.button_now{
    /* Frame 199 */

box-sizing: border-box;

/* Auto layout */
color: #8529CE;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 57px;
gap: 10px;


width: 484px;
height: 56px;
left: 80px;
top: 605px;

background: #FFFFFF;
/* фиол */
border: 1px solid #8529CE;
border-radius: 25px;

}

.golov{
/* Frame 198 */

position: absolute;
width: 571px;
height: 553px;
left: 789px;
top: 233px;
}

.button-text{
    color: white;
}
.button{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -1.1%;
    letter-spacing: -1.1% !important;
}

  </style>