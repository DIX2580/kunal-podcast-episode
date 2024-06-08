"use client";
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp, FaDownload, FaShareAlt } from 'react-icons/fa';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeVolume = () => {
    setVolume(volume === 1 ? 0 : 1);
    audioRef.current.volume = volume === 1 ? 0 : 1;
  };

  const changePlaybackRate = (rate) => {
    setPlaybackRate(rate);
    audioRef.current.playbackRate = rate;
  };

  const skipTime = (seconds) => {
    audioRef.current.currentTime += seconds;
  };

  return (
    <div>
      <div className="bg-gray-900 text-white py-4">
        <h2 className="text-center text-2xl font-semibold">Episodes</h2>
      </div>
      <div className="bg-gray-900 text-white p-4 rounded-md  m-10 mx-auto">
        <div className="flex items-center">
          <img src="path-to-thumbnail.jpg" alt="Episode Thumbnail" className="w-16 h-16 rounded-md mr-4" />
          <div>
            <h3 className="text-lg font-semibold">AI-Driven Pre-Construction Processes with Jon Sibley</h3>
            <p className="text-sm">In this episode of the Construction Disruption podcast...</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button onClick={() => skipTime(-10)} className="p-2 rounded-full bg-yellow-500 text-black">
            <FaBackward />
          </button>
          <button onClick={togglePlayPause} className="p-2 rounded-full bg-yellow-500 text-black mx-2">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={() => skipTime(10)} className="p-2 rounded-full bg-yellow-500 text-black">
            <FaForward />
          </button>
          <button onClick={changeVolume} className="p-2 rounded-full bg-yellow-500 text-black ml-2">
            <FaVolumeUp />
          </button>
          <select 
            value={playbackRate} 
            onChange={(e) => changePlaybackRate(e.target.value)} 
            className="bg-gray-800 text-white p-1 rounded-md ml-2"
          >
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="1.75">1.75x</option>
            <option value="2">2x</option>
          </select>
          <a href="path-to-audio-file.mp3" download className="p-2 rounded-full bg-yellow-500 text-black ml-2">
            <FaDownload />
          </a>
          <button className="p-2 rounded-full bg-yellow-500 text-black ml-2">
            <FaShareAlt />
          </button>
        </div>
        <audio ref={audioRef} src="path-to-audio-file.mp3"></audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
