<template>
  <div class="h-full flex flex-row bg-white">
    <async-sidebar
      :async-component="SidebarMenu"
      :is-open="isOpen"
      direction="left"
      @close="$store.commit('ui/setSidebar', false)"
    />
    <div class="body w-full overflow-y-scroll overflow-hidden">
      <Navbar />
      <div class="mt-16 h-full bg-gray-100">
        <breadcrumbs class="bg-gray-100 p-1 relative z-10" />
        <transition name="fade">
          <Nuxt class="h-full" />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import AsyncSidebar from '~/components/core/AsyncSidebar/AsyncSidebar.vue'
import Navbar from '~/components/core/navbar/navbar.vue'
import breadcrumbs from '~/components/core/breadcrumbs/breadcrumbs.vue'

const SidebarMenu = () =>
  import(
    /* webpackPreload: true */ /* webpackChunkName: "sidebar-menu" */ '../components/core/megaMenu/megaMenu.vue'
  )

export default {
  components: {
    AsyncSidebar,
    Navbar,
    breadcrumbs,
  },
  data() {
    return {
      SidebarMenu,
      loading: true,
    }
  },
  computed: mapState({
    isOpen: (state) => state.ui.sidebar,
    openMyAccount: (state) => state.ui.openMyAccount,
    overlayActive: (state) => state.ui.overlay,
  }),
}
</script>
