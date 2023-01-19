import { saveAs } from 'file-saver';
import React, { useEffect, useState } from 'react';

function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('fine');
  const [memeUrl, setMemeUrl] = useState(
    `https://api.memegen.link/images/${template}/${topText}/${bottomText}`,
  );

  useEffect(() => {
    setMemeUrl(
      `https://api.memegen.link/images/${template}/${topText}/${bottomText}`,
    );
  }, [template, topText, bottomText]);

  const handleTopTextChange = (event) => {
    setTopText(event.target.value);
    setMemeUrl(
      `https://api.memegen.link/images/${template}/${event.target.value}/${bottomText}`,
    );
  };

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value);
    setMemeUrl(
      `https://api.memegen.link/images/${template}/${topText}/${event.target.value}`,
    );
  };

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
    setMemeUrl(
      `https://api.memegen.link/images/${event.target.value}/${topText}/${bottomText}`,
    );
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
          fetch(memeUrl)
            .then((res) => res.blob())
            .then((blob) => saveAs(blob, `${template}.jpg`))
            .catch((error) => {
              console.log('An error occurred: ', error);
            });
        }}
      >
        Download
      </button>
    </div>
  );
}

export default MemeGenerator;
