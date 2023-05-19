<template>
  <div>
    <Header style="margin-top: 0px"></Header>
  </div>
  <div class="container" style="margin-top: 40px; background-color: white">
    <CRow
      style="margin-bottom: 5px; background-color: white; position: relative"
    >
      <CCol xs="12" style="display: contents">
        <h4>Grila Ingreso</h4>
        <CButton
          @click="salir()"
          style="float: right; right: 25px; position: absolute"
          class="btn btn-success"
          ><span class="fa fa-chevron-left"></span>&nbsp;&nbsp;Salir
        </CButton>
      </CCol>
    </CRow>
    <CRow
      style="margin-bottom: 45px; background-color: white; position: relative"
    >
      <CCol xs="4">
        <CRow
          style="
            min-height: 100px;
            border: solid 1px lightgray;
            border-radius: 15px;
            margin: 15px;
          "
        >
          <CRow>
            <CCol cols="12" style="padding-top: 10px; padding-left: 20px"
              >Fila de una columna</CCol
            >
          </CRow>
          <CCol
            cols="12"
            style="
              min-height: 100px;
              border: solid 1px lightgray;
              border-radius: 15px;
              margin: 15px;
              background-color: lightgray;
            "
          >
          </CCol>
        </CRow>
        <CRow
          style="
            min-height: 100px;
            border: solid 1px lightgray;
            border-radius: 15px;
            margin: 15px;
          "
        >
          <CRow>
            <CCol cols="12" style="padding-top: 10px; padding-left: 20px"
              >Fila de dos columnas</CCol
            >
          </CRow>
          <CCol
            cols="6"
            style="
              min-height: 100px;
              border: solid 1px lightgray;
              border-radius: 15px;
              margin: 15px;
              background-color: lightgray;
            "
          >
          </CCol>
          <CCol
            cols="6"
            style="
              min-height: 100px;
              border: solid 1px lightgray;
              border-radius: 15px;
              margin: 15px;
              background-color: lightgray;
            "
          >
          </CCol>
        </CRow>
        <CRow
          style="
            min-height: 100px;
            border: solid 1px lightgray;
            border-radius: 15px;
            margin: 15px;
          "
        >
          <CRow>
            <CCol cols="12" style="padding-top: 10px; padding-left: 20px"
              >Fila de tres columnas</CCol
            >
          </CRow>
          <CCol
            cols="4"
            style="
              min-height: 100px;
              border: solid 1px lightgray;
              border-radius: 15px;
              margin: 15px;
              background-color: lightgray;
            "
          >
          </CCol>
          <CCol
            cols="4"
            style="
              min-height: 100px;
              border: solid 1px lightgray;
              border-radius: 15px;
              margin: 15px;
              background-color: lightgray;
            "
          >
          </CCol>
          <CCol
            cols="4"
            style="
              min-height: 100px;
              border: solid 1px lightgray;
              border-radius: 15px;
              margin: 15px;
              background-color: lightgray;
            "
          >
          </CCol>
        </CRow>
        <CRow
          style="
            min-height: 100px;
            border: solid 1px lightgray;
            border-radius: 15px;
            margin: 15px;
          "
        >
          <CRow>
            <CCol cols="12" style="padding-top: 10px; padding-left: 20px"
              >Fila de cuatro columnas</CCol
            >
          </CRow>
          <CCol
            cols="3"
            style="
              min-height: 100px;
              border: solid 1px lightgray;
              border-radius: 15px;
              margin: 15px;
              background-color: lightgray;
            "
          >
          </CCol>
          <CCol
            cols="3"
            style="
              min-height: 100px;
              border: solid 1px lightgray;
              border-radius: 15px;
              margin: 15px;
              background-color: lightgray;
            "
          >
          </CCol>
          <CCol
            cols="3"
            style="
              min-height: 100px;
              border: solid 1px lightgray;
              border-radius: 15px;
              margin: 15px;
              background-color: lightgray;
            "
          >
          </CCol>
          <CCol
            cols="3"
            style="
              min-height: 100px;
              border: solid 1px lightgray;
              border-radius: 15px;
              margin: 15px;
              background-color: lightgray;
            "
          >
          </CCol>
        </CRow>
      </CCol>
      <CCol>
        <CRow
          style="
            min-height: 700px;
            border: solid 1px lightgray;
            border-radius: 15px;
            margin: 15px;
          "
        >
        </CRow>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import Header from '../components/Headers/AdminMunicipal.vue'
import 'datatables.net-responsive'
import axios from 'axios'
import Cookies from 'js-cookie'
import { CButton, CCol } from '@coreui/vue-pro'
//import { useRoute } from 'vue-router'
export default {
  data: () => ({
    paso: {
      id: 0,
      id_paso: 0,
      titulo: '',
      orden: 0,
      activo: true,
    },
    id_paso: 0,
    opcion: 0,
    modalTramite: false,
  }),
  components: {
    Header,
    CButton,
    CCol,
  },
  mounted() {
    try {
      if (
        Cookies.get('cod_usuario') == 'undefined' &&
        Cookies.get('cod_oficina') == 'undefined'
      ) {
        this.$router.push('/')
      }
      this.pantalla = window.innerWidth
    } catch (error) {
      alert(error)
    }
  },
  methods: {
    abreModalTramite(pas) {
      if (pas != null) {
        this.paso = pas
        this.opcion = 2
      } else {
        this.opcion = 1
        ;(this.paso.id = 0),
          (this.paso.id_paso = this.id_paso),
          (this.paso.titulo = ''),
          (this.paso.orden = 0),
          (this.paso.activo = true)
      }
      this.modalTramite = true
    },
    salir() {
      this.$router.push('/ListaPaso/' + this.paso.id_tramite)
    },
    configura(id) {
      this.$router.push('/ListaPaso/' + id)
    },
    async btnSave() {
      try {
        let InstFormData = new FormData()
        this.paso.id_paso = this.id_paso
        InstFormData.append('obj', this.paso)
        if (this.opcion == 1) {
          await axios
            .post('/Ingresos_x_paso/insert', { ...this.paso })
            .then(() =>
              axios
                .get('/Paso/getByPk?ID=' + this.id_paso)
                .then((response) => (this.paso = response.data))(
                (this.modalTramite = false),
              ),
            )
        } else {
          await axios
            .post('/Ingresos_x_paso/update', { ...this.paso })
            .then(() =>
              axios
                .get('/Paso/getByPk?ID=' + this.id_paso)
                .then((response) => (this.paso = response.data))(
                (this.modalTramite = false),
              ),
            )
        }
      } catch {
        alert('Error')
      }
    },
  },
}
</script>
