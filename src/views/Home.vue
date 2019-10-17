<template>
  <div class="home">
    <h1>This is Home page vue chat</h1>
    <chat/>
  </div>
</template>

<script>
// @ is an alias to /src
import chat from '@/components/chat.vue'

export default {
  name: 'home',
  components: {
    chat
  }
}
</script>
