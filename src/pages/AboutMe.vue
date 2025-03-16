<script setup>
import { VueMarqueeSlider } from 'vue3-marquee-slider'
import '@/../node_modules/vue3-marquee-slider/dist/style.css'
import { shuffle, chunk, rand } from '@/assets/js/helpers.js'

import html5 from '@/assets/img/html5.svg'
import php from '@/assets/img/php.svg'
import laravel from '@/assets/img/laravel.svg'
import mysql from '@/assets/img/mysql.svg'
import ubuntu from '@/assets/img/ubuntu.svg'
import git from '@/assets/img/git.svg'
import vim from '@/assets/img/vim.svg'
import docker from '@/assets/img/docker.svg'
import composer from '@/assets/img/composer.svg'
import phpmyadmin from '@/assets/img/phpmyadmin.svg'
import vue from '@/assets/img/vue.svg'
import subl from '@/assets/img/subl.svg'
import bootstrap from '@/assets/img/bootstrap.svg'
import bruno from '@/assets/img/bruno.svg'
import ghostty from '@/assets/img/ghostty.svg'
import finder from '@/assets/img/finder.svg'
import css3 from '@/assets/img/css3.svg'
import js from '@/assets/img/js.svg'

import java from '@/assets/img/java.svg'
import python from '@/assets/img/python.svg'
import cpp from '@/assets/img/cpp.svg'
import slim from '@/assets/img/slim.svg'
import lumen from '@/assets/img/lumen.svg'
import phpunit from '@/assets/img/phpunit.svg'
import angular from '@/assets/img/angular.svg'
import jquery from '@/assets/img/jquery.svg'
import backbonejs from '@/assets/img/backbonejs.svg'
import uikit from '@/assets/img/uikit.svg'
import semanticui from '@/assets/img/semanticui.svg'
import tailwindcss from '@/assets/img/tailwindcss.svg'
import postman from '@/assets/img/postman.svg'
import insomnia from '@/assets/img/insomnia.svg'
import virtualbox from '@/assets/img/virtualbox.svg'
import terminal from '@/assets/img/terminal.svg'
import tilix from '@/assets/img/tilix.svg'
import windows from '@/assets/img/windows.svg'

const techs = [
    html5,
    php,
    mysql,
    laravel,
    ubuntu,
    git,
    vim,
    docker,
    composer,
    phpmyadmin,
    vue,
    subl,
    bootstrap,
    bruno,
    ghostty,
    finder,
    css3, js,
]

const prevTechs = [
    java, python, cpp,
    slim, lumen, phpunit,
    angular, jquery, backbonejs, uikit, semanticui, tailwindcss,
    postman, insomnia, virtualbox, terminal, tilix, windows
];

const ROWS = 3;
const prevTechsChunk = chunk(prevTechs, Math.ceil(prevTechs.length/ROWS))
</script>

<template>
    <article class="about">
        <header>
            <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
            <p>
                I am a Senior Software Engineer at QStrike Innovations Phils., OPC in the
                Philippines, specializing in web application development. My primary role is to
                design efficient APIs for our Front-End team, ensuring seamless integration and
                collaboration. I also review their work to maintain high coding standards and
                deliver quality results to our clients. <br />
            </p>
            <p>
                Working alongside my colleagues, I contribute to shaping the digital landscape,
                driving innovation in web application design and development. Being part of this
                dynamic environment allows me to push the boundaries of what’s possible in software.
            </p>
        </section>

        <section class="service-text">
            <h3>Technologies &amp; Tools</h3>

            <p>
                Here are the technologies and tools I use in my development workflow, enabling me to
                build efficient, scalable, and high-quality web applications.
            </p>
        </section>

        <section class="service">
            <vue-marquee-slider
                class="tech-slider"
                id="current-tech-stack-slider"
                :speed="1000 * rand(23, 30)"
                :width="50"
                :space="75"
            >
                <img v-for="(tech, i) in techs" :key="i" :src="tech" />
            </vue-marquee-slider>

            <vue-marquee-slider
                class="tech-slider"
                v-for="(techsRow, j) in shuffle(prevTechsChunk)"
                :key="j"
                :id="`prev-tech-stack-slider-${j}`"
                :speed="1000 * rand(23, 30)"
                :width="20"
                :space="75"
                :reverse="j % 2 == 0"
            >
                <img v-for="(tech, k) in shuffle(techsRow)" :key="k" :src="tech" />
            </vue-marquee-slider>
        </section>

        <!-- <section class="service">
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
        </section> -->

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
