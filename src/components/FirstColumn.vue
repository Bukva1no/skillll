<template>
    <div class="first-column">
      <p class="logo">
            <img :src="Skill" alt="lohs" class="logo">
        </p>
      <button v-for="button in buttons" :key="button.id" @click="handleClick(button.id)">
         {{ button.label }}
      </button>
    </div>
  </template>

  <script setup>
  

  import logoSkil from '@/assets/svg/skillmaster.svg';
  import {ref} from 'vue';
  const Skill= ref(logoSkil);



  
  
  </script>


  
  <script>
  export default {
    data() {
      return {
        buttons: [
          { id: 1, label: 'Тестирование', class: 'button-primary' },
          { id: 2, label: 'Разделы' },
          { id: 3, label: 'Рейтинг' },
          { id: 4, label: 'Магазин' },
          { id: 5, label: 'Профиль' },
          { id: 6, label: 'Еще' },
        ]
      };
    },
    methods: {
      handleClick(buttonId) {
        this.$emit('button-clicked', buttonId); // Отправляем событие родителю
      }
    }
  };
  </script>
  
  <style scoped>
  @import '/src/component/srift.css';



  .first-column {
    width: 25%; /* Занимает 1/4 пространства */
    background-color: white;
    padding: 10px;
    box-sizing: border-box;
  }
  


  button {

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    /* leading-trim and text-edge are draft CSS properties.

    Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
    */

    text-transform: uppercase;

    /* фиол */
    color: #8529CE;
    
  

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 10px;

    width: 305px;
    height: 60px;

    border-radius: 15px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 20px;
    margin-top: 35px;
    

  }

  .logo{
    margin-top: 10px;
    width: 300px;
    height: 31px ;
  }
  </style>