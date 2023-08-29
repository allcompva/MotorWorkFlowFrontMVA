<template>
  <div>
    <Header style="margin-top: 0px"></Header>
  </div>
  <div class="container" style="margin-top: 40px; background-color: white">
    <CRow
      style="margin-bottom: 5px; background-color: white; position: relative"
    >
      <CCol xs="12" style="display: inline-grid; padding-left: 25px">
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
        <h4 style="font-size: 24px; color: gray">Grilla Ingresos en paso</h4>
        <CButton
          @click="btnWebServices()"
          style="float: right; right: 140px; position: absolute; color: white"
          class="btn btn-primary"
          ><span class="fa fa-cog"></span>&nbsp;&nbsp;Web Services
        </CButton>
        <CButton
          @click="salir()"
          style="float: right; right: 25px; position: absolute; color: white"
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
            <CCol
              cols="12"
              style="padding-top: 10px; padding-left: 20px; padding-right: 0"
              >Fila de una columna
              <CButton
                @click="abreModal(12)"
                style="float: right; color: gray; border-radius: 50%"
                class="btn btn-default"
                ><span class="fa fa-chevron-right"></span>
              </CButton>
            </CCol>
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
              >Fila de dos columnas
              <CButton
                @click="abreModal(6)"
                style="float: right; color: gray; border-radius: 50%"
                class="btn btn-default"
                ><span class="fa fa-chevron-right"></span> </CButton
            ></CCol>
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
              >Fila de tres columnas
              <CButton
                @click="abreModal(4)"
                style="float: right; color: gray; border-radius: 50%"
                class="btn btn-default"
                ><span class="fa fa-chevron-right"></span> </CButton
            ></CCol>
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
              >Fila de cuatro columnas
              <CButton
                @click="abreModal(3)"
                style="float: right; color: gray; border-radius: 50%"
                class="btn btn-default"
                ><span class="fa fa-chevron-right"></span> </CButton
            ></CCol>
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
            min-height: 165px;
            border: solid 1px lightgray;
            border-radius: 15px;
            margin-right: 0;
            margin: 15px;
            padding-bottom: 15px;
          "
        >
          <CRow style="padding-right: 0">
            <CCol cols="12" style="padding-top: 5px; padding-left: 20px"
              ><CButton
                @click="abreModalEliminarFila(pestania.id)"
                style="
                  float: right;
                  right: 35px;
                  position: absolute;
                  color: white;
                  height: 25px;
                  width: 25px;
                  border-radius: 50%;
                  padding: 0;
                "
                class="btn btn-danger"
                ><span class="fa fa-remove"></span> </CButton
            ></CCol>
          </CRow>
          <CCol
            style="
              min-height: 100px;
              border-radius: 15px;
              margin: 15px;
              margin-top: 30px;
              margin-bottom: 2px;
              border: solid 1px lightgray;
            "
            :cols="itemCol.col"
            v-for="(itemCol, ic) in paso.filter(
              (columna) => columna.row === pestania.row,
            )"
            :key="ic"
          >
            <CRow>
              <CCol cols="12">
                <div v-if="itemCol.id_ddjj != 0">
                  <div class="row">
                    <div class="col-12">
                      <CButton
                        @click="abreModalDDJJ(itemCol.objDDJJ, itemCol.id)"
                        style="
                          float: right;
                          color: white;
                          height: 25px;
                          width: 25px;
                          border-radius: 50%;
                          padding: 0;
                          margin: 2px;
                        "
                        class="btn"
                        ><span class="fa fa-edit" style="color: #4f95fe"></span>
                      </CButton>
                      <CButton
                        @click="salir()"
                        style="
                          float: right;
                          color: white;
                          height: 25px;
                          width: 25px;
                          border-radius: 50%;
                          padding: 0;
                          margin: 2px;
                        "
                        class="btn"
                        ><span class="fa fa-remove" style="color: red"></span>
                      </CButton>
                    </div>
                  </div>
                  <div class="row" style="text-align: center">
                    <div class="col-12">
                      <img
                        src="../assets/DDJJ.png"
                        style="width: 60px; margin-top: 8px; display: inline"
                      />
                      <P style="font-weight: 700">DDJJ</P>
                    </div>
                  </div>
                </div>
                <div v-if="itemCol.id_adjunto != 0">
                  <div class="row">
                    <div class="col-12">
                      <CButton
                        @click="abreModalAdjunto(itemCol.objAdjunto)"
                        style="
                          float: right;
                          color: white;
                          height: 25px;
                          width: 25px;
                          border-radius: 50%;
                          padding: 0;
                          margin: 2px;
                        "
                        class="btn"
                        ><span class="fa fa-edit" style="color: #4f95fe"></span>
                      </CButton>
                      <CButton
                        @click="salir()"
                        style="
                          float: right;
                          color: white;
                          height: 25px;
                          width: 25px;
                          border-radius: 50%;
                          padding: 0;
                          margin: 2px;
                        "
                        class="btn"
                        ><span class="fa fa-remove" style="color: red"></span>
                      </CButton>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12" style="text-align: center">
                      <img
                        src="../assets/Adjunto.png"
                        style="width: 60px; margin-top: 8px; display: inline"
                      />
                      <P style="font-weight: 700">Adjunto</P>
                    </div>
                  </div>
                </div>
                <div v-if="itemCol.id_formulario != 0">
                  <div class="row">
                    <div class="col-12">
                      <CButton
                        @click="abreModalFormulario(itemCol.objFormulario, 0)"
                        style="
                          float: right;
                          color: white;
                          height: 25px;
                          width: 25px;
                          border-radius: 50%;
                          padding: 0;
                          margin: 2px;
                        "
                        class="btn"
                        ><span class="fa fa-edit" style="color: #4f95fe"></span>
                      </CButton>
                      <CButton
                        @click="formularioEdit(itemCol.id_formulario)"
                        style="
                          float: right;
                          color: white;
                          height: 25px;
                          width: 25px;
                          border-radius: 50%;
                          padding: 0;
                          margin: 2px;
                        "
                        class="btn"
                        ><span class="fa fa-cog" style="color: #4f95fe"></span>
                      </CButton>
                      <CButton
                        @click="salir()"
                        style="
                          float: right;
                          color: white;
                          height: 25px;
                          width: 25px;
                          border-radius: 50%;
                          padding: 0;
                          margin: 2px;
                        "
                        class="btn"
                        ><span class="fa fa-remove" style="color: red"></span>
                      </CButton>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12" style="text-align: center">
                      <img
                        src="../assets/Formulario.png"
                        style="width: 60px; margin-top: 8px; display: inline"
                      />
                      <P style="font-weight: 700">Form</P>
                    </div>
                  </div>
                </div>
                <div
                  v-if="
                    itemCol.id_ddjj == 0 &&
                    itemCol.id_adjunto == 0 &&
                    itemCol.id_formulario == 0
                  "
                >
                  <div class="row">
                    <div
                      class="col-12"
                      style="text-align: center; min-height: 100px"
                    >
                      <CDropdown>
                        <CDropdownToggle
                          color="primary"
                          style="
                            border-radius: 50%;
                            height: 60px;
                            width: 60px;
                            margin-top: 25px;
                          "
                          ><span class="fa fa-plus"></span
                        ></CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem
                            href="#"
                            @click="abreModalDDJJ(null, itemCol.id)"
                            >DDJJ</CDropdownItem
                          >
                          <CDropdownItem
                            href="#"
                            @click="abreModalAdjunto(null, itemCol.id)"
                            >Adjunto</CDropdownItem
                          >
                          <CDropdownItem
                            href="#"
                            @click="abreModalFormulario(null, itemCol.id)"
                            >Formulario</CDropdownItem
                          >
                        </CDropdownMenu>
                      </CDropdown>
                    </div>
                  </div>
                </div>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CCol>
    </CRow>

    <CModal
      :visible="visibleLiveFormulario"
      @close="
        () => {
          visibleLiveFormulario = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Agregar / Editar Formulario</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormInput
          label="Nombre del formulario"
          placeholder="Nombre del formulario"
          v-model="objFormulario.nombre"
        />
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          @click="
            () => {
              visibleLiveFormulario = false
            }
          "
        >
          Cancelar
        </CButton>
        <CButton color="primary" @click="btnSaveFormulario()">Guardar</CButton>
      </CModalFooter>
    </CModal>

    <CModal
      :visible="visibleLiveDDJJ"
      @close="
        () => {
          visibleLiveDDJJ = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Agregar / Editar DDJJ</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <QuillEditor
          theme="snow"
          v-model:content="objDDJJ.texto"
          contentType="html"
        />
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          @click="
            () => {
              visibleLiveDDJJ = false
            }
          "
        >
          Cancelar
        </CButton>
        <CButton color="primary" @click="btnSaveDDJJ()">Guardar</CButton>
      </CModalFooter>
    </CModal>

    <CModal
      :visible="visibleLiveRow"
      @close="
        () => {
          visibleLiveRow = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Agregar fila de contenido</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <h2
          style="font-size: 18px; text-align: center; margin: 25px; color: gray"
        >
          ¿Esta seguro de agregar un fila de contenido al paso?
        </h2>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          @click="
            () => {
              visibleLiveRow = false
            }
          "
        >
          Cancelar
        </CButton>
        <CButton color="primary" @click="btnSave()">Guardar</CButton>
      </CModalFooter>
    </CModal>

    <CModal
      size="lg"
      :visible="visibleLiveAdjunto"
      @close="
        () => {
          visibleLiveAdjunto = false
        }
      "
    >
      <CModalHeader>
        <CModalTitle>Agregar / Adjunto</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow>
          <CCol cols="12">
            <CFormInput
              label="Descripcion del Adjunto a solicitar"
              placeholder="Descripcion del Adjunto a solicitar"
              v-model="objAdjunto.etiqueta"
            />
          </CCol>
        </CRow>
        <CRow style="margin-top: 20px">
          <CCol cols="4">
            <label>Es obligatorio</label>
            <select v-model="objAdjunto.requerido" class="form-control">
              <option :value="true">SI</option>
              <option :value="false">NO</option>
            </select>
          </CCol>
          <CCol cols="4">
            <label>Se permiten mas de un archivo</label>
            <select v-model="objAdjunto.multiple" class="form-control">
              <option :value="false">NO</option>
              <option :value="true">SI</option>
            </select>
          </CCol>
          <CCol cols="4">
            <label>Extenciones permitidas</label>
            <select
              v-model="objAdjunto.extenciones_aceptadas"
              class="form-control"
            >
              <option value="application/pdf">application/pdf</option>
              <option value="image/*">image/*</option>
            </select>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton
          color="secondary"
          @click="
            () => {
              visibleLiveAdjunto = false
            }
          "
        >
          Cancelar
        </CButton>
        <CButton color="primary" @click="btnSaveAdjunto()">Guardar</CButton>
      </CModalFooter>
    </CModal>
    <CModal
      :visible="visibleEliminaFila"
      @close="
        () => {
          visibleEliminaFila = false
        }
      "
    >
      <CModalBody>
        <CRow>
          <CCol cols="12">
            <p style="text-align: center">
              <span
                class="fa fa-remove"
                style="
                  color: #b31723;
                  font-size: 36px;
                  border: solid 4px;
                  padding: 10px;
                  border-radius: 50%;
                  height: 60px;
                  width: 60px;
                  margin-top: 35px;
                "
              ></span>
            </p>
            <p
              style="
                text-align: center;
                color: #b31723;
                font-size: 24px;
                font-weight: 600;
              "
            >
              ¿Esta seguro de eliminar la fila de contenido?
            </p>
            <p
              style="
                text-align: center;
                color: gray;
                font-weight: 400;
                padding-left: 55px;
                padding-right: 55px;
              "
            >
              La acción que esta a punto de realizar es irreversible.
            </p>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter
        style="
          text-align: center;
          display: block;
          border: none;
          padding-bottom: 35px;
        "
      >
        <CButton
          color="outline-secondary"
          @click="
            () => {
              visibleEliminaFila = false
            }
          "
        >
          Cancelar
        </CButton>
        <CButton color="danger" @click="btnEliminaFila()">Eliminar</CButton>
      </CModalFooter>
    </CModal>

    <CModal
      :visible="visibleEliminaAdjunto"
      @close="
        () => {
          visibleEliminaFila = false
        }
      "
    >
      <CModalBody>
        <CRow>
          <CCol cols="12">
            <p style="text-align: center">
              <span
                class="fa fa-remove"
                style="
                  color: #b31723;
                  font-size: 36px;
                  border: solid 4px;
                  padding: 10px;
                  border-radius: 50%;
                  height: 60px;
                  width: 60px;
                  margin-top: 35px;
                "
              ></span>
            </p>
            <p
              style="
                text-align: center;
                color: #b31723;
                font-size: 24px;
                font-weight: 600;
              "
            >
              ¿Esta seguro de eliminar la fila de contenido?
            </p>
            <p
              style="
                text-align: center;
                color: gray;
                font-weight: 400;
                padding-left: 55px;
                padding-right: 55px;
              "
            >
              La acción que esta a punto de realizar es irreversible.
            </p>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter
        style="
          text-align: center;
          display: block;
          border: none;
          padding-bottom: 35px;
        "
      >
        <CButton
          color="outline-secondary"
          @click="
            () => {
              visibleEliminaFila = false
            }
          "
        >
          Cancelar
        </CButton>
        <CButton color="danger" @click="btnEliminaFila()">Eliminar</CButton>
      </CModalFooter>
    </CModal>
  </div>
</template>
<script>
import Header from '../components/Headers/AdminMunicipal.vue'
import 'datatables.net-responsive'
import axios from 'axios'
import Cookies from 'js-cookie'
import { CButton, CCol } from '@coreui/vue-pro'
import { useRoute } from 'vue-router'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'

export default {
  data: () => ({
    visibleLiveFormulario: false,
    paso: [
      {
        id: 0,
        id_ingreso_paso: 0,
        orden: 0,
        row: 0,
        col: 0,
        activo: true,
        ant: 0,
      },
    ],
    objPaso: {
      id: 0,
      id_ingreso_paso: 0,
      orden: 0,
      row: 0,
      col: 0,
      activo: true,
      ant: 0,
    },
    objDDJJ: {
      id: 0,
      id_contenido_ingreso_paso: 0,
      texto: '',
    },
    objFormulario: {
      id: 0,
      nombre: '',
      descripcion: '',
      activo: true,
      id_contenido_ingreso_paso: 0,
    },
    objAdjunto: {
      id: 0,
      nombre: '',
      descripcion: '',
      etiqueta: '',
      requerido: false,
      activo: false,
      id_contenido_ingreso_paso: 0,
      extenciones_aceptadas: '',
      multiple: false,
    },
    id_ingreso_paso: 0,
    opcion: 0,
    modalTramite: false,
    arraySinRepetidos: [],
    visibleLiveAdjunto: false,
    visibleLiveDDJJ: false,
    visibleLiveRow: false,
    idDDJJ: 0,
    col: 0,
    nombre_tramite: '',
    nombre_unidad_organizativa: '',
    id_fila_eliminar: 0,
    visibleEliminaFila: false,
  }),
  components: {
    Header,
    CButton,
    CCol,
    QuillEditor,
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
      this.id_ingreso_paso = id
      const ant = route.params.ant
      this.ant = ant
      axios
        .get('/Contenido_ingreso_paso/read?id_ingreso_paso=' + id)
        .then((response) => (this.paso = response.data))
      this.pantalla = window.innerWidth
    } catch (error) {
      alert(error)
    }
  },
  methods: {
    abreModalDDJJ(objDDJJ, id_cip) {
      if (objDDJJ != null) {
        this.objDDJJ.id = objDDJJ.id
        this.objDDJJ.id_contenido_ingreso_paso =
          objDDJJ.id_contenido_ingreso_paso
        this.objDDJJ.texto = objDDJJ.texto
        this.opcion = 2
      } else {
        this.objDDJJ.id = 0
        this.objDDJJ.id_contenido_ingreso_paso = id_cip
        this.objDDJJ.texto = ''
        this.opcion = 1
      }
      this.visibleLiveDDJJ = true
    },
    abreModal(col) {
      this.col = col
      this.visibleLiveRow = true
    },
    abreModalEliminarFila(id) {
      this.id_fila_eliminar = id
      alert(this.id_fila_eliminar)
      this.visibleEliminaFila = true
    },
    abreModalFormulario(objFormulario, id_cip) {
      if (objFormulario != null) {
        this.opcion = 2
        this.objFormulario.id = objFormulario.id
        this.objFormulario.id_contenido_ingreso_paso =
          objFormulario.id_contenido_ingreso_paso
      } else {
        this.opcion = 1
        this.objFormulario.id = 0
        this.objFormulario.id_contenido_ingreso_paso = id_cip
      }
      this.objFormulario.descripcion = ''
      this.objFormulario.activo = true
      this.visibleLiveFormulario = true
    },
    abreModalAdjunto(objAdjunto, id_cip) {
      if (objAdjunto != null) {
        this.objAdjunto.id = objAdjunto.id
        this.objAdjunto.id_contenido_ingreso_paso =
          objAdjunto.id_contenido_ingreso_paso
        this.objAdjunto.descripcion = objAdjunto.descripcion

        this.objAdjunto.etiqueta = objAdjunto.etiqueta
        this.objAdjunto.requerido = objAdjunto.requerido
        this.objAdjunto.activo = objAdjunto.activo
        this.objAdjunto.extenciones_aceptadas = objAdjunto.extenciones_aceptadas
        this.objAdjunto.multiple = objAdjunto.multiple

        this.opcion = 2
      } else {
        this.objAdjunto.id = 0
        this.objAdjunto.id_contenido_ingreso_paso = id_cip
        this.objAdjunto.descripcion = ''

        this.objAdjunto.etiqueta = ''
        this.objAdjunto.requerido = true
        this.objAdjunto.activo = true
        this.objAdjunto.extenciones_aceptadas = ''
        this.objAdjunto.multiple = true

        this.opcion = 1
      }
      this.visibleLiveAdjunto = true
    },
    async btnSaveDDJJ() {
      try {
        let InstFormData = new FormData()
        InstFormData.append('obj', this.objDDJJ)
        if (this.opcion == 1) {
          await axios
            .post('/Contenido_ingreso_paso/insertDDJJ', { ...this.objDDJJ })
            .then(
              () => alert('Los cambios se guardaron de forma correcta'),
              axios
                .get(
                  '/Contenido_ingreso_paso/read?id_ingreso_paso=' +
                    this.id_ingreso_paso,
                )
                .then((response) => (this.paso = response.data)),
            )
        } else {
          await axios
            .post('/Contenido_ingreso_paso/updateDDJJ', { ...this.objDDJJ })
            .then(
              () => alert('Los cambios se guardaron de forma correcta'),
              axios
                .get(
                  '/Contenido_ingreso_paso/read?id_ingreso_paso=' +
                    this.id_ingreso_paso,
                )
                .then((response) => (this.paso = response.data)),
            )
        }
        this.visibleLiveDDJJ = false
      } catch {
        alert('Error')
      }
    },
    async btnSaveFormulario() {
      try {
        let InstFormData = new FormData()
        InstFormData.append('obj', this.objFormulario)
        if (this.opcion == 1) {
          await axios
            .post('/Contenido_ingreso_paso/insertFormulario', {
              ...this.objFormulario,
            })
            .then(
              () => alert('Los cambios se guardaron de forma correcta'),
              axios
                .get(
                  '/Contenido_ingreso_paso/read?id_ingreso_paso=' +
                    this.id_ingreso_paso,
                )
                .then((response) => (this.paso = response.data)),
            )
        } else {
          await axios
            .post('/Contenido_ingreso_paso/updateFormlario', {
              ...this.objFormulario,
            })
            .then(
              () => alert('Los cambios se guardaron de forma correcta'),
              axios
                .get(
                  '/Contenido_ingreso_paso/read?id_ingreso_paso=' +
                    this.id_ingreso_paso,
                )
                .then((response) => (this.paso = response.data)),
            )
        }
        this.visibleLiveFormulario = false
      } catch {
        alert('Error')
      }
    },
    salir() {
      this.$router.push('/EstructuraPaso/' + this.ant)
    },
    btnWebServices() {
      this.$router.push('/WebServices/')
    },

    formularioEdit(id_formulario) {
      this.$router.push(
        '/ConfiguraFormulario/' + id_formulario + '/' + this.ant,
      )
    },
    configura(id) {
      this.$router.push('/ListaPaso/' + id)
    },
    async btnSaveAdjunto() {
      try {
        let InstFormData = new FormData()
        InstFormData.append('obj', this.objAdjunto)

        if (this.opcion == 1) {
          await axios
            .post('/Contenido_ingreso_paso/insertAdjunto', {
              ...this.objAdjunto,
            })
            .then(
              () => alert('Los cambios se guardaron de forma correcta'),
              axios
                .get(
                  '/Contenido_ingreso_paso/read?id_ingreso_paso=' +
                    this.id_ingreso_paso,
                )
                .then((response) => (this.paso = response.data)),
            )
        } else {
          alert('llegue aca')
          await axios
            .post('/Contenido_ingreso_paso/updateAdjunto', {
              ...this.objAdjunto,
            })
            .then(
              () => alert('Los cambios se guardaron de forma correcta'),
              axios
                .get(
                  '/Contenido_ingreso_paso/read?id_ingreso_paso=' +
                    this.id_ingreso_paso,
                )
                .then((response) => (this.paso = response.data)),
            )
        }
        this.visibleLiveAdjunto = false
      } catch {
        alert('Error')
      }
    },
    async btnSave() {
      try {
        let InstFormData = new FormData()
        this.objPaso.id = 0
        this.objPaso.id_ingreso_paso = this.id_ingreso_paso
        this.objPaso.orden = 0
        this.objPaso.row = 0
        this.objPaso.col = this.col
        this.objPaso.activo = true
        InstFormData.append('obj', this.objPaso)

        await axios
          .post('/Contenido_ingreso_paso/insert', {
            ...this.objPaso,
          })
          .then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get(
                '/Contenido_ingreso_paso/read?id_ingreso_paso=' +
                  this.id_ingreso_paso,
              )
              .then(
                (response) => (this.paso = response.data),
                (this.visibleLiveRow = false),
              ),
          )
      } catch {
        alert('Error')
      }
    },
    async btnEliminaFila() {
      try {
        await axios
          .post('/Contenido_ingreso_paso/delete?id=' + this.id_fila_eliminar)
          .then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get(
                '/Contenido_ingreso_paso/read?id_ingreso_paso=' +
                  this.id_ingreso_paso,
              )
              .then(
                (response) => (this.paso = response.data),
                (this.visibleEliminaFila = false),
              ),
          )
      } catch {
        alert('Error')
      }
    },
  },
}
</script>
