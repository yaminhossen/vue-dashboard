<template>
  <div>This is dashboard layout</div>
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
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>