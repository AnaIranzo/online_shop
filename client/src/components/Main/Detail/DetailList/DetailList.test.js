import React from "react";
import { shallow } from "enzyme";
import DetailList from "./DetailList";

describe("DetailList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DetailList />);
    expect(wrapper).toMatchSnapshot();
  });
});
