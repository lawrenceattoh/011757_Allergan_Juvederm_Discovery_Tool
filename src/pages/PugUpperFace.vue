<template lang="pug">
.upper-face
  .upper-face--columns
    .upper-face--column
      .upper-face--column-one
        div
          q-icon#left_arrow(name='img:icons/left_arrow.svg')
          | ddUpper Case
          q-icon#right_arrow(name='img:icons/right_arrow.svg')
        div Enhance your patients’ <strong>periorbital area</strong> with our selection of thoughtfully designed products below<sup>2–4,8</sup>. Adopting a multifactorial approach that addresses the <strong>periorbital area</strong><sup>2,12–14</sup> as well as the <strong>cheeks</strong><sup>3,13– 15</sup> and <strong>temples</strong><sup>4,16–19</sup> can help to optimise treatment outcomes for patients.
        div
          div.add-facial ADD FACIAL AF
            <q-icon id="mail" name="img:icons/mail.svg"  />
        div
          span HA CONCENTRATION (MG/ML) + <span class="text-small">3.0 MG LIDOCAINE</span>
          .ha-oncentration--volbella
            span VOLBELLA<sup>2,†</sup>
            span 15
          .ha-oncentration--volift
            span VOLIFT<sup>3,‡</sup>
            span 17.5
          .ha-oncentration--voluma
            span VOLUMA<sup>4,§</sup>
            span 20
        div
          span ELASTICITY (G' AT 5 HZ, PASCALS [PA])
          .elasticity--volbella
            span VOLBELLA<sup>2,†</sup>
            span 15
          .elasticity--volift
            span VOLIFT<sup>3,‡</sup>
            span 17.5
          .elasticity--voluma
            span VOLUMA<sup>4,§</sup>
            span 20
        div
          span COHESIVITY (GRAMS-FORCE [GMF])
          .cohesivity--volbella
            span VOLBELLA<sup>2,†</sup>
            span 15
          .cohesivity--volift
            span VOLIFT<sup>3,‡</sup>
            span 17.5
          .cohesivity--voluma
            span VOLUMA<sup>4,§</sup>
            span 20
    .upper-face--column
      .upper-face--column-two
        div
          <q-icon id="face-icon" name="img:icons/face_icon.svg" width="100" />
          div.products
           button Volbella
           button Voluma
           button Volift
        div
          p Complimentary Products
          p Help establish or restore facial balance in your patients with a complimentary product
          div
           button ULTRA2
           button ULTRA3

    .upper-face--column
      .upper-face--column-three
        div Upper Case
        div Lorem Ipsum
         .other-uses
           p OTHER USES
           P B/A
        div
          span PATIENT SATISFACTION
          .patient-satisfaction--volbella
            span VOLBELLA<sup>2,†</sup>
            span 15
        div
          span DURATION
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
    background: #512A4E
  .upper-face--column
    flex: 33.33%
    .upper-face--column-one
      padding: 2vh 2vh 2vh 1.5vh
      div:nth-child(1)
        display: flex
        justify-content: center
        align-items: center
        height: 6.18vh
        background-color: #5C3558
        text-align: center
        font: normal normal normal 3.26vh/4.56vh Arial
        color: #FDE6D4
        text-transform: uppercase
        .q-icon:nth-child(1)
          left: -4.98vh
          color: #CECBCB
          width: 2.3vh
          height: 4.25vh
        .q-icon:nth-child(2)
          right: -4.98vh
          color: #CECBCB
          width: 2.3vh
          height: 4.25vh
      div:nth-child(2)
        color: #FDE6D5
        letter-spacing: -0.01vh
        line-height: 1.43vh
        margin-top: 0.7vh
        font: normal normal normal 1.43vh Arial

      div:nth-child(3)
        margin-top: 7.1vh
        display: flex
        justify-content: center
        .add-facial
          border: 0.6vh solid #707070
          background-color: #724270
          padding: 2vh
          .q-icon
            color: #CECBCB
            width: 2.83vh
            height: 1.17vh
      div:nth-child(4)
        margin-top: 1.50vh
        height: 15.63vh
        background: #3B1C38
        color: #ffffff
        font-weight: bold
        font-size: 1.63vh
        padding: 0.5vh
        .text-small
          font-size:  1.1vh
          line-height: 1.2vh
          letter-spacing: 0.014vh
        .ha-oncentration--volbella
          width: 29.17vh
          height: 2.08vh
          background: #ED5A5A
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .ha-oncentration--volift
          width: 32.49vh
          height: 2.08vh
          background: #1A87B7
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .ha-oncentration--voluma
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
        background: #3B1C38
        color: #ffffff
        font-weight: bold
        font-size: 1.63vh
        padding: 0.5vh
        .elasticity--volbella
          width: 29.17vh
          height: 2.08vh
          background: #ED5A5A
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .elasticity--volift
          width: 32.49vh
          height: 2.08vh
          background: #1A87B7
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .elasticity--voluma
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
        background: #3B1C38
        color: #ffffff
        font-weight: bold
        font-size: 1.63vh
        padding: 0.5vh
        .cohesivity--volbella
          width: 29.17vh
          height: 2.08vh
          background: #ED5A5A
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .cohesivity--volift
          width: 32.49vh
          height: 2.08vh
          background: #1A87B7
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
        .cohesivity--voluma
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
       //background: #EFEAEA
       #face-icon
         width: 19.47vh
         height: 24.41vh
         top: 12vh
         left: 10vh
       .products
         position: relative
         top: 12vh
         background: none
         button
          margin: 0 0.5vh
          padding: 0.8vh 2.2vh
          color: #ffffff
          text-transform: uppercase
          font-size: 1.5vh
         button:nth-child(1)
          background: #ED5A5A
          border: 0.2vh solid #7C7C7C
         button:nth-child(2)
          background: #7C7C7C
          border: 0.2vh solid #7C7C7C
         button:nth-child(3)
          background: #7C7C7C
          border: 0.2vh solid #7C7C7C
      div:nth-child(2)
       margin-top: 2vh
       height: 18.42vh
       background-color: #5C3558
       text-align: center
       padding: 2.08vh 2vh
       p:nth-child(1)
        text-transform: uppercase
        margin: 0
        font: normal normal bold 1.63vh/1.89vh Arial
        color: #FBAF73
       p:nth-child(2)
        padding-top: 1vh
        font: normal normal normal 1.30vh/1.50vh Arial
        color: #FDE6D5
       div
        button
          padding: 1vh 3.43vh
          margin: 1vh 0.5vh
          background: #A8A6A6
          color: #ffffff
          border: none

    .upper-face--column-three
      padding: 2vh 1.5vh 2vh 2vh
      div:nth-child(1)
        height: 6.18vh
        background-color: #3C1B3A
        text-align: center
        font: normal normal bold 3.26vh/4.56vh Arial
        color: #ffffff
        border: 0.5vh solid #707070
      div:nth-child(2)
        height: 15.43vh
        background-color: #3C1B3A
        text-align: left
        font: normal normal 100 1.63vh/1.89vh Arial
        color: #707070
        border: solid #707070
        border-width: 0 0.5vh 0.5vh
        padding: 2vh
        .other-uses
          display: flex
          justify-content: space-between
          align-items: center

          background: none
          border: none
          margin-top: 5vh
          color: #707070
          text-transform: uppercase
          p
           font: normal normal normal 1.95vh/2.21vh Arial
           border: 0.26vh solid #707070
           background: #ffffff
          p:nth-child(1)
           padding: 1vh 5vh
          p:nth-child(2)
           padding: 1vh
      div:nth-child(3)
        margin-top: 10vh
        height: 23.50vh
        background-color: #3B1C38
        color: #ffffff
        font-weight: bold
        font-size: 1.63vh
        padding: 0.5vh
      div:nth-child(4)
        margin-top: 1vh
        height: 24.41vh
        background-color: #3B1C38
        color: #ffffff
        font-weight: bold
        font-size: 1.63vh
        padding: 0.5vh
        .patient-satisfaction--volbella
          width: 29.17vh
          height: 2.08vh
          background: #ED5A5A
          color: #ffffff
          display: flex
          justify-content: space-between
          align-items: center
          margin-top: 1.5vh
</style>
