<template>
    <div class="conhecimento">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mb-5">
                    <h1>Área de atuação</h1>
                </div>
                <div v-for="a in atuacao" :key="a.nome" class="atuacao col-md-3 d-flex align-items-center justify-content-center">
                    <img class="img-fluid" :src="require(`../assets/imgs/${a.imagem}.svg`)">
                    <h4>{{ a.nome }}</h4>
                </div>
                <div>
                    
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
export default class Conhecimentos extends Vue {

    atuacao = [

        { nome: 'VueJS', imagem: 'vue' },
        { nome: 'TypeScript', imagem: 'ts' },
        { nome: 'PHP', imagem: 'php' },
        { nome: 'MySQL', imagem: 'mysql' },
        { nome: 'SCSS', imagem: 'sass' },
        { nome: 'HTML5', imagem: 'html5' },
        { nome: 'CSS3', imagem: 'css3' },
        { nome: 'JavaScript', imagem: 'js' },
        { nome: 'Bootstrap', imagem: 'bootstrap' },
        { nome: 'Git', imagem: 'git' },
        { nome: 'GitHub', imagem: 'github' }

    ]

}
</script>