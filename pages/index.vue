<template>
  <div class="page">
    <container class="mb-10" :title="'Form Elements'"> </container>
    <container class="mb-10" :title="'Buttons'">
      <Button
        :button-class="'bg-gray-700 text-white  rounded hover:bg-gray-600 px-5 py-3'"
      >
        <span class="">Buttons</span>
      </Button>
      <Button
        :button-class="'bg-red-600 text-white  rounded-lg hover:bg-red-700 px-5 py-3'"
      >
        <span>Buttons</span>
      </Button>
      <Button
        :icon="'cart-arrow-down'"
        :button-class="'bg-blue-700 text-white rounded-xl hover:bg-blue-600 px-5 py-3'"
      >
        <span>Buttons</span>
      </Button>
    </container>
    <div class="grid grid-cols-1 gap-1 md:grid-cols-1">
      <container :title="'Chars'"><Charts /> </container>
    </div>
  </div>
</template>

<script>
import container from '~/components/core/container/container.vue'
import Button from '~/components/core/form-elements/button.vue'
import Charts from '~/components/template/charts/charts.vue'
export default {
  name: 'IndexPage',
  components: {
    container,
    Button,
    Charts,
  },
}
</script>
