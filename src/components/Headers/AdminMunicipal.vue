<template v-if="NombreFormateado != null && NombreFormateado != 'undefined'">
  <CHeader position="sticky" class="mb-4 headermuni">
    <CContainer style="padding-left: 25px; padding-right: 25px">
      <CCol xs="3">
        <CHeaderBrand class="mx-auto" to="/">
          <a href="/"
            ><img src="../../assets/logo.png" alt="" style="height: 60px"
          /></a>
        </CHeaderBrand>
      </CCol>
      <CCol lg="7" xl="7" md="6">
        <h2 style="font-size: 28px; font-weight: bold; color: dimgray">
          E-Tramites
        </h2>
      </CCol>
      <CCol
        lg="3"
        xl="2"
        md="3"
        style="
          text-align: right;
          background-color: #2d353a;
          padding: 5px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          right: 0;
          position: fixed;
        "
      >
        <CHeaderNav style="display: inline-flex">
          <span
            class="fa fa-envelope"
            style="
              color: white;
              align-items: center;
              display: flex;
              font-size: 24px;
              margin-right: 25px;
            "
          ></span>
          <CDropdown>
            <CDropdownToggle
              style="background-color: transparent; color: white"
              >{{ NombreFormateado }}</CDropdownToggle
            >
            <CDropdownMenu>
              <CDropdownItem @click="cerrarsesion">Cerrar Sesion</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CHeaderNav>
      </CCol>
    </CContainer>
  </CHeader>
</template>
<style>
.headermuni {
  background: rgb(248, 249, 250);
  padding-right: 0;
  height: 100px;
  background: linear-gradient(
    0deg,
    rgba(248, 249, 250, 1) 0%,
    rgba(218, 219, 219, 1) 100%
  );
}
</style>
<script>
import Cookies from 'js-cookie'
export default {
  name: 'AppHeader',
  components: {},
  data: () => ({
    NombreFormateado: '',
  }),
  methods: {
    cerrarsesion() {
      Cookies.remove('cod_usuario')
      Cookies.remove('nombre')
      Cookies.remove('administrador')
      Cookies.remove('nombre_completo')
      Cookies.remove('cod_oficina')
      Cookies.remove('nombre_oficina')
      this.$router.push('/')
    },
  },
  mounted() {
    this.NombreFormateado = Cookies.get('nombre_completo')
    //alert(this.NombreFormateado)
  },
}
</script>
