<template>
    <div>This is public layout home page man can you imagine!!</div>
    <RouterView></RouterView>
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
    </ul>
</template>

<script>
export default {

}
</script>

<style></style>