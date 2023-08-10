<script setup>
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
    <!-- <div class="info-content" style="display: flex; justify-content: center">
        <p class="title">Last Updated Date: August 2023</p>
    </div> -->

    <main>
        <SideBar />

        <div class="main-content">
            <NavBar />

            <router-view></router-view>

            <div class="mt-4 text-center">
                <p class="text-white text-xs">
                    Disclaimer: I used the provided template to create this. You can also utilize it
                    if you wish:
                    <a
                        href="https://github.com/codewithsadee/vcard-personal-portfolio"
                        class="text-yellow-500 inline-block"
                        >template</a
                    >
                </p>
            </div>
        </div>
    </main>
</template>
