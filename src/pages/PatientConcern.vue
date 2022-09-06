<template lang="pug">
.patient-concern
  .patient-concern--back-btn(@click="$router.push('/')")
    div GO BACK
  .patient-concern--title
    div PUBLICTUM TEM INC
    div PATIENT CONCERN
  .patient-concern--description
    div Catabus, supericie aut vehebat quemque nondit habes ete pra nordius cientre popteri
  .patient-concern--wrapper
    .patient-concern--top
      .patient-concern--upper-face(@click="$router.push('/facial-lift')")
        div Facial Lift
      .patient-concern--mid-face(@click="$router.push('/reduce-signs-of-aging')")
        div Reduce Signs of Aging
    .patient-concern--bottom
      .patient-concern--lower-face(@click="$router.push('/plump-lips')")
        div Plump Lips
      .patient-concern--lips(@click="$router.push('/improve-specific-facial-features')")
        div Improve Specific Facial Features
</template>

<script>
export default {
  name: "PatientConcern"
}
</script>

<style lang="sass" scoped>
.patient-concern
  padding: 6.77vh 8.33vh 0
  background: #3c1b3a
  .patient-concern--back-btn
    display: flex
    align-items: center
    justify-content: center
    top: 6.77vh
    width: 15.36vh
    height: 3.65vh
    color: white
    background: #542c52
    border: 0.2vh solid #724270
  .patient-concern--title
    font: normal normal bold 4.56vh/4.56vh Arial
    color: white
    padding-top: 0.7vh
  .patient-concern--description
    width: 38.28vh
    height: 8.72vh
    font: normal normal normal 2.60vh/2.93vh Arial
    color: white
    padding-top: 1.5vh
  .patient-concern--wrapper
    padding-top: 38vh
    display: flex
    justify-content: center
    grid-gap: 4.88vh
    .patient-concern--top, .patient-concern--bottom
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
