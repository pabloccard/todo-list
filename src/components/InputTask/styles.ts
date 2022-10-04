import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 10.8125rem;
  height: 3.25rem;

  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;

    background: ${(props) => props.theme['gray-500']};
    border: 1px solid ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background: ${(props) => props.theme['blue-dark']};
    border-radius: 8px;
    padding: 1rem;

    color: ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    font-weight: bold;
  }
`
