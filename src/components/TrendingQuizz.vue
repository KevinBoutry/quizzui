<template>
  <div class="container">
    <h1 class="title">Most Played</h1>
    <Carousel
      class="carousel-container"
      :value="carouselItems"
      :numVisible="3"
      :numScroll="1"
      circular
      v-if="carouselItems"
    >
      <template #item="slotProps">
        <QuizzCard :quizz="slotProps.data" />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import Carousel from 'primevue/carousel';

import QuizzCard from './QuizzCard.vue';

import type { Quizz } from '@/types/Quizz';
import type { CarouselItem } from '@/types/CarouselItem'

import { onMounted, ref } from 'vue';
import { QuizzService } from '@/services/QuizzService';

const quizzService: QuizzService = new QuizzService();

const carouselItems = ref<CarouselItem[]>([]);

onMounted(async () => {
  const quizzes = await quizzService.getTrending();
  quizzes.forEach((quizz: Quizz, index:number) => {
      carouselItems.value.push({ ...quizz, index });
  });
});
</script>

<style lang="css" scoped>
.container {
  height: 35vh;
  width: 100vw;
  background-color: #ebcfb2;
  color:  #424b54;;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    text-align: center;
  }

  .carousel-container{
    width: 95%;
  }
  .quizz-box {
    width: 20vw;
    height: 25vh;
    color: black;
    background-color: white;
    border-radius: 5px;
    border: black solid 2px;
    text-align: center;
    margin: 10px;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .quizz-rating {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
:deep(.p-carousel .p-carousel-indicators){
  visibility: hidden;
}

:deep(.p-carousel-next){
  width: 4rem;
  height: 4rem;
}

:deep(.p-carousel-prev){
  width: 4rem;
  height: 4rem;
}


:deep(.p-carousel-next .p-icon){
  width: 3rem;
  height: 3rem;
}

:deep(.p-carousel-prev .p-icon){
  width: 3rem;
  height: 3rem;
}

</style>
