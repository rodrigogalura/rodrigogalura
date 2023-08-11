<script setup>
defineProps(['modalActive', 'title', 'category', 'screenshots'])
const emit = defineEmits(['closeModal'])
</script>

<template>
    <div class="modal-container" :class="{ active: modalActive }" data-modal-container>
        <div class="overlay" :class="{ active: modalActive }" data-overlay></div>
        <section class="portfolio-modal">
            <button class="modal-close-btn" @click="emit('closeModal')">
                <ion-icon name="close-outline"></ion-icon>
            </button>

            <div class="modal-content">
                <h4 class="h3 modal-title" v-text="title"></h4>
                <p class="mb-5" v-text="category"></p>
                <div class="grid lg:grid-cols-3 gap-5">
                    <div class="relative" v-for="ss in screenshots" :key="ss.alt">
                        <img
                            :src="ss.src"
                            class="rounded-lg w-full h-full bg-yellow-500 p-1"
                            :alt="ss.alt"
                            loading="lazy"
                            @load="ss.isLoaded = true"
                        />
                        <p
                            v-if="!ss.isLoaded"
                            class="animate-pulse text-gray-500 text-1xl absolute left-1/2 top-1/2"
                            style="transform: translate(-50%, -50%)"
                        >
                            Loading...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
