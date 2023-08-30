<template>
  <div class="flex items-center justify-center">
    <form @submit.prevent="addPersona" >
      <div class="space-y-12 md:min-w-[600px]">

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-100">Añadir invitados</h2>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-full">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-200">Nombre</label>
              <div class="mt-2">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" v-model="nombre"
                  class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>

            <div class="col-span-full">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-200">Email</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" v-model="email"
                  class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>

            <div class="col-span-full">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-200">Aporta</label>
              <div class="mt-2">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" v-model="aporta"
                  class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
        </div>


      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </form>
  </div>
</template>


<script>

import { ref } from 'vue'
import { useStore } from 'vuex'
import {  useRouter } from 'vue-router'

export default {
  name: 'PrintView',


  setup() {
    const  nombre = ref('')
    const  email = ref('')
    const  aporta = ref('')

    const router = useRouter()
    const store = useStore()

    function addPersona() {
      
      if(this.nombre != '' && this.email != '' && this.aporta != ''){
        const persona = {
          nombre: this.nombre,
          email: this.email,
          aporta: this.aporta
        }
        store.dispatch('addPersona', persona)

        console.log(router)
        router.push('/print')

      }

    }


    return {
      nombre,
      email,
      aporta,
      addPersona
    }
  }
}

</script>