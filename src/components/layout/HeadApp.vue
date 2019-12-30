<template>
  <div class="header">
    <!-- <div class="anime-header">
      <h1>Anime Vue</h1>
      <p>Spark, Flash and Buddy wants to sleep in a comfy dog house this winter.</p>
    </div> -->

    <v-app-bar 
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="../../assets/anime_bg.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
      elevation=1
      height="220%"
      >

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(51, 79, 173, 0.397), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      

      <v-toolbar-title class="anime-title">Anime Vue</v-toolbar-title>

      
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      

      <template v-slot:extension>
        <v-tabs
          align-with-title
          background-color="white"
          color="black"
          
        >
          <v-tab style="color:black;">Anime TV</v-tab>
          <v-tab style="color:black;">Movie</v-tab>
          <v-tab style="color:black;">All</v-tab>
        </v-tabs>
</template>
        
    </v-app-bar>



  </div>







  
</template>

<script>

export default {
  name: "Header",
  props: {
      appName: String
    }
}
</script>

<style>
  .anime-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 55%;
    min-height: 240px;
    padding: 20px 30px;
    background: linear-gradient(
      rgba(51, 79, 173, 0.397), 
      rgba(71, 46, 161, 0.397)
    ), url('../../assets/anime_bg.jpg');

    background: linear-gradient(
      rgba(51, 79, 173, 0.397), 
      rgba(71, 46, 161, 0.397)
      ), url('../../assets/anime_bg.jpg');
    
    background-size: cover;
    background-position: center;
    color: #fdfafa;
    border-radius: 3px 3px 0 0;
  }

  .anime-title {
    font-size: 1000px;
    letter-spacing: 3px;
    margin-left: 5%;
    margin-bottom: 3%;
    padding: 0;
    line-height: 50px;
    opacity: .9;
  }

  p {
    font-size: 16px;
    opacity: .8;
    margin: 0 0 3px 0;
    padding: 0;
    line-height: 18px;
  }
</style>