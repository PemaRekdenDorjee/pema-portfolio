import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  speed?: number;
  delay?: number;
  loop?: boolean;
  onComplete?: () => void;
}

export const useTypewriter = (
  texts: string | string[],
  options: UseTypewriterOptions = {}
) => {
  const {
    speed = 100,
    delay = 1000,
    loop = true,
    onComplete,
  } = options;

  const textArray = Array.isArray(texts) ? texts : [texts];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleTyping = useCallback(() => {
    const text = textArray[currentTextIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        if (!loop && currentTextIndex === textArray.length - 1 && !isDeleting) {
          onComplete?.();
          return;
        }
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < text.length) {
          setCurrentText(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, pause then decide what to do next
          if (currentTextIndex < textArray.length - 1) {
            // Move to next text
            setIsPaused(true);
            setTimeout(() => {
              setCurrentTextIndex(currentTextIndex + 1);
              setCurrentIndex(0);
              setCurrentText('');
              setIsDeleting(false);
            }, delay);
          } else {
            // Last text, pause then start deleting or stop
            setIsPaused(true);
          }
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          setCurrentText(text.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Finished deleting
          if (loop) {
            // Restart from first text
            setCurrentTextIndex(0);
            setCurrentIndex(0);
            setCurrentText('');
            setIsDeleting(false);
          } else {
            // Stop at empty text
            onComplete?.();
          }
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    isDeleting,
    isPaused,
    currentTextIndex,
    textArray,
    speed,
    delay,
    loop,
    onComplete,
  ]);

  useEffect(() => {
    const cleanup = handleTyping();
    return cleanup;
  }, [handleTyping]);

  // Add cursor effect
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return {
    text: currentText,
    showCursor,
    isTyping: !isPaused,
    isDeleting,
  };
};

// Simple version for single text
export const useSimpleTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return displayText;
};