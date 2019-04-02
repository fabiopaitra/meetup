<template>
  <v-container text-xs-center>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 class="text-sm-right">
        <v-btn large router to="/meetup" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left">
        <v-btn large router to="/create-meetup" class="info">Create Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="meetup in meetups" :src="meetup.imageURL" :key="meetup.id">
            <v-flex>
              <div class="title">{{ meetup.title }}</div>
            </v-flex>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout xs12 class="mt-3">
      <v-flex>
        <h2>Join our meetups</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      meetups: [
        {
          imageURL:
            'https://upload.wikimedia.org/wikipedia/commons/0/03/Visuel-carrousel-dossier-Ou-sortir-le-soir-a-Paris-نما740x380-C-DR.jpg',
          id: 'id01',
          title: 'Paris',
        },
        {
          imageURL:
            'https://upload.wikimedia.org/wikipedia/commons/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg',
          id: 'id02',
          title: 'London',
        },
      ],
    };
  },
};
</script>
<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  left: 50%;
  transform: translate(-50%);
}
</style>
