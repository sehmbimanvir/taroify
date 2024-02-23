import { render } from "@testing-library/react"
import React from "react"
import Loading from "../loading"
import { prefixClassname } from "../../styles"


describe('<Loading />', () => {
  it ('should render loading component with spinner', () => {
    const { container } = render(<Loading type="spinner" />)
    expect(container.querySelector(`.${prefixClassname("loading__spinner")}`)).toBeInTheDocument()
  })

  it('should render loading component with text', () => {
    const { getByText } = render(
      <Loading>Loading Text</Loading>
    );

    expect(getByText('Loading Text')).toBeInTheDocument();
  })
})