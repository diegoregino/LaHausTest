import { mount } from "@vue/test-utils";
import AddRealState from "@/components/AddRealState.vue";

describe("AddRealState", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(AddRealState);
    expect(wrapper.vm).toBeTruthy();
  });
});
