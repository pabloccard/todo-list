import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme['gray-600']};
        -webkit-font-smoothing: antialiased;
        overflow: overlay;
    }

    body, input, button {
        font: 400 1rem 'Inter', sans-serif;
    }
`
