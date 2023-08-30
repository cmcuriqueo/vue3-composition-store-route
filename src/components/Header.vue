<template>
  <header class="bg-gray-800 text-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </RouterLink>
      </div>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
        <RouterLink
          v-if="route.name != 'print'"
          to="/print"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Invitados
        </RouterLink>

        <RouterLink
          v-if="route.name != 'home'"
          to="/"
          class="rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Invitados Formulario
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
<script>
import { useRoute } from 'vue-router'
export default {
  name: 'HeaderComponent',
  setup() {
    const route = useRoute()
    return {
      route
    }
  }
}
</script>
