<template>
  <div>
    <Header style="margin-top: 0px"></Header>
  </div>
  <div class="container" style="margin-top: 0px; background-color: white">
    <CRow>
      <CCol xs="12">
        <h2 style="color: #505050; font-size: 18px; font-weight: 700">
          {{ nombre_oficina }}
        </h2>
      </CCol>
    </CRow>
    <CRow
      style="
        margin-bottom: 25px;
        background-color: white;
        position: relative;
        padding-bottom: 0;
      "
    >
      <hr style="margin-bottom: 20px" />
      <CCol :sm="3">
        <div
          @click="switchFiltro(1)"
          class="p-3 bg-body rounded border-start border-start-4"
          style="border-left-color: #fad613 !important; margin-bottom: 20px"
          :style="{
            boxShadow:
              filtro == 1 ? '0px 0px 9px 2px rgba(0,0,0,0.75)' : 'none',
          }"
        >
          <div class="text-medium-emphasis">
            <strong>Tramites Nuevos</strong>
          </div>
          <div class="fs-5 fw-semibold" style="padding-top: 10px">
            {{ lsTramites.filter((e) => e.estado == 1).length }}
          </div>
        </div>
      </CCol>
      <CCol :xs="3">
        <div
          @click="switchFiltro(2)"
          class="p-3 bg-body rounded border-start border-start-4"
          style="border-left-color: #1c1b1f !important; margin-bottom: 0"
          :style="{
            boxShadow:
              filtro == 2 ? '0px 0px 9px 2px rgba(0,0,0,0.75)' : 'none',
          }"
        >
          <div class="text-medium-emphasis">Tramites Recibidos</div>
          <div class="fs-5 fw-semibold" style="padding-top: 10px">
            {{ lsTramites.filter((e) => e.estado == 2).length }}
          </div>
        </div>
      </CCol>
      <CCol :xs="3">
        <div
          @click="switchFiltro(3)"
          class="p-3 bg-body rounded border-start border-start-4"
          style="border-left-color: #6f6f6e !important; margin-bottom: 0"
          :style="{
            boxShadow:
              filtro == 3 ? '0px 0px 9px 2px rgba(0,0,0,0.75)' : 'none',
          }"
        >
          <div class="text-medium-emphasis">Tramites Denegados</div>
          <div class="fs-5 fw-semibold" style="padding-top: 10px">
            {{ lsTramites.filter((e) => e.estado == 3).length }}
          </div>
        </div>
      </CCol>
      <CCol :xs="3">
        <div
          @click="switchFiltro(4)"
          class="p-3 bg-body rounded border-start border-start-4"
          style="border-left-color: #f3f0ed !important; margin-bottom: 0"
          :style="{
            boxShadow:
              filtro == 4 ? '0px 0px 9px 2px rgba(0,0,0,0.75)' : 'none',
          }"
        >
          <div class="text-medium-emphasis">Tramites Finalizados</div>
          <div class="fs-5 fw-semibold" style="padding-top: 10px">
            {{ lsTramites.filter((e) => e.estado == 4).length }}
          </div>
        </div>
      </CCol>
      <hr />
    </CRow>
    <CRow
      style="margin-bottom: 45px; background-color: white; position: relative"
    >
      <CCol xs="12">
        <table id="example" class="display nowrap" style="width: 100%">
          <thead>
            <tr style="background-color: #e5e5e5; height: 60px">
              <th style="font-size: 16px; font-weight: 700">Nro. Tramite</th>
              <th></th>
              <th style="font-size: 16px; font-weight: 700">Contribuyente</th>
              <th style="font-size: 16px; font-weight: 700">Oficina</th>
              <th style="font-size: 16px; font-weight: 700">Tramite</th>
              <th style="font-size: 16px; font-weight: 700">Fecha</th>
              <th></th>
            </tr>
          </thead>
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
            <tr v-for="(item, index) in filteredItems" :key="index">
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <p
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  {{ item.anio }} {{ item.id }}
                </p>
              </td>
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
                  :style="{ backgroundImage: 'url(' + item.avatar + ')' }"
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
                <p
                  class="text-medium-emphasis"
                  style="
                    margin-bottom: 0px;
                    padding-top: 10px;
                    color: #505050 !important;
                  "
                >
                  <strong style="color: #505050 !important">{{
                    item.nombre_contribuyente
                  }}</strong>
                </p>
                <p
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  CUIT: {{ item.cuit }}
                </p>
              </td>
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <p
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  {{ item.nombre_oficina }}
                </p>
              </td>
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <p
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  {{ item.nombre_tramite }}
                </p>
              </td>
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <p
                  class="text-medium-emphasis"
                  style="color: #505050 !important"
                >
                  {{ new Date(item.fecha).toLocaleDateString() }}
                </p>
              </td>
              <td
                style="padding-top: 0px; border-top: none; padding-bottom: 0px"
              >
                <button
                  @click="doSomething(item.id)"
                  class="btn"
                  style="border-radius: 50%; width: 45px; height: 45px"
                >
                  <span class="fa fa-cog"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </CCol>
    </CRow>
  </div>
</template>
<style scoped>
@import '../../assets/css/bootstrap.min.css';
.row {
  padding: 15px;
}
@import 'datatables.net-dt';
</style>
<script>
import Header from '../../components/Headers/AdminMunicipal.vue'
import 'datatables.net-responsive'
import avatar1 from '@/assets/images/avatars/1.jpg'
import * as icon from '@coreui/icons'
import axios from 'axios'
//import $ from 'jquery'
import 'datatables.net'
import 'datatables.net-responsive'
import Cookies from 'js-cookie'
export default {
  data: () => ({
    lsTramites: [],
    lsTramitesFiltro: [],
    lsTramitesNuevos: [],
    lsTramitesObservados: [],
    lsTramitesRechazados: [],
    lsTramitesFinalizados: [],
    pantalla: 0,
    filtro: 0,
    foto: '',
    nombre_oficina: '',
  }),
  components: {
    Header,
  },
  computed: {
    filteredItems() {
      return this.lsTramites.filter((item) => {
        return item.estado == this.filtro
      })
    },
    counts() {
      return this.lsTramites.reduce((accumulator, currentValue) => {
        const existingItem = accumulator.find(
          (item) => item.estado === currentValue.estado,
        )
        if (existingItem) {
          existingItem.count++
        } else {
          accumulator.push({ ...currentValue, count: 1 })
        }
        return accumulator
      }, [])
    },
  },
  mounted() {
    try {
      if (
        Cookies.get('cod_usuario') == 'undefined' &&
        Cookies.get('cod_oficina') == 'undefined'
      ) {
        this.$router.push('/')
      }
      if (Cookies.get('administrador') == 'false') {
        axios
          .get(
            '/Tramites/readOficinas?id_oficina=' + Cookies.get('cod_oficina'),
          )
          .then((response) => (this.lsTramites = response.data))
      } else {
        axios
          .get('/Tramites/readAdministrador')
          .then(
            (response) => (this.lsTramites = response.data),
            (this.filtro = 1),
          )
      }
      this.pantalla = window.innerWidth
      this.nombre_oficina = Cookies.get('nombre_oficina')
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
    switchFiltro(estado) {
      this.filtro = estado
    },
    doSomething(id) {
      Cookies.set('id_tramites', id),
        this.$router.push('/VerificaTramite/' + id)
    },
  },
}
</script>
