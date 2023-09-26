import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("matches snapshot", function () {
  const { container } = render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      currNum={TEST_IMAGES[0].currNum}
      totalNum={TEST_IMAGES[0].totalNum}
    />
  );

  expect(container).toMatchSnapshot();
});

it("renders without crashing", function () {
  render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      currNum={TEST_IMAGES[0].currNum}
      totalNum={TEST_IMAGES[0].totalNum}
    />
  );
});