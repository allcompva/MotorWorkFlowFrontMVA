<template>
  <div>
    <Header style="margin-top: 0px"></Header>
  </div>
  <div class="container" style="margin-top: 40px; background-color: white">
    <CRow
      style="margin-bottom: 5px; background-color: white; position: relative"
    >
      <CCol xs="12" style="display: contents">
        <h4>Grilla Ingresos en paso</h4>
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
      <CCol xs="8">
        <CRow
          v-for="(pestania, indice) in paso.filter(
            (filas, index, self) =>
              index === self.findIndex((f) => f.row === filas.row),
          )"
          :key="indice"
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
            style="
              min-height: 100px;
              border: solid 1px lightgray;
              border-radius: 15px;
              margin: 15px;
              width: 29.5% !important;
            "
            :xs="itemCol.col"
            v-for="(itemCol, ic) in paso.filter(
              (columna) => columna.row === pestania.row,
            )"
            :key="ic"
          ></CCol>
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
import { useRoute } from 'vue-router'
export default {
  data: () => ({
    paso: [
      {
        id: 0,
        id_ingreso_paso: 0,
        orden: 0,
        row: 0,
        col: 0,
        activo: true,
      },
    ],
    id_ingreso_paso: 0,
    opcion: 0,
    modalTramite: false,
    arraySinRepetidos: [],
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
      const route = useRoute()
      const id = route.params.id
      this.id_ingreso_paso = id
      axios
        .get('/Contenido_ingreso_paso/read?id_ingreso_paso=' + id)
        .then((response) => (this.paso = response.data))
      this.pantalla = window.innerWidth
    } catch (error) {
      alert(error)
    }
  },
  methods: {
    salir() {
      this.$router.push('/EstructuraPaso/' + this.paso.id_paso)
    },
    configura(id) {
      this.$router.push('/ListaPaso/' + id)
    },
    async btnSave() {
      try {
        let InstFormData = new FormData()
        this.paso.id = 0
        this.paso.id_paso = this.id_paso
        this.paso.orden = 0
        this.paso.activo = true

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
        }
      } catch {
        alert('Error')
      }
    },
  },
}
</script>
