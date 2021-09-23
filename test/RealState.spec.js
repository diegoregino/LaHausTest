import { mount } from "@vue/test-utils";
import RealState from "@/components/RealState.vue";

describe("RealState", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(RealState);
    expect(wrapper.vm).toBeTruthy();
  });
});
