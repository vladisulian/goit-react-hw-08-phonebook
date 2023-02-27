import React, { useState, useEffect } from 'react';

const TextFadeIn = ({ text, speed, onFinish, className }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(intervalId);
        onFinish();
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, speed, onFinish]);

  return <div className={className}>{displayedText}</div>;
};

export default TextFadeIn;
