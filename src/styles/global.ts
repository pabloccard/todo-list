import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    body, input, button {
        font: 400 1rem 'Inter', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme['gray-600']};
        -webkit-font-smoothing: antialiased;
        overflow: overlay;
    }


    body::-webkit-scrollbar {
        width: 6px;
                  
    }

    body::-webkit-scrollbar-track {
        background: transparent;        
    }

    body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['gray-400']};   
    border-radius: 20px;       
    
    }



    
`
