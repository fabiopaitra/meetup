import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Meetup from './components/Meetup/Meetup.vue';
import CreateMeetup from './components/Meetup/CreateMeetup.vue';
import Profile from './components/User/Profile.vue';
import SignIn from './components/User/SignIn.vue';
import SignUp from './components/User/SignUp.vue';


Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/meetup',
    name: 'Meetup',
    component: Meetup,
  },
  {
    path: '/create-meetup',
    name: 'CreateMeetup',
    component: CreateMeetup,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;