"use client";

import React, { useEffect, useState } from "react";

const jokes = () => {
  const [jokes, setJokes] = useState({});
  const [loading, setLoading] = useState(true);
  const [visible, isVisible] = useState(false);
  const [reset, setReset] = useState(false);
  const [show, setShow] = useState(false);

  const fetchJokes = async () => {
    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      if (!res.ok) throw new Error("failed to fetch!");

      const data = await res.json();
      setJokes(data);
      setShow(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const apaanTuh = () => {
    isVisible(true);
    setReset(true);
    playLaugh()
  };
  const resetJokes = () => {
    isVisible(false);
    setReset(false);
    fetchJokes();
  };

  const playLaugh = () => {
    const audio = new Audio("/sounds/laughing.mp3");
    audio.play();
  };


  useEffect(() => {}, []);

  useEffect(() => {
    console.log(jokes);
  }, [jokes]);

  return (
    <div className="mx-auto text-center">
      <p className="mt-12 text-4xl font-semibold">
        Aku punya jokes nih buat kamu, tertarik ?{" "}
      </p>

      <button className="btn btn-outline" onClick={fetchJokes}>
        Mau dong Liat
      </button>

      <p className="mt-12 text-3xl">{jokes.setup}</p>

      <button
        className={`btn btn-outline mt-12 ${show ? "" : "hidden"}`}
        onClick={() => apaanTuh()}
      >
        Apaantuh ?
      </button>

      <p className={`mt-12 text-3xl ${visible ? "" : "hidden"}`}>
        {jokes.punchline}
      </p>

      <button
        className={`btn btn-outline mt-12 ${reset ? "" : "hidden"}`}
        onClick={() => resetJokes()}
      >
        Lagi dong
      </button>
    </div>
  );
};

export default jokes;
