import styled from 'styled-components'

export const TaskContainer = styled.div`
  width: 100%;
  height: 3.25rem;

  display: flex;
  align-items: center;

  background: ${(props) => props.theme['gray-500']};
  padding: 1rem;
  margin-top: 1.5rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  & + div {
    margin-top: 0.75rem;
  }

  input[type='checkbox'] {
    margin-right: 0.75rem;
  }

  p {
    color: ${(props) => props.theme['gray-200']};
    font-size: 0.875rem;
  }

  span {
    color: ${(props) => props.theme['gray-300']};
    display: flex;
    align-items: center;
    padding: 0.2rem;
    margin-left: auto;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
  }

  span:hover {
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme.danger};
  }
`
