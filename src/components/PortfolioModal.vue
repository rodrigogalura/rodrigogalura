<script setup>
import { ref, onUpdated } from 'vue'
const props = defineProps(['modalActive', 'title', 'categories', 'items'])
const emit = defineEmits(['closeModal'])

const activeCategory = ref(null)
const isDropdownCategoryActive = ref(false)

const openDropdown = async (open = true) => {
    await new Promise((resolve) => {
        if (open) resolve()
        setTimeout(resolve, 100)
    })

    isDropdownCategoryActive.value = open
}

const selectCategory = (category) => {
    activeCategory.value = category
    openDropdown(false)
}

onUpdated(() => {
    activeCategory.value = props.categories[0]
})
</script>

<template>
    <Transition name="bounce">
        <div v-if="modalActive" class="modal-container active" data-modal-container>
            <div class="overlay active" data-overlay></div>
            <section class="portfolio-modal">
                <button class="modal-close-btn" @click="emit('closeModal')">
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div class="modal-content w-full">
                    <h4 class="h3 modal-title" v-text="title"></h4>
                    <hr />
                    <!-- <p class="mb-5" v-text="category"></p> -->

                    <ul class="filter-list">
                        <li class="filter-item" v-for="(category, i) in categories" :key="i">
                            <button
                                @click="selectCategory(category)"
                                :class="{ active: category == activeCategory }"
                                v-text="$filters.upperFirst(category)"
                            ></button>
                        </li>
                    </ul>

                    <div class="filter-select-box">
                        <button
                            class="filter-select"
                            :class="{ active: isDropdownCategoryActive }"
                            @click="openDropdown(true)"
                            @blur="openDropdown(false)"
                        >
                            <div
                                class="select-value"
                                data-selecct-value
                                v-text="$filters.upperFirst(activeCategory)"
                            ></div>
                            <div class="select-icon">
                                <ion-icon name="chevron-down"></ion-icon>
                            </div>
                        </button>
                        <ul class="select-list">
                            <li class="select-item" v-for="(category, i) in categories" :key="i">
                                <button
                                    @click="selectCategory(category)"
                                    :class="{
                                        'bg-yellow-500 text-black': category === activeCategory
                                    }"
                                    v-text="$filters.upperFirst(category)"
                                ></button>
                            </li>
                        </ul>
                    </div>

                    <div class="grid lg:grid-cols-3 gap-5">
                        <template v-for="(item, i) in items" :key="i">
                            <div
                                v-if="item.category === activeCategory"
                                class="overflow-hidden relative"
                            >
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
                        </template>
                    </div>
                </div>
            </section>
        </div>
    </Transition>
</template>

<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>
