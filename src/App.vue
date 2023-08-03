<script setup>
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
    <div class="info-content" style="display: flex; justify-content: center">
        <p class="title">Last Updated Date: August 2023</p>
    </div>

    <main>
        <SideBar />

        <div class="main-content">
            <NavBar />

            <router-view></router-view>
        </div>
    </main>
</template>
