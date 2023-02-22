import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      // name: "job Application form",
      level: 1, //for h1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      // name: "Section 1",
      level: 2, //for h2
    });
    expect(sectionHeading).toBeInTheDocument();

    const textElements = screen.getByRole("textbox");
    expect(textElements).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonELement = screen.getByRole("button");
    expect(submitButtonELement).toBeInTheDocument();

    //get by label text

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText("i agree term and condition");
    expect(termsElement2).toBeInTheDocument();

    //get By PlaceholderText

    const nameElement3 = screen.getByPlaceholderText("fullName");
    expect(nameElement3).toBeInTheDocument();

    //getByParagraphText

    const paraGraphElement = screen.getByText("all field are mandatory", {
      // it also accept thge selector if same paragraph
    });
    expect(paraGraphElement).toBeInTheDocument();

    // getByDisplayValue
    const nameElement4 = screen.getByDisplayValue("Vishwash");
    expect(nameElement4).toBeInTheDocument();

    //grtByAltText

    const imgElement = screen.getByAltText("a person with laptop");
    expect(imgElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const customElemet = screen.getByTestId("custom-element");
    expect(customElemet).toBeInTheDocument();
  });
});
