import { mount } from "@vue/test-utils";
import NotificationIcon from "@/components/NotificationIcon.vue";

describe("NotificationIcon", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(NotificationIcon);
    expect(wrapper.vm).toBeTruthy();
  });
});
