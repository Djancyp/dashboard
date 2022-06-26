<template>
  <div class="w-full h-full bg-gray-800">
    <div v-if="submenu.depth">
      <SubBtn type="back" :name="'Back'" />
    </div>

    <ul :style="mainListStyles" class="text-xs">
      <div class="bg-gray-100 flex items-center p-4 h-16 text-md">
        <span class="px-6 m-0 text-gray-800 text-lg">Forte</span>
        <font-awesome-icon
          :icon="['fa', 'arrow-left-long']"
          class="ml-auto text-gray-800 hover:text-gray-600 pointer"
          @click="sidebarToggle"
        />
      </div>

      <li v-for="menu in megaMenu" :key="menu.id" class="hover:bg-gray-700">
        <SubBtn
          v-if="menu.children"
          :id="menu.id"
          class="brdr-none"
          :name="menu.displayName"
          :icon="menu.icon"
        />

        <nuxt-link
          v-else
          :to="menu.path"
          class="block w-full p-4 text-gray-400 hover:text-white"
        >
          <font-awesome-icon
            :icon="['fa', menu.icon]"
            class="text-white px-2"
          />
          {{ menu.displayName }}
        </nuxt-link>
        <SubCategory
          :id="menu.id"
          :category-links="menu.children"
          :parent-slug="menu.path"
          :parent-path="menu.path"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import megaMenu from '../../../data/menu.js'
import SubBtn from './subButton.vue'
import SubCategory from './subMenu.vue'

export default {
  components: {
    SubBtn,
    SubCategory,
  },

  data() {
    return {
      megaMenu,
    }
  },
  computed: {
    mainListStyles() {
      return this.submenu.depth
        ? `transform: translateX(${this.submenu.depth * 100}%)`
        : false
    },
    ...mapState({
      submenu: (state) => state.ui.submenu,
    }),
  },
  methods: {
    sidebarToggle() {
      this.$store.commit('ui/setSidebar', !this.$store.state.ui.sidebar)
    },
  },
}
</script>
