<template>
    <b-container class="align-middle lead">
    <h1 v-if="error.statusCode === 404">Ajaj, kde nic, tu nic.</h1>
    <h1 v-else>Něco se stalo, co se stát nemělo.</h1>
    <b-alert show variant="danger" class="text-left">
      <p>Tady jsi zaparkoval špatně - parkovací místo {{error.statusCode}}.</p>
    </b-alert>
    <NuxtLink to="/">Zpátky na stránku, kde něco je.</NuxtLink>
   </b-container>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>