<script setup>
	const props = defineProps(['active'])
	const emit = defineEmits(['closeModal'])
</script>

<template>
	<div class="modal-container" :class="{active: props.active}" data-modal-container>
		<div class="overlay" :class="{active: props.active}" data-overlay></div>
		<section class="portfolio-modal">
			<button class="modal-close-btn" @click="emit('closeModal')">
				<ion-icon name="close-outline"></ion-icon>
			</button>
			<div class="modal-content">
				<h4 class="h3 modal-title" data-modal-title>Lexus</h4>
				<time datetime="2021-06-14">Year 2022</time>
				<div class="grid lg:grid-cols-3 gap-5">
					<img src="./../assets/img/portfolio/lexus/grade11.png" class="rounded-lg w-full bg-yellow-500 p-1" alt="Grade 11">
					<img src="./../assets/img/portfolio/lexus/grade12.png" class="rounded-lg w-full bg-yellow-500 p-1" alt="Grade 12">
					<img src="./../assets/img/portfolio/lexus/tech-voc.png" class="rounded-lg w-full bg-yellow-500 p-1" alt="Technology Vocational">
					<img src="./../assets/img/portfolio/lexus/downloads.png" class="rounded-lg w-full bg-yellow-500 p-1" alt="Downloads">
					<img src="./../assets/img/portfolio/lexus/about-us.png" class="rounded-lg w-full bg-yellow-500 p-1" alt="About us">
					<img src="./../assets/img/portfolio/lexus/contact-us.png" class="rounded-lg w-full bg-yellow-500 p-1" alt="Contact us">
				</div>
			</div>
		</section>
	</div>
</template>
