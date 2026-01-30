"use client";

import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
}

export default function TypewriterText({
  text,
  speed = 30,
  delay = 0,
  className = "",
  cursor = true
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    // Reset state initially
    setDisplayedText("");
    setIsTyping(false);

    timeoutId = setTimeout(() => {
      setIsTyping(true);
      let index = 0;

      intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return (
    <p className={className}>
      {displayedText}
      {cursor && isTyping && (
        <span className="inline-block w-[2px] h-[1em] ml-1 align-middle bg-current animate-pulse" />
      )}
    </p>
  );
}
