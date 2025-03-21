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
  @import '/src/component/style.css';
  @import '/src/component/srift.css';
  </style>