import { createStore } from 'vuex'

export const store = createStore({
  state: {
    personas: [{ nombre: 'Juan Orrega', email: 'juan@gmail.com', aporta: 'Papas Fritas' }]
  },
  getters: {
    getPersonas: (state) => {
      return state.personas
    },
    getPersona: (state) => (index) => {
      return state.personas[index]
    }
  },
  mutations: {
    addPersona(state, persona) {
      state.personas.push(persona)
    }
  },
  actions: {
    addPersona(context, persona) {
      context.commit('addPersona', persona)
    }
  }
})
