import React, { useState, useMemo } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const wordCount = useMemo(() => {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  }, [text]);

  const characterCount = useMemo(() => {
    return text.length;
  }, [text]);

  const handleSearch = () => {
    const filtered = text
      .trim()
      .split(/\s+/)
      .filter(word => word.toLowerCase().includes(input.toLowerCase()));
    setSearchResult(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">Word Counter App</h1>

      <textarea
        rows="5"
        className="w-3/4 max-w-2xl p-4 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
        placeholder="Enter your text or paste here"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>

      <div className="flex gap-2 mb-4 w-3/4 max-w-md">
        <input
          type="text"
          className="flex-grow p-3 text-black rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the word you are searching for"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow"
        >
          Search
        </button>
      </div>

      <div className="bg-white text-black p-4 rounded-md shadow-lg w-3/4 max-w-2xl">
        <h3 className="text-lg font-semibold mb-2">
          <span className="text-purple-600 font-bold">Word Count:</span> {wordCount}
        </h3>
        <h3 className="text-lg font-semibold mb-2">
          <span className="text-blue-600 font-bold">Character Count:</span> {characterCount}
        </h3>
        <h3 className="text-lg font-semibold">
          <span className="text-green-600 font-bold">Filtered Words:</span>{" "}
          {searchResult.length > 0 ? searchResult.join(", ") : "No match found"}
        </h3>
      </div>
    </div>
  );
};

export default App;
