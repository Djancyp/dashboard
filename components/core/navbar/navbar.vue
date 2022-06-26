<template>
  <div>
    <div
      class="w-full bg-gray-100 shadow-lg z-20 absolute top-0 left-0 text-gray-600 p-4 flex h-16 text-sm items-center"
    >
      <transition>
        <font-awesome-icon
          v-show="!isMenuOpen"
          :icon="['fa', 'bars']"
          class="text-gray-600 hover:text-gray-800 pointer mx-2"
          @click="sidebarToggle"
        />
      </transition>
      <div class="right-menu ml-auto flex items-center">
        <span><dropdown :icon="'inbox'" :dropdown="inboxMenu" /></span>
        <span
          ><dropdown class="ml-4" :icon="'bell'" :notifications="9" :min-width="200" :dropdown="notifications"
        /></span>
        <span class="ml-4"><dropdown :icon="'user'" /></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import dropdown from '~/components/core/dropdown/dropdown.vue'
export default {
  components: {
    dropdown,
  },
  data() {
    return {
      inboxMenu: [
        {
          displayName: 'inbox',
          icon: 'inbox',
          link: '/inbox',
        },
      ],
      notifications: [
        {
          displayName: 'New message from max',
          link: '/message/id',
        },
        {
          displayName: 'New message from Djan',
          link: '/message/id',
        },

      ],
    }
  },
  computed: {
    ...mapState({
      isMenuOpen: (state) => state.ui.sidebar,
    }),
  },
  methods: {
    sidebarToggle() {
      this.$store.commit('ui/setSidebar', !this.$store.state.ui.sidebar)
    },
  },
}
</script>
