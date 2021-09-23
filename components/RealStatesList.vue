<template>
  <section class="px-6 pb-20 md:px-40">
    <h3 class="text-green-900 text-3xl text-center font-semibold my-8 md:my-16">
      Listas de favoritos
    </h3>
    <div class="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      <RealState
        v-for="realState in realStatesList"
        :key="realState.id"
        :realStatesByCategory="realState.realStatesByCategory"
        :name="realState.name"
        :id="realState.id"
      ></RealState>
      <AddRealState></AddRealState>
    </div>
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
    const { data: list, included } = res.data;
    const RealStateList = list.map((item) => {
      const { id } = item;
      const { real_estate_ids: realEstateIds, name } = item.attributes;
      const realStatesByCategory = this.filterRealStates(
        realEstateIds,
        included
      );
      return { realStatesByCategory, id, name };
    });
    this.realStatesList = RealStateList;
  },
  methods: {
    filterRealStates(realEstateIds, included) {
      return included.filter((el) =>
        realEstateIds.some((element) => String(element) === el.id)
      );
    },
  },
};
</script>
