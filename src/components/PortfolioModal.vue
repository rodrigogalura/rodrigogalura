<script setup>
defineProps(['modalActive', 'title', 'categories', 'items'])
const emit = defineEmits(['closeModal'])
</script>

<template>
    <div class="modal-container" :class="{ active: modalActive }" data-modal-container>
        <div class="overlay" :class="{ active: modalActive }" data-overlay></div>
        <section class="portfolio-modal">
            <button class="modal-close-btn" @click="emit('closeModal')">
                <ion-icon name="close-outline"></ion-icon>
            </button>

            <div class="modal-content w-full">
                <h4 class="h3 modal-title" v-text="title"></h4>
                <hr>
                <!-- <p class="mb-5" v-text="category"></p> -->

                <ul class="filter-list">
                    <li class="filter-item" v-for="(category, i) in categories" :key="i">
                        <button :class="{active: i == 0}" v-text="$filters.upperFirst(category)"></button>
                    </li>
                </ul>

                <div class="grid lg:grid-cols-3 gap-5">
                	<div v-for="(item, i) in items" :key="i" class="overflow-hidden relative">
                		<img
                		    :src="item.src"
                		    class="rounded-lg w-full h-full bg-yellow-500 p-1 object-cover"
                		    :alt="item.alt"
                		    loading="lazy"
                		    @load="item.isLoaded = true"
                		    @error="item.isLoaded = true"
                		/>
                		<p
                		    v-if="!item.isLoaded"
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
