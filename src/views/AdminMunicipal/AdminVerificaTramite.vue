<template>
  <div>
    <Header style="margin-top: 0px"></Header>
  </div>
  <div
    class="container"
    style="
      margin-top: 50px;
      background-color: white;
      position: relative;
      z-index: 22;
    "
    v-if="tramite != 'undefined' && tramite != null"
  >
    <CRow>
      <CCol xs="12" style="text-align: right">
        <span
          :style="
            tramite.estado == 1
              ? {
                  color: 'white !important',
                  backgroundColor: '#9e9e9e !important',
                }
              : tramite.estado == 2
              ? {
                  color: 'white !important',
                  backgroundColor: '#214d63 !important',
                }
              : tramite.estado == 3
              ? {
                  color: 'white !important',
                  backgroundColor: '#E91E63 !important',
                }
              : tramite.estado == 4
              ? {
                  color: 'white !important',
                  backgroundColor: '#009688 !important',
                }
              : {
                  color: 'white !important',
                  backgroundColor: '#39f !important',
                }
          "
          style="
            padding: 5px;
            padding-left: 10px;
            padding-right: 10px;
            float: left;
            border-radius: 15px;
            font-weight: 600;
          "
          >{{ tramite._estado }}</span
        >
        <CButton
          color="primary"
          variant="outline"
          style="border: solid 1px dimgray; font-size: 18px; height: 80px"
          @click="doSomething()"
        >
          <CIcon :icon="icon.cilChevronCircleLeftAlt" />
          &nbsp;Salir </CButton
        >&nbsp;
        <template v-if="estado == 1 || estado == 5">
          <CButton
            color="success"
            variant="outline"
            style="font-size: 14px; height: 80px"
            @click="iniciaRecibir"
          >
            <CIcon :icon="icon.cilThumbUp" />&nbsp;Recibir
          </CButton>
        </template>
        <template v-if="estado == 2">
          <CButton
            color="success"
            variant="outline"
            @click="continuar"
            style="font-size: 16px; height: 80px"
          >
            <CIcon
              style="width: 40px; margin-left: 12px"
              :icon="icon.cilChevronCircleRightAlt"
            />
            &nbsp;Continuar
          </CButton>
        </template>
      </CCol>
    </CRow>
    <CRow>
      <CCol xs="6">
        <h4 style="color: var(--roofsie-gray); font-size: 22px !important">
          Tramite Nro.: {{ tramite.anio }}0000{{ tramite.id }} <br />
          <small style="font-size: 0.7em">{{ tramite.nombre_oficina }}</small
          ><br />
          <small style="font-size: 0.6em">{{ tramite.nombre_tramite }}</small>
        </h4>
      </CCol>
      <CCol xs="6">
        <div
          style="
            display: inline-block;
            vertical-align: middle;
            border-left: solid 1px lightgray;
            padding-left: 10px;
          "
        >
          <h4 style="color: var(--roofsie-gray); font-size: 22px !important">
            Iniciado por <br />
            <small style="font-size: 0.7em">{{
              tramite.nombre_contribuyente
            }}</small
            ><br />
            <small style="font-size: 0.6em">CUIT: {{ tramite.cuit }}</small
            ><br />
            <small style="font-size: 0.6em; margin-bottom: 0; padding-bottom: 0"
              >En representacion de: Si mismo</small
            >
          </h4>
        </div>
      </CCol>
    </CRow>
    <CRow>
      <CCol xs="12">
        <CCard class="mb-5" style="max=width: 540px">
          <template v-if="tramite.lstPasos != null">
            <CNav variant="tabs" role="tablist">
              <CNavItem
                v-for="(pestania, indice) in arraySinRepetidos"
                :key="indice"
              >
                <CNavLink
                  href="javascript:void(0);"
                  :active="tabPaneActiveKey === indice + 1"
                  @click="
                    () => {
                      tabPaneActiveKey = indice + 1
                    }
                  "
                >
                  {{ pestania.nombre_ingreso_paso }}
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              <CTabPane
                role="tabpanel"
                aria-labelledby="home-tab"
                :visible="tabPaneActiveKey === indice2 + 1"
                v-for="(contenido, indice2) in arraySinRepetidos"
                :key="indice2"
              >
                <CRow
                  style="padding-top: 0; padding-bottom: 0"
                  class="g-0"
                  v-for="(itemRow, c) in tramite.lstPasos
                    .filter((objeto) => objeto.id_paso === contenido.id_paso)
                    .filter(
                      (filas, index, self) =>
                        index === self.findIndex((f) => f.row === filas.row),
                    )"
                  :key="c"
                >
                  <CCol
                    xs="12"
                    :lg="itemCol.col"
                    :xl="itemCol.col"
                    v-for="(itemCol, ic) in tramite.lstPasos
                      .filter((objeto) => objeto.id_paso === contenido.id_paso)
                      .filter((persona) => persona.row === itemRow.row)"
                    :key="ic"
                  >
                    <CCardBody>
                      <CCardText>
                        <template
                          v-if="itemCol.id_ddjj != 0 && primer_paso == 0"
                        >
                          <CCardTitle
                            style="
                              margin-bottom: 10px;
                              margin-top: 0px;
                              font-size: 18px;
                              font-weight: 500;
                              color: var(--roofsie-gray);
                            "
                            >Solicitud</CCardTitle
                          >
                          <hr />

                          <div v-html="itemCol.objDDJJs.ddjj"></div>
                        </template>
                        <template v-if="itemCol.id_formulario != 0">
                          <CCardTitle
                            style="
                              margin-bottom: 10px;
                              margin-top: 0px;
                              font-size: 18px;
                              font-weight: 500;
                              color: var(--roofsie-gray);
                            "
                          >
                            {{
                              itemCol.objFormulario.nombre[0].toUpperCase() +
                              itemCol.objFormulario.nombre
                                .substring(1)
                                .toLowerCase()
                            }}
                          </CCardTitle>
                          <hr />
                          <CCardText
                            v-if="
                              itemCol.objFormulario != null &&
                              itemCol.objFormulario != 'undefined'
                            "
                          >
                            <CRow
                              v-for="(item, c) in itemCol.objFormulario
                                .lstRespuesta"
                              :key="c"
                              style="padding: 0; padding-bottom: 5px"
                            >
                              <CCol xs="12">
                                <div v-if="item.id_tipo_campo == 1">
                                  <p>
                                    {{
                                      item.etiqueta_campo[0].toUpperCase() +
                                      item.etiqueta_campo
                                        .substring(1)
                                        .toLowerCase()
                                    }}: <br /><strong>{{
                                      item.respuesta_usuario
                                    }}</strong>
                                  </p>
                                </div>
                                <div v-if="item.id_tipo_campo == 2">
                                  <p>
                                    {{
                                      item.etiqueta_campo[0].toUpperCase() +
                                      item.etiqueta_campo
                                        .substring(1)
                                        .toLowerCase()
                                    }}: <br /><strong>{{
                                      item.respuesta_usuario
                                    }}</strong>
                                  </p>
                                </div>
                                <div v-if="item.id_tipo_campo == 3">
                                  <p>
                                    {{
                                      item.etiqueta_campo[0].toUpperCase() +
                                      item.etiqueta_campo
                                        .substring(1)
                                        .toLowerCase()
                                    }}: <br /><strong>{{
                                      item.respuesta_usuario
                                    }}</strong>
                                  </p>
                                </div>
                                <div v-if="item.id_tipo_campo == 4">
                                  <p>
                                    {{
                                      item.etiqueta_campo[0].toUpperCase() +
                                      item.etiqueta_campo
                                        .substring(1)
                                        .toLowerCase()
                                    }}: <br /><strong>{{
                                      item.respuesta_usuario
                                    }}</strong>
                                  </p>
                                </div>
                                <div v-if="item.id_tipo_campo == 5">
                                  <p>
                                    {{
                                      item.etiqueta_campo[0].toUpperCase() +
                                      item.etiqueta_campo
                                        .substring(1)
                                        .toLowerCase()
                                    }}: <br /><strong>{{
                                      item.respuesta_usuario
                                    }}</strong>
                                  </p>
                                </div>
                                <div v-if="item.id_tipo_campo == 6">
                                  <p>
                                    {{
                                      item.etiqueta_campo[0].toUpperCase() +
                                      item.etiqueta_campo
                                        .substring(1)
                                        .toLowerCase()
                                    }}: <br /><strong>{{
                                      item.respuesta_usuario
                                    }}</strong>
                                  </p>
                                </div>
                                <div v-if="item.id_tipo_campo == 7">
                                  <p>
                                    {{
                                      item.etiqueta_campo[0].toUpperCase() +
                                      item.etiqueta_campo
                                        .substring(1)
                                        .toLowerCase()
                                    }}: <br /><strong>{{
                                      item.respuesta_usuario
                                    }}</strong>
                                  </p>
                                </div>
                                <div v-if="item.id_tipo_campo == 8">
                                  <p>
                                    {{
                                      item.etiqueta_campo[0].toUpperCase() +
                                      item.etiqueta_campo
                                        .substring(1)
                                        .toLowerCase()
                                    }}: <br />
                                    <strong>
                                      {{
                                        item.respuesta_usuario.split(',')[1]
                                      }}</strong
                                    >
                                  </p>
                                </div>
                                <div v-if="item.id_tipo_campo == 9">
                                  <p
                                    v-for="seleccionado in JSON.parse(
                                      item.respuesta_usuario,
                                    )"
                                    :key="seleccionado.value"
                                  >
                                    <CIcon icon="cil-task" />&nbsp;
                                    <strong>{{ seleccionado.text }}</strong>
                                  </p>
                                </div>
                                <div v-if="item.id_tipo_campo == 14">
                                  <p>
                                    {{
                                      item.etiqueta_campo[0].toUpperCase() +
                                      item.etiqueta_campo
                                        .substring(1)
                                        .toLowerCase()
                                    }}: <br />
                                    <strong>
                                      {{
                                        item.respuesta_usuario.split(',')[1]
                                      }}</strong
                                    >
                                  </p>
                                </div>
                              </CCol>
                            </CRow>
                          </CCardText>
                        </template>
                        <template v-if="itemCol.id_adjunto != 0">
                          <CCardTitle
                            style="
                              margin-bottom: 10px;
                              margin-top: 0px;
                              font-size: 18px;
                              font-weight: 500;
                              color: var(--roofsie-gray);
                            "
                          >
                            {{
                              itemCol.objAdjuntos.nombre[0].toUpperCase() +
                              itemCol.objAdjuntos.nombre
                                .substring(1)
                                .toLowerCase()
                            }}</CCardTitle
                          >
                          <hr />
                          <template
                            v-if="itemCol.objAdjuntos.archivo[0] != '['"
                          >
                            <template
                              v-if="
                                itemCol.objAdjuntos.extenciones_aceptadas ==
                                'application/pdf'
                              "
                            >
                              <CButton
                                style="align-items: center; display: flex"
                                @click="
                                  descargaPDF(itemCol.objAdjuntos.archivo)
                                "
                              >
                                <CIcon
                                  style="
                                    background-color: #db0000 !important;
                                    height: 80px;
                                    width: 80px;
                                    padding: 15px;
                                    color: white;
                                  "
                                  :icon="icon.cibAdobeAcrobatReader"
                                  size="xl"
                                />
                                <span style="margin-left: 15px">{{
                                  itemCol.objAdjuntos.nombre
                                }}</span>
                              </CButton>
                            </template>
                            <template v-else>
                              <CCardTitle
                                style="
                                  margin-bottom: 10px;
                                  margin-top: 0px;
                                  font-size: 18px;
                                  font-weight: 500;
                                  color: var(--roofsie-gray);
                                "
                              >
                              </CCardTitle>
                              <CAlert
                                style="
                                  display: inline-flex;
                                  margin: 0px;
                                  padding: 5px;
                                "
                              >
                                <img
                                  :src="itemCol.objAdjuntos.archivo"
                                  style="
                                    height: 100px;
                                    width: auto;
                                    max-width: 90%;
                                    margin-top: 20px;
                                    border: solid gray;
                                    border-radius: 15px;
                                  "
                                />
                              </CAlert>
                            </template>
                          </template>
                          <template v-else>
                            <CAlert
                              v-for="(image, index) in JSON.parse(
                                itemCol.objAdjuntos.archivo,
                              )"
                              :key="index"
                              style="
                                display: inline-flex;
                                margin: 0px;
                                padding: 5px;
                              "
                            >
                              <img
                                @click="
                                  abrirModal('data:image/*;base64,' + image)
                                "
                                :src="'data:image/*;base64,' + image"
                                style="
                                  height: 100px;
                                  width: auto;
                                  margin-top: 20px;
                                  border: solid gray;
                                  border-radius: 15px;
                                "
                              />
                            </CAlert>
                          </template>
                        </template>
                      </CCardText>
                    </CCardBody>
                  </CCol>
                </CRow>
              </CTabPane>
            </CTabContent>
          </template>
        </CCard>
      </CCol>
    </CRow>
  </div>

  <VueFinalModal v-model="showModal">
    <CModalBody
      style="
        text-align: center;
        text-align: center;
        width: 60%;
        background-color: white;
        padding: 50px;
        margin-top: 100px;
        margin-left: 25%;
        border-radius: 15px;
      "
    >
      <span
        class="fa fa-info-circle"
        style="
          font-size: 60px;
          color: cadetblue;
          margin-top: 35px;
          margin-bottom: 35px;
        "
      ></span>
      <p style="font-size: 20px; font-weight: 600">
        ¿Esta seguro de recibir el tramite?
      </p>
      <div style="margin-top: 35px">
        <div v-if="!procesando">
          <CButton
            style="font-size: 12px; height: 80px"
            color="danger"
            variant="outline"
            @click="
              () => {
                showModal = false
              }
            "
          >
            <CIcon :icon="icon.cilThumbDown" />
            &nbsp;Cancelar </CButton
          >&nbsp;

          <CButton
            color="success"
            variant="outline"
            style="font-size: 14px; height: 80px"
            @click="Recibir"
          >
            <CIcon :icon="icon.cilThumbUp" />&nbsp;Recibir
          </CButton>
        </div>
        <div v-else>
          <CButton size="xl" disabled>
            <CSpinner component="span" size="xl" aria-hidden="true" />
            Procesando solicitud...
          </CButton>
        </div>
      </div>
    </CModalBody>
  </VueFinalModal>
</template>
<style scoped>
.row {
  padding: 15px;
}
hr:not([size]) {
  height: 2px;
}

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: #ffc107;
  border: 0;
  opacity: 0.75;
}

@import 'datatables.net-dt';
</style>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
import Header from '../../components/Headers/AdminMunicipal.vue'
import { CButton, CCardBody } from '@coreui/vue-pro'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRoute } from 'vue-router'
import { VueFinalModal } from 'vue-final-modal'

export default {
  data: () => ({
    procesando: false,
    modalAceptarTramite: false,
    tabPaneActiveKey: 1,
    icon,
    tramite: null,
    filasUnicas: [],
    modalQuitarImage: false,
    preview: '',
    estado: 0,
    foto: '',
    arraySinRepetidos: [],
    showModal: false,
  }),
  components: {
    VueFinalModal,
    Header,
    CCardBody,
    CIcon,
    CButton,
  },
  async mounted() {
    try {
      /*if (
        document.cookie
          .split(';')
          .some((item) => item.trim().startsWith('cod_usuario'))
      ) {
        this.$router.push('/')
      }*/
      const route = useRoute()
      const id = route.params.id
      axios
        .get('/Tramites/getByPk?id=' + id)
        .then(
          (response) => (
            (this.tramite = response.data),
            (this.estado = response.data.estado),
            (this.arraySinRepetidos = this.tramite.lstPasos.filter(
              (objeto, indice, self) =>
                self.findIndex((obj) => obj.id_paso === objeto.id_paso) ===
                indice,
            ))
          ),
        )
      axios
        .get(
          '/Usuarios/TraerFotoPerfil?Hash=' +
            Cookies.get('hash') +
            '&cuit=' +
            Cookies.get('vecino_cuit'),
        )
        .then((response) => (this.foto = response.data))
        .catch((this.labelError = true))
      this.pantalla = window.innerWidth
    } catch (error) {
      alert(error)
    }
  },
  methods: {
    iniciaRecibir() {
      this.showModal = true
    },
    Recibir() {
      this.procesando = true
      axios
        .get(
          '/Tramites/recibir?id_tramite=' +
            this.tramite.id_tramite +
            '&paso_actual=' +
            this.tramite.paso_actual +
            '&id_tramites=' +
            this.tramite.id +
            '&cod_usuario=' +
            Cookies.get('cod_usuario'),
        )
        .then(
          (response) => this.$router.push('/PasosTramite/' + response.data),
          (this.showModal = false),
          (this.procesando = false),
        )
    },
    doSomething() {
      this.$router.push('/AdminETramite')
    },
    continuar() {
      this.$router.push('/PasosTramite/' + this.tramite.paso_actual)
    },
    abrirModal(imagen) {
      this.preview = imagen
      this.modalQuitarImage = true
    },
    descargaPDF(descarga) {
      let binaryString = window.atob(
        descarga.replace('data:', '').replace(/^.+,/, ''),
      )
      binaryString = 'data:application/pdf;base64,' + binaryString
      const len = binaryString.length
      const bytes = new Uint8Array(len)
      for (let i = 0; i < len; ++i) {
        bytes[i] = binaryString.charCodeAt(i)
      }

      const blob = new Blob([bytes], { type: 'application/pdf' })
      const blobURL = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.setAttribute('target', '_blank')
      link.setAttribute('download', `mi.pdf`)
      link.href = blobURL
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
  },
}
</script>
