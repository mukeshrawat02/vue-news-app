import { shallowMount } from "@vue/test-utils";
import "jest";
import Vue from "vue";
import NewsComponent from "./News.vue";

describe("News.vue", () => {
  it("should return the current year", () => {
    const topic = "world";
    const wrapper = shallowMount(NewsComponent, {
      propsData: { topic }
    });
    expect(wrapper.text()).toMatch(topic);
  });
});
