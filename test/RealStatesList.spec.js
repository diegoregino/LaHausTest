import { mount } from "@vue/test-utils";
import RealStatesList from "@/components/RealStatesList.vue";

describe("RealStatesList", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(RealStatesList);
    expect(wrapper.vm).toBeTruthy();
  });
  test("is a Vue instance", () => {
    const realEstateIds = [195748, 196996];
    const included = [
      {
        id: "195748",
      },
      {
        id: "564566",
      },
      {
        id: "15654",
      },
      {
        id: "196996",
      },
    ];
    const specResult = [
      {
        id: "195748",
      },
      {
        id: "196996",
      },
    ];

    const wrapper = mount(RealStatesList);
    expect(wrapper.vm.filterRealStates(realEstateIds, included)).toStrictEqual(
      specResult
    );
  });
});
