<template>
    <navbar></navbar>
    <router-view></router-view>
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