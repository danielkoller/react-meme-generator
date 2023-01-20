import './App.css';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';
import TemplateSelector from './components/TemplateSelector';
import TextInput from './components/TextInput';

function MemeGenerator() {
  // Declaring the useState-variables
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('fine');
  // Declaring the memeURL
  const memeUrl = (memes, top, bottom) => {
    return !top && !bottom
      ? `https://api.memegen.link/images/${memes}.png`
      : !bottom
      ? `https://api.memegen.link/images/${memes}/${top}.png`
      : !top
      ? `https://api.memegen.link/images/${memes}/_/${bottom}.png`
      : `https://api.memegen.link/images/${memes}/${top}/${bottom}.png`;
  };

  return (
    <div>
      <h1>React Meme Generator</h1>
      <TextInput label="Top text: " text={topText} setText={setTopText} />
      <TextInput
        label="Bottom text: "
        text={bottomText}
        setText={setBottomText}
      />
      <TemplateSelector template={template} setTemplate={setTemplate} />
      <img
        style={{ width: '300px' }}
        src={memeUrl(template, topText, bottomText)}
        alt="meme"
        data-test-id="meme-image"
      />
      <div className="button-div">
        <button
          className="button"
          onClick={() => {
            saveAs(memeUrl(template, topText, bottomText), `${template}.png`);
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default MemeGenerator;
