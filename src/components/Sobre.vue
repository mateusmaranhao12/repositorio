<template>
    <div class="sobre container">
        <div class="row">
            <div class="col-md-3 d-flex align-items-center justify-content-center">
                <h1>Mateus Maranhão</h1>
            </div>
            <div class="col-md-6 d-flex align-items-center justify-content-center">
                <img class="img-fluid" src="../assets/imgs/me.jpg">
            </div>
            <div class="col-md-3 d-flex align-items-center justify-content-center">
                <h1>&lt;Full Stack Developer&gt;</h1>
            </div>
        </div>
    </div>

    <div class="informacoes-sobre">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>Formação Acadêmica</h1>
                    <h3>Ciencias da Computacao - Universidade Tiradentes, 2021 – 2025</h3>
                </div>
                <div class="col-md-6">
                    <h1>Idiomas</h1>
                    <p v-for="i in idiomas" :key="i">{{ i }}</p>
                </div>
                <div class="col-md-12 mt-5">
                    <h1>Certificados</h1>
                </div>
                <div v-for="cert in certificados" :key="cert"
                    class="col-md-6 d-flex align-items-center justify-content-center">
                    <img class="img-fluid img-certificado" :src="require(`../assets/imgs/${cert}.jpg`)">
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
export default class Sobre extends Vue {

    idiomas = [
        'Português (Nativo)', 'Inglês (Intermediário)', 'Espanhol (Médio)'
    ]

    certificados = [
        'cert_vue', 'cert_dw_completo'
    ]

}
</script>

<style lang="scss">
@import '../scss/portfolio.scss';
</style>