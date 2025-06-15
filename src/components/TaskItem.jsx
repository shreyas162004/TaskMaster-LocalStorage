import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// styles
import styles from './TaskItem.module.css';

// Library imports
import { CheckIcon  } from '@heroicons/react/24/outline';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked ] = useState(task.checked);
  const checkmarkRef = useRef(null);

  useEffect(() => {
    if (isChecked) {
      gsap.to(checkmarkRef.current, { 
        scale: 1.3, 
        color: '#4facfe', 
        duration: 0.4, 
        yoyo: true, 
        repeat: 1,
        ease: "back.out(1.7)"
      });
    } else {
      gsap.to(checkmarkRef.current, { scale: 1, color: '', duration: 0.3 });
    }
  }, [isChecked]);

  const handleCheckboxChange = (e) =>{
    setIsChecked(!isChecked);
    toggleTask(task.id);
  }

  return (
    <motion.div
      className="task-item"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
      layout
    >
      <div className="task-content">
        <input
          type="checkbox"
          className="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <span 
          className={`task-text ${isChecked ? 'completed' : ''}`}
          ref={checkmarkRef}
        >
          {task.name}
        </span>
      </div>
      <div className="task-actions">
        <motion.button
          className='action-btn edit'
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <PencilSquareIcon width={20} height={20} />
        </motion.button>

        <motion.button
          className='action-btn delete'
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
          whileHover={{ scale: 1.1, rotate: -10 }}
          whileTap={{ scale: 0.95 }}
        >
          <TrashIcon width={20} height={20} />
        </motion.button>
      </div>
    </motion.div>
  )
}
export default TaskItem