<template>
  <div class="body">

    <AnimeCardList :dataList=response />   

  </div>
</template>

<script>
import { getAnimeList } from '../../services/getAnimeList'
import AnimeCardList from '../AnimeCardList'

export default {
  name: "body",
  components: {
    AnimeCardList
  },
  data() {
    return {
      response: null,
      loading: true
    }
  },
  async created() {
    let response = await getAnimeList();
    this.response = response.data.page
  }
}
</script>

<style>
  .body {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 21%;
    padding: 1% 1%;
  }

  .card {
    margin: 1% 1%;
  }
</style>