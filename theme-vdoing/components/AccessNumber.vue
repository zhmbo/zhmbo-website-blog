<template>
  <span :id="getIdVal(idVal)" class="leancloud-visitors" :data-flag-title="flagTitle">
    <a class="leancloud-visitors-count" :style="numStyle"></a>
  </span>
</template>

<script>
export default {
  props: {
    idVal: String,
    numStyle: Object,
    flagTitle: {
      type: String,
      default: 'Your Article Title'
    }
  },
  mounted() {
    console.log(1111111,this.$page)
    this.window = window;
  },
  methods: {
    getIdVal (path) {
    console.log(22222)
      const base = this.$site.base
      // return base.slice(0, base.length - 1) + path
      return base.slice(0, base.length - 1) + this.$page.path
    }
  }
}
</script>
