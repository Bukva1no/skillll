<template>
    <div id="profile" class="content-container default-content">
            <p class="ava">
                <img src="img/svg/Frame 124.png" alt="">
            </p>
           
            <div class="profile1">
                
                 <h1 class="infok">Имя</h1>
                 <p1 class="inf">Ник</p1>
                 <p2 class="inf-1">Дата регистрации</p2>
                 <div class="friends">
                    <h1 class="friend">20 друзей</h1>
                    <h2 class="friend">5 заявок</h2>
                    <div class="add">
                        <img src="img/svg/fluent-mdl2_add-friend.svg" alt="">
                    </div>
                    
                    <div class="button-fr">
                        <button class="add-friend">Добавить друзей</button>
                        <button class="download">
                            
                        </button>
                    </div>
                 </div>
                </div>
              </div>
 </template>
  
  <script>
 
  </script>
  
  <style scoped>
  
  .profile1 {
    position: absolute; /* Относительно body */
    width: 486px;
    height: 540px;
    top: 205px;
    left: 50%;
    transform: translateX(-50%); /* Центрируем по горизонтали */
    border-radius: 21px;
    border: 1.42px solid #8529CE;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.infok{
    position: absolute;
    width: 59px;
    height: 31px;
    top: 63px;
    left: 24px;
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    font-weight: 600;
    color: #5D1993


}
.inf{
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    top: 104px;
    left: 24px;
    font-size: 19px;
    
}
.inf-1{
    position: absolute;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    left: 24px;
    top: 138px;
    font-size: 19px;

}
.friends{
    position: absolute;
    display: flex;
    gap: 10px;
    top: 183px;
    left: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;   
    font-size: 19px;
    color: #5D1993;
}
.button-fr {
    position: absolute;
    display: flex;
    gap: 4px;
    top: 50px;
    background-color: #FFFFFF;
    top: 250px;
    
   

}
.add-friend{
    width: 334px;
    height: 67px;
    background-color: #FFFFFF;
    border: 1.42px solid #8529CE;
    border-radius: 21px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600; 
    color: #8529CE;
    font-size: 22.69px;
    left: 302px;
}
.download{
    width: 100px;
    height: 67px;
    background-color: #FFFFFF;
    border: 1.42px solid #8529CE;
    border-radius: 21px;
}
.ava {
    width: 225px;
    height: 215px;
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
    max-width: calc(100% - 1214px); /* Чтобы учесть отступы */
    z-index: 1;
}
.add{
    width: 35px;
    height: 35px;
    position: absolute;
    display: flex;
    top: 350%;
    left: 18px;
    z-index: 1;
}
  </style>