<template>
    <div id="app">
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  };
  </script>
  
  <style>
  #app {
  }
    
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Чтобы занять всю высоту экрана */
    margin: 0;
    height: 100vh;
    overflow: hidden;
  
}

  </style>