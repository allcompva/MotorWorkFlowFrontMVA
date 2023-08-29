<template>
  <div
    class="container sm:px-10 login"
    style="overflow-y: hidden; margin-left: 0"
  >
    <div class="block xl:grid grid-cols-2 gap-4">
      <!-- BEGIN: Login Info -->
      <div class="hidden xl:flex flex-col min-h-screen">
        <div class="my-auto">
          <img
            style="height: 150px; width: auto"
            alt="Midone - HTML Admin Template"
            class="-intro-x w-1/2 -mt-16"
            src="../assets/Logo2.png"
          />
        </div>
      </div>
      <!-- END: Login Info -->
      <!-- BEGIN: Login Form -->
      <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <div
          class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
        >
          <h2
            class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
          >
            Iniciar Sesión
          </h2>
          <div class="intro-x mt-8">
            <CFormInput
              type="text"
              class="login__input form-control py-3 px-4 block mt-4"
              v-model="user"
              placeholder="Nombre de usuario"
              required
            ></CFormInput>
            <CFormInput
              type="password"
              class="login__input form-control py-3 px-4 block mt-4"
              v-model="password"
              placeholder="Contraseña"
              required
            ></CFormInput>
            <CAlert
              style="margin-top: 20px"
              v-if="labelError"
              elevation="7"
              shaped
              color="danger"
            >
              El usuario o la contraseña son incorrectos
            </CAlert>
          </div>
          <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <button
              @click="btnIngresar"
              class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
            >
              Ingresar
            </button>
            <button
              class="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 xl:mt-0 align-top"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
      <!-- END: Login Form -->
    </div>
  </div>
</template>
<style scoped>
@import '../assets/css/appEnigma.css';
</style>
<script>
//import { useRoute } from 'vue-router'
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  inject: ['mq'],
  data: () => ({
    user: '',
    password: '',
    usuario: null,
    labelError: false,
  }),
  setup() {},
  components: {},
  mounted() {
    if (
      Cookies.get('cod_usuario') != null &&
      Cookies.get('cod_oficina') != null
    ) {
      this.$router.push('/AdminETramite')
    }
  },
  methods: {
    btnIngresar() {
      try {
        axios
          .get(
            '/Login/ValidaUsuarioConOficina?user=' +
              this.user +
              '&password=' +
              this.password,
          )
          .then((response) => {
            if (response.data != '') {
              ;(this.usuario = response.data),
                Cookies.set('cod_usuario', response.data.cod_usuario),
                Cookies.set('nombre', response.data.nombre),
                Cookies.set('administrador', response.data.administrador),
                Cookies.set('nombre_completo', response.data.nombre_completo),
                Cookies.set('cod_oficina', response.data.cod_oficina),
                Cookies.set('nombre_oficina', response.data.nombre_oficina),
                axios
                  .get(
                    '/Login/ValidaPermisoConOficina?user=' +
                      this.user +
                      '&proceso=ADMIN_ETRAMITES',
                  )
                  .then((response) => {
                    if (response.data != '') {
                      Cookies.set('admin_tramites', true)
                    } else {
                      Cookies.set('admin_tramites', false)
                    }
                  })
                  .catch((this.labelError = true))
              this.$router.push('/AdminETramite')
            } else {
              this.labelError = true
              return
            }
          })
          .catch((this.labelError = true))
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
