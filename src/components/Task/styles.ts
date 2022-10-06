import styled from 'styled-components'

import { motion } from 'framer-motion'
import * as Checkbox from '@radix-ui/react-checkbox'

export const TaskContainer = styled(motion.div)`
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

  p {
    color: ${(props) => props.theme['gray-200']};
    font-size: 0.875rem;
    transition: color 0.5s;
  }

  button[data-state='checked'] ~ p {
    text-decoration: line-through;
    color: ${(props) => props.theme['gray-300']};
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

export const CheckboxRoot = styled(Checkbox.Root)`
  width: 1rem;
  height: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  margin-right: 0.5rem;
  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 50%;
  cursor: pointer;

  transition: background-color 0.2s, border-color 0.2s;

  &[data-state='unchecked']:hover {
    background: rgb(30, 111, 159, 0.2);
    border-color: ${(props) => props.theme['blue-dark']};
    /* opacity: 0.2; */
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme['purple-dark']};
    border-color: ${(props) => props.theme['purple-dark']};
  }

  &[data-state='checked']:hover {
    background: ${(props) => props.theme.purple};
    border-color: ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme['gray-100']};
  }
`
