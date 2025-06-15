import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// library imports
import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  useEffect(()=> {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editedTask, name: updatedTaskName})
  }

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }}
      >
        <motion.div
          className="glass-card"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          style={{ maxWidth: '500px', width: '100%' }}
        >
          <motion.form
            className="todo-form"
            onSubmit={handleFormSubmit}
          >
            <div className="input-wrapper">
              <input
                type="text"
                id="editTask"
                className="input"
                value={updatedTaskName}
                onInput={(e) => setUpdatedTaskName(e.target.value)}
                required
                autoFocus
                maxLength={60}
                placeholder="Update your task..."
              />
            </div>
            <motion.button
              className="btn"
              aria-label={`Confirm edited task to now read ${updatedTaskName}`}
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CheckIcon strokeWidth={2} height={20} width={20} />
              Update
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
export default EditForm