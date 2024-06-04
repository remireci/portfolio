"use client"
import { useState, useEffect } from 'react';

interface TypewriterProps {
  typedText: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ typedText }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    const currentString = typedText[currentStringIndex];
    let timer: NodeJS.Timeout | null = null;

    const sleep = (ms: number) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const typeText = async (text: string) => {
      for (let i = 0; i <= text.length; i++) {
        setCurrentText(text.slice(0, i));
        await sleep(100);
      }
      await sleep(1500); // Pause before starting to delete
    }

    const deleteText = async (text: string) => {
      for (let i = text.length; i >= 0; i--) {
        setCurrentText(text.slice(0, i));
        await sleep(30);
      }
      await sleep(500); // Pause before starting the next string
    }

    const animate = async () => {
      await typeText(currentString);
      await deleteText(currentString);
      setCurrentStringIndex(prevIndex => (prevIndex + 1) % typedText.length);
    }

    animate();

  }, [currentStringIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="text-content">
      <h2 className="ind-title">reciproque</h2>
      <h1 className="ind-title h3 spacing">software and web development<br /><br /><br /></h1>
      <h1 className="h3 spacing ind-desc inline-block relative ml-10" style={{ height: '1.5em', marginLeft: "1.5em" }}>
        <span id="typed-strings">{currentText}</span>
        {cursorVisible && <span className="cursor">|</span>}
      </h1>
    </div>
  );
};

export default Typewriter;
