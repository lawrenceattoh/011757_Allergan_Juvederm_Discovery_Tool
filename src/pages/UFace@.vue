<template lang="pug">
.upper-face
  .upper-face--columns
    .upper-face--column
      .upper-face--column-one
        div
          q-icon(color="red-5" name="arrow_left" size="60px")
          | Upper Case
          q-icon(color="red-5" name="arrow_right" size="60px")
        div Enhance your patients’ <strong>periorbital area</strong> with our selection of thoughtfully designed products below<sup>2–4,8</sup>. Adopting a multifactorial approach that addresses the <strong>periorbital area</strong><sup>2,12–14</sup> as well as the <strong>cheeks</strong><sup>3,13– 15</sup> and <strong>temples</strong><sup>4,16–19</sup> can help to optimise treatment outcomes for patients.
        div
          button ADD AREA
        div 
          span HA CONCENTRATION (MG/ML) + <span class="text-small">3.0 MG LIDOCAINE</span>
          .upper-face--column-one--ha-oncentration--volbella
            span VOLBELLA<sup>2,†</sup>
            span 15
          .upper-face--column-one--ha-oncentration--volift
            span VOLIFT<sup>3,‡</sup>
            span 17.5
          .upper-face--column-one--ha-oncentration--voluma
            span VOLUMA<sup>4,§</sup>
            span 20
        div
          span ELASTICITY (G' AT 5 HZ, PASCALS [PA])
          .upper-face--column-one--elasticity--volbella
            span VOLBELLA<sup>2,†</sup>
            span 15
          .upper-face--column-one--elasticity--volift 
            span VOLIFT<sup>3,‡</sup>
            span 17.5
          .upper-face--column-one--elasticity--voluma 
            span VOLUMA<sup>4,§</sup>
            span 20
        div
          span COHESIVITY (GRAMS-FORCE [GMF])
          .upper-face--column-one--cohesivity--volbella 
            span VOLBELLA<sup>2,†</sup>
            span 15
          .upper-face--column-one--cohesivity--volift 
            span VOLIFT<sup>3,‡</sup>
            span 17.5
          .upper-face--column-one--cohesivity--voluma 
            span VOLUMA<sup>4,§</sup>
            span 20
    .upper-face--column
      .upper-face--column-two
        div 
          <q-icon id="face-icon" name="img:icons/face_icon.svg" width="100" />
        div Complimentary Products
    .upper-face--column
      .upper-face--column-three
        div Upper Case
        div Lorem Ipsum
        div
          p PATIENT SATISFACTION
        div
          p DURATION
</template>

<script>
export default {
  name: "UpperFace"
};
</script>

<style lang="sass" scoped>
.upper-face
  .upper-face--columns
    display: flex
    flex-direction: row
    flex-wrap: wrap
    width: 100%
    height: 90vh
    background: #fff
  .upper-face--column
    flex: 33.33%
    padding: 1.2vh
    .upper-face--column-one
      div:nth-child(1)
        display: flex
        justify-content: center
        align-items: center
        height: 6.18vh
        background: #F0EDED
        text-align: center
        font: normal normal bold 3.26vh/4.56vh Arial
        color: #707070
      div:nth-child(2)
        color: #707070
        letter-spacing: -0.01vh
        line-height: 1.43vh
        margin-top: 0.7vh

      div:nth-child(3)
        margin-top: 7.1vh
        display: flex
        justify-content: center
        button
         width: 22.98vh
         height: 5.86vh
         border: 2px solid #000000
         margin: 0 auto
      div:nth-child(4)
        margin-top: 1.50vh
        height: 15.63vh
        background: #A8A6A6
        color: #ffffff
        font-weight: bold
        font-size: 1.63vh
        padding: 0.5vh
        .text-small
          font-size:  1.1vh
          line-height: 1.2vh
          letter-spacing: 0.014vh
        .upper-face--column-one--ha-oncentration--volbella
          width: 29.17vh
          height: 2.08vh
          background: #ED5A5A
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .upper-face--column-one--ha-oncentration--volift
          width: 32.49vh
          height: 2.08vh
          background: #1A87B7
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .upper-face--column-one--ha-oncentration--voluma
          width: 35.16vh
          height: 2.08vh
          background: #34CB19
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
      div:nth-child(5)
        margin-top: 1vh
        height: 15.63vh
        background: #A8A6A6
        color: #ffffff
        font-weight: bold
        font-size: 1.63vh
        padding: 0.5vh
        .upper-face--column-one--elasticity--volbella
          width: 29.17vh
          height: 2.08vh
          background: #ED5A5A
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .upper-face--column-one--elasticity--volift
          width: 32.49vh
          height: 2.08vh
          background: #1A87B7
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .upper-face--column-one--elasticity--voluma
          width: 35.16vh
          height: 2.08vh
          background: #34CB19
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
      div:nth-child(6)
        margin-top: 1vh
        height: 15.63vh
        background: #A8A6A6
        color: #ffffff
        font-weight: bold
        font-size: 1.63vh
        padding: 0.5vh
        .upper-face--column-one--cohesivity--volbella
          width: 29.17vh
          height: 2.08vh
          background: #ED5A5A
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .upper-face--column-one--cohesivity--volift
          width: 32.49vh
          height: 2.08vh
          background: #1A87B7
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .upper-face--column-one--cohesivity--voluma
          width: 35.16vh
          height: 2.08vh
          background: #34CB19
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
    .upper-face--column-two
      div:nth-child(1)
       height: 62.11vh
       background: #EFEAEA
       #face-icon
         width: 19.47vh
         height: 24.41vh
         top: 12vh
         left: 9vh
      div:nth-child(2)
       margin-top: 2vh
       height: 18.42vh
       background: #CECBCB
       text-align: center
    .upper-face--column-three
      div:nth-child(1)
        height: 6.18vh
        background: #454545
        text-align: center
        font: normal normal bold 3.26vh/4.56vh Arial
        color: #ffffff
        border: 0.5vh solid #ED5A5A
      div:nth-child(2)
        height: 15.43vh
        background: #F0EDED
        text-align: left
        font: normal normal 100 1.63vh/1.89vh Arial
        color: #707070
        border: solid #ED5A5A
        border-width: 0 0.5vh 0.5vh
      div:nth-child(3)
        margin-top: 10vh
        height: 23.50vh
        background: #A8A6A6
        color: #ffffff
        font-weight: bold
        font-size: 1.63vh
        padding: 0.5vh
      div:nth-child(4)
        margin-top: 1vh
        height: 24.41vh
        background: #A8A6A6
        color: #ffffff
        font-weight: bold
        font-size: 1.63vh
        padding: 0.5vh
</style>
