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

<script>
import FirstColumn from './FirstColumn.vue';
import SecondColumn from './SecondColumn.vue';
import ThirdColumn from './ThirdColumn.vue';

export default {
  components: {
    FirstColumn,
    SecondColumn,
    ThirdColumn
  },
  data() {
    return {
      showThirdColumn: false, // Флаг для показа/скрытия третьей колонки
      activeComponent: null   // Имя активного компонента во второй колонке
    };
  },
  computed: {
    secondColumnWidth() {
      return this.showThirdColumn ? '50%' : '75%'; // Динамическая ширина второй колонки
    }
  },
  methods: {
    handleButtonClick(buttonId) {
      // Определяем компонент для каждой кнопки
      const componentMap = {
        1: 'ComponentOne',
        2: 'ComponentTwo',
        3: 'ComponentThree',
        4: 'ComponentFour',
        5: 'ComponentFive',
        6: 'Component_test'
      };

      this.activeComponent = componentMap[buttonId] || null; // Устанавливаем активный компонент
    },
    toggleThirdColumn() {
      this.showThirdColumn = !this.showThirdColumn; // Переключаем видимость третьей колонки
    },
    hideThirdColumn() {
      this.showThirdColumn = false; // Скрываем третью колонку
    }
  }
};
</script>

<style scoped>
@import '/src/component/reset.css';
@import '/src/component/srift.css';

html, body {
    margin: 0; /* Убираем отступы по умолчанию */
    padding: 0; /* Убираем внутренние отступы */
   
    overflow-x: hidden; /* Отключаем горизонтальную прокрутку, если она появляется */
}



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