<template>
  <component :is="layout">
    <router-view :layout.sync="layout"/>
  </component>
</template>

<script>
import {ScrollReveal} from '@/utils/ScrollReveal.js'

export default {
  name: 'App',
  mixins: [ScrollReveal],
  data() {
    return {
      layout: 'div'
    }
  },
  methods: {},

  mounted() {
    document.body.classList.add('is-loaded');

    this.$root.$once('updateWalletClient', async (callbackHandler) => {
      await callbackHandler();
    })
  },
}
</script>
