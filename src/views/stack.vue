<template>
  <div class="steck">
    <div class="control">
      <button class="control__button" @click="getStack">Получить стек</button>
      <button class="control__button" @click="startGetStream">Подписаться</button>
      <button class="control__button" @click="stopGetStream">Отписаться</button>
    </div>
    <div class="data">
      <div class="header-bid header-l1">Bid</div>
      <div class="header-ask header-l1">Ask</div>

      <div class="header-bid-amount header-l2">Amount</div>
      <div class="header-bid-price header-l2">Price</div>
      <div class="header-bid-total header-l2">Total</div>
      
      <div class="header-ask-amount header-l2">Amount</div>
      <div class="header-ask-price header-l2">Price</div>
      <div class="header-ask-total header-l2">Total</div>
      <div class="data-body">
        <div class="body-bid-amount"><ul class="data-list"><li class="data-list__item" v-for="(row, index) in arrDataStream.b" :key="'ba-' + index">{{ (+row[0]).toFixed(5) }}</li></ul></div>
        <div class="body-bid-price"><ul class="data-list"><li class="data-list__item" v-for="(row, index) in arrDataStream.b" :key="'bp-' + index">{{ (+row[1]).toFixed(5) }}</li></ul></div>
        <div class="body-bid-total"><ul class="data-list"><li class="data-list__item" v-for="(row, index) in arrDataStream.b" :key="'bt-' + index">{{ (row[0] * row[1]).toFixed(5) }}</li></ul></div>

        <div class="body-ask-amount"><ul class="data-list"><li class="data-list__item" v-for="(row, index) in arrDataStream.a" :key="'aa-' + index">{{ (+row[0]).toFixed(5) }}</li></ul></div>
        <div class="body-ask-price"><ul class="data-list"><li class="data-list__item" v-for="(row, index) in arrDataStream.a" :key="'ap-' + index">{{ (+row[1]).toFixed(5) }}</li></ul></div>
        <div class="body-ask-total"><ul class="data-list"><li class="data-list__item" v-for="(row, index) in arrDataStream.a" :key="'at-' + index">{{ (row[0] * row[1]).toFixed(5) }}</li></ul></div>
      </div>
    </div>
    <div>{{ arrData }}</div>
  </div>
</template>

<script>

export default {
  name: 'Stack',
  data() {
    return {
      arrDataStack: {},
    }
  },
  computed: {
    arrDataStream: function() { return this.$store.state.storeStackStream },
    arrData: function() { return this.$store.state.storeStack },
  },
  created() {

  },
  methods: {
    getStack() {
      this.$getStack({socket: 'https://api.punkapi.com/v2/beers?page=1&limit=25'});
    },
    startGetStream() {
      this.$startGetStream({socket: 'wss://stream.binance.com:9443/ws/bnbbtc@depth@1000ms'});
    },
    stopGetStream() {
      this.$stopGetStream();
    }
  }
}
</script>

<style lang="scss" scoped>
  .steck {
    height: calc(100% - 30px);
    box-sizing: border-box;
  }
  .control {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 350px;
    // border: 1px solid grey;

    &__button {
      padding: 3px 0px;
      width: 110px;
    }
  }
  .data {
    display: grid;
    grid-template-areas: "header-bid header-bid header-bid header-ask header-ask header-ask"
                         "header-bid-amount header-bid-price header-bid-total header-ask-amount header-ask-price header-ask-total"
                         "body body body body body body";
    grid-template-rows: auto auto 400px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    padding-top: 10px;
    border-bottom: 1px solid grey;
  }
  .header-bid {grid-area: header-bid; border-right: 1px solid grey;}

  .header-ask {grid-area: header-ask;}

  .header-bid-amount {grid-area: header-bid-amount; border-right: 1px solid grey;}
  .header-bid-price {grid-area: header-bid-price; border-right: 1px solid grey;}
  .header-bid-total {grid-area: header-bid-total; border-right: 1px solid grey;}

  .header-ask-amount {grid-area: header-ask-amount; border-right: 1px solid grey;}
  .header-ask-price {grid-area: header-ask-price; border-right: 1px solid grey;}
  .header-ask-total {grid-area: header-ask-total; border: 0px solid grey;}

  .data-body {
    grid-area: body;
    display: grid;

    grid-template-areas: "body-bid-amount body-bid-price body-bid-total body-ask-amount body-ask-price body-ask-total";
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    overflow-y: hidden;
    overflow-x: hidden;
    
  // border: 1px solid blue;
    &:hover {
      overflow-y: scroll;
      margin-right: -17px;
    }
  }
  

  .body-bid-amount {grid-area: body-bid-amount; border-right: 1px solid grey;}
  .body-bid-price {grid-area: body-bid-price; border-right: 1px solid grey;}
  .body-bid-total {grid-area: body-bid-total; border-right: 1px solid grey;}

  .body-ask-amount {grid-area: body-ask-amount; border-right: 1px solid grey;}
  .body-ask-price {grid-area: body-ask-price; border-right: 1px solid grey;}
  .body-ask-total {grid-area: body-ask-total; border: 0px solid grey;}
  
  .header-l1 {
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid grey;
  }
  .header-l2 {
    padding: 2px;
    padding-left: 5px;
    font-weight: bold;
    font-size: 0.9em;
    text-transform: uppercase;
    border-bottom: 1px solid grey;
  }

  .data-list {
    padding-left: 10px;
  }
  .data-list__item {
    list-style: none;
  }

@media screen and (max-width: 700px) {
  .data {
    grid-template-areas: "header-bid header-bid header-ask header-ask"
                         "header-bid-amount header-bid-price header-ask-amount header-ask-price"
                         "body body body body";
    grid-template-rows: 20px 20px 200px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .header-ask-price {border-right: 0px solid grey;}
  .header-bid-total {display: none;}
  .header-ask-total {display: none;}
  .body-bid-total {display: none;}
  .body-ask-total {display: none;}


  .data-body {
    grid-template-areas: "body-bid-amount body-bid-price body-ask-amount body-ask-price";
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 0.8em;
      &:hover {
        overflow-y: scroll;
        margin-right: 0px;
      }
  }
  .body-ask-price {border: 0px solid grey;}
  .data-list {
    padding-left: 5px;
  }
}

@media screen and (max-width: 400px) {
  .data {
    grid-template-rows: 20px 20px 400px;
  }
}
</style>