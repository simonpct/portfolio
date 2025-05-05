"use client";

import React, { useState, useEffect, useCallback } from 'react';

interface WritingTextProps {
  readonly texts: string[];
  readonly writeSpeed?: number;
  readonly eraseSpeed?: number;
}

enum Mode {
  Writing,
  Erasing,
  Pausing
}

const WritingText: React.FC<WritingTextProps> = ({ 
  texts, 
  writeSpeed = 75, 
  eraseSpeed = 50 
}) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentMode, setCurrentMode] = useState<Mode>(Mode.Writing);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);

  const handleTyping = useCallback(() => {
    const targetText = texts[currentIndex];

    if (currentMode === Mode.Writing) {
      if (currentCharIndex < targetText.length) {
        setCurrentText(targetText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prevIndex => prevIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentMode(Mode.Erasing);
        }, 1500);
      }
    } else if (currentMode === Mode.Erasing) {
      if (currentCharIndex > 0) {
        setCurrentText(targetText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prevIndex => prevIndex - 1);
      } else {
        const nextIndex = (currentIndex + 1) % texts.length;
        setCurrentIndex(nextIndex);
        setCurrentMode(Mode.Writing);
      }
    }
  }, [currentCharIndex, currentIndex, currentMode, texts]);

  useEffect(() => {
    const intervalId = setInterval(
      handleTyping,
      currentMode === Mode.Writing ? writeSpeed : eraseSpeed
    );

    return () => clearInterval(intervalId);
  }, [handleTyping, writeSpeed, eraseSpeed, currentMode]);

  return <span className="inline-block">{currentText}<span className="animate-blink font-light">|</span></span>;
};

export default WritingText;