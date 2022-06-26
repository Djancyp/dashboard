<template>
  <button
    v-if="type === 'next'"
    class="inline-flex w-full p-4 content-center justify-items-center"
    type="button"
    :aria-label="'Show subcategories'"
    data-testid="categoryButton"
    @click.stop="next()"
  >
    <font-awesome-icon :icon="['fa', icon]" class="text-white px-2" />

    <span class="text-gray-400 hover:text-white">{{ name }}</span>
    <i class="material-icons ml-auto text-white">keyboard_arrow_right</i>
  </button>
  <button
    v-else
    class="inline-flex p-4 bg-gray-600 w-full text-white h-16 items-center"
    type="button"
    :aria-label="'Back'"
    @click.stop="back()"
  >
    <i class="material-icons text-white">keyboard_arrow_left</i>
    {{ name }}
  </button>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SubBtn',
  props: {
    id: {
      type: null,
      default: '',
    },
    type: {
      type: String,
      default: 'next',
    },
    name: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapState({
      submenu: (state) => state.ui.submenu,
    }),
  },
  methods: {
    next() {
      this.$store.commit('ui/setSubmenu', {
        id: this.id,
      })
    },
    back() {
      this.$store.commit('ui/setSubmenuminus', {})
    },
  },
}
</script>
