<template>
<div class="animecard">
  <v-card :loading="loading" class="mx-1 my-3" max-width="500">
    
    <v-card-title class="justify-center text-title">{{ title | readMore(40, "...")}}</v-card-title>
    
    <v-divider class="mx-2"></v-divider>

    <v-list-item style="padding:0px;">
      <v-list-item style="padding:0px;">
        <v-img height="270" width="150"  v-bind:src=url></v-img>
      </v-list-item>
      <v-list-item>
         <v-card-text>
      

      <div style="margin-bottom:10%;height: 200px;">{{ description | readMore(170, "...") }}</div>

      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="16"
        ></v-rating>

        <div class="grey--text ml-4">(4.5)</div>
      </v-row>
    </v-card-text>
      </v-list-item>
    </v-list-item>

   

    

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple accent-4"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</div>


</template>

<script>
export default {
  name: 'animecard',
  props: {
    url: String,
    title: String,
    description: String
  },
  filters: {
    readMore: function (text, length, suffix) {
      if (text.length <= length) return text;
      if (text.substring(length-1, length) == ' ') return text.substring(0, length-1) + suffix;
      return text.substring(0, length) + suffix;
    }
  }
}
</script>

<style scoped>
  .text-title {
    font-size: 1em;
  }
</style>