<template>
  <div class="workspace">
    <!-- Кнопка для управления третьей колонкой -->
    <button class="toggle-third-column" @click="toggleThirdColumn">
      {{ showThirdColumn ? 'x' : '<' }}
    </button>

    <!-- Первая колонка -->
    <FirstColumn @button-clicked="handleButtonClick" />

    <!-- Вторая колонка -->
    <SecondColumn 
      :width="secondColumnWidth" 
      :activeComponent="activeComponent" 
    />

    <!-- Третья колонка -->
    <ThirdColumn v-if="showThirdColumn" @hide="hideThirdColumn" />
  </div>
</template>


<script setup>
import FirstColumn from './FirstColumn.vue';
import SecondColumn from './SecondColumn.vue';
import ThirdColumn from './ThirdColumn.vue';
import {ref, computed} from 'vue';
const components = ref({
    FirstColumn,
    SecondColumn,
    ThirdColumn
});
const showThirdColumn = ref(false);
const activeComponent = ref( null);
const secondColumnWidth = computed(()=> {return showThirdColumn.value ? '50%' : '75%'});
const handleButtonClick=(buttonId) => {
  const componentMap = {
        1: 'ComponentOne',
        2: 'ComponentTwo',
        3: 'ComponentThree',
        4: 'ComponentFour',
        5: 'ComponentFive',
        7: 'ComponentTest',
      };
      activeComponent.value = componentMap[buttonId] || null;
};
const toggleThirdColumn = ()=> {
  showThirdColumn.value=!showThirdColumn.value;
};
const hideThirdColumn = ()=> {
  showThirdColumn=false;
};

</script>



<style scoped>

@import '/src/component/srift.css';





.workspace {
  display: flex;
  width: 1440px; /* Ширина равна ширине viewport'а */
  height: 900px; /* Высота равна высоте viewport'а */
  position: relative; /* Для позиционирования кнопки */
}

/* Кнопка для управления третьей колонкой */
.toggle-third-column {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>