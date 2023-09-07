<template>
  <div>
    <Header style="margin-top: 0px"></Header>
  </div>
  <div class="container" style="margin-top: 40px; background-color: white">
    <CForm
      class="row needs-validation"
      style="padding-left: 0; padding-right: 0"
      v-if="Formulario != null"
    >
      <CRow>
        <CCol xs="9">
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
          <h2 style="font-size: 24px; color: gray; margin-bottom: 35px">
            Configuracion de formulario
          </h2>
        </CCol>
        <CCol xs="3">
          <CButton @click="salir()" style="float: right" class="btn btn-success"
            ><span class="fa fa-chevron-left"></span>&nbsp;&nbsp;Salir
          </CButton>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="4">
          <template style="display: block !important">
            <CCardTitle
              style="
                margin-bottom: 10px;
                margin-top: 0px;
                font-size: 18px;
                font-weight: 500;
                color: var(--roofsie-gray);
              "
              >Campos Disponibles</CCardTitle
            >
            <hr style="margin-bottom: 20px" />
            <CListGroup>
              <CListGroupItem
                >Campo Texto
                <CButton
                  style="
                    float: right;
                    width: 35px;
                    height: 35px;
                    font-size: 14px;
                  "
                  color="secondary"
                  variant="outline"
                  @click="aditarAgregarCampo(null, 1, 1)"
                  ><span class="fa fa-chevron-right"></span></CButton
              ></CListGroupItem>
              <CListGroupItem
                >Area Texto<CButton
                  style="
                    float: right;
                    width: 35px;
                    height: 35px;
                    font-size: 14px;
                  "
                  color="secondary"
                  variant="outline"
                  @click="aditarAgregarCampo(null, 2, 1)"
                  ><span class="fa fa-chevron-right"></span></CButton
              ></CListGroupItem>
              <CListGroupItem
                >Campo Numerico<CButton
                  style="
                    float: right;
                    width: 35px;
                    height: 35px;
                    font-size: 14px;
                  "
                  color="secondary"
                  variant="outline"
                  @click="aditarAgregarCampo(null, 3, 1)"
                  ><span class="fa fa-chevron-right"></span></CButton
              ></CListGroupItem>
              <CListGroupItem
                >Campo Mail<CButton
                  style="
                    float: right;
                    width: 35px;
                    height: 35px;
                    font-size: 14px;
                  "
                  color="secondary"
                  variant="outline"
                  @click="aditarAgregarCampo(null, 4, 1)"
                  ><span class="fa fa-chevron-right"></span></CButton
              ></CListGroupItem>
              <CListGroupItem
                >Campo URL<CButton
                  style="
                    float: right;
                    width: 35px;
                    height: 35px;
                    font-size: 14px;
                  "
                  color="secondary"
                  variant="outline"
                  @click="aditarAgregarCampo(null, 5, 1)"
                  ><span class="fa fa-chevron-right"></span></CButton
              ></CListGroupItem>
              <CListGroupItem
                >Campo Fecha<CButton
                  style="
                    float: right;
                    width: 35px;
                    height: 35px;
                    font-size: 14px;
                  "
                  color="secondary"
                  variant="outline"
                  @click="aditarAgregarCampo(null, 6, 1)"
                  ><span class="fa fa-chevron-right"></span></CButton
              ></CListGroupItem>
              <CListGroupItem
                >Combo Seleccion Simple<CButton
                  style="
                    float: right;
                    width: 35px;
                    height: 35px;
                    font-size: 14px;
                  "
                  color="secondary"
                  variant="outline"
                  @click="aditarAgregarCampo(null, 8, 2)"
                  ><span class="fa fa-chevron-right"></span></CButton
              ></CListGroupItem>
              <CListGroupItem
                >Combo Seleccion Multiple<CButton
                  style="
                    float: right;
                    width: 35px;
                    height: 35px;
                    font-size: 14px;
                  "
                  color="secondary"
                  variant="outline"
                  @click="aditarAgregarCampo(null, 9, 2)"
                  ><span class="fa fa-chevron-right"></span></CButton
              ></CListGroupItem>
              <CListGroupItem
                >Combos Enlazados<CButton
                  style="
                    float: right;
                    width: 35px;
                    height: 35px;
                    font-size: 14px;
                  "
                  color="secondary"
                  variant="outline"
                  @click="aditarAgregarCampo(null, 14, 2)"
                  ><span class="fa fa-chevron-right"></span></CButton
              ></CListGroupItem>
              <CListGroupItem
                >Validacion WS<CButton
                  style="
                    float: right;
                    width: 35px;
                    height: 35px;
                    font-size: 14px;
                  "
                  color="secondary"
                  variant="outline"
                  @click="aditarAgregarCampo(null, 16, 2)"
                  ><span class="fa fa-chevron-right"></span></CButton
              ></CListGroupItem>
            </CListGroup>
          </template>
        </CCol>
        <CCol xs="8">
          <template style="display: block !important">
            <CCardTitle
              style="
                margin-bottom: 10px;
                margin-top: 0px;
                font-size: 18px;
                font-weight: 500;
                color: var(--roofsie-gray);
              "
              >{{ Formulario.nombre }}</CCardTitle
            >
            <hr style="margin-bottom: 10px" />
            <CCardText v-if="Formulario != null && Formulario != 'undefined'">
              <CRow
                style="padding-left: 0; padding-bottom: 0; padding-top: 0"
                v-for="(campo, c) in Formulario.lstCampos.filter(
                  (filas, index, self) =>
                    index === self.findIndex((f) => f.row === filas.row),
                )"
                :key="c"
              >
                <CCol xs="12" :lg="campo.col" :xl="campo.col">
                  <draggable v-model="Formulario.lstCampos" transition="100">
                    <template v-slot:item="{ item }">
                      <div
                        class="draggable-item"
                        style="margin-top: 0px"
                        @change="log"
                      >
                        <div
                          v-if="item.id_tipo_campo == 1"
                          style="
                            padding: 15px;
                            margin: 10px;
                            border: solid 1px lightgray;
                            border-radius: 15px;
                          "
                        >
                          <label style="margin-top: 10px">{{
                            item.etiqueta[0].toUpperCase() +
                            item.etiqueta.substring(1).toLowerCase()
                          }}</label>
                          <CButtonGroup
                            style="float: right; margin-bottom: 10px"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="aditarAgregarCampo(item, 0, 1)"
                              ><span class="fa fa-edit"></span
                            ></CButton>
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="iniciaEliminar(item.id)"
                              ><span
                                class="fa fa-remove"
                                style="color: red"
                              ></span
                            ></CButton>
                          </CButtonGroup>
                          <CFormInput
                            :placeholder="
                              item.etiqueta[0].toUpperCase() +
                              item.etiqueta.substring(1).toLowerCase()
                            "
                            disabled
                          ></CFormInput>
                        </div>
                        <div
                          v-if="item.id_tipo_campo == 2"
                          style="
                            padding: 15px;
                            margin: 10px;
                            border: solid 1px lightgray;
                            border-radius: 15px;
                          "
                        >
                          <label style="margin-top: 10px">{{
                            item.etiqueta[0].toUpperCase() +
                            item.etiqueta.substring(1).toLowerCase()
                          }}</label>
                          <CButtonGroup
                            style="float: right; margin-bottom: 10px"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="aditarAgregarCampo(item, 0, 1)"
                              ><span class="fa fa-edit"></span
                            ></CButton>
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="iniciaEliminar(item.id)"
                              ><span
                                class="fa fa-remove"
                                style="color: red"
                              ></span
                            ></CButton>
                          </CButtonGroup>
                          <CFormTextarea
                            clear-icon="mdi-close-circle"
                            :placeholder="
                              item.etiqueta[0].toUpperCase() +
                              item.etiqueta.substring(1).toLowerCase()
                            "
                            disabled
                          ></CFormTextarea>
                        </div>
                        <div
                          v-if="item.id_tipo_campo == 3"
                          style="
                            padding: 15px;
                            margin: 10px;
                            border: solid 1px lightgray;
                            border-radius: 15px;
                          "
                        >
                          <label style="margin-top: 10px">{{
                            item.etiqueta[0].toUpperCase() +
                            item.etiqueta.substring(1).toLowerCase()
                          }}</label>
                          <CButtonGroup
                            style="float: right; margin-bottom: 10px"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="aditarAgregarCampo(item, 0, 1)"
                              ><span class="fa fa-edit"></span
                            ></CButton>
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="iniciaEliminar(item.id)"
                              ><span
                                class="fa fa-remove"
                                style="color: red"
                              ></span
                            ></CButton>
                          </CButtonGroup>
                          <CFormInput
                            :placeholder="
                              item.etiqueta[0].toUpperCase() +
                              item.etiqueta.substring(1).toLowerCase()
                            "
                            type="number"
                            disabled
                          ></CFormInput>
                        </div>
                        <div
                          v-if="item.id_tipo_campo == 4"
                          style="
                            padding: 15px;
                            margin: 10px;
                            border: solid 1px lightgray;
                            border-radius: 15px;
                          "
                        >
                          <label style="margin-top: 10px">{{
                            item.etiqueta[0].toUpperCase() +
                            item.etiqueta.substring(1).toLowerCase()
                          }}</label>
                          <CButtonGroup
                            style="float: right; margin-bottom: 10px"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="aditarAgregarCampo(item, 0, 1)"
                              ><span class="fa fa-edit"></span
                            ></CButton>
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="iniciaEliminar(item.id)"
                              ><span
                                class="fa fa-remove"
                                style="color: red"
                              ></span
                            ></CButton>
                          </CButtonGroup>
                          <CFormInput
                            :id="item.nombre"
                            v-model="item.ingreso_usuario"
                            :placeholder="
                              item.etiqueta[0].toUpperCase() +
                              item.etiqueta.substring(1).toLowerCase()
                            "
                            type="email"
                            required
                          ></CFormInput>
                        </div>
                        <div
                          v-if="item.id_tipo_campo == 5"
                          style="
                            padding: 15px;
                            margin: 10px;
                            border: solid 1px lightgray;
                            border-radius: 15px;
                          "
                        >
                          <label style="margin-top: 10px">{{
                            item.etiqueta[0].toUpperCase() +
                            item.etiqueta.substring(1).toLowerCase()
                          }}</label>
                          <CButtonGroup
                            style="float: right; margin-bottom: 10px"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="aditarAgregarCampo(item, 0, 1)"
                              ><span class="fa fa-edit"></span
                            ></CButton>
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="iniciaEliminar(item.id)"
                              ><span
                                class="fa fa-remove"
                                style="color: red"
                              ></span
                            ></CButton>
                          </CButtonGroup>
                          <CFormInput
                            :id="item.nombre"
                            v-model="item.ingreso_usuario"
                            :placeholder="
                              item.etiqueta[0].toUpperCase() +
                              item.etiqueta.substring(1).toLowerCase()
                            "
                            type="url"
                            required
                          ></CFormInput>
                        </div>
                        <div
                          v-if="item.id_tipo_campo == 6"
                          style="
                            padding: 15px;
                            margin: 10px;
                            border: solid 1px lightgray;
                            border-radius: 15px;
                          "
                        >
                          <label style="margin-top: 10px">{{
                            item.etiqueta[0].toUpperCase() +
                            item.etiqueta.substring(1).toLowerCase()
                          }}</label>
                          <CButtonGroup
                            style="float: right; margin-bottom: 10px"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="aditarAgregarCampo(item, 0, 1)"
                              ><span class="fa fa-edit"></span
                            ></CButton>
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="iniciaEliminar(item.id)"
                              ><span
                                class="fa fa-remove"
                                style="color: red"
                              ></span
                            ></CButton>
                          </CButtonGroup>
                          <CFormInput
                            :id="item.nombre"
                            v-model="item.ingreso_usuario"
                            :placeholder="
                              item.etiqueta[0].toUpperCase() +
                              item.etiqueta.substring(1).toLowerCase()
                            "
                            type="text"
                            onfocus="(this.type='date')"
                            required
                          ></CFormInput>
                        </div>
                        <div
                          v-if="item.id_tipo_campo == 7"
                          style="
                            padding: 15px;
                            margin: 10px;
                            border: solid 1px lightgray;
                            border-radius: 15px;
                          "
                        >
                          <label style="margin-top: 10px">{{
                            item.etiqueta[0].toUpperCase() +
                            item.etiqueta.substring(1).toLowerCase()
                          }}</label>
                          <CButtonGroup
                            style="float: right; margin-bottom: 10px"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="aditarAgregarCampo(item, 0, 1)"
                              ><span class="fa fa-edit"></span
                            ></CButton>
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="iniciaEliminar(item.id)"
                              ><span
                                class="fa fa-remove"
                                style="color: red"
                              ></span
                            ></CButton>
                          </CButtonGroup>
                          <CFormInput
                            :id="item.nombre"
                            v-model="item.ingreso_usuario"
                            :placeholder="
                              item.etiqueta[0].toUpperCase() +
                              item.etiqueta.substring(1).toLowerCase()
                            "
                            type="time"
                            required
                          ></CFormInput>
                        </div>
                        <div
                          v-if="item.id_tipo_campo == 8"
                          style="
                            padding: 15px;
                            margin: 10px;
                            border: solid 1px lightgray;
                            border-radius: 15px;
                          "
                        >
                          <label style="margin-top: 10px">{{
                            item.etiqueta[0].toUpperCase() +
                            item.etiqueta.substring(1).toLowerCase()
                          }}</label>
                          <CButtonGroup
                            style="float: right; margin-bottom: 10px"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="aditarAgregarCampo(item, 0, 2)"
                              ><span class="fa fa-edit"></span
                            ></CButton>
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="iniciaEliminar(item.id)"
                              ><span
                                class="fa fa-remove"
                                style="color: red"
                              ></span
                            ></CButton>
                          </CButtonGroup>
                          <select
                            v-model="item.ingreso_usuario"
                            class="form-control"
                            @change="
                              CambiaValor(
                                $event,
                                JSON.parse(
                                  Formulario.lstCampos[c + 1].contenido_campo,
                                ),
                              )
                            "
                          >
                            <option
                              v-for="opciones in JSON.parse(
                                item.contenido_campo,
                              )"
                              :key="opciones.value"
                              :value="opciones.value + ',' + opciones.text"
                            >
                              {{ opciones.text }}
                            </option>
                          </select>
                        </div>
                        <div
                          v-if="item.id_tipo_campo == 9"
                          style="
                            padding: 15px;
                            margin: 10px;
                            border: solid 1px lightgray;
                            border-radius: 15px;
                            margin-top: 10px;
                          "
                        >
                          <label>{{
                            item.etiqueta[0].toUpperCase() +
                            item.etiqueta.substring(1).toLowerCase()
                          }}</label>
                          <CButtonGroup
                            style="float: right; margin-bottom: 10px"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="aditarAgregarCampo(item, 0, 2)"
                              ><span class="fa fa-edit"></span
                            ></CButton>
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="iniciaEliminar(item.id)"
                              ><span
                                class="fa fa-remove"
                                style="color: red"
                              ></span
                            ></CButton>
                          </CButtonGroup>
                          <VueMultiselect
                            style="margin-top: 20px"
                            label="text"
                            track-by="value"
                            :multiple="true"
                            :close-on-select="true"
                            v-model="item.ingreso_usuario"
                            :id="item.nombre"
                            :options="JSON.parse(item.contenido_campo)"
                            class="form-comtrol"
                          >
                          </VueMultiselect>
                        </div>
                        <div
                          v-if="item.id_tipo_campo == 14"
                          style="
                            padding: 15px;
                            margin: 10px;
                            border: solid 1px lightgray;
                            border-radius: 15px;
                            margin-top: 10px;
                          "
                        >
                          <label style="margin-top: 10px">{{
                            item.etiqueta[0].toUpperCase() +
                            item.etiqueta.substring(1).toLowerCase()
                          }}</label>
                          <CButtonGroup
                            style="float: right; margin-bottom: 10px"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="aditarAgregarCampo(item, 0, 2)"
                              ><span class="fa fa-edit"></span
                            ></CButton>
                            <CButton
                              color="secondary"
                              variant="outline"
                              @click="iniciaEliminar(item.id)"
                              ><span
                                class="fa fa-remove"
                                style="color: red"
                              ></span
                            ></CButton>
                          </CButtonGroup>
                          <select
                            v-model="item.ingreso_usuario"
                            class="form-control"
                          >
                            <option
                              v-for="opciones in contenido_h"
                              :key="opciones.value"
                              :value="opciones.value + ',' + opciones.text"
                            >
                              {{ opciones.text }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </template>
                  </draggable>
                </CCol>
              </CRow>
            </CCardText>
          </template>
        </CCol>
      </CRow>
    </CForm>
  </div>

  <CModal
    backdrop="static"
    size="lg"
    :visible="visibleLiveRow"
    @close="
      () => {
        visibleLiveRow = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Agregar campo de formulario</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CRow>
        <CCol xs="6">
          <CFormInput
            v-model="CampoTextoModel.etiqueta"
            type="text"
            label="Etiqueta"
            placeholder="Texto a mostrar sobre el campo"
          />
        </CCol>
        <CCol xs="6">
          <CFormInput
            v-model="CampoTextoModel.place_holder"
            type="text"
            label="Placeholder"
            placeholder="Texto a mostrar dentro del campo"
          />
        </CCol>
      </CRow>
      <CRow style="margin-top: 25px">
        <CCol xs="6">
          <label>Campo Requerido</label>
          <select class="form-control" v-model="CampoTextoModel.requerido">
            <option :value="true">SI</option>
            <option :value="false">NO</option>
          </select>
        </CCol>
      </CRow>
      <CForm> </CForm>
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
    backdrop="static"
    size="lg"
    :visible="visibleLiveCombos"
    @close="
      () => {
        visibleLiveCombos = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Agregar campo de formulario</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CRow>
        <CCol xs="6">
          <CFormInput
            v-model="CampoTextoModel.etiqueta"
            type="text"
            label="Etiqueta"
            placeholder="Texto a mostrar sobre el campo"
          />
        </CCol>
        <CCol xs="6">
          <label style="margin-bottom: 0.5rem">Campo Requerido</label>
          <select class="form-control" v-model="CampoTextoModel.requerido">
            <option :value="true">SI</option>
            <option :value="false">NO</option>
          </select>
        </CCol>
      </CRow>
      <CRow style="margin-top: 25px">
        <CCol xs="12">
          <label style="margin-bottom: 0.5rem">Origen de Datos</label>
          <select class="form-control" v-model="CampoTextoModel.id_ws">
            <option
              v-for="opciones in lsWebService"
              :key="opciones.id"
              :value="opciones.id"
            >
              {{ opciones.nombre }} ({{ opciones.bodY_JSON }})
            </option>
          </select>
        </CCol>
      </CRow>
      <CRow style="margin-top: 25px">
        <CCol xs="6">
          <CFormInput
            v-model="CampoTextoModel.value"
            type="text"
            label="Clave"
            placeholder="Valor clave"
          />
        </CCol>
        <CCol xs="6">
          <CFormInput
            v-model="CampoTextoModel.text"
            type="text"
            label="Texto"
            placeholder="Texto a mostrar en el combo"
          />
        </CCol>
      </CRow>
      <CForm> </CForm>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleLiveCombos = false
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
    :visible="visibleLiveDelete"
    @close="
      () => {
        visibleLiveDelete = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Eliminar campo de formulario</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CRow>
        <CCol xs="12">
          <h3
            style="
              text-align: center;
              font-size: 20px;
              margin: 25px;
              font-weight: 700;
              color: #e55353;
            "
          >
            ¿Esta seguro de eliminar el campo de formulario?
          </h3>
        </CCol>
      </CRow>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleLiveDelete = false
          }
        "
      >
        Cancelar
      </CButton>
      <CButton color="primary" @click="btnEliminar()">Aceptar</CButton>
    </CModalFooter>
  </CModal>
</template>
<style>
.form-wizard-vue .fw-body-content {
  padding: 10px 20px;
}
.form-wizard-vue .fw-overflow-scroll .fw-card {
  overflow-x: hidden !important;
}
.multiselect__tag {
  background: #4a97c8 !important;
}
.multiselect__option--highlight {
  background: #4a97c8 !important;
  outline: none !important;
  color: white !important;
}
.v-select.v-select--chips:not(
    .v-text-field--single-line
  ).v-text-field--box.v-input--dense
  .v-select__selections,
.v-select.v-select--chips:not(
    .v-text-field--single-line
  ).v-text-field--enclosed.v-input--dense
  .v-select__selections {
  min-height: 40px;
}

.v-alert__content {
  padding-left: 10px;
}
.modal-dialog {
  margin-top: 150px !important;
}
body {
  overflow-y: scroll !important;
}
</style>

<script>
import Header from '../components/Headers/AdminMunicipal.vue'
import VueMultiselect from 'vue-multiselect'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRoute } from 'vue-router'
import Draggable from 'vue3-draggable'
//import CombosEnlazados from '../components/CombosEnlazados.vue'
//import { useStore } from 'vuex'
export default {
  components: { VueMultiselect, Header, Draggable },
  data: () => ({
    visibleLiveCombos: false,
    ws: {
      id: 0,
      id_configura_campo_formulario: 0,
      nombre: '',
      url: '',
      verbo: '',
      tipo: '',
      body_json: '',
    },
    Formulario: null,
    visibleLiveRow: false,
    visibleLiveDelete: false,
    id_eliminar: 0,
    contenido_h: [],
    CampoTextoModel: {
      id: 0,
      id_formulario: 0,
      id_tipo_campo: 0,
      nombre: '',
      etiqueta: '',
      place_holder: '',
      orden: 0,
      activo: true,
      requerido: 0,
      id_ws: 0,
      value: '',
      text: '',
      formato_resultado: '',
      row: 0,
      col: 0,
    },
    opcion: 0,
    nombre_tramite: '',
    nombre_unidad_organizativa: '',
    lsWebService: [],
  }),
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
        .get('/Formulario/getByPk?id=' + id)
        .then((response) => (this.Formulario = response.data))

      axios
        .get('/Ws_web_service/read')
        .then((response) => (this.lsWebService = response.data))
      this.pantalla = window.innerWidth
    } catch (error) {
      alert(error)
    }
  },
  methods: {
    async btnEliminar() {
      let InstFormData = new FormData()
      InstFormData.append('id', this.id_eliminar)
      await axios
        .post('/Campos_x_formulario/delete?id=' + this.id_eliminar)
        .then(
          () => alert('Los cambios se guardaron de forma correcta'),
          axios
            .get('/Formulario/getByPk?id=' + this.id_ingreso_paso)
            .then((response) => (this.Formulario = response.data)),
          (this.visibleLiveDelete = false),
        )
    },
    salir() {
      this.$router.push(this.$router.options.history.state.back)
    },
    btnSave() {
      this.Formulario = null
      let InstFormData = new FormData()
      this.CampoTextoModel.col = 12
      InstFormData.append('obj', this.CampoTextoModel)
      if (this.opcion == 1) {
        axios
          .post('/Campos_x_formulario/insert', {
            ...this.CampoTextoModel,
          })
          .then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get('/Formulario/getByPk?id=' + this.id_ingreso_paso)
              .then((response) => (this.Formulario = response.data)),
            (this.visibleLiveRow = false),
          )
      } else {
        axios
          .post('/Campos_x_formulario/update', {
            ...this.CampoTextoModel,
          })
          .then(
            () => alert('Los cambios se guardaron de forma correcta'),
            axios
              .get('/Formulario/getByPk?id=' + this.id_ingreso_paso)
              .then((response) => (this.Formulario = response.data)),
            (this.visibleLiveRow = false),
          )
      }
      this.visibleLiveRow = false
    },

    iniciaEliminar(id) {
      this.id_eliminar = id
      this.visibleLiveDelete = true
    },
    aditarAgregarCampo(item, id_tipo_campo, tipo) {
      if (tipo == 1) this.visibleLiveRow = true
      else this.visibleLiveCombos = true
      if (item != null) {
        this.opcion = 2
        this.CampoTextoModel.id = item.id
        this.CampoTextoModel.id_formulario = item.id_formulario
        this.CampoTextoModel.id_tipo_campo = item.id_tipo_campo
        this.CampoTextoModel.nombre = item.nombre
        this.CampoTextoModel.orden = item.orden
        this.CampoTextoModel.activo = item.activo
        this.CampoTextoModel.id_ws = item.id_ws
        this.CampoTextoModel.value = item.value
        this.CampoTextoModel.text = item.text
        this.CampoTextoModel.formato_resultado = item.formato_resultado
        this.CampoTextoModel.row = item.row
        this.CampoTextoModel.col = item.col
        this.CampoTextoModel.etiqueta = item.etiqueta
        this.CampoTextoModel.place_holder = item.place_holder
        this.CampoTextoModel.requerido = item.requerido
      } else {
        this.opcion = 1
        this.CampoTextoModel.id = 0
        this.CampoTextoModel.id_formulario = this.Formulario.id
        this.CampoTextoModel.id_tipo_campo = id_tipo_campo
        this.CampoTextoModel.nombre = ''
        this.CampoTextoModel.orden = 0
        this.CampoTextoModel.activo = true
        this.CampoTextoModel.id_ws = 0
        this.CampoTextoModel.value = ''
        this.CampoTextoModel.text = ''
        this.CampoTextoModel.formato_resultado = ''
        this.CampoTextoModel.row = 0
        this.CampoTextoModel.col = 0
        this.CampoTextoModel.etiqueta = ''
        this.CampoTextoModel.place_holder = ''
        this.CampoTextoModel.requerido = true
      }
    },
    CambiaValor(event, cont) {
      const contenido = cont
      const elejido = event.target.value.split(',')[0]
      this.contenido_h = contenido.filter((city) => city.cod_enlaza == elejido)
      this.$store.commit('setOrigen_hijo', this.contenido_h)
    },
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
