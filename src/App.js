import React, { useState, useEffect, useRef } from "react";
import { drumPads } from "./drumPads";

const AudioSpritePlayer = ({ volume }) => {
  const [currentSongTitle, setCurrentSongTitle] = useState("");
  const [disabled, setDisabled] = useState(false);
  const audioRef = React.useRef(null);

  const playAudioSprite = (soundUrlOne, titleOne) => {
    audioRef.current.src = soundUrlOne;
    audioRef.current.play();
    setCurrentSongTitle(titleOne);
  };

  const shutDown = () => {
    setDisabled(!disabled);
  };

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  return (
    <div className="flex flex-col justify-center text-4xl text-white items-center sm:flex-row-reverse ">
      {currentSongTitle && (
        <div className="w-full bg-slate-800 flex items-center justify-center  h-96  backdrop-blur-sm">
          {currentSongTitle}

          <label class="fixed right-5 top-5 cursor-pointer">
            <input type="checkbox" class="sr-only peer" onChange={shutDown} />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>
      )}

      <div
        className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-96 bg-gray-900"
        id="display"
      >
        {drumPads.map((sample, index) => (
          <button
            disabled={disabled}
            className="shadow-xl hover:opacity-5"
            key={index}
            onClick={() => {
              playAudioSprite(sample.soundUrlOne, sample.titleOne);
            }}
          >
            {sample.keycap}
          </button>
        ))}
        <audio ref={audioRef} />
      </div>
    </div>
  );
};

const AudioSpritePlayerTwo = ({ volume }) => {
  const [currentSongTitleTwo, setCurrentSongTitleTwo] = useState("");
  const [disabledTwo, setDisabledTwo] = useState(false);
  const audioRefTwo = React.useRef(null);

  const playAudioSpriteTwo = (soundUrlTwo, titleTwo) => {
    audioRefTwo.current.src = soundUrlTwo;
    audioRefTwo.current.play();
    setCurrentSongTitleTwo(titleTwo);
  };
  const shutDownTwo = () => {
    setDisabledTwo(!disabledTwo);
  };

  useEffect(() => {
    audioRefTwo.current.volume = volume / 100;
  }, [volume]);

  return (
    <div className="flex flex-col justify-center text-4xl text-white items-center sm:flex-row-reverse ">
      {currentSongTitleTwo && (
        <div className="w-full bg-slate-800 flex items-center justify-center  h-96  backdrop-blur-sm">
          {currentSongTitleTwo}

          <label class="fixed right-5 top-5 cursor-pointer">
            <input
              type="checkbox"
              class="sr-only peer"
              onChange={shutDownTwo}
            />
            <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>
      )}

      <div
        className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-96 bg-gray-900"
        id="display"
      >
        {drumPads.map((sample, index) => (
          <button
            disabled={disabledTwo}
            className="shadow-xl hover:opacity-5"
            key={index}
            onClick={() => {
              playAudioSpriteTwo(sample.soundUrlTwo, sample.titleTwo);
            }}
          >
            {sample.keycap}
          </button>
        ))}
        <audio ref={audioRefTwo} />
      </div>
    </div>
  );
};

export default function App() {
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [volume, setVolume] = useState(50);

  const handleToggle = () => {
    setShowFirstComponent(!showFirstComponent);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value);
    setVolume(newVolume);
  };

  return (
    <div
      id="drum-machine"
      className="m-10 sm:m-20 tracking-wider text-6xl border-orange-500 border-8 bg-gray-900"
    >
      {showFirstComponent ? (
        <AudioSpritePlayer volume={volume} />
      ) : (
        <AudioSpritePlayerTwo volume={volume} />
      )}
      <div
        className="flex bg-gray-900 h-52 w-full justify-between
      p-10 "
      >
        <label class="relative cursor-pointer">
          <input
            type="checkbox"
            class="sr-only peer"
            checked={showFirstComponent}
            onChange={handleToggle}
          />
          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>

        <label className="block mb-2 text-sm font-medium">
          <input
            className="h-3 bg-orange-500 rounded-lg appearance-none cursor-pointer range-lg"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
          />
        </label>
      </div>
    </div>
  );
}
