<template>
  <div class="lang-selection">
   <nuxt-link :to="localePath('index', 'en')">English</nuxt-link>
   <nuxt-link :to="localePath('index', 'cs')">Česky</nuxt-link>
  </div>
</template>
<script>
export default {}
</script>