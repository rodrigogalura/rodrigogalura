<script setup>
import { reactive } from 'vue'
import PortfolioModal from '@/components/PortfolioModal.vue'
import { lexus } from '@/assets/js/portfolio-data'

const portfolioList = [lexus]

const selectedItem = reactive({
    modalActive: false,
    title: '',
    category: '',
    screenshots: []
})

const openModal = (title, category, screenshots) => {
    selectedItem.modalActive = true
    selectedItem.title = title
    selectedItem.category = category
    selectedItem.screenshots = screenshots
}
</script>

<template>
    <article class="portfolio">
        <header>
            <h2 class="h2 article-title">Portfolio</h2>
        </header>
        <!-- <p class="text-white">This page is under development.</p> -->
        <section class="projects">
            <ul class="filter-list">
                <li class="filter-item">
                    <button class="active" data-filter-btn>All</button>
                </li>
                <li class="filter-item">
                    <button data-filter-btn>Web design</button>
                </li>
                <li class="filter-item">
                    <button data-filter-btn>Applications</button>
                </li>
                <li class="filter-item">
                    <button data-filter-btn>Web development</button>
                </li>
            </ul>
            <!-- <div class="filter-select-box">
				<button class="filter-select" data-select>
					<div class="select-value" data-selecct-value>Select category</div>
					<div class="select-icon">
						<ion-icon name="chevron-down"></ion-icon>
					</div>
				</button>
				<ul class="select-list">
					<li class="select-item">
						<button data-select-item>All</button>
					</li>
					<li class="select-item">
						<button data-select-item>Web design</button>
					</li>
					<li class="select-item">
						<button data-select-item>Applications</button>
					</li>
					<li class="select-item">
						<button data-select-item>Web development</button>
					</li>
				</ul>
			</div> -->
            <ul class="project-list">
                <li class="project-item active" v-for="(p, i) in portfolioList" :key="i">
                    <a href="#" @click.prevent="openModal(p.name, p.category, lexus.screenshots)">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>
                            <img :src="p.preview" alt="finance" loading="lazy" />
                        </figure>
                        <h3 class="project-title" v-text="p.name"></h3>
                        <p class="project-category" v-text="p.category"></p>
                    </a>
                </li>
            </ul>
        </section>
    </article>

    <PortfolioModal @close-modal="selectedItem.modalActive = false" v-bind="selectedItem" />
</template>
