<script setup>
import me from './../assets/img/me.jpg'

import { ref } from 'vue'
const sideBarActive = ref(false)
</script>

<template>
    <aside class="sidebar" :class="sideBarActive ? 'active' : ''">
        <div class="sidebar-info">
            <figure class="avatar-box">
                <img :src="me" alt="Rodrigo Galura" width="80" />
            </figure>
            <div class="info-content">
                <h1 class="name" title="Rodrigo Galura">Rodrigo Galura</h1>
                <p class="title">Senior Software Engineer</p>
            </div>
            <button class="info_more-btn" @click="sideBarActive = !sideBarActive">
                <span>Show Contacts</span>
                <ion-icon name="chevron-down"></ion-icon>
            </button>
        </div>
        <div class="sidebar-info_more">
            <div class="separator"></div>
            <ul class="contacts-list">
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Email</p>
                        <a href="mailto:rodrigogalura3rd@gmail.com" class="contact-link"
                            >rodrigogalura3rd@gmail.com</a
                        >
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Phone</p>
                        <a href="tel:+639052990579" class="contact-link">+63 (905) 299-0579</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="calendar-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Birthday</p>
                        <time datetime="1982-06-23">June 10, 1994</time>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Location</p>
                        <address>Liliw, Laguna, PH</address>
                    </div>
                </li>
            </ul>
            <div class="separator"></div>
            <ul class="social-list">
                <li class="social-item">
                    <a
                        href="https://www.facebook.com/rodrigogalura"
                        target="_blank"
                        class="social-link"
                    >
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>
                <li class="social-item">
                    <a
                        href="https://www.instagram.com/rodrigogalura3rd"
                        target="_blank"
                        class="social-link"
                    >
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
                <li class="social-item">
                    <a href="https://github.com/rodrigogalura" target="_blank" class="social-link">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>
