import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      cod_usuario: 0,
      nombre: '',
      legajo: 0,
      administrador: false,
      nombre_completo: '',
      passwd: '',
      email: '',
      baja: false,
      cod_oficina: 0,
      nombre_oficina: '',
      cuit: '',
      nombre_tramite: '',
      nombre_unidad_organizativa: '',
    }
  },
  mutations: {
    setNombreTramite(state, nombre_tramite) {
      state.nombre_tramite = nombre_tramite
    },
    setNombreUnidadOrganizativa(state, nombre_unidad_organizativa) {
      state.nombre_unidad_organizativa = nombre_unidad_organizativa
    },
    setCod_usuario(state, cod_usuario) {
      state.cod_usuario = cod_usuario
    },
    setNombre(state, nombre) {
      state.nombre = nombre
    },
    setAdministrador(state, administrador) {
      state.administrador = administrador
    },
    setNombre_completo(state, nombre_completo) {
      state.nombre_completo = nombre_completo
    },
    setCod_oficina(state, cod_oficina) {
      state.cod_oficina = cod_oficina
    },
    setNombre_oficina(state, nombre_oficina) {
      state.nombre_oficina = nombre_oficina
    },
  },
  getters: {
    getNombreTramite(state) {
      return state.nombre_tramite
    },
    getNombreUnidadOrganizativa(state) {
      return state.nombre_unidad_organizativa
    },
    getCod_usuario(state) {
      return state.cod_usuario
    },
    getNombre(state) {
      return state.nombre
    },
    getAdministrador(state) {
      return state.administrador
    },
    getNombre_completo(state) {
      return state.nombre_completo
    },
    getCod_oficina(state) {
      return state.cod_oficina
    },
    getNombre_oficina(state) {
      return state.nombre_oficina
    },
  },
  actions: {},
  modules: {},
})
