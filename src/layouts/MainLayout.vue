<template lang="pug">
q-layout
  app-header
  q-page-container
    q-page
      router-view(v-slot="{ Component }")
        transition(name="fade")
          component(:is="Component")
  app-footer
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
export default {
  name: "MainLayout",
  components: { AppFooter, AppHeader }
};
</script>

<style lang="sass">
body
  margin: 0
  width: 100vw
  height: 100vh
.q-dialog__inner
  backdrop-filter: blur(3px)
.q-page-container
  padding: 0 !important
.q-page
  z-index: 1
  background: #EFEAEA
  min-height: calc(100vh - 14.2vh) !important
.fade-enter-active, .fade-enter-to
  transition: opacity 0.33s
.fade-enter-active, .fade-enter-from, .fade-leave-from
  opacity: 0
.fade-enter-to
  opacity: 1
</style>
