import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  
  // Function to count words in the input text
  const countWords = (inputText) => {
    const words = inputText.trim().split(/\s+/);
    return words.length;
  };

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  const wordCount = countWords(text);

  return (
    <div>
      <h1>Paragraph Word Counter</h1>
      <textarea
        rows="10"
        cols="50"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <p>Word count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
