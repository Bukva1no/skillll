<template>
    <div class="third-column">
        <div class="helper">

          <div class="money">
                        <p><img src="/src/assets/svg/ph_coin-light.svg" alt=""></p>
                        <p class="textpanel">100</p>
                    </div>
                    <div class="money">
                        <p><img src="/img/svg/ant-design_fire-filled.svg" alt=""></p>
                        <p class="textpanel">100</p>
                    </div>
                    <div class="money">
                        <p><img src="/img/svg/material-symbols_favorite.svg" alt=""></p>
                        <p class="textpanel">100</p>
                    </div>
                    

        </div>
    </div>
  </template>
  
  <script>
  export default {
   
  };
  </script>
  
  <style scoped>
  .third-column {
    width: 25%; /* Занимает 1/4 пространства */
    background-color: #d0d0d0;
    padding: 20px;
    box-sizing: border-box;
  }


  .helper{
    
    display: flex;                  
    flex-wrap: nowrap;


    width: 311px;
    height: 35px;
    margin-top: 50px;
  }


  .money{
    /* Frame 147 */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 12px;
gap: 12px;

width: 99px;
height: 35px;

/* фиол */
border: 2px solid #8529CE;
border-radius: 15px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
margin-right: 20px;
}

.money :last-child{
    margin-right: 0px;
}




  </style>