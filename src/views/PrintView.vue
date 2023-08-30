<template>
  <div class="flex items-center justify-center">
    <div class="mt-6 border-t border-gray-100  md:min-w-[600px]">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0" v-for="(persona, index) in personas" :key="persona.email">
          <dt class="text-sm font-medium  sm:col-span-1  text-gray-200">{{ persona.nombre }}</dt>
          <dd class="mt-1 text-sm  text-gray-400 sm:col-span-2 sm:mt-0">{{ persona.email }}</dd>
          <dd class="mt-1 text-sm  text-gray-400 sm:col-span-1 sm:mt-0">
            <RouterLink :to="'/detail/'+ index" class="rounded-md bg-lime-600 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Ver
            </RouterLink>
            
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>


<script>

import { computed } from 'vue'
import { useStore } from 'vuex'


export default {

  setup() {
    const store = useStore()
    const personas = computed(() => {
      console.log(store.getters.getPersonas)
      return store.getters.getPersonas
    })

    return {
      personas
    }

  }

}
</script>
