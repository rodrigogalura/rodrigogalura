<script setup>
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'

const last_updated = import.meta.env.VITE_UPDATED
</script>

<template>
    <div class="info-content" style="display: flex; justify-content: center" v-if="last_updated">
        <p class="title">Last Updated Date: {{ last_updated }}</p>
    </div>

    <main>
        <SideBar />

        <div class="main-content">
            <NavBar />

            <router-view></router-view>
        </div>
    </main>
</template>
