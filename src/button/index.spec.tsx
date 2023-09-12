import { render } from "@testing-library/react";
import Button from ".";
import "@testing-library/jest-dom";
describe("<Button>", () => {
  it("should render button", () => {
    const { getByText, getByRole } = render(<Button>botao</Button>);
    const buttonTextElement = getByText("botao");
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
  });

  it('should render "Carregando..." text whwn isLoading was passed', () => {
    const { getByText } = render(<Button isLoading>botao</Button>);
    const buttonTextElement = getByText("Carregando...");
    expect(buttonTextElement).toBeInTheDocument();
  });

  it("should render the button with background color red when color=red was passed", () => {
    const { getByRole } = render(<Button color="red">botao</Button>);
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveStyle({
      backgroundColor: "red",
    });
  });
});
