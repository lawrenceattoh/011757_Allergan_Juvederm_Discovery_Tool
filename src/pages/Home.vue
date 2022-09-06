<template lang="pug">
.home
  .home--title WELCOME TO DISCOVERY TOOL
  .home--description The Juvéderm© collection of fillers have been designed for tailoring treatment to achieve a range of desired patient goals1—11.
  .home--tutorial-box
    span First time using the Discovery Tool?
    div
      a.home--tutorial-box-link(@click="showTutorial = true") Click here
      span  what what it is
  .home--wrapper
    .home--container
      .home--facial-area(@click="$router.push('/facial-area')")
        div PICK BY
        div FACIAL AREA
      .home--facial-area-description Vere peropot ilius, neque imis consus etimist uc remum quam inpro, efactalares moenat pator etratiam ine cae parius
    .home--container
      .home--patient-concern(@click="$router.push('/patient-concern')")
        div PICK BY
        div PATIENT CONCERN
      .home--patient-concern-description Vere peropot ilius, neque imis consus etimist uc remum quam inpro, efactalares moenat pator etratiam ine cae parius
  q-dialog.tutorial--dialog(v-model="showTutorial")
    .tutorial--dialog-wrapper
      .tutorial--dialog-container
        app-close-btn(@clicked="showTutorial = false" top="-1.985vh" right="-1.985vh")
        .tutorial--dialog-title Welcome to the Discovery Tool
        .tutorial--dialog-question What is it
        .tutorial--dialog-answer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        .tutorial--dialog-question What’s the purpose / why was it made
        .tutorial--dialog-answer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        .tutorial--dialog-question How it can be useful to you with your HCPs
        .tutorial--dialog-answer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        q-btn.back-btn(@click="showTutorial = false" flat dense) BACK
</template>

<script>
import AppCloseBtn from "../components/AppCloseBtn";
export default {
  name: "Home",
  components: { AppCloseBtn },
  data () {
    return {
      showTutorial: false
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  background: #3c1b3a
  color: white
  padding-top: 8em
  .home--title
    text-align: center
    font: normal normal bold 6.51vh/6.51vh Arial
    letter-spacing: 0
    width: 57.81vh
    padding-top: 4.56vh
    margin: 0 auto
  .home--description
    padding-top: 0.78vh
    width: 49.35vh
    font: normal normal normal 1.63vh/1.89vh Arial
    letter-spacing: 0
    margin: 0 auto
  .home--tutorial-box
    padding: .46vh 3.58vh 0.59vh 3.65vh
    text-align: center
    letter-spacing: 0
    color: white
    background-color: #FBAF73
    box-shadow: 2px 2px 14px #FC984D83
    -moz-box-shadow: 2px 2px 14px #FC984D83
    -webkit-box-shadow: 2px 2px 14px #FC984D83
    -o-box-shadow: 2px 2px 14px #FC984D83
    font: normal normal normal .91vh/1.04vh Arial
    width: 21.81vh
    margin: 1.76vh auto 0 auto
    .home--tutorial-box-link
      color: white
      font-weight: bold
      cursor: pointer
      text-decoration: underline
  .home--wrapper
    padding-top: 8.01vh
    display: flex
    justify-content: center
    grid-gap: 4.88vh
    .home--container
      display: flex
      flex-direction: column
      color: white
      .home--facial-area, .home--patient-concern
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        background: #542c52
        border: 0.8vh solid #724270
        width: 44.66vh
        height: 33.98vh
        font: normal normal bold 3.26vh/4.56vh Arial
        letter-spacing: 0
        text-align: center
        cursor: pointer
      .home--facial-area-description, .home--patient-concern-description
        width: 34.24vh
        color: white
        font: normal normal normal 1.63vh/1.89vh Arial
        text-align: center
        padding-top: 1.63vh
        padding-bottom: 1.63vh
        margin: 0 auto
.tutorial--dialog
  width: 54.36vh
  height: 49.54vh
  .tutorial--dialog-wrapper
    box-shadow: none
    .tutorial--dialog-container
      display: flex
      flex-direction: column
      padding: 2.67vh 3.78vh 1.89vh 3.78vh
      margin: 3vh
      position: relative
      background-color: #FBAF73
      box-shadow: 2px 2px 14px #FC984D5A
      -moz-box-shadow: 2px 2px 14px #FC984D5A
      -webkit-box-shadow: 2px 2px 14px #FC984D5A
      -o-box-shadow: 2px 2px 14px #FC984D5A
      .tutorial--dialog-title
        padding-bottom: 1.56vh
        letter-spacing: 0
        font: normal normal bold 1.63vh/1.89vh Arial
        text-align: center
      .tutorial--dialog-question, .tutorial--dialog-answer
        font: normal normal bold 1.17vh/1.37vh Arial
        letter-spacing: 0
      .tutorial--dialog-question
        color: #2D1129
        padding-bottom: .46vh
      .tutorial--dialog-answer
        color: white
        padding-bottom: 1.37vh
      .back-btn
        margin: calc(4.10vh - 1.37vh) 0 1.89vh 0
        border: 4px solid #707070
        width: 24.74vh
        height: 5.08vh
        text-align: center
        font: normal normal normal 1.95vh/2.21vh Arial
        letter-spacing: 0
        color: #707070
        border-radius: 0
        background-color: white
        padding: 1.2vh 0
        align-self: center
</style>
