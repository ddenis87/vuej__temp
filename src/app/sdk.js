export default {
  install(Vue, option) {
    let socket;

    Vue.prototype.$getStack = function(objOption) {
      let axios = require('axios').default;
      axios
      .get(objOption.socket, null, null)
      .then((response) => {console.log(response.data); this.$store.commit('setStoreStack', response.data)})
      return;
    }

    Vue.prototype.$startGetStream = function(objOption) {  
      socket = new WebSocket(objOption.socket)
      socket.onopen = () => {
        console.log('Соединение установлено');
        socket.onmessage = (event) => {
          // console.log(event);
          this.$store.commit('setStoreStackStream', event.data);
          // socket.close();
        }
        return `I'm SDK ${objOption.name}`;
      }
      
    }
    Vue.prototype.$stopGetStream = function() {
      if (socket) { socket.close(); }
    }
  }
}