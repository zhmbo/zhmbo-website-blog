<template>
  <div id="footer-wrapper">
    <div class="footer">
      <div class="icons" v-if="social && social.icons">
        <a
          :href="item.link"
          :title="item.title"
          :class="['iconfont', item.iconClass]"
          v-for="(item, index) in social.icons"
          :key="index"
          target="_blank"
        ></a>
      </div>

      <template v-if="footer">
        Copyright © {{ footer.createYear }}<span v-if="footer.createYear != new Date().getFullYear()">-{{ new Date().getFullYear()}}</span>
        <span v-html="footer.copyrightInfo"></span>
      </template>
      <!--Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->
      · Powered by the 
      <a
        href="https://github.com/xugaoyi/vuepress-theme-vdoing"
        target="_blank"
        title="本站主题"
        >Vdoing theme</a
      > for Vuepress ·
      <i class="iconfont jumbo-eye"></i>
      <AccessNumber idVal="/blog/" flagTitle="首页"/>
      <Comments :isShowComments="false"/>
    </div>
    <div id="jsi-flying-fish-container" class="container"></div>
  </div>
</template>

<script>
export default {
  computed: {
    social() {
      return this.$themeConfig.social;
    },
    footer() {
      return this.$themeConfig.footer;
    },
  },
  mounted () {
    // RENDERER.init();
  }
};
</script>

<style lang="stylus">
#footer-wrapper
  position: relative;
  width: 100%;
  height: 100%;
  .container
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer
  position: relative;
  z-index: 1;
  padding 5.5rem 0rem 1.5rem
  text-align center
  color #666
  box-sizing border-box
  font-size 0.85rem
  transition all 0.2s ease
  .icons
    margin-bottom 12px
    .iconfont
      padding 0 10px
      font-size 1.3rem
  a
    color inherit
    &:hover
      color $accentColor
  i 
    font-size .5rem
    
@media (min-width ($MQMobile + 1px))
  .sidebar-open .footer
    width auto
    padding-left ($sidebarWidth + 1.5rem)
@media (min-width 1520px)
  .have-rightmenu .footer
    padding-right ($rightMenuWidth + 1.5rem)
.no-sidebar .footer
  width auto
  padding-left 1.5rem
@media (max-width: $MQMobile)
  .footer i
    font-size .8rem
@media only screen and (max-width: 767px){
  #sidebar_search_box input[type=text]{width:calc(100% - 24px)}
}

</style>
