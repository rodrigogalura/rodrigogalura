<script setup>
import me from '@/assets/img/me.jpg'

import { ref } from 'vue'
const sideBarActive = ref(false)

const name = import.meta.env.VITE_NAME
const title = import.meta.env.VITE_TITLE
const email = import.meta.env.VITE_EMAIL
const mobile = import.meta.env.VITE_MOBILE
const address = import.meta.env.VITE_ADDRESS

const fb = import.meta.env.VITE_FB
const ln = import.meta.env.VITE_LN
const github = import.meta.env.VITE_GITHUB
</script>

<template>
    <aside class="sidebar" :class="sideBarActive ? 'active' : ''">
        <div class="sidebar-info">
            <figure class="avatar-box">
                <img :src="me" :alt="name" width="80" />
            </figure>
            <div class="info-content">
                <h1 class="name" :title="name" v-text="name"></h1>
                <p class="title" v-text="title"></p>
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
                        <a :href="`mailto:${email}`" class="contact-link" v-text="email"> </a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Phone</p>
                        <p class="contact-link" v-text="mobile"></p>
                    </div>
                </li>
                <!-- <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="calendar-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Birthday</p>
                        <time datetime="1982-06-23">June 10, 1994</time>
                    </div>
                </li> -->
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Location</p>
                        <address v-text="address"></address>
                    </div>
                </li>
            </ul>
            <div class="separator"></div>
            <ul class="social-list">
                <li class="social-item">
                    <a :href="fb" target="_blank" class="social-link">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>
                <li class="social-item">
                    <a :href="ln" target="_blank" class="social-link">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
                <li class="social-item">
                    <a :href="github" target="_blank" class="social-link">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>
