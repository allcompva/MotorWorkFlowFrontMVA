<template>
  <div>
    <Header style="margin-top: 0px"></Header>
  </div>
  <div class="container" style="margin-top: 40px; background-color: white">
    <CRow
      style="margin-bottom: 5px; background-color: white; position: relative"
    >
      <CCol xs="12" style="display: contents">
        <h2>Listado de Web Services</h2>
        <CButton
          @click="doSomething()"
          style="float: right; right: 25px; position: absolute"
          class="btn btn-success"
          ><span class="fa fa-plus-circle"></span>&nbsp;&nbsp;Salir</CButton
        >
        <CButton
          @click="abreModalWS(null)"
          style="float: right; right: 140px; position: absolute"
          class="btn btn-primary"
          ><span class="fa fa-plus-circle"></span>&nbsp;&nbsp;Nuevo Web
          Service</CButton
        >
      </CCol>
    </CRow>
    <CRow
      style="margin-bottom: 45px; background-color: white; position: relative"
    >
      <CCol xs="12">
        <table id="example" class="display nowrap" style="width: 100%">
          <thead>
            <tr>
              <th style="color: gray; font-size: 20px; font-weight: 700">
                Web Service
              </th>
              <th style="color: gray; font-size: 20px; font-weight: 700">
                Verbo
              </th>
              <th style="color: gray; font-size: 20px; font-weight: 700">
                Tipo
              </th>
              <th style="color: gray; font-size: 20px; font-weight: 700">
                Estructura
              </th>
            </tr>
          </thead>
          <tbody
            v-if="lsWebService != null && lsWebService != 'undefined'"
            style="
              border-style: solid;
              border-width: 1px;
              border-left: none;
              border-right: none;
              border-color: #d3d0d0;
            "
          >
            <tr v-for="(item, index) in lsWebService" :key="index">
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <p
                  class="text-medium-emphasis"
                  style="
                    margin-bottom: 0px;
                    padding-top: 10px;
                    color: #505050 !important;
                  "
                >
                  <strong style="color: #505050 !important">{{
                    item.nombre
                  }}</strong>
                </p>
                <p
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  {{ item.url }}
                </p>
              </td>
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <p
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  {{ item.verbo }}
                </p>
              </td>
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <p
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  {{ item.tipo }}
                </p>
              </td>
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <p
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  {{ item.bodY_JSON }}
                </p>
              </td>
              <td
                style="
                  padding-top: 0px;
                  border-top: none;
                  padding-bottom: 0px;
                  text-align: right;
                "
              >
                <CButtonGroup role="group" aria-label="Default button group">
                  <CButton
                    ><span class="fa fa-edit" @click="abreModalWS(item)"></span
                  ></CButton>
                  <CButton
                    ><span class="fa fa-remove" style="color: red"></span
                  ></CButton>
                </CButtonGroup>
              </td>
            </tr>
          </tbody>
        </table>
      </CCol>
    </CRow>
  </div>
  <CModal
    size="lg"
    backdrop="static"
    :visible="modalWS"
    @close="
      () => {
        modalWS = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Crear / Administrar Web Service</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CRow>
        <CCol col="12">
          <label style="margin-top: 10px">Nombre Web Service</label>
          <CFormInput v-model="ws.nombre" required></CFormInput>
        </CCol>
      </CRow>
      <CRow>
        <CCol col="12">
          <label style="margin-top: 10px">URL</label>
          <CFormInput v-model="ws.url" required></CFormInput>
        </CCol>
      </CRow>
      <CRow>
        <CCol col="6">
          <label style="margin-top: 10px">Verbo</label>
          <select v-model="ws.verbo" class="form-control">
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>
        </CCol>
        <CCol col="6">
          <label style="margin-top: 10px">Verbo</label>
          <select v-model="ws.tipo" class="form-control">
            <option value="REST">REST</option>
            <option value="SOAP">SOAP</option>
          </select>
        </CCol>
      </CRow>
      <CRow>
        <CCol col="12">
          <label style="margin-top: 10px">Estructura Response</label>
          <CFormTextarea v-model="ws.bodY_JSON" required></CFormTextarea>
        </CCol>
      </CRow>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            modalWS = false
          }
        "
      >
        Cancelar
      </CButton>
      <CButton @click="btnSave" color="primary">Guardar Cambios</CButton>
    </CModalFooter>
  </CModal>
</template>
<style scoped>
.row {
  padding: 15px;
}
@import 'datatables.net-dt';
</style>
<script>
import Header from '../components/Headers/AdminMunicipal.vue'
import 'datatables.net-responsive'
import avatar1 from '@/assets/images/avatars/1.jpg'
import * as icon from '@coreui/icons'
import axios from 'axios'
//import $ from 'jquery'
import 'datatables.net'
import 'datatables.net-responsive'
import Cookies from 'js-cookie'
import { CButton } from '@coreui/vue-pro'
export default {
  data: () => ({
    lsWebService: [],
    lstOficinas: [],
    modalWS: false,
    ws: {
      id: 0,
      id_configura_campo_formulario: 0,
      nombre: '',
      url: '',
      verbo: '',
      tipo: '',
      bodY_JSON: '',
    },
    oficinaActual: 0,
    opcion: 0,
  }),
  components: {
    Header,
    CButton,
  },
  mounted() {
    try {
      if (
        Cookies.get('cod_usuario') == 'undefined' &&
        Cookies.get('cod_oficina') == 'undefined'
      ) {
        this.$router.push('/')
      }

      axios
        .get('/Ws_web_service/read')
        .then((response) => (this.lsWebService = response.data))

      this.pantalla = window.innerWidth
    } catch (error) {
      alert('error')
    }

    /*$(document).ready(() => {
          $('#example').DataTable({
            responsive: true,
          })
        })*/
  },
  setup() {
    const tramites = [
      {
        avatar: { src: avatar1, status: 'success' },
        user: {
          name: 'Juan Parez',
          cuit: '27-28259684-7',
        },
        tramite: 'Habilitación de Negocios Bajo riesgo unipersonal sin local',
        fecha: '20/03/2023',
      },
    ]
    return {
      tramites,
      icon,
    }
  },
  methods: {
    abreModalWS(ws) {
      if (ws != null) {
        ;(this.ws.id = ws.id),
          (this.ws.id_configura_campo_formulario = 0),
          (this.ws.nombre = ws.nombre),
          (this.ws.url = ws.url),
          (this.ws.verbo = ws.verbo),
          (this.ws.tipo = ws.tipo),
          (this.ws.bodY_JSON = ws.bodY_JSON),
          (this.opcion = 2)
      } else {
        this.ws.id = 0
        this.ws.id_configura_campo_formulario = 0
        this.ws.nombre = ''
        this.ws.url = ''
        this.ws.verbo = ''
        this.ws.tipo = ''
        this.ws.bodY_JSON = ''
        this.opcion = 1
      }
      this.modalWS = true
    },
    doSomething() {
      this.$router.push(this.$router.options.history.state.back)
    },
    async btnSave() {
      try {
        let InstFormData = new FormData()
        InstFormData.append('obj', this.ws)
        if (this.opcion == 1) {
          await axios.post('/Ws_web_service/insert', { ...this.ws }).then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get('/Ws_web_service/read')
              .then((response) => (this.lsWebService = response.data)),
          )
        } else {
          await axios.post('/Ws_web_service/update', { ...this.ws }).then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get('/Ws_web_service/read')
              .then((response) => (this.lsWebService = response.data)),
          )
        }
        this.modalWS = false
      } catch {
        alert('Error')
      }
    },
  },
}
</script>
