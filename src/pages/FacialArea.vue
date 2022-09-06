<template lang="pug">
.facial-area
  .facial-area--back-btn(@click="$router.push('/')")
    div GO BACK
  .facial-area--title
    div PUBLICTUM TEM INC
    div FACIAL AREA
  .facial-area--description
    div Catabus, supericie aut vehebat quemque nondit habes ete pra nordius cientre popteri
  .facial-area--wrapper
    .facial-area--top
      .facial-area--upper-face(@click="$router.push('/upper-face')")
        div Upper Face
      .facial-area--mid-face(@click="$router.push('/lower-face')")
        div Lower Face
    .facial-area--bottom
      .facial-area--lower-face(@click="$router.push('/mid-face')")
        div Mid-Face
      .facial-area--lips(@click="$router.push('/lips')")
        div Lips
</template>

<script>
export default {
  name: "FacialArea"
}
</script>

<style lang="sass" scoped>
.facial-area
  padding: 10vh
  background: #3c1b3a
  .facial-area--back-btn
    display: flex
    align-items: center
    justify-content: center
    top: 6.77vh
    width: 15.36vh
    height: 3.65vh
    color: white
    background: #3c1b3a
    border: 0.2vh solid #724270
  .facial-area--title
    font: normal normal bold 4.56vh/4.56vh Arial
    color: white
    padding-top: 0.7vh
  .facial-area--description
    width: 38.28vh
    height: 8.72vh
    font: normal normal normal 2.60vh/2.93vh Arial
    color: white
    padding-top: 1.5vh
  .facial-area--wrapper
    padding-top: 38vh
    display: flex
    justify-content: center
    grid-gap: 4.88vh
    .facial-area--top, .facial-area--bottom
      div
        width: 35.81vh
        height: 6.18vh
        background: #542c52
        border: 0.2vh solid #724270
        font: normal normal normal 2.21vh/2.54vh Arial
        letter-spacing: 0px
        color: #FFF
        display: flex
        justify-content: center
        align-items: center
        margin: 2vh 0
</style>
