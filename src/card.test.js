import { render, fireEvent } from "@testing-library/react";
import Card from "./card";

it("renders card", () => {
    render(<Card />);
})


it("matches snapshot", () => {
    const { container } = render(<Card />);
    expect(container).toMatchSnapshot();
})