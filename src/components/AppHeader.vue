<template>
  <nav>
    <div class="row">
      <div class="col-3">
        <svg
          @click="$router.push('/')"
          class="fa fa-home"
          xmlns="http://www.w3.org/2000/svg"
          width="85.546"
          height="85.546"
          viewBox="0 0 82.546 82.546"
        >
          <path
            id="Path_2"
            data-name="Path 2"
            d="M105.35,25.721l35.426,30.5h-6.441v33.4H114.7V66.386H96V89.624H76.365V56.22H69.924Z"
            transform="translate(-68.577 -25.061)"
            fill="none"
            stroke="#fbaf73"
            stroke-width="1"
          />
        </svg>
        <div class="arrow-left" @click="$router.back()">
          <i class="fa fa-arrow-left" aria-hidden="true" @click="$router.back()"></i>
          <b class="back-text" @click="$router.back()">BACK</b>
        </div>
      </div>
      <div class="col-6">
        <q-icon
          class="logo"
          name="img:icons/discovery_tool.svg"
          @click="$router.push('/')"
        ></q-icon>
      </div>
      <div class="col-3 ">
        <div class="right-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79.232"
            height="79.232"
            viewBox="0 0 79.232 79.232"
          >
            <g
              id="Group_341"
              data-name="Group 341"
              transform="translate(-1712.118 -20.13)"
            >
              <circle
                id="Ellipse_9"
                data-name="Ellipse 9"
                cx="39.241"
                cy="39.241"
                r="39.241"
                transform="translate(1712.493 20.505)"
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="0.75"
              />
              <path
                id="Path_6"
                data-name="Path 6"
                d="M1739.271,53.443a10.906,10.906,0,1,1,14.8,10.187,6.2,6.2,0,0,0-3.9,5.825V72.02"
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M1751.916,80.455a1.74,1.74,0,1,0-1.74,1.74,1.74,1.74,0,0,0,1.74-1.74"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
        <div class="right-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79.232"
            height="79.232"
            viewBox="0 0 79.232 79.232"
          >
            <g
              id="Group_342"
              data-name="Group 342"
              transform="translate(-1829.144 -20.13)"
            >
              <path
                id="Path_5"
                data-name="Path 5"
                d="M1870.086,61.511l.978-.249,18.164-4.63-1.289-3.967-17.272,6.876-1.114.441.066-1v-.005l1.209-18.7h-4.171l1.2,18.552.079,1.2L1867,59.65l-17.417-6.937-1.289,3.967,18.02,4.591,1.157.3-.642.777-11.978,14.424,3.372,2.451,9.938-15.713v0l.638-1.009.538.847L1879.35,79.19l3.377-2.451-11.882-14.311Z"
                fill="#fff"
              />
              <circle
                id="Ellipse_8"
                data-name="Ellipse 8"
                cx="39.241"
                cy="39.241"
                r="39.241"
                transform="translate(1829.519 98.987) rotate(-90)"
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="0.75"
              />
            </g>
          </svg>
        </div>
        <div class="right-icons">
          <svg
          class="envelop"
            xmlns="http://www.w3.org/2000/svg"
            width="84.356"
            height="61.023"
            viewBox="0 0 84.356 61.023"
          >
            <g
              id="Group_344"
              data-name="Group 344"
              transform="translate(-1954.028 -21.357)"
            >
              <g
                id="Group_343"
                data-name="Group 343"
                transform="translate(0 -1)"
              >
                <rect
                  id="Rectangle_85"
                  data-name="Rectangle 85"
                  width="67.946"
                  height="44.613"
                  transform="translate(1954.528 38.267)"
                  fill="none"
                  stroke="#fbaf73"
                  stroke-width="1"
                />
                <path
                  id="Path_214"
                  data-name="Path 214"
                  d="M1954.528,38.267,1988.5,66.454l33.973-28.187"
                  fill="none"
                  stroke="#fbaf73"
                  stroke-width="1"
                />
                <line
                  id="Line_9"
                  data-name="Line 9"
                  x1="26.142"
                  y2="22.924"
                  transform="translate(1954.526 59.956)"
                  fill="none"
                  stroke="#fbaf73"
                  stroke-width="1"
                />
                <line
                  id="Line_10"
                  data-name="Line 10"
                  x1="26.141"
                  y1="22.924"
                  transform="translate(1996.331 59.957)"
                  fill="none"
                  stroke="#fbaf73"
                  stroke-width="1"
                />
              </g>
              <path
                id="Path_215"
                data-name="Path 215"
                d="M2022.474,22.357a15.911,15.911,0,1,1-15.91,15.91,15.91,15.91,0,0,1,15.91-15.91"
                transform="translate(0 -1)"
                fill="#8a2d8a"
              />
              <path
                id="Path_216"
                data-name="Path 216"
                d="M2017.721,43.838c5.4-4.136,7.654-5.909,7.654-8.245a3.043,3.043,0,0,0-3.237-3.038,6.644,6.644,0,0,0-3.995,1.659l-.422-.985a7.174,7.174,0,0,1,4.474-1.744c2.589,0,4.39,1.688,4.39,3.939,0,3.124-3.546,5.375-7.458,8.527h8.1v1.1h-9.51Z"
                transform="translate(0 -1)"
                fill="#fde6d5"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    currentRoute() {
      return this.$router.currentRoute.path;
    },
  },
};
</script>
<style scoped>
.logo {
  height: 8.33vh;
  width: 200px;
  cursor: pointer;
}
.fa-arrow-left {
  font-size: 3vh;
  padding: 0.2vh;
}
.arrow-left {
  border-right: 0.2vh solid #fbaf73;
  border-left: 0.2vh solid #fbaf73;
  color: #fde6d4;
  text-align: center;
  float: right;
  padding: 3.1vh;
}
.back-text {
  font-size: 3vh;
}
.fa-home {
  color: #fbaf73;
  padding: 1vh;
  margin-left: 4.5vh;
  margin-top: 2vh;
}
.col-6 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.row {
  background-color: #5c3558;
  border: 0.2vh solid #fbaf73;
}
span {
  padding: 0.2vh;
}
.right-border-line {
  border-right: 0.5vh solid #fbaf73;
}
.right-icons {
  float: left;
  padding: 1vh;
  border-left: 0.2vh solid #fbaf73;
}
.envelop {
  height: 8vh;
  width: 8vh;
  margin-left: 2vh;
}
</style>
