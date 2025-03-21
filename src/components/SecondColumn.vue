<template>
    <div class="second-column" :style="{ width: width }">
      <!-- Динамический компонент -->
      <transition name="fade">
        <component :is="activeComponent" v-if="activeComponent" ></component>
        <ComponentOne v-else />
        
        
      </transition>
      
    </div>
  </template>
  
  <script>
  // Импортируем все возможные компоненты для второй колонки
  import ComponentOne from './twokolon/ComponentOne.vue';
  import ComponentTwo from './twokolon/ComponentTwo.vue';
  import ComponentThree from './twokolon/ComponentThree.vue';
  import ComponentFour from './twokolon/ComponentFour.vue';
  import ComponentFive from './twokolon/ComponentFive.vue';
  import Component_test from './twokolon/Component_test.vue';
  
  export default {
    props: {
      width: {
        type: String,
        required: true
      },
      activeComponent: {
        type: String,
        required: true
      }
    },
    components: {
      ComponentOne,
      ComponentTwo,
      ComponentThree,
      ComponentFour,
      ComponentFive,
      Component_test,
    }
  };
  </script>
  
  <style scoped>
  .second-column {
    background-color: white;
    padding: 20px;
    box-sizing: border-box;
    transition: width 0.3s ease; /* Анимация изменения ширины */
    width: 695px;
    height: 900px;
  }
  </style>