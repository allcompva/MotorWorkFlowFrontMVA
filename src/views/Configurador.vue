<template>
  <HeaderVecino style="margin-top: 0px"></HeaderVecino>
  <div class="container" v-if="tramite != null">
    <div class="row" style="margin-bottom: 20px">
      <div class="col-xs-12">
        <h2 style="font-size: 20px">{{ tramite.nombre }}</h2>
      </div>
    </div>
    <div class="row" v-if="tramite.lstPasos != null">
      <div
        class="col-md-3"
        style="box-shadow: 0px 3px 5px #aaa; height: 600px"
        v-for="(paso, index) in tramite.lstPasos"
        :key="index"
      >
        <p style="margin-top: 15px; font-weight: 600; margin-bottom: 0">
          {{ paso.nombre }}
          <button
            style="
              float: right;
              border: none;
              background-color: transparent;
              color: #b3b2b2;
            "
          >
            <span class="fa fa-edit"></span>
          </button>
        </p>
        <p v-if="paso.en_usuario" style="margin-top: 0px; font-weight: 400">
          Vecino
        </p>
        <p v-else style="margin-top: 0px; font-weight: 400">
          {{
            paso.nombre_unidad_organizativa[0].toUpperCase() +
            paso.nombre_unidad_organizativa.substring(1).toLowerCase()
          }}
        </p>
        <draggable v-model="paso.lstIngresos" transition="100">
          <template v-slot:item="{ item }">
            <div class="draggable-item" style="margin-top: 20px">
              <div class="container">
                <div class="row">
                  <p style="margin-top: 10px; font-weight: 600">
                    {{ item.titulo }}
                    <button
                      style="
                        float: right;
                        border: none;
                        background-color: transparent;
                        color: #b3b2b2;
                      "
                    >
                      <span class="fa fa-edit"></span>
                    </button>
                  </p>
                </div>
                <template
                  v-for="item2 in item.lstContenido.filter(
                    (filas, index, self) =>
                      index === self.findIndex((f) => f.row === filas.row),
                  )"
                  :key="item2.id"
                >
                  <div
                    class="row"
                    style="
                      height: 100px;
                      margin-bottom: 10px;
                      border-radius: 5px;
                      border: solid 1px lightgray;
                    "
                  >
                    <div
                      style="
                        height: 100px;
                        border: 1px solid #dee2e6;
                        margin-bottom: 10px;
                        border-radius: 5px;
                        text-align: center;
                      "
                      class="col"
                      xs="12"
                      :lg="itemCol.col"
                      :xl="itemCol.col"
                      v-for="(itemCol, ic) in item.lstContenido.filter(
                        (persona) => persona.row === item2.row,
                      )"
                      :key="ic"
                    >
                      <div v-if="itemCol.id_ddjj != 0">
                        <img
                          src="../assets/DDJJ.png"
                          style="width: 60px; margin-top: 8px; display: inline"
                        />
                        <P style="font-weight: 700">DDJJ</P>
                      </div>
                      <div v-if="itemCol.id_adjunto != 0">
                        <img
                          src="../assets/Adjunto.png"
                          style="width: 60px; margin-top: 8px; display: inline"
                        />
                        <P style="font-weight: 700">Adjunto</P>
                      </div>
                      <div v-if="itemCol.id_formulario != 0">
                        <img
                          src="../assets/Formulario.png"
                          style="width: 60px; margin-top: 8px; display: inline"
                        />
                        <P style="font-weight: 700">Form</P>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
<style>
.draggable-item {
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.87);
  box-shadow: 0px 2px 5px #aaa;
  margin: 1%;
  padding: 1%;
  min-height: 100px;
}
</style>
<script>
import { useRoute } from 'vue-router'
import axios from 'axios'
//import Cookies from 'js-cookie'
import Draggable from 'vue3-draggable'
import HeaderVecino from '@/components/Headers/HeaderVecino.vue'

export default {
  inject: ['mq'],
  data: () => ({
    items1: Array(5)
      .fill({})
      .map((_, index) => ({ title: `Item ${index + 1}` })),
    items2: [],
    tramite: null,
  }),
  setup() {},
  components: {
    Draggable,
    HeaderVecino,
  },
  async mounted() {
    const route = useRoute()
    const id = route.params.id
    this.tramite = (await axios.get('/Tramite/getByPk?ID=' + id)).data
  },
  methods: {},
}
</script>
