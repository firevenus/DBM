import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (storedBookmarks) {
      setBookmarks(storedBookmarks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue && !bookmarks.includes(inputValue)) {
      setBookmarks([inputValue, ...bookmarks]);
      setInputValue("");
    }
  };

  const handleDelete = (bookmark) => {
    setBookmarks(bookmarks.filter((item) => item !== bookmark));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a URL"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Add Bookmark</button>
      </form>
      <div className="bookmarks-container">
        {bookmarks.map((bookmark) => (
          <div key={bookmark} className="bookmark">
            <a href={bookmark} target="_blank" rel="noreferrer">
              {bookmark}
            </a>
            <button onClick={() => handleDelete(bookmark)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
