<template lang="pug">
q-footer.app-footer
  .app-footer--logo LOGO
  .app-footer--description
    div Adverse events should be reported. Reporting forms and information can be found at
      span.text-black  [insert local reporting information details].
    div Adverse events should also be reported to Allergan Aesthetics
      span.text-black  [insert local reporting information details].
  .app-footer--logo LOGO
</template>
<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="sass" scoped>
.app-footer
  border-top: #707070 solid 2px
  padding: 1.01vh 2.64vh
  display: flex
  justify-content: space-between
  background-color: #5c3558
  .app-footer--logo
    display: flex
    justify-content: center
    align-items: center
    background-color: #A8A6A6
    color: white
    font: normal normal normal 1.63vh/1.89vh Arial
  .app-footer--description
    color: white
    text-align: center
    font: normal normal normal 1.17vh/1.17vh Arial
    letter-spacing: 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
</style>
