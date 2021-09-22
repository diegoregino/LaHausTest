<template>
  <section>
    <RealState
      v-for="realState in realStatesList"
      :key="realState.id"
      :realState="realState"
    ></RealState>
  </section>
</template>

<script>
import axios from "axios";
import RealState from "@/components/RealState";

export default {
  name: "RealStatesList",
  components: {
    RealState,
  },
  data() {
    return {
      realStatesList: [],
    };
  },
  async created() {
    const url =
      "https://lh-real-estates-challenge-api.herokuapp.com/real-estates";
    const res = await axios.get(url);
    const {data: list} = res.data;
    this.realStatesList = list;
  },
};
</script>
