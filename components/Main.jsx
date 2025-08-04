import React, { useState, useEffect } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "https://i.imgflip.com/1bij.jpg"
  });

  const [allMemes, setAllMemes] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      imageUrl: newMemeUrl
    }))
  }


  function handleChange(event) {
    const { value, name } = event.currentTarget;

    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            value={meme.topText}
            name="topText"
            onChange={handleChange}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            value={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
          />
        </label>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>

      <div className="meme">
        <img src={meme.imageUrl} alt="meme image" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
