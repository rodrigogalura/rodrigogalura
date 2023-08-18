<script setup>
import { reactive } from 'vue'
import PortfolioModal from '@/components/PortfolioModal.vue'
import { lexus } from '@/assets/js/portfolio-data'

const portfolioList = [lexus]

const selectedItem = reactive({})

const openModal = (title, items) => {
    selectedItem.modalActive = true
    selectedItem.title = title
    selectedItem.categories = [...new Set(items.map((i) => i.category))]
    selectedItem.items = items

    // selectedItem.category = category
    // selectedItem.screenshots = screenshots
}
</script>

<template>
    <article class="portfolio">
        <header>
            <h2 class="h2 article-title">Portfolio</h2>
        </header>
        <!-- <p class="text-white">This page is under development.</p> -->
        <section class="projects">
            <!-- <ul class="filter-list">
                <li class="filter-item">
                    <button class="active" data-filter-btn>All</button>
                </li>
                <li class="filter-item">
                    <button data-filter-btn>Web</button>
                </li>
                <li class="filter-item">
                    <button data-filter-btn>Mobile Web</button>
                </li>
                <li class="filter-item">
                    <button data-filter-btn>2016</button>
                </li>
                <li class="filter-item">
                    <button data-filter-btn>See It in Action</button>
                </li>
                <li class="filter-item">
                    <button data-filter-btn>Other</button>
                </li>
            </ul> -->
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
                    <a href="#" @click.prevent="openModal(p.name, p.items)">
                        <figure class="project-img h-full">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>
                            <img :src="p.preview.src" :alt="p.preview.alt" loading="lazy" />
                        </figure>
                        <h3 class="project-title" v-text="p.name"></h3>
                        <!-- <p class="project-category" v-text="p.category"></p> -->
                    </a>
                </li>
            </ul>
        </section>
    </article>

    <PortfolioModal @close-modal="selectedItem.modalActive = false" v-bind="selectedItem" />
</template>
