<template>
  <div class="flex-container">
    <AnimeCard v-for="data in dataList.anime" :key="data.id" :url="data.coverImage.large"
        :title="data.title.userPreferred" :description="data.description" />
  </div>
</template>

<script>
import AnimeCard from './AnimeCard'

export default {
  components: {
    AnimeCard
  },
  props: ["dataList"]
};
</script>

<style scoped>
  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }

  .flex-container > div {
    margin : 2% 0% 0% 2%;
    width: 30.5%;
  }
</style>
