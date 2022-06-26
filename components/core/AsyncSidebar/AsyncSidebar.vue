<template>
  <transition
    :name="
      direction === 'right'
        ? 'slide-left'
        : direction === 'left'
        ? 'slide-right'
        : null
    "
  >
    <div
      v-if="isOpen"
      ref="sidebar"
      class="z-30 mw-100 relative cl-accent bg-gray-50"
      :class="
        direction === 'left'
          ? 'left-sidebar'
          : direction === 'right'
          ? 'right-sidebar'
          : null
      "
      data-testid="sidebar"
    >
      <component
        :is="component"
        @close="$emit('close')"
        @reload="getComponent"
      />
    </div>
  </transition>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import LoadingSpinner from './LoadingSpinner.vue'
import LoadingError from './LoadingError.vue'

export default {
  props: {
    asyncComponent: {
      type: Function,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    /** "right" or "left"  */
    direction: {
      type: String,
      default: 'right',
    },
  },
  data() {
    return {
      component: null,
    }
  },
  watch: {
    isOpen(state) {
      if (state) {
        this.$nextTick(() => {
          disableBodyScroll(this.$refs.sidebar)
        })
      } else {
        clearAllBodyScrollLocks()
      }
    },
  },
  created() {
    this.getComponent()
  },
  methods: {
    getComponent() {
      this.component = () => ({
        component: this.asyncComponent(),
        loading: LoadingSpinner,
        error: LoadingError,
        timeout: 3000,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/css/animations/transitions';

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.25s;
}

.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(100%);
}

.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(-100%);
}

.right-sidebar {
  padding-top: 56px;
  top: 0;
  right: 0;
  height: 100%;
  width: 800px;
  min-width: 320px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.left-sidebar {
  height: 100%;
  width: 300px;
  top: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 767px) {
    width: 100vh;
  }
}

.close {
  i {
    opacity: 0.6;
  }
  &:hover,
  &:focus {
    i {
      opacity: 1;
    }
  }
}
</style>
