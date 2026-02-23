import { useState, useEffect } from "react";

const words = ["Automated", "Predictable", "Intelligent", "Limitless"];

const TypewriterText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const timeout = deleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  return (
    <span className="text-gradient">{text}</span>
  );
};

export default TypewriterText;
