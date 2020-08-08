<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    display: grid;
    grid-template-areas: "header" "content";
    grid-template-rows: 60px auto;
    grid-template-columns: 1fr;

    border: 1px solid grey;
  }
</style>
