<template>
  <a-config-provider :theme="theme">
    <RouterView />
  </a-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
const theme = {
  token: {
    colorPrimary: '#FF0032',
    colorPrimaryActive: '#2c2'
  }
}
</script>

<style></style>
