<template>
    <navbar></navbar>
    <h1>Portfolio</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '@/components/Navbar.vue'

@Options({
    components: {
        Navbar
    },
})
export default class Portfolio extends Vue { }
</script>