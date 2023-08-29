<template>
  <div>
    <Header style="margin-top: 0px"></Header>
  </div>
  <div class="container" style="margin-top: 40px; background-color: white">
    <CRow
      style="margin-bottom: 5px; background-color: white; position: relative"
    >
      <CCol xs="12" style="display: contents">
        <h2>Listado de Tramites</h2>
        <CButton
          @click="abreModalTramite(null)"
          style="float: right; right: 25px; position: absolute"
          class="btn btn-primary"
          ><span class="fa fa-plus-circle"></span>&nbsp;&nbsp;Nuevo
          Tramite</CButton
        >
      </CCol>
    </CRow>
    <CRow
      style="margin-bottom: 45px; background-color: white; position: relative"
    >
      <CCol xs="12">
        <table id="example" class="display nowrap" style="width: 100%">
          <tbody
            v-if="lsTramites != null && lsTramites != 'undefined'"
            style="
              border-style: solid;
              border-width: 1px;
              border-left: none;
              border-right: none;
              border-color: #d3d0d0;
            "
          >
            <tr v-for="(item, index) in lsTramites" :key="index">
              <td
                style="
                  text-align: center;
                  padding-top: 10px;
                  border-top: none;
                  padding-bottom: 10px;
                "
              >
                <div
                  class="avatar"
                  :style="{
                    backgroundImage:
                      'url(https://vecino.villaallende.gov.ar/img/' +
                      item.logo_unidad_administrativa +
                      ')',
                  }"
                  style="
                    height: 50px;
                    width: 50px;
                    background-repeat: no-repeat;
                    background-position: 50%;
                    border-radius: 50%;
                    background-size: 100% auto;
                  "
                ></div>
              </td>
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <strong
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  {{ item.nombre }}
                </strong>
                <p
                  class="text-medium-emphasis"
                  style="
                    margin-bottom: 0px;
                    padding-top: 10px;
                    color: #505050 !important;
                  "
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
                  {{ item.descripcion }}
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
                  <CButton @click="doSomething(item)"
                    ><span class="fa fa-cog"></span
                  ></CButton>
                  <CButton v-if="item.activo" @click="activaDesactiva(item)"
                    ><span class="fa fa-eye"></span
                  ></CButton>
                  <CButton
                    v-else
                    @click="activaDesactiva(item)"
                    style="background-color: #e7e7e7"
                    ><span class="fa fa-eye-slash"></span
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
      <CModalTitle>Crear / Administrar Tramite</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <label style="margin-top: 10px">Nombre Tramite</label>
      <CFormInput v-model="tramite.nombre" required></CFormInput>
      <label style="margin-top: 10px">Oficina</label>
      <select v-model="oficinaActual" class="form-control">
        <option
          v-for="opciones in lstOficinas"
          :key="opciones.codigo_oficina"
          :value="opciones.codigo_oficina"
        >
          {{ opciones.nombre_oficina }}
        </option>
      </select>
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
    lsTramites: [],
    lstOficinas: [],
    modalTramite: false,
    tramite: {
      id: 0,
      nombre: '',
      descripcion: '',
      activo: true,
      id_unidad_organizativa: 0,
      nombre_unidad_organizativa: '',
      logo_unidad_administrativa: '',
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
        .get('/Tramite/readBack')
        .then((response) => (this.lsTramites = response.data))
      axios
        .get('/Oficinas/read')
        .then((response) => (this.lstOficinas = response.data))
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
    abreModalTramite(tra) {
      if (tra != null) {
        this.tramite = tra
        this.oficinaActual = tra.id_unidad_organizativa
        this.opcion = 2
      } else {
        this.opcion = 1
        ;(this.tramite.id = 0),
          (this.tramite.nombre = ''),
          (this.tramite.descripcion = ''),
          (this.tramite.activo = true),
          (this.tramite.id_unidad_organizativa = 0),
          (this.tramite.nombre_unidad_organizativa = ''),
          (this.tramite.logo_unidad_administrativa = ''),
          (this.oficinaActual = 0)
      }
      this.modalTramite = true
    },
    doSomething(item) {
      Cookies.set('nombre_tramite', item.nombre),
        Cookies.set(
          'nombre_unidad_organizativa',
          item.nombre_unidad_organizativa,
        ),
        this.$router.push('/ListaPaso/' + item.id)
    },
    async btnSave() {
      try {
        let InstFormData = new FormData()
        this.tramite.usu_crea = Cookies.get('cod_usuario')
        this.tramite.usu_modifica = Cookies.get('cod_usuario')
        this.tramite.id_unidad_organizativa = this.oficinaActual
        InstFormData.append('obj', this.tramite)
        if (this.opcion == 1) {
          await axios.post('/Tramite/insert', { ...this.tramite }).then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get('/Tramite/readBack')
              .then((response) => (this.lsTramites = response.data)),
          )
        } else {
          await axios.post('/Tramite/update', { ...this.tramite }).then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get('/Tramite/readBack')
              .then(
                (response) => (this.lsTramites = response.data),
                (this.modalTramite = false),
              ),
          )
        }
      } catch {
        alert('Error')
      }
    },
    async activaDesactiva(obj) {
      try {
        let InstFormData = new FormData()
        this.tramite.id = obj.id
        this.tramite.activo = !obj.activo
        InstFormData.append('obj', this.tramite)
        await axios
          .post('/Tramite/activaDesactiva', { ...this.tramite })
          .then(() =>
            axios
              .get('/Tramite/readBack')
              .then((response) => (this.lsTramites = response.data)),
          )
      } catch {
        alert('Error')
      }
    },
  },
}
</script>
