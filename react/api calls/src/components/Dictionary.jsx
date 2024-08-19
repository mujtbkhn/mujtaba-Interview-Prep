import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Dictionary = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [audio, setAudio] = useState("");
  const [font, setFont] = useState("sans-serif");

  useEffect(() => {
    if (error) {
      throw new Error(error);
    }
  }, [error]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const phonetics = data[0].phonetics || [];
      const audioURL =
        phonetics.find((phonetic) => phonetic.audio)?.audio || "";
      setAudio(audioURL);
    }
  }, [data]);
  const searchWord = async (wordToSearch) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`
      );

      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message || "an error occurred");
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWord(word);
    if (word.length === 0) {
      setError("empty word");
    }
  };

  if (loading) return <div>Loading...</div>;
  //   if(error) return
  return (
    <div style={{ fontFamily: font }}>
      <h1>Dictionary</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>

      {data && (
        <>
          <select
            name="font"
            value={font}
            onChange={(e) => setFont(e.target.value)}
          >
            <option value="sans-serif">sans-serif</option>
            <option value="serif">serif</option>
            <option value="monospace">mono</option>
          </select>
        </>
      )}
      {data && <audio src={audio} controls></audio>}

      <h1>{data[0]?.word}</h1>
      {data &&
        data[0]?.meanings?.map((item) => (
          <div key={uuidv4()}>
            <h1>{item.partOfSpeech}</h1>

            <h2>
              Meaning:
              {item.definitions.map((item) => (
                <React.Fragment key={uuidv4()}>
                  <p>{item.definition}</p>
                  <p>{item.example}</p>
                </React.Fragment>
              ))}
            </h2>
            {item.antonyms.length > 0 && (
              <h1>antonyms: {item.antonyms.join(",")}</h1>
            )}
            {item.synonyms.length > 0 && (
              <h1>synonyms: {item.synonyms.join(",")}</h1>
            )}
          </div>
        ))}
      <h1>{data[0]?.sourceUrls}</h1>
    </div>
  );
};

export function fallback({ error }) {
  return (
    <>
      <h3>Something went wrong</h3>
      <p style={{ color: "red" }}>{error.message}</p>
    </>
  );
}

export default Dictionary;
