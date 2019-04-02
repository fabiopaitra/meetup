<template>
  <v-app>
    <v-toolbar class="hidden-xs-only">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="item in items" :key="item.id">
        <v-btn flat router :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      hide-overlay
      stateless
      class="hidden-sm-and-up"
      temporary
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" @click.prevent :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { icon: 'supervisor_account', title: 'View Meetups', link: '/meetup' }, // logged users
        { icon: 'room', title: 'Create Meetups', link: '/create-meetup' }, // logged users
        { icon: 'person', title: 'Profile', link: '/profile' }, // logged users
        { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' },
      ],
      mini: true,
      right: null,
    };
  },
};
</script>