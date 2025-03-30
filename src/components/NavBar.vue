<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar-item">
                <router-link to="/about-me" v-slot="{ href, navigate, isActive }" custom>
                    <a
                        :href="href"
                        @click="navigate"
                        class="navbar-link"
                        :class="{ active: isActive }"
                        >About Me</a
                    >
                </router-link>
            </li>
            <!-- <li class="navbar-item">
                <router-link to="/resume" v-slot="{ href, navigate, isActive }" custom>
                    <a
                        :href="href"
                        @click="navigate"
                        class="navbar-link"
                        :class="{ active: isActive }"
                        >Resume</a
                    >
                </router-link>
            </li>
            <li class="navbar-item">
                <router-link to="/portfolio" v-slot="{ href, navigate, isActive }" custom>
                    <a
                        :href="href"
                        @click="navigate"
                        class="navbar-link"
                        :class="{ active: isActive }"
                        >Portfolio</a
                    >
                </router-link>
            </li> -->
            <li class="navbar-item">
                <router-link to="/showcase" v-slot="{ href, navigate, isActive }" custom>
                    <a
                        :href="href"
                        @click="navigate"
                        class="navbar-link"
                        :class="{ active: isActive }"
                        >Showcase</a
                    >
                </router-link>
            </li>
            <li class="navbar-item">
                <router-link to="/contact" v-slot="{ href, navigate, isActive }" custom>
                    <a
                        :href="href"
                        @click="navigate"
                        class="navbar-link"
                        :class="{ active: isActive }"
                        >Contact</a
                    >
                </router-link>
            </li>
        </ul>
    </nav>
</template>
