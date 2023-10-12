<template>
    <nav class="navbar navbar-expand-lg navbar-portfolio">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/sobre' }" to="/sobre"
                            class="nav-link">Sobre</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/conhecimentos' }" to="/conhecimentos"
                            class="nav-link">Conhecimentos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/projetos' }" to="/projetos"
                            class="nav-link">Projetos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="{ active: $route.path === '/contato' }" to="/contato"
                            class="nav-link">Contato</router-link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    components: {

    },
})
export default class Navbar extends Vue { }
</script>

<style lang="scss">@import '../scss/navbar.scss';</style>