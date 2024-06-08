import React, { useState, useRef, useEffect } from 'react';
import {
  FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp,
  FaDownload, FaShareAlt, FaCalendarAlt, FaList, FaClock, FaFileDownload
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import SharePopup from './SharePopup';  // Import the SharePopup component

const AudioPlayer = ({ audioSrc, thumbnail, title, description, date, duration: trackDuration, episodeNumber, fileSize }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showVolumeControls, setShowVolumeControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(trackDuration);
  const [showSharePopup, setShowSharePopup] = useState(false);  // State for showing the share popup
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeVolume = (value) => {
    setVolume(value);
    audioRef.current.volume = value;
  };

  const changePlaybackRate = (rate) => {
    setPlaybackRate(rate);
    audioRef.current.playbackRate = rate;
  };

  const skipTime = (seconds) => {
    audioRef.current.currentTime += seconds;
  };

  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener('timeupdate', onTimeUpdate);
    audioElement.addEventListener('loadedmetadata', onLoadedMetadata);

    return () => {
      audioElement.removeEventListener('timeupdate', onTimeUpdate);
      audioElement.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTrackerChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md m-10 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
      {showSharePopup && (
        <SharePopup 
          audioLink={audioSrc} 
          thumbnail={thumbnail} 
          title={title} 
          description={description} 
          onClose={() => setShowSharePopup(false)} 
        />
      )}
      <div className="flex items-center space-x-2 mb-4 lg:mb-0">
        <button onClick={() => skipTime(-10)} className="p-2 rounded-full bg-yellow-500 text-black">
          <FaBackward />
        </button>
        <button onClick={togglePlayPause} className="p-2 rounded-full bg-yellow-500 text-black">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={() => skipTime(10)} className="p-2 rounded-full bg-yellow-500 text-black">
          <FaForward />
        </button>
      </div>

      <div className="flex-shrink-0">
        <img src={thumbnail} alt="Episode Thumbnail" className="w-40 h-40 md:w-56 md:h-56 rounded-2xl" />
      </div>

      <div className="flex-1 flex flex-col space-y-10">
        <div className="flex flex-wrap space-x-4 p-2 text-white">
          <div className="flex items-center space-x-2 mb-2 lg:mb-0">
            <FaCalendarAlt className="w-6 h-6" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2 mb-2 lg:mb-0">
            <FaList className="w-6 h-6" />
            <span>{episodeNumber}</span>
          </div>
          <div className="flex items-center space-x-2 mb-2 lg:mb-0">
            <FaClock className="w-6 h-6" />
            <span>{formatTime(duration)}</span>
          </div>
          <div className="flex items-center space-x-2 mb-2 lg:mb-0">
            <FaFileDownload className="w-6 h-6" />
            <span>{fileSize} MB</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>

        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100}
            onChange={handleTrackerChange}
            className="w-full h-2 bg-gray-700 rounded-md appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #FFC107 ${(currentTime / duration) * 100}%, #4B5563 0%)`
            }}
          />
          <div className="flex justify-between mt-1 text-xs">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 mt-4 lg:mt-0">
        <div className="relative hidden lg:block">
          <button onClick={() => setShowVolumeControls(!showVolumeControls)} className="p-2 rounded-full bg-yellow-500 text-black">
            <FaVolumeUp />
          </button>
          <AnimatePresence>
            {showVolumeControls && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 rounded-lg"
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => changeVolume(e.target.value)}
                  className="w-32 h-2 bg-gray-700 rounded-md appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #FFC107 ${volume * 100}%, #4B5563 0%)`
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <a
          href={audioSrc}
          download
          className="p-2 rounded-full bg-yellow-500 text-black"
        >
          <FaDownload />
        </a>
        <button
          onClick={() => setShowSharePopup(true)}
          className="p-2 rounded-full bg-yellow-500 text-black"
        >
          <FaShareAlt />
        </button>
      </div>

      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

export default AudioPlayer;
