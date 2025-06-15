import { useState } from 'react';
import { motion } from 'framer-motion';

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <motion.form
      className="todo-form"
      onSubmit={handleFormSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className="input-wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="What needs to be done?"
        />
      </div>
      <motion.button
        className="btn"
        aria-label="Add Task"
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <PlusIcon width={20} height={20} />
        Add Task
      </motion.button>
    </motion.form>
  )
}
export default CustomForm