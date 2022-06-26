<template>
  <div
    class="m-2 border w-auto bg-white shadow-xl rounded"
    :class="componentClasses ? componentClasses : ''"
  >
    <div
      v-if="title"
      class="w-full bg-gray-800 text-white p-2 text-sm rounded-t"
    >
      <span>{{ title }}</span>
    </div>
    <div class="body p-2">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    componentClasses: {
      type: String,
      default: '',
    },
  },
}
</script>
