import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const SuccessAnimation = ({ show, onComplete }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="success-animation"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            duration: 0.6 
          }}
          onAnimationComplete={onComplete}
        >
          <motion.div
            className="checkmark"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 0.8,
              times: [0, 0.3, 0.6, 1]
            }}
          >
            <CheckIcon width={40} height={40} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessAnimation; 