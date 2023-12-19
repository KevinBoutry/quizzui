<template>
  <HeaderPanel />
  <RouterView />
  <FooterPanel />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderPanel from '@/components/HeaderPanel.vue';
import FooterPanel from '@/components/FooterPanel.vue';
</script>

<style>

body{
  margin: 0px;
}

</style>
