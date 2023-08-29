<template>
  <div>
    <Header style="margin-top: 0px"></Header>
  </div>
  <div class="container" style="margin-top: 40px; background-color: white">
    <CRow
      style="margin-bottom: 5px; background-color: white; position: relative"
    >
      <CCol xs="12" style="display: contents">
        <p
          style="
            width: 100%;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 0;
          "
        >
          {{ this.nombre_tramite }}
        </p>
        <p
          style="
            width: 100%;
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 0;
          "
        >
          {{ this.nombre_unidad_organizativa }}
        </p>
        <p style="width: 100%"></p>
        <hr style="width: 100%; margin-top: 0" />
        <h2 style="font-size: 24px; color: gray">Listado de Pasos</h2>
        <CButton
          @click="abreModalTramite(null)"
          style="float: right; right: 140px; position: absolute"
          class="btn btn-primary"
          ><span class="fa fa-plus-circle"></span>&nbsp;&nbsp;Nuevo
          Paso</CButton
        >
        <CButton
          @click="salir()"
          style="float: right; right: 25px; position: absolute"
          class="btn btn-success"
          ><span class="fa fa-chevron-left"></span>&nbsp;&nbsp;Salir
        </CButton>
      </CCol>
    </CRow>
    <CRow
      style="
        margin-bottom: 25px;
        background-color: white;
        position: relative;
        padding-top: 0;
      "
    >
      <CCol xs="12">
        <table id="example" class="display nowrap" style="width: 100%">
          <tbody
            v-if="lstPasos != null && lstPasos != 'undefined'"
            style="
              border-style: solid;
              border-width: 1px;
              border-left: none;
              border-right: none;
              border-top: none;
              border-color: #d3d0d0;
            "
          >
            <tr style="border-bottom: solid 1px lightgray">
              <td>
                <p style="margin-top: 20px"><strong>NOMBRE PASO</strong></p>
              </td>
              <td>
                <p style="margin-top: 20px"><strong>OFICINA INICIA</strong></p>
              </td>
              <td>
                <p style="margin-top: 20px"><strong>OFICINA DESTINO</strong></p>
              </td>
              <td></td>
            </tr>
            <tr v-for="(item, index) in lstPasos" :key="index">
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
                ></p>
                <P style="color: #505050 !important">{{ item.nombre }} </P>
              </td>
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <p
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  {{ item.nombre_unidad_organizativa }}
                </p>
              </td>
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <p
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  {{ item.nombre_proxima_oficina }}
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
                    ><span
                      class="fa fa-edit"
                      @click="abreModalTramite(item)"
                    ></span
                  ></CButton>
                  <CButton
                    ><span class="fa fa-cog" @click="doSomething(item)"></span
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
    backdrop="static"
    :visible="modalTramite"
    @close="
      () => {
        modalTramite = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Crear / Administrar Paso</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CRow>
        <CCol cols="12">
          <label style="margin-top: 10px">Nombre Paso</label>
          <CFormInput v-model="paso.nombre" required></CFormInput>
        </CCol>
      </CRow>
      <CRow>
        <CCol cols="6">
          <label style="margin-top: 10px">Oficina Origen</label>
          <select v-model="paso.id_oficina" class="form-control">
            <option
              v-for="opciones in lstOficinasOrigen"
              :key="opciones.codigo_oficina"
              :value="opciones.codigo_oficina"
            >
              {{ opciones.nombre_oficina }}
            </option>
          </select>
        </CCol>
        <CCol cols="6">
          <label style="margin-top: 10px">Oficina Destino</label>
          <select v-model="paso.proxima_oficina" class="form-control">
            <option
              v-for="opciones in lstOficinasDestino"
              :key="opciones.codigo_oficina"
              :value="opciones.codigo_oficina"
            >
              {{ opciones.nombre_oficina }}
            </option>
          </select>
        </CCol>
      </CRow>
      <CRow>
        <CCol cols="12">
          <label style="margin-top: 10px">Es el paso final</label>
          <select v-model="paso.es_final" class="form-control">
            <option
              v-for="opciones in esfinal"
              :key="opciones.value"
              :value="opciones.value"
            >
              {{ opciones.text }}
            </option>
          </select>
        </CCol>
      </CRow>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            modalTramite = false
          }
        "
      >
        Cancelar
      </CButton>
      <CButton @click="btnSave" color="primary">Guardar Cambios</CButton>
    </CModalFooter>
  </CModal>
</template>
<style>
.modal.show .modal-dialog {
  max-width: 60% !important;
}
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
import { CButton, CCol } from '@coreui/vue-pro'
import { useRoute } from 'vue-router'
export default {
  data: () => ({
    esfinal: [
      { value: true, text: 'SI' },
      { value: false, text: 'NO' },
    ],
    lstPasos: [],
    lstOficinasOrigen: [],
    lstOficinasDestino: [],
    modalTramite: false,
    esfinalm: false,
    idTramite: 0,
    paso: {
      id: 0,
      id_oficina: 0,
      en_usuario: false,
      nombre: true,
      orden: 0,
      activo: true,
      es_final: true,
      proxima_oficina: 0,
    },
    oficinaActual: 0,
    opcion: 0,
    nombre_tramite: '',
    nombre_unidad_organizativa: '',
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
      this.nombre_tramite = Cookies.get('nombre_tramite')
      this.nombre_unidad_organizativa = Cookies.get(
        'nombre_unidad_organizativa',
      )
      const route = useRoute()
      const id = route.params.id
      this.idTramite = id
      let oficinaVecino = { codigo_oficina: 0, nombre_oficina: 'VECINO' }
      axios
        .get('/Paso/readBackEnd?idTramite=' + id)
        .then((response) => (this.lstPasos = response.data))
      axios
        .get('/Oficinas/read')
        .then(
          (response) => (
            (this.lstOficinasOrigen = response.data),
            (this.lstOficinasDestino = response.data),
            this.lstOficinasOrigen.push(oficinaVecino),
            this.lstOficinasDestino.push(oficinaVecino)
          ),
        )
      this.pantalla = window.innerWidth
    } catch (error) {
      alert(error)
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
    abreModalTramite(pas) {
      if (pas != null) {
        this.paso = pas
        this.opcion = 2
      } else {
        this.opcion = 1
        ;(this.paso.id = 0),
          (this.paso.id_oficina = 0),
          (this.paso.en_usuario = false),
          (this.paso.nombre = ''),
          (this.paso.orden = 0),
          (this.paso.activo = true),
          (this.paso.es_final = false),
          (this.paso.proxima_oficina = 0)
      }
      this.modalTramite = true
    },
    doSomething(item) {
      Cookies.set('nombre_paso', item.nombre),
        this.$router.push('/EstructuraPaso/' + item.id)
    },
    salir() {
      this.$router.push('/ListaTramite/')
    },
    async btnSave() {
      try {
        let InstFormData = new FormData()
        this.paso.id_tramite = this.idTramite
        if (this.paso.id_oficina == 0) this.paso.en_usuario = true
        InstFormData.append('obj', this.paso)
        if (this.opcion == 1) {
          await axios.post('/Paso/insert', { ...this.paso }).then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get('/Paso/readBackEnd?idTramite=' + this.idTramite)
              .then((response) => (this.lstPasos = response.data)),
            (this.modalTramite = false),
          )
        } else {
          await axios.post('/Paso/update', { ...this.paso }).then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get('/Paso/readBackEnd?idTramite=' + this.idTramite)
              .then((response) => (this.lstPasos = response.data)),
            (this.modalTramite = false),
          )
        }
      } catch {
        alert('Error')
      }
    },
  },
}
</script>
