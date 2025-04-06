<template>
    
            <div class="column2">

                <div id="testing" class="content-container testing-content">
                    <p class="info">Здесь вы можете пройти тестирования, которые помогут лучше определить  программу и прогресс вашего обучения</p>
                    <button @click="handleClick(button.id)" class="begginer" id="7">
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
  
  <script setup >
  import {ref} from 'vue';
  const emit = defineEmits(['button-clicked']);
  const handleClick=(buttonId) =>{
        emit('button-clicked', buttonId); // Отправляем событие родителю
      }

  </script>
  
  <style scoped>
  
  .container-one {
    background-color: #f0f8ff;
    padding: 20px;
    border: 1px solid #ccc;
    height: 900px;
  }

  .column2{
    box-sizing: border-box; /* Учитываем отступы и границы в ширине */
     width: 1070px;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.info{
    /* Group 46 */

/* Frame 201 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

position: absolute;
width: 611px;
height: 117px;
left: 50%;
    transform: translateX(-50%); /* Центрируем по горизонтали */
top: 45px;

/* фиол */
background: #8529CE;
border-radius: 25px;

/* Здесь вы можете пройти тестирования, которые помогут лучше определить программу и прогресс вашего обучения */

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 150%;
/* or 24px */
/* leading-trim and text-edge are draft CSS properties.

Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
*/
display: flex;
align-items: center;
letter-spacing: -0.011em;
text-transform: uppercase;

/* белый */
color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
   /* Отступы внутри блока */
   padding: 29px 26.5px; /* Верх/низ = 29px, Лево/право = 26.5px */
    
   /* Для точности можно добавить box-sizing */
   box-sizing: border-box;

}

.begginer{
    /* Rectangle 136 */

box-sizing: border-box;

position: absolute;
width: 611px;
height: 198px;
left: 50%;
    transform: translateX(-50%); /* Центрируем по горизонтали */
top: 212px;

/* роз */
background: #E66385;
/* черный */
border-bottom: 2px solid #000000;
border-radius: 25px;
align-items: center;
padding: 10px;


text-align: center; /* Выравнивание текста по центру */
text-decoration: none; /* Убираем подчеркивание */
display: inline-flex; /* Используем flexbox для выравнивания */
align-items: center;

}


.pink{
    width: 611px;
    height: 198px;
    text-align: center; /* Выравнивание текста по центру */
    text-decoration: none; /* Убираем подчеркивание */
    
    align-items: center;
    
    
}
.text_pink{
    /* Начальное тестирование */
    top: -10px;
    position: relative;
/* montserrat/bold/24 */
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 150%;
/* or 36px */
/* leading-trim and text-edge are draft CSS properties.

Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
*/
display: flex;
align-items: center;

letter-spacing: -0.011em;
text-transform: uppercase;


/* белый */
color: #FFFFFF;
margin-top: 24px;
margin-left: 29px;
}

.white{
background: #FFFFFF;
border-radius: 25px;
align-items: center;
justify-items: center;
width: 553px ;
height: 118px;
justify-content: center;
align-content: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

box-sizing: border-box;
left: 20px;
position: relative;
}

.text_pink1{
    /* Frame 178 */
box-sizing: border-box;
display: flex;

justify-content: center;
align-items: center;
padding: 10px;
font-family: 'Montserrat';

width: 515px;
height: 31px;


/* черный */
border: 1px solid #000000;
border-radius: 25px;

}


.dopinfo{
    display: flex;
    justify-content: space-between;
    width: 515px;
    margin-top: 10px
}

.oval{
    margin-top: 0px;
    border: 1px solid #000000;
    border-radius: 25px;
    width: 246px;
    height: 31px;
    align-items: center;
    justify-content: center;
    display: flex; /* Активируем flex внутри .oval */
    font-family: 'Montserrat';
}

.finaltest{
    /* Group 43 */

position: absolute;
width: 611px;
height: 198px;
left: 50%;
    transform: translateX(-50%); /* Центрируем по горизонтали */
top: 440px;
background-color: #E66385;
border-radius: 25px;

}
.finaltext{
        /* ФИНАЛЬНОЕ тестирование */

   
    width: 452px;
    height: 17px;
    

    /* montserrat/bold/24 */
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    /* or 36px */
    /* leading-trim and text-edge are draft CSS properties.

    Read more: https://drafts.csswg.org/css-inline-3/#leading-trim
    */
    display: flex;
    
    letter-spacing: -0.011em;
    text-transform: uppercase;

    /* белый */
    color: #FFFFFF;
    margin-top: 26px;
    margin-left: 29px ;

}

.white1{
    /* Rectangle 137 */

margin-top: 20px;
width: 553px;
height: 118px;


/* белый */
background: #FFFFFF;
border-radius: 25px;
justify-items: center;
align-content: center;
}




  </style>