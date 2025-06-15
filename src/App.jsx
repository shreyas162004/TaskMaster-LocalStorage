import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

// custom hooks
import useLocalStorage from './hooks/useLocalStorage'

// custom components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'
import ParticleBackground from './components/ParticleBackground'
import SuccessAnimation from './components/SuccessAnimation'

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    const task = tasks.find(t => t.id === id);
    const isCompleting = !task.checked;
    
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))

    if (isCompleting) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div className="container">
      <ParticleBackground />
      
      {/* Gmail Watermark */}
      <div className="gmail-watermark">
        <a href="mailto:ishreyasr@gmail.com" target="_blank" rel="noopener noreferrer">
          ishreyasr@gmail.com
        </a>
      </div>
      
      <SuccessAnimation 
        show={showSuccess} 
        onComplete={() => setShowSuccess(false)}
      />
      
      <motion.div
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
      >
        <h1>✨ Task Master</h1>
        <p>Organize your life, one task at a time</p>
      </motion.div>

      <AnimatePresence>
        {isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="glass-card"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.4 }}
      >
        <CustomForm addTask={addTask}/>
      </motion.div>

      <motion.div
        className="glass-card"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.6 }}
      >
        {tasks.length > 0 ? (
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        ) : (
          <motion.div
            className="empty-state"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3>🎯 No tasks yet!</h3>
            <p>Add your first task above to get started</p>
          </motion.div>
        )}
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 1.0 }}
      >
        {/* GitHub Status Board */}
        <div className="github-status">
          <div className="status-item">
            <span className="status-icon">⭐</span>
            <span className="status-count">0</span>
            <span className="status-label">Stars</span>
          </div>
          <div className="status-item">
            <span className="status-icon">🍴</span>
            <span className="status-count">0</span>
            <span className="status-label">Forks</span>
          </div>
          <div className="status-item">
            <span className="status-icon">👀</span>
            <span className="status-count">0</span>
            <span className="status-label">Watches</span>
          </div>
        </div>
        
        <p>
          Designed and developed by{' '}
          <a 
            href="https://github.com/shreyas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="developer-link"
          >
            Shreyas ❤️
          </a>
        </p>
      </motion.footer>
    </div>
  )
}

export default App
