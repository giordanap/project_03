<template>
  <button 
    @click="actionButton(
      {
        state: object.state,
        number: object.number
      }
    )"> 
      {{ textButton }}
    </button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
      object: Object
    },
    computed: {
      textButton() {
        return this.object.state ? 'Increase' : 'Decrease' 
      }
    },
    methods: {
        ...mapActions(['actionButton'])
    }
}
</script>
