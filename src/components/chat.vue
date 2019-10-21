<template>
  <div class="chat_wrapper">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="(msg, key) in get_msg" :key="key">{{msg}}</li>
    </ul>
    
    <input type="text" placeholder="Enter new message" v-model="input_msg" />
    <button @click="add_msg">Add message</button>

  </div>
</template>



<script>

import {mapGetters} from 'vuex'
// import {mapActions} from 'vuex'
// import {mapMutations} from 'vuex'

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
  },
  methods: {
    // ...mapActions(['add_new_msg']),
    // ...mapMutations(['add_msg']),
    add_msg(){
      // вызов store.mutations - add_msg
      //this.$store.commit('add_msg');

      // вызов store.actions - add_new_msg
      this.$store.dispatch('add_new_msg', { msg: this.input_msg});
    }
  }
}

</script>


<style scoped>

</style>
