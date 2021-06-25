<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>My contater: {{ contater }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {

  },
  /*
  access to store feature with $store.state.feature
  ... corresponds a spread operator
  Finally, access to output object gives state
  */
  computed: {
    ...mapState(['contater'])
  },
}
</script>
