import styled from 'styled-components'

export const InfoContainer = styled.div`
  width: 100%;
  margin-top: 4rem;

  display: flex;
  justify-content: space-between;
`

export const CreatedTasks = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  span:first-child {
    color: ${(props) => props.theme.blue};
    font-size: 0.875rem;
    font-weight: bold;
  }
  span:nth-child(2) {
    background-color: ${(props) => props.theme['gray-400']};
    border-radius: 999px;
    padding: 2px 8px;
    line-height: 15px;

    color: ${(props) => props.theme['gray-200']};
    font-size: 0.75rem;
    font-weight: bold;
  }
`

export const CompletedTasks = styled(CreatedTasks)`
  span:first-child {
    color: ${(props) => props.theme.purple};
  }
`
