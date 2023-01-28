import { FiTrash2 } from 'react-icons/fi'
import { BsCheck } from 'react-icons/bs'
import * as Checkbox from '@radix-ui/react-checkbox'
import styles from './styles.module.css'

export const Task = () => {
  return (
    <li className={styles.taskContainer}>
      <Checkbox.Root className={styles.checkboxRoot}>
        <Checkbox.Indicator asChild className={styles.checkboxIndicator}>
          <BsCheck />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className={styles.content}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </p>
      <button className={styles.deleteButton}>
        <FiTrash2 />
      </button>
    </li>
  )
}
