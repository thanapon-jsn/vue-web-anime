<template>
  <v-app>

    <v-content>
      <div>
        <Header appName="Anime Vue"/>
      </div>
      <div>
        <Body />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/layout/HeadApp';
import Body from './components/layout/BodyApp';

export default {
  name: 'App',
  components: {
    Header,
    Body
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
