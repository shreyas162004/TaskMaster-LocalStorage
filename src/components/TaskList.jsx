// component import
import TaskItem from './TaskItem';
import { AnimatePresence, motion } from 'framer-motion';

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className="tasks">
      <AnimatePresence>
        {tasks.sort((a, b) => b.id - a.id).map(task => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            layout
          >
            <TaskItem
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              enterEditMode={enterEditMode}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}
export default TaskList