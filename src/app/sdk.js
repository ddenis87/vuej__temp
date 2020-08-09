export default {
  install(Vue, option) {
    let socket;
    Vue.prototype.$startGetStack = function(objOption) {  
      // socket = new WebSocket('wss://stream.binance.com:9443/ws/bnbbtc@depth@1000ms')
      socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth@1000ms')
      
      socket.onopen = () => {
        console.log('Соединение установлено');
        socket.onmessage = (event) => {
          // console.log(event);
          this.$store.commit('setStoreStack', event.data);
        }
      }
      return `I'm SDK ${objOption.name}`;
    }
    Vue.prototype.$stopGetStack = function() {
      if (socket) { socket.close(); }
    }
  }
}