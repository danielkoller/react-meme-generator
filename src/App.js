import { saveAs } from 'file-saver';
import React, { useState } from 'react';

function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('fine');
  const memeUrl = (memes, top, bottom) => {
    return !top && !bottom
      ? `https://api.memegen.link/images/${memes}.png`
      : !bottom
      ? `https://api.memegen.link/images/${memes}/${top}.png`
      : !top
      ? `https://api.memegen.link/images/${memes}/_/${bottom}.png`
      : `https://api.memegen.link/images/${memes}/${top}/${bottom}.png`;
  };

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
        src={memeUrl(template, topText, bottomText)}
        alt="meme"
        data-test-id="meme-image"
      />

      <button
        onClick={() => {
          saveAs(memeUrl(template, topText, bottomText), `${template}.png`);
        }}
      >
        Download
      </button>
    </div>
  );
}

export default MemeGenerator;
