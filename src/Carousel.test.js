import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


test("it renders", function () {
  render(<Carousel photos={TEST_IMAGES} title="Test Images"/>);
})


it("Matches Snapshot", function (){
  const {container} = render(<Carousel photos={TEST_IMAGES} title="Test Images"/>);
  expect(container).toMatchSnapshot();
})


it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


it("should go one image back when clicking left arrow", () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="Test Images"
    />
  );

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the second image to show
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();

    // move back in the carousel
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);

    // expect the first image to show again
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

})


it("should not show the left arrow on first image", () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="Test Images"
    />
  );

  // expect only right arrow to show
  expect(
    container.querySelector(".bi-arrow-right-circle")
  ).toBeInTheDocument();

  expect(
    container.querySelector(".bi-arrow-left-circle")
  ).not.toBeInTheDocument();

})


it("should not show the right arrow on last image", () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="Test Images"
    />
  );

  // start on last image
  let rightArrow = container.querySelector(".bi-arrow-right-circle");
  let leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  leftArrow = container.querySelector(".bi-arrow-left-circle");

  // expect only left arrow to show
  expect(
    container.querySelector(".bi-arrow-left-circle")
  ).toBeInTheDocument();

  expect(
    container.querySelector(".bi-arrow-right-circle")
  ).not.toBeInTheDocument();

})