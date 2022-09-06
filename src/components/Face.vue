<template>
  <div class="face-container">
    <div class="row">
      <div class="col-3">
        <div>
          <div class="upper-face-block">
            <q-icon id="left_arrow" name="img:icons/left_arrow.svg"></q-icon>
            <h4 class="light-orange-text">{{facialData.title}}</h4>
            <q-icon id="right_arrow" name="img:icons/right_arrow.svg"></q-icon>
          </div>
          <div class="description-block">
            <p class="light-orange-text">
              Enhance your patients’ <strong>periorbital area</strong> with our
              selection of thoughtfully designed products below<sup>2–4,8</sup>.
              Adopting a multifactorial approach that addresses the <strong
                >periorbital area</strong
              ><sup>2,12–14</sup> as well as the <strong>cheeks</strong
              ><sup>3,13– 15</sup> and <strong>temples</strong
              ><sup>4,16–19</sup> can help to optimise treatment outcomes for
              patients.
            </p>
            <div class="add-facial">
              <p class="light-orange-text">
                ADD FACIAL AF <q-icon id="mail" name="img:icons/mail.svg" />
              </p>
            </div>
          </div>
        </div>
        <div class="product-stats-block">
          <div>
            <h6 class="light-orange-text">
              HA CONCENTRATION
              <span class="text-small darker-orange-text"
                >(MG/ML) 3.0 MG LIDOCAINE</span
              >
              <i class="fa fa-info-circle pull-right" aria-hidden="true"></i>
            </h6>

          </div>
          <div class="">
            <div class="ha-oncentration--volbella">
              <span class="light-orange-text">
                <span class="box-pink"> </span>
                VOLBELLA<sup>2,†</sup>
              </span>

              <span>
                <q-rating v-model="ratting" size="2em" color="orange" disable
              /></span>
              <h5 class="darker-orange-text"> 15</h5>
            </div>

            <div class="ha-oncentration--volbella">
              <span class="light-orange-text">
                <span class="box-violet"> </span>
                VOLIFT<sup>2,†</sup>
              </span>

              <span>
                <q-rating v-model="ratting" size="2em" color="orange" disable
              /></span>
              <h5 class="darker-orange-text"> 300</h5>
            </div>
            <div class="ha-oncentration--volbella">
              <span class="light-orange-text">
                <span class="box-grey"> </span>
                VOLUMA<sup>2,†</sup>
              </span>

              <span>
                <q-rating v-model="ratting" size="2em" color="orange" disable
              /></span>
              <h5 class="darker-orange-text"> 100</h5>
            </div>
          </div>
        </div>
        <div class="product-stats-block">
          <div>
            <h6 class="light-orange-text">
              ELASTICITY
              <span class="text-small darker-orange-text"
                >(G' AT 5 HZ, PASCALS [PA])</span
              >
              <i class="fa fa-info-circle pull-right" aria-hidden="true"></i>
            </h6>
          </div>
          <div class="">
            <div class="ha-oncentration--volbella">
              <span class="light-orange-text">
                <span class="box-pink"> </span>
                VOLBELLA<sup>2,†</sup>
              </span>

              <span>
                <q-rating v-model="ratting" size="2em" color="orange" disable
              /></span>
              <h5 class="darker-orange-text"> 12</h5>
            </div>

            <div class="ha-oncentration--volbella">
              <span class="light-orange-text">
                <span class="box-violet"> </span>
                VOLIFT<sup>2,†</sup>
              </span>

              <span>
                <q-rating v-model="ratting" size="2em" color="orange" disable
              /></span>
              <h5 class="darker-orange-text"> 45</h5>
            </div>
            <div class="ha-oncentration--volbella">
              <span class="light-orange-text">
                <span class="box-grey"> </span>
                VOLUMA<sup>2,†</sup>
              </span>

              <span>
                <q-rating v-model="ratting" size="2em" color="orange" disable
              /></span>
              <h5 class="darker-orange-text"> 103</h5>
            </div>
          </div>
        </div>
        <div class="product-stats-block">
          <div>
            <h6 class="light-orange-text">
              COHESIVITY
              <span class="text-small darker-orange-text"
                >(GRAMS-FORCE [GMF])</span
              >
              <i class="fa fa-info-circle pull-right" aria-hidden="true"></i>
            </h6>
          </div>
          <div class="">
            <div class="ha-oncentration--volbella">
              <span class="light-orange-text">
                <span class="box-pink"> </span>
                VOLBELLA<sup>2,†</sup>
              </span>

              <span>
                <q-rating v-model="ratting" size="2em" color="orange" disable
              /></span>
              <h5 class="darker-orange-text"> 122</h5>
            </div>

            <div class="ha-oncentration--volbella">
              <span class="light-orange-text">
                <span class="box-violet"> </span>
                VOLIFT<sup>2,†</sup>
              </span>

              <span>
                <q-rating v-model="ratting" size="2em" color="orange" disable
              /></span>
              <h5 class="darker-orange-text"> 152</h5>
            </div>
            <div class="ha-oncentration--volbella">
              <span class="light-orange-text">
                <span class="box-grey"> </span>
                VOLUMA<sup>2,†</sup>
              </span>

              <span>
                <q-rating v-model="ratting" size="2em" color="orange" disable
              /></span>
              <h5 class="darker-orange-text"> 125</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 face-column">
        <div class="facial">
          <div class="face-icon-container">
            <q-icon
              class="face-icon"
              name="img:icons/face_icon.svg"
              width="100"
            />
          </div>
          <div class="products">
            <button class="button button-border-pink">
              <p>Volbella</p>
              <small class="button-small-text">WITH LIDOCANE</small>
            </button>
            <button class="button button-border-violet">
              <p>Voluma</p>
              <small class="button-small-text">WITH LIDOCANE</small>
            </button>
            <button class="button button-border-grey">
              <p>Volift</p>
              <small>WITH LIDOCANE</small>
            </button>
          </div>
          <div class="products">
            <button class="button">
              <p>Juvederm</p>
              <small>ULTRA 4</small>
            </button>
            <button class="button-blank"></button>
            <button class="button-blank"></button>
          </div>
        </div>

        <div class="complimentary">
          <div>
            <h4 class="darker-orange-text">COMPLEMENTARY PRODUCTS</h4>
            <p class="light-orange-text">
              Help establish or restore facial balance in your patients with a
              complimentary product
            </p>
          </div>
          <div class="button-block">
            <button class="button button button-border-pink">
              <p>Juvederm</p>
              <small>ULTRA2</small>
            </button>
            <button class="button button-border-violet">
              <p>Juvederm</p>
              <small>ULTRA3</small>
            </button>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div>
          <div class="upper-face-block">
            <q-icon id="left_arrow" name="img:icons/left_arrow.svg"></q-icon>
            <h4 class="light-orange-text">VOLEBELLA</h4>
            <q-icon id="right_arrow" name="img:icons/right_arrow.svg"></q-icon>
          </div>
          <div class="description-block">
            <p class="light-orange-text">
              Using Juvéderm® VOLBELLA* in the under-eye area can help to treat
              infraorbital depressions and achieve periorbital
              revitalisation1,4–6 Gel properties well suited for smoothing and
              refining.1,7
            </p>
            <div class="other-us">
              <p class="light-orange-text">OTHER US</p>
            </div>
            <div></div>
          </div>
        </div>
        <div class="product-stats-block">
          <div>
            <h6 class="light-orange-text">PATIENT SATISFACTION</h6>
          </div>
          <div class="row">
            <div class="col-4 ha-oncentration--volbella-client">
              <div>
                <div class="light-orange-text">
                  <span class="box-pink"> </span>
                  VOLBELLA
                </div>
                <div class="darker-orange-text" style="text-align: center">
                  <p class='hour-glass-text'> <strong>65%</strong> </p>
                </div>
                <p  style="color: white">SATISFIED </p>
              </div>
            </div>

            <div class="col-4 ha-oncentration--volbella-client">
              <div>
                <div class="light-orange-text">
                  <span class="box-violet"> </span>
                  VOLIFT2
                </div>
                  <div class="darker-orange-text" style="text-align: center">
                  <p class='hour-glass-text'> <strong>5 Years</strong> </p>
                </div>
                <p  style="color: white">PATIENTS FELT THEY LOOKED</p>
              </div>
            </div>
            <div class="col-4 ha-oncentration--volbella-client">
              <div>
                <div class="light-orange-text">
                  <span class="box-grey"> </span>
                  VOLBELLA
                </div>
                <div class="darker-orange-text" style="text-align: center">
                  <p class='hour-glass-text'> <strong>65%</strong> </p>
                </div>
                <p style="color: white">SATISFIED UP</p>
              </div>
            </div>
          </div>
        </div>
        <div class="product-stats-block">
          <div>
            <h6 class="light-orange-text">DURATIO</h6>
          </div>
          <div class="row">
            <div class="col-4 ha-oncentration--volbella-client">
              <div>
                <div class="light-orange-text">
                  <span class="box-pink"> </span>
                  VOLBELLA
                </div>
                <div class="darker-orange-text" style="text-align: center">
                  <p class='hour-glass-text'><strong>Up to 12</strong></p>
                </div>
                <i class="fas fa-hourglass hour-glass-icon darker-orange-text"></i>
              </div>
            </div>

            <div class="col-4 ha-oncentration--volbella-client">
              <div>
                <div class="light-orange-text">
                  <span class="box-violet"> </span>
                  VOLIFT2
                </div>
                <div class="darker-orange-text" style="text-align: center">
                  <p class='hour-glass-text'> <strong>up to 45</strong> </p>
                </div>
                <i class="fas fa-hourglass hour-glass-icon darker-violet-text"></i>
              </div>
            </div>
            <div class="col-4 ha-oncentration--volbella-client">
              <div>
                <div class="light-orange-text">
                  <span class="box-grey"> </span>
                  VOLBELLA
                </div>
                <div class="darker-orange-text" style="text-align: center">
                  <p class='hour-glass-text'><strong>Up to 24</strong> </p>
                </div>
                <i class="fas fa-hourglass hour-glass-icon darker-grey-text"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ratting: 4,
    };
  },
  props: {
    facialData: {
      require: true,
      type: Object
    }
  }
};
</script>
<style scoped>
.face-container {
  background-color: #512a4e;
}
.light-orange-text {
  color: #fde6d4;
}
.darker-orange-text {
  color: #fbaf73;
}
.darker-violet-text {
  color: #a998d7;
}
.darker-grey-text {
  color: #9a9b9c;
}
.other-us {
  border: 0.8vh solid #542c52;
  background-color: #724270;
  text-align: center;
  padding-top: 2vh;
  width: 25vh;
  font-size: 1.5em;
}
.add-facial {
  border: 0.8vh solid #542c52;
  background-color: #724270;
  text-align: center;
  padding-top: 2vh;
  width: 30vh;
  margin: 0 auto;
  font-size: 1.5em;
}
.upper-face-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8.18vh;
  background-color: #5c3558;
  text-align: center;
  font: normal normal normal 3.26vh/4.56vh Arial;
  color: #fde6d4;
  text-transform: uppercase;
}
.mail {
  width: 43.42vh;
  height: 28.51vh;
  padding: 2em;
}
.description-block {
  background-color: #3c1b3a;
  padding: 0.5em;
}
.left_arrow {
  position: absolute;
  margin-left: 0;
}
.text-small {
  font-size: 1.1vh;
  line-height: 1.2vh;
  letter-spacing: 0.014vh;
}
.product-stats-block {
  background-color: #3c1b3a;
  border-bottom: 0.8vh solid #fbaf73;
}
.ha-oncentration--volbella {
  width: 90%;
  height: 4.5vh;
  background: #5c3558;
  display: flex;
  justify-content: space-between;
  padding: 0.4em;
  align-items: center;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  margin-left: 0.8em;
}
.box-pink {
  background: #e182a7;
  border: 1vh solid #e182a7;
  margin: 0.3em;
  border-radius: 0.4em;
}
.box-violet {
  background: #a998d7;
  border: 1vh solid #a998d7;
  margin: 0.3em;
  border-radius: 0.4em;
}
.box-grey {
  background: #9a9b9c;
  border: 1vh solid #9a9b9c;
  margin: 0.3em;
  border-radius: 0.4em;
}
.face-icon {
  width: 62.11ch;
  height: 62.11vh;
  position: relative;
  margin: 0 auto;
}
.products {
  padding: 0.8em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button {
  color: #ffffff;
  text-transform: uppercase;
  font-size: 1.5vh;
  background-color: #3c1b3a;
  width: 20vh;
  height: 10vh;
  padding: 0.1em;
  margin: 1em;
}
.button-small-text {
  font-size: 0.1 em;
}

.complimentary {
  background-color: #5c3558;
  text-align: center;
  margin-bottom: 5em;
}
.button-block {
  background-color: #5c3558;
}
.face-column {
  padding-left: 2em;
  padding-right: 2em;
}
.face-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-border-pink {
  border-bottom: 1vh solid #e182a7;
}
.button-border-violet {
  border-bottom: 1vh solid #a998d7;
}
.button-border-grey {
  border-bottom: 1vh solid #9a9b9c;
}
.facial {
  background: #3c1b3a;
  padding: 2em;
  border-top-left-radius: 25em;
  border-top-right-radius: 25em;
}
.face-icon-container {
  background: #724270;
  padding: 2em;
  border-radius: 50%;
  border: 1vh solid #fbaf73;
}
.button-blank {
  background-color: #724270;
  width: 20vh;
  height: 10vh;
  padding: 3.2em;
  margin: 1em;
}
.ha-oncentration--volbella-client {
  height: 16.50vh;
  width: 10vh;
  background: #5c3558;
  display: flex;
  margin: 0.5vh;
  padding: 0.5vh;
}
.hour-glass-icon {
  font-size: 8.2vh;
  text-align: center;
  padding: 1vh;
}
.pull-right {
  margin: 1em;
}
.hour-glass-text {
  font-size: 2.2vh;
  text-align: center;
  margin: 0.2vh;
}
</style>
