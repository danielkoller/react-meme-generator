import { saveAs } from 'file-saver';
import React, { useState } from 'react';

function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('fine');

  const handleTopTextChange = (event) => {
    setTopText(event.target.value);
  };

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value);
  };

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
  };

  return (
    <div>
      <label htmlFor="top-text">Top text:</label>
      <input id="top-text" value={topText} onChange={handleTopTextChange} />

      <label htmlFor="bottom-text">Bottom text:</label>
      <input
        id="bottom-text"
        value={bottomText}
        onChange={handleBottomTextChange}
      />

      <label htmlFor="template-selector">Meme template:</label>
      <input
        id="template-selector"
        value={template}
        onChange={handleTemplateChange}
      />

      <img
        style={{ width: '300px' }}
        src={`https://api.memegen.link/images/${template}/${topText}/${bottomText}`}
        alt="meme"
        data-test-id="meme-image"
      />

      <button
        onClick={() => {
          saveAs(
            `https://api.memegen.link/images/${template}/${topText}/${bottomText}`,
            `${template}.jpg`,
          );
        }}
      >
        Download
      </button>
    </div>
  );
}

export default MemeGenerator;
