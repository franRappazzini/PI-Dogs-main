import Enzyme, { shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Main from "../src//components/organisms/Main/Main";

Enzyme.configure({ adapter: new Adapter() });

it("CheckboxWithLabel changes the text after click", () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<Main />);

  //   expect(checkbox.text()).toEqual("Off");

  expect(checkbox.find("h1")).toBeTrue();

  //   expect(checkbox.text()).toEqual("On");
});
