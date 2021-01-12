import { waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

export async function testsBlankInput(component, inputElement, errorMessage) {
    inputElement.focus()
    inputElement.blur()
    let err = await waitForElement(() => component.getByText(errorMessage))
    expect(err).toHaveTextContent(errorMessage)
}

export async function testsInvalidInput(component, inputElement, invalidText, errorMessage) {
    inputElement.focus()
    inputElement.value = invalidText
    inputElement.blur()
    let err = await waitForElement(() => component.getByText(errorMessage))
    expect(err).toHaveTextContent(errorMessage)
}