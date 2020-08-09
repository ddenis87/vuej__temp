<template>
  <div id="app">
    <div class="header">
      <app-header></app-header>
    </div>
    <div class="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/app-header'

export default {
  name: 'Main',
  components: {
    AppHeader,
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  margin: 0px;
  height: 100%;
}
  #app {
    display: grid;
    grid-template-areas: "header" "body";
    grid-template-rows: 60px auto;
    grid-template-columns: 1fr;

    max-width: 1024px;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    
    .header {
      grid-area: header;
    }
    .body {
      grid-area: body;
      padding: 18px;
      padding-right: 23px;
      border: 1px solid grey;
      background-color: lightsteelblue;
      box-sizing: border-box;
    }
  }

</style>
