<template>
    <div class="projetos">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Meus Projetos</h2>
                </div>

                <div class="col-md-12">
                    <h3>Projetos em Vue.JS, TypeScript, PHP e MySQL</h3>
                    <div v-for="tsphp in projetos_vue_php" :key="tsphp.nome" class="col-md-12 projeto text-center">
                        <h4>{{ tsphp.nome }}</h4>

                        <div class="embed-responsive embed-responsive-16by9">

                            <video class="embed-responsive-item" controls>
                                <source :src="require(`../assets/projects/${tsphp.video}.mp4`)" type="video/mp4">
                                Seu navegador não suporta a tag de vídeo.
                            </video>

                        </div>

                        <div class="d-flex justify-content-center align-items-center mt-3">
                            <a :href="tsphp.link" class="btn btn-projeto" target="_blank">
                                Link do repositório
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 justify-content-center align-items-center">
                    <h3>Projetos em Vue.JS</h3>
                    <div v-for="vuejs in projetos_vue" :key="vuejs.nome" class="row">
                        <div class="col-md-12 projeto mb-5 text-center">
                            <h4>{{ vuejs.nome }}</h4>

                            <div class="embed-responsive embed-responsive-16by9">

                                <video class="embed-responsive-item" controls>
                                    <source :src="require(`../assets/projects/${vuejs.video}.mp4`)" type="video/mp4">
                                    Seu navegador não suporta a tag de vídeo.
                                </video>

                            </div>

                            <div class="d-flex justify-content-center align-items-center mt-3">
                                <a :href="vuejs.link" class="btn btn-projeto" target="_blank">
                                    Link do repositório
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    components: {

    },
})
export default class Projetos extends Vue {

    projetos_vue_php = [

        {
            nome: 'Spotify Clone',
            video: 'spotify_clone',
            link: 'https://github.com/mateusmaranhao12/spotify_clone'
        }

    ]

    projetos_vue = [

        {
            nome: 'Maragogi',
            video: 'maragogi',
            link: 'https://github.com/mateusmaranhao12/maragogi_vue'
        }

    ]

}
</script>

<style lang="scss">
@import '../scss/portfolio.scss';
</style>