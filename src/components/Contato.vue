<template>
    <div class="contato">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Entre em contato comigo agora mesmo!</h2>
                </div>

                <div class="col-md-6">
                    <div class="redes-sociais">
                        <h3>Minhas Redes Sociais</h3>
                        <h6><i class="fa-brands fa-instagram"></i> Instagram: <a
                                @click="getInstagram()">mateus_maranhao12</a></h6>
                        <h6><i class="fa-brands fa-github"></i> Github: <a @click="getGitHub()">mateusmaranhao12</a></h6>
                        <h6><i class="fa-brands fa-linkedin"></i> LinkedIn: <a @click="getLinkedin()">Mateus Maranhão</a>
                        </h6>
                        <h6><i class="fa-solid fa-envelope"></i> Gmail: <a>mateusnmaranhao@gmail.com</a>
                        </h6>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="redes-sociais text-center">
                        <h3>Entre em contato direto comigo</h3>
                        <div class="d-flex justify-content-center">
                            <button @click="getWhatsApp()" class="btn btn-redes-sociais mx-2"><i
                                    class="fa-brands fa-whatsapp"></i>
                                WhatsApp</button>
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
export default class Contato extends Vue {

    getGitHub() {
        window.open('https://github.com/mateusmaranhao12')
    }

    getInstagram() {
        window.open('https://www.instagram.com/mateus_maranhao12/')
    }

    getLinkedin() {
        window.open('https://www.linkedin.com/in/mateus-maranh%C3%A3o-24938b230/')
    }

    getWhatsApp() {
        window.open('https://api.whatsapp.com/send?phone=5579991762846&text=Boa%20noite,%20Mateus')
    }

}
</script>

<style lang="scss">@import '../scss/portfolio.scss';</style>