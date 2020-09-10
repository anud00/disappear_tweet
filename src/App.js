import React, { useState } from "react";
import "./App.css";

function Tweet({ tweet, index, disappearTweet, removeTweet }) {
  return (
    <div
      className="tweet"
      style={{ textDecoration: tweet.isCompleted ? "line-through" : "" }}
    >
      {tweet.text}

      <div>
        <button onClick={() => disappearTweet(index)}>Disable Tweet</button>
        <button onClick={() => removeTweet(index)}>x</button>
      </div>
    </div>
  );
}

function TweetForm({ addTweet }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTweet(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder= "Write Tweet & Press Enter"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [tweets, setTweets] = useState([
    {
      text: "Maintain Social Distancing #staysafe #covid19 #NewNormal",
      isCompleted: false
    },
    {
      text: "For maximum protection of yourself and the others  – STAY AT HOME!",
      isCompleted: false
    }
  ]);

  const addTweet = text => {
    const newTweets = [...tweets, { text }];
    setTweets(newTweets);
  };

  const disappearTweet = index => {
    const newTweets = [...tweets];
    newTweets[index].isCompleted = true;
    setTweets(newTweets);
  };

  const removeTweet = index => {
    const newTweets = [...tweets];
    newTweets.splice(index, 1);
    setTweets(newTweets);
  };

  return (
    <div className="app">
      <div className="tweet-list">
        {tweets.map((tweet, index) => (
          <Tweet
            key={index}
            index={index}
            tweet={tweet}
            disappearTweet={disappearTweet}
            removeTweet={removeTweet}
          />
        ))}
        <TweetForm addTweet={addTweet} />
      </div>
    </div>
  );
}

export default App;



