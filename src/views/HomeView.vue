<template>
  <div class="presentation">
    <h1>Welcome to Quizz</h1>
    <p>
      Play, create and share Quizz with your friends
    </p>
  </div>
  <LastAddedQuizz />
  <TrendingQuizz />
</template>

<script lang="ts" setup>
import LastAddedQuizz from '@/components/LastAddedQuizz.vue';
import TrendingQuizz from '@/components/TrendingQuizz.vue';
</script>

<style lang="scss">
.presentation {
  position: relative;
  height: 20vh;
  width: 100vw;
  background-color: #e22c2c;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3.5rem;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>
