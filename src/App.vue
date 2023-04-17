<template>
  <bg/>
  <router-view/>
</template>

<script>
import bg from '@/modulos/shared/pages/bgPages.vue'
export default {
  name: 'App',

  components: {
    bg
  },

  data: () => ({
    //
  }),
}
</script>
