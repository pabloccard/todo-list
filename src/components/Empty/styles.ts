import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
const animation = keyframes`${fadeIn}`

export const EmptyContainer = styled.main`
  animation: 0.3s ${animation};
  width: 100%;
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-top: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  padding: 4rem;

  p {
    color: ${(props) => props.theme['gray-300']};
    line-height: 1.4;
    text-align: center;
  }
`
