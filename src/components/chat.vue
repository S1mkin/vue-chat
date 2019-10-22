<template>
  <div class="chat_wrapper">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="(msg, key) in get_msg" :key="key">{{msg}}</li>
    </ul>
    
    <input type="text" placeholder="Enter new message" v-model="input_msg" />
    <button @click="add_msg_to_chat">Add message</button>

    <hr>

    <h2>{{expMsg}}</h2>


  </div>
</template>



<script>

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'



export default {
  name: 'chat',
  props: {
    msg: String
  },
  data() {
    return {
      input_msg: ''
    }
  },
  computed: {
    ...mapGetters(['get_msg']),
    ...mapState(['expMsg']),
  },
  methods: {
    // ...mapActions(['add_new_msg']),
    ...mapMutations(['add_msg']),
    ...mapActions(['add_new_msg']),
    add_msg_to_chat(){
      // вызов store.mutations - add_msg
      //this.$store.commit('add_msg', {msg: 'Hello world'});

      // вызов store.actions - add_new_msg

      //this.add_msg({ msg: 'Hello world'})

      this.add_new_msg({ msg: this.input_msg})
      this.input_msg = ''
    
      //this.$store.dispatch('add_new_msg', { msg: this.input_msg});
    }
  }
}

</script>


<style scoped>

</style>
