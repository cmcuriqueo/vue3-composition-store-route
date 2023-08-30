<template>
    <div class="flex items-center justify-center">
        <div class="mt-6 border-t border-gray-100  md:min-w-[600px]">
            <dl  v-if="persona != null" class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium sm:col-span-1 text-gray-200">{{ persona.nombre }}</dt>
                    <dt class="text-sm font-medium sm:col-span-1 text-gray-200">{{ persona.email }}</dt>
                    <dt class="text-sm font-medium sm:col-span-1 text-gray-200">{{ persona.aporta }}</dt>
                </div>
            </dl>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const store = useStore()
        const route = useRoute()

        const index = route.params.id

        console.log(route)
        const persona = computed(() => {
            return store.getters.getPersona(index)
        })
        
        console.log(persona)
        return {
            persona
        }
    }
}
</script>

  