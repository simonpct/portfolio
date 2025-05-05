"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';

interface TimeLineContextState {
  readonly currentIndex: number;
  readonly setCurrentIndex: (index: number) => void;
}

interface TimeLineProviderProps {
  readonly children: ReactNode;
}

const TimeLineContext = createContext<TimeLineContextState>({
  currentIndex: -1,
  setCurrentIndex: () => {},
});

export const useTimeLine = (): TimeLineContextState => useContext(TimeLineContext);

export const TimeLineProvider: React.FC<TimeLineProviderProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSetCurrentIndex = (index: number): void => {
    setCurrentIndex(index);
  };

  const value: TimeLineContextState = {
    currentIndex,
    setCurrentIndex: handleSetCurrentIndex,
  };

  const handleKeyDown = useCallback((event: KeyboardEvent): void => {
    switch (event.key) {
      case 'ArrowDown':
        setCurrentIndex(currentIndex + 1);
        break;
      case 'ArrowUp':
        setCurrentIndex(currentIndex - 1);
        break;
    }
  }, [currentIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const header = document.querySelector<HTMLDivElement>('#timeline-' + currentIndex);
    console.log(header);
    if (header) {
      setTimeout(() => {
        header.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [currentIndex]);

  return (
    <TimeLineContext.Provider value={value}>
      {children}
    </TimeLineContext.Provider>
  );
};
