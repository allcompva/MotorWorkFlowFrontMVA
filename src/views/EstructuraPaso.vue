<template>
  <div>
    <Header style="margin-top: 0px"></Header>
  </div>
  <div
    class="container"
    style="margin-top: 40px; background-color: white"
    v-if="paso.lstIngresos != null && paso.lstIngresos != 'undefined'"
  >
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
        <h2 v-if="paso.en_usuario" style="font-size: 24px; color: gray">
          Paso a paso en vecino
        </h2>
        <CButton
          @click="salir()"
          style="float: right; right: 25px; position: absolute"
          class="btn btn-success"
          ><span class="fa fa-chevron-left"></span>&nbsp;&nbsp;Salir
        </CButton>
        <CButton
          v-if="paso.en_usuario || paso.lstIngresos.length == 0"
          @click="abreModalTramite(null)"
          style="float: right; right: 125px; position: absolute"
          class="btn btn-primary"
          ><span class="fa fa-plus-circle"></span>&nbsp;&nbsp;Nueva
          Pestaña</CButton
        >
      </CCol>
    </CRow>
    <CRow
      style="margin-bottom: 25px; background-color: white; position: relative"
    >
      <CCol xs="12">
        <table id="example" class="display nowrap" style="width: 100%">
          <tbody
            v-if="paso.lstIngresos != null && paso.lstIngresos != 'undefined'"
            style="
              padding-top: 0;
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
                <p style="margin-top: 20px"><strong>NOMBRE</strong></p>
              </td>
              <td></td>
            </tr>
            <tr v-for="(item, index) in paso.lstIngresos" :key="index">
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
                <P style="color: #505050 !important">{{ item.titulo }} </P>
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
                    ><span class="fa fa-cog" @click="configura(item.id)"></span
                  ></CButton>
                  <CButton><span class="fa fa-eye"></span></CButton>
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
      <CModalTitle>Crear / Administrar Paso a paso vecino</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CRow>
        <CCol cols="12">
          <label style="margin-top: 10px">Nombre</label>
          <CFormInput v-model="paso.titulo" required></CFormInput>
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
import axios from 'axios'
//import $ from 'jquery'
import 'datatables.net'
import 'datatables.net-responsive'
import Cookies from 'js-cookie'
import { CButton, CCol } from '@coreui/vue-pro'
import { useRoute } from 'vue-router'
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
      this.id_paso = id
      axios
        .get('/Paso/getByPk?ID=' + id)
        .then((response) => (this.paso = response.data))
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
      this.$router.push('/GrillaContenidoPaso/' + id + '/' + this.id_paso)
    },
    async btnSave() {
      try {
        let InstFormData = new FormData()
        this.paso.id_paso = this.id_paso
        InstFormData.append('obj', this.paso)
        if (this.opcion == 1) {
          await axios.post('/Ingresos_x_paso/insert', { ...this.paso }).then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get('/Paso/getByPk?ID=' + this.id_paso)
              .then((response) => (this.paso = response.data)),
          )
        } else {
          await axios.post('/Ingresos_x_paso/update', { ...this.paso }).then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get('/Paso/getByPk?ID=' + this.id_paso)
              .then((response) => (this.paso = response.data)),
          )
        }
        this.modalTramite = false
      } catch {
        alert('Error')
      }
    },
  },
}
</script>
