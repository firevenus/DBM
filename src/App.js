import React, { useState } from "react";
import "./styles.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = event.target.elements.url.value;
    setBookmarks([...bookmarks, url]);
    event.target.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="url" placeholder="输入网址" />
        <button type="submit">添加</button>
      </form>
      <ul>
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            <a href={bookmark} target="_blank" rel="noopener noreferrer">
              {bookmark}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
