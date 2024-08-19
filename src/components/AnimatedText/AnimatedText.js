import { useState, useEffect } from 'react';

const AnimatedText = ({ text }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text]);
  
    return <span>{currentText}</span>;
  };

  export default AnimatedText;