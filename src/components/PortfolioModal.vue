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
                    <img
                        v-for="ss in screenshots"
                        :key="ss.alt"
                        :src="ss.src"
                        class="rounded-lg w-full bg-yellow-500 p-1"
                        :alt="ss.alt"
                    />
                </div>
            </div>
        </section>
    </div>
</template>
