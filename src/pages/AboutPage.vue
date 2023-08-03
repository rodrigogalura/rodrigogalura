<script setup>
import web from './../assets/img/web.svg'
import mobileWeb from './../assets/img/mobile-web.svg'
import android from './../assets/img/android.svg'
import ux from './../assets/img/ux.svg'

import laravel from './../assets/img/laravel.svg'
import vue from './../assets/img/vue.svg'
import html5 from './../assets/img/html5.svg'
import css3 from './../assets/img/css3.svg'
import js from './../assets/img/js.svg'

// import php from './../assets/img/php.svg'

// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Pagination, Slide } from 'vue3-carousel'

// const otherTech = { php }
</script>

<template>
    <article class="about">
        <header>
            <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
            <p>
                Allow me to introduce myself — I am a Senior Software Engineer, proudly contributing
                my expertise to the cutting-edge team at Quickstrike Manufacturing in the
                Philippines. My passion lies in the realm of web application development, where I
                excel in crafting seamless experiences.
            </p>
            <p>
                In this exciting role, my primary responsibility is to provide a thoughtfully
                designed API to my talented Front-End teammates, fostering collaborative innovation
                and smooth interactions between our teams. Additionally, I take on the crucial task
                of meticulously reviewing their work, ensuring that we consistently adhere to the
                highest coding standards, delivering top-notch results to our valued clients.
            </p>
            <p>
                Together with my colleagues, we embark on a journey to shape the digital landscape,
                revolutionizing the way web applications are designed and developed. It's a
                privilege to be part of such a dynamic and forward-thinking environment, constantly
                pushing the boundaries of what's possible in the software realm.
            </p>
        </section>

        <section class="service">
            <h3 class="h3 service-title">My Skills</h3>
            <ul class="service-list">
                <li class="service-item">
                    <div class="service-icon-box">
                        <img :src="web" alt="web icon" width="40" />
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Web Development</h4>
                        <p class="service-item-text">
                            Bring web designs to life by writing code that implements the visual and
                            interactive elements of a website.
                        </p>
                    </div>
                </li>
                <li class="service-item">
                    <div class="service-icon-box">
                        <img :src="mobileWeb" alt="mobile web icon" width="40" />
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Mobile Web Development</h4>
                        <p class="service-item-text">
                            Specializes in creating websites and web applications specifically
                            optimized for mobile devices such as smartphones and tablets.
                        </p>
                    </div>
                </li>
                <li class="service-item">
                    <div class="service-icon-box">
                        <img :src="android" alt="android icon" width="40" />
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Hybrid Mobile Development</h4>
                        <p class="service-item-text">
                            Building mobile applications that work on multiple platforms (such as
                            iOS and Android) using a single codebase.
                        </p>
                    </div>
                </li>
                <li class="service-item">
                    <div class="service-icon-box">
                        <img :src="ux" alt="ux icon" width="40" />
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">
                            UI/UX <span style="float: right">(Currently Learning)</span>
                        </h4>
                        <p class="service-item-text">
                            Enhance the overall user experience by ensuring that the product is not
                            only aesthetically pleasing but also easy to use and navigate.
                        </p>
                    </div>
                </li>
            </ul>
        </section>

        <section class="testimonials">
            <h3 class="h3 testimonials-title mb-10">Tech that I usually used</h3>

            <ul>
                <li class="testimonials-item">
                    <div class="relative left-4 sm:left-6">
                        <figure class="absolute z-10 -top-8">
                            <img :src="html5" alt="html5" width="60" />
                        </figure>
                        <figure class="absolute z-10 -top-8 left-16">
                            <img :src="css3" alt="css3" width="60" />
                        </figure>
                        <figure class="absolute z-10 -top-8 left-32">
                            <img :src="js" alt="js" width="60" />
                        </figure>
                    </div>
                    <div class="content-card">
                        <h4 class="h4 testimonials-item-title mt-6 ml-0">HTML5/CSS3/JS</h4>
                        <div class="testimonials-text">
                            <p>
                                With HTML5 as the foundation, I weave captivating web structures
                                that breathe life into ideas. 💻 CSS3 adds the magic touch,
                                sprinkling visual wonders that dazzle and impress. And when it comes
                                to dynamic interactions, JS is my trusty sidekick, ready to create
                                seamless user experiences. <br />
                                <br />
                                From college projects to real-world challenges, this trio has been
                                my ever-reliable toolkit, elevating my creations to new heights 🚀
                                and making the web a more engaging and delightful place.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="testimonials-list has-scrollbar">
                <li class="testimonials-item mt-5 sm:mt-0">
                    <div class="content-card">
                        <figure class="testimonials-avatar-box">
                            <img :src="laravel" alt="laravel" width="60" />
                        </figure>
                        <h4 class="h4 testimonials-item-title">laravel</h4>
                        <div class="testimonials-text">
                            <p>
                                Since the advent of the year 2017, I've built a rock-solid
                                foundation of experience that empowers me to bring cutting-edge
                                solutions to life effortlessly. Laravel has truly become the beating
                                heart of my development adventures!
                            </p>
                        </div>
                    </div>
                </li>
                <li class="testimonials-item mt-5 sm:mt-0">
                    <div class="content-card">
                        <figure class="testimonials-avatar-box">
                            <img :src="vue" alt="vue" width="60" />
                        </figure>
                        <h4 class="h4 testimonials-item-title">Vue</h4>
                        <div class="testimonials-text">
                            <p>
                                With each passing day, my passion for Vue JS only grows stronger! 🔥
                                Its elegant simplicity, powerful reactivity, and vibrant ecosystem
                                continue to amaze me, inspiring me to push the boundaries of what's
                                possible.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <!-- <section>
    	<h3 class="h3 service-title">Other Tech That I Used</h3>

    	<carousel :autoplay="5000" :itemsToShow="5" :wrapAround="true" :transition="500" class="content-card">
    	    <slide v-for="(item, i) in otherTech" :key="i">
    	      <div class="carousel__item">
    	      	<img :src="item" :alt="item" width="60">
    	      </div>
    	    </slide>

    	    <template #addons>
    	        <Pagination />
    	    </template>
    	</carousel>
    </section> -->

        <!-- <section>
    	<InfiniteSlideBar duration="8s" direction="reverse" delay="5s" :barStyle="{ background: '#fff7cc', padding: '5px 0' }">
	     <span style="color: #f60;">Your time is limited, so don't waste it living someone else's life.</span>
	    </InfiniteSlideBar>
    </section> -->

        <!-- <section class="clients">
        <h3 class="h3 clients-title">Clients</h3>
        <ul class="clients-list has-scrollbar">
            <li class="clients-item">
                <a href="#">
                    <img src="./assets/images/logo-1-color.png" alt="client logo">
                </a>
            </li>
            <li class="clients-item">
                <a href="#">
                    <img src="./assets/images/logo-2-color.png" alt="client logo">
                </a>
            </li>
            <li class="clients-item">
                <a href="#">
                    <img src="./assets/images/logo-3-color.png" alt="client logo">
                </a>
            </li>
            <li class="clients-item">
                <a href="#">
                    <img src="./assets/images/logo-4-color.png" alt="client logo">
                </a>
            </li>
            <li class="clients-item">
                <a href="#">
                    <img src="./assets/images/logo-5-color.png" alt="client logo">
                </a>
            </li>
            <li class="clients-item">
                <a href="#">
                    <img src="./assets/images/logo-6-color.png" alt="client logo">
                </a>
            </li>
        </ul>
    </section> -->
    </article>
</template>

<style>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>
