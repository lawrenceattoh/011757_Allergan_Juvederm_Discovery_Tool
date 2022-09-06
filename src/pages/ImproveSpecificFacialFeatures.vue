<template>
  <div>
    <face :facialData="facialData"></face>
  </div>
</template>
<script>
import Face from "../components/Face";
export default {
  components: {
    Face,
  },
  data() {
    return {
      facialData: {
        title: "FACIAL FEATURES",
      },
    };
  },
};
</script>
