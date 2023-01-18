import download from 'downloadjs';
import React, { useState } from 'react';

function MemeGenerator() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = useState('doge');
  const [memeUrl, setMemeUrl] = useState(
    `https://memegen.link/${template}/${topText}/${bottomText}.jpg`,
  );

  const handleTopTextChange = (event) => {
    setTopText(event.target.value);
  };

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value);
  };

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
  };

  React.useEffect(() => {
    setMemeUrl(`https://memegen.link/${template}/${topText}/${bottomText}.jpg`);
  }, [topText, bottomText, template]);

  // Uses downloadjs to download the generated meme
  function handleDownload() {
    const fileName = `${template}-${topText}-${bottomText}.jpg`;
    download(memeUrl, fileName);
  }

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

      <img data-test-id="meme-image" src={memeUrl} alt="Meme" />

      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default MemeGenerator;
