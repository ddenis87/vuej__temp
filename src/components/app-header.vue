<template>
  <div class="app-header">
    <ul class="menu">
      <router-link to="/stack" class="menu__item">Стек</router-link>
      <router-link to="/symbol" class="menu__item">Символ</router-link>
      <router-link to="/" class="menu__item home">Домой</router-link>
    </ul>
  </div>  
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
  .app-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: limegreen;
  }
  .menu {
    padding: 0px;
  }
  .menu__item {
    display: inline-block;
    list-style: none;
    padding: 5px;
    width: 100px;
    text-align: center;
    &:hover {
      background-color: lightskyblue;
    }
  }
  .home {
    background-color: green;
    color: white;
    &:hover { color: black; }
  }

  a {text-decoration: none; color: black; text-transform: uppercase;}
</style>