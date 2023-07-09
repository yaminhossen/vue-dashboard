<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <ul>
        <li>dashboard</li>
        <li>userlist</li>
      </ul>
    </q-drawer>

    <q-page-container>
      <ul>
        <li>
            <router-link :to="{ name: `Home` }">home</router-link>
        </li>
        <li>
            <router-link :to="{ name: `Login` }">login</router-link>
        </li>
        <li>
            <router-link :to="{ name: `Register` }">register</router-link>
        </li>
        <li>
            <router-link :to="{ name: `Dashboard` }">Dashboard</router-link>
        </li>
        <li>
            <router-link :to="{ name: `AdminDashboard` }">Admindashboard</router-link>
        </li>
        <li>
            <router-link :to="{ name: `TeacherDashboard` }">Teacherdashboard</router-link>
        </li>
        
    </ul>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
 
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
