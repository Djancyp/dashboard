<template>
  <button :class="buttonClass ? buttonClass : ''">
    <font-awesome-icon v-if="icon" :icon="['fa', icon]" class="pr-4" />
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    buttonClass: {
      type: String,
      default: 'border rounded px-4 py-2',
    },
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>
