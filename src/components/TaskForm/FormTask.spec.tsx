import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, it, vi } from 'vitest'
import { TaskForm } from '.'

describe('TaskForm', () => {
  beforeEach(() => {
    const addTask = vi.fn()

    render(<TaskForm addTask={addTask} />)
  })

  it('should not be possible to click on the submitButton if the taskInput is empty', () => {
    const taskInput = screen.getByPlaceholderText('Adicione uma nova tarefa')
    const submitButton = screen.getByRole('button')

    expect(taskInput).toHaveValue('')
    expect(submitButton).toBeDisabled()
  })

  it('should be possible to type a maximum of 40 characters in the taskInput', async () => {
    const taskInput = screen.getByPlaceholderText('Adicione uma nova tarefa')

    const characterLimitExceeded = '*'.repeat(50)

    await userEvent.type(taskInput, characterLimitExceeded)

    const characterLimit = '*'.repeat(40)

    expect(taskInput).toHaveValue(characterLimit)
  })
})
