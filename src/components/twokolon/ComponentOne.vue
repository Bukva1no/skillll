<template>
    
            <div class="column2">

                <div id="testing" class="content-container testing-content">
                    <p class="info">Здесь вы можете пройти тестирования, которые помогут лучше определить  программу и прогресс вашего обучения</p>
                    <button @click="handleClick(button.id)" class="begginer" >
                        <div class="pink">
                            <p class="text_pink">Начальное тестирование</p>
                            <div class="white">
                                <div class="text_pink1">проверка уровня начальных навыков</div>
                                <div class="dopinfo">
                                    <p class="oval">33 вопроса</p>
                                    <p class="oval">максимум баллов 165</p>
                                </div>
                            </div>
                        </div>
                    </button>
                    <button class="finaltest">
                        <div class="finaltext">ФИНАЛЬНОЕ ТЕСТИРОВАНИЕ</div>
                        <div class="white1">
                            <div class="text_pink1">ПРОВЕРКА ПРОКАЧЕННЫХ НАВЫКОВ</div>
                            <div class="dopinfo">
                                <p class="oval">33 вопроса</p>
                                <p class="oval">максимум баллов 165</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
    
  </template>
  
  <script>
  export default {
    name: 'ComponentOne'
  };
  </script>
  
  <style scoped>
  @import '/src/component/main.css';
  .container-one {
    background-color: #f0f8ff;
    padding: 20px;
    border: 1px solid #ccc;
    height: 900px;
  }
  </style>