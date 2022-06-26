<template>
  <div class="flex items-center relative z-30 pointer" @click="toggleDropdown">
    <img
      v-if="img"
      :src="img"
      alt="user"
      :style="`width:${imgWidth}px`"
      class="rounded-full shadow-md"
    />
    <span v-if="displayName" class="ml-2">{{ displayName }}</span>
    <div class="relative flex">
      <font-awesome-icon
        v-if="icon"
        :icon="['fa', icon]"
        class="ml-2 rounded-full p-2 text-gray-800 shadow-md hover:text-gray-500"
      />
      <span
        v-if="icon && notifications"
        class="rounded-full bg-red-600 w-3 h-3 text-white text-xs p-2 shadow-md absolute flex justify-center items-center"
        style="top: -0.4em; right: -0.4em"
        >{{ notifications }}</span
      >
    </div>
    <transition name="fade">
      <div
        v-show="isActive"
        class="dropdown-list absolute z-30 border rounded-md shadow-md bg-white text-black mt-2 top-full right-0"
        :style="{ minWidth: minWidth + 'px' }"
      >
        <ul class="text-xs shadow-md">
          <li
            v-for="(d,i) in dropdown"
            :key="i"
            class="flex hover:bg-gray-200"
          >
            <nuxt-link v-if="d.link" :to="d.link" class="p-3 w-full">
              <font-awesome-icon
                v-if="d.icon"
                :icon="['fa', d.icon]"
                class="mr-2"
              />

              {{ d.displayName }}
            </nuxt-link>
            <a v-if="d.action" class="p-3 w-full" @click="d.action">
              <font-awesome-icon
                v-if="d.icon"
                :icon="['fa', d.icon]"
                class="mr-2"
              />

              {{ d.displayName }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    displayName: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    imgWidth: {
      type: Number,
      default: 30,
    },
    notifications: {
      type: Number,
      default: 0,
    },
    minWidth: {
      type: Number,
      default: 150,
    },
    dropdown: {
      type: Array,
      default: () => {
        return [
          {
            displayName: 'Settings',
            link: '/settings',
            icon: 'gear',
          },
          {
            displayName: 'Logout',
            icon: 'arrow-right-from-bracket',
            action: () => {
              alert('Logout')
            },
          },
        ]
      },
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.isActive = !this.isActive
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~/css/animations/transitions';
</style>
