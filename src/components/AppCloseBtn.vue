<template lang="pug">
q-btn.app-close-btn(@click="$emit('clicked')" flat dense round icon="close")
</template>

<script>
export default {
  name: "AppCloseBtn",
  props: { left: String, top: String, right: String, bottom: String }
}

</script>
<style lang="sass" scoped>
.app-close-btn
  height: 3.97vh
  width: 3.97vh
  color: #707070
  position: absolute
  right: v-bind(right)
  top: v-bind(top)
  z-index: 2
  border: #707070 2px solid
  background-color: white
</style>