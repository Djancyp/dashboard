<template>
  <div class="breadcrumb text-xs text-gray-600">
    <ol class="flex">
      <li
        v-for="(crumb, index) in breadcrumbList"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
      >
        <span v-if="index > 0" class="text-gray-700">&nbsp;></span>
        <nuxt-link property="item" typeof="WebPage" :to="crumb.path">
          <span property="name">{{ crumb.title }}</span>
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbList: [],
    }
  },
  watch: {
    $route() {
      this.updateList()
    },
  },
  mounted() {
    this.updateList()
  },

  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link)
        this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList() {
      const params = this.$route.fullPath.substring(1).split('/')
      const crumbs = []
      let path = ''
      params.forEach((param) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: param === '' ? 'Dahsboard' : param,
            ...match,
          })
        } else {
          crumbs.push({
            title: param,
            name: '404 page',
            fullPath: path,
            path,
          })
        }
      })

      this.breadcrumbList = crumbs
    },
  },
}
</script>
