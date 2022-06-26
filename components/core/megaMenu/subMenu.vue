<template>
  <div class="sidebar-submenu absolute w-full h-full top-0 lef-0 z-0">
    <ul v-if="categoryLinks" class="w-100 p0 bg-gray-800" :style="styles">
      <li v-for="link in categoryLinks" :key="link.id" class="hover:bg-gray-700">
        <div v-if="isCurrentMenuShowed" class="subcategory-item">
          <SubBtn
            v-if="link.children"
            :id="link.id"
            :name="link.displayName"
            :icon="link.icon"
          />
          <nuxt-link
            v-else
            class="block w-full p-4 text-gray-400 hover:text-white"
            :to="link.path"
          >
            <font-awesome-icon
              :icon="['fa', link.icon]"
              class="text-white px-2"
            />

            {{ link.displayName }}
          </nuxt-link>
        </div>
        <sub-category
          v-if="link.children"
          :id="link.id"
          :category-links="link.children"
          :parent-slug="link.path"
          :parent-path="link.path"
        />
      </li>
      <li v-if="parentSlug">
        <nuxt-link
          class="block w-full  text-gray-400 hover:text-white p-4"
          :to="parentSlug"
          data-testid="categoryLink"
        >
          <span> {{ 'View all' }} </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import SubBtn from './subButton.vue'

export default {
  name: 'SubCategory',
  components: {
    SubBtn,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    categoryLinks: {
      type: null,
      required: false,
      default: false,
    },
    parentSlug: {
      type: String,
      required: false,
      default: '',
    },
    parentPath: {
      type: String,
      required: false,
      default: '',
    },
    myAccountLinks: {
      type: null,
      required: false,
      default: false,
    },
  },
  computed: {
    ...mapState({
      submenu: (state) => state.ui.submenu,
      path: (state) => state.ui.submenu.path,
    }),
    getSubmenu() {
      return this.submenu
    },
    styles() {
      const pos = this.submenu.path.indexOf(this.id)
      return pos !== -1
        ? {
            zIndex: pos + 1,
          }
        : false
    },
    isCurrentMenuShowed() {
      return (
        this.getSubmenu &&
        this.getSubmenu.depth &&
        this.getSubmenu.path[this.getSubmenu.depth - 1] === this.id
      )
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout', {})
      this.$router.push(this.localizedRoute('/'))
      this.$store.commit('ui/setSubmenu', { depth: false })
    },
  },
}
</script>

<style scoped>
.sidebar-submenu {
  transform: translateX(-100%);
}
/**/
.subcategory-item {
  display: flex;
  width: 100%;
}
</style>
