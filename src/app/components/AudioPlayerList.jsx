"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AudioPlayer from "./AudioPlayer";
import SharePopup from "./SharePopup";

const audioTracks = [
  // List of audio tracks...
  {
    src: '/m1.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 1: AI-Driven Pre-Construction Processes with Jon Sibley',
    description: 'In this episode of the Construction Disruption podcast...',
    date: 'May 29, 2024',
    duration: 2256,
    episodeNumber: 122,
    fileSize: 45.92,
  },
  {
    src: '/m2.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 2: Architect to the Stars with David Applebaum',
    description: 'Join us as we discuss the latest advancements in sustainable building materials...',
    date: 'May 29, 2024',
    duration: 3635,
    episodeNumber: 123,
    fileSize: 45.92,
  },
  {
    src: '/m3.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 3: Human-Centric Architecture with Ali Heshmati',
    description: 'Exploring the role of AI in the development of smart cities...',
    date: 'May 29, 2024',
    duration: 2444,
    episodeNumber: 124,
    fileSize: 45.92,
  },
  {
    src: '/m4.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 4: Overcoming Addiction Through Faith with Kevin Krestinski',
    description: 'How robotics is transforming the construction industry...',
    date: 'May 29, 2024',
    duration: 2727,
    episodeNumber: 125,
    fileSize: 45.92,
  },
  {
    src: '/m5.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 5: Remodeling Trends and Homeowner Motivations with Eric Finnigan',
    description: 'The impact of virtual reality on architectural design...',
    date: 'May 29, 2024',
    duration: 2749,
    episodeNumber: 126,
    fileSize: 45.92,
  },
  {
    src: '/m1.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 6: AI-Driven Pre-Construction Processes with Jon Sibley',
    description: 'In this episode of the Construction Disruption podcast...',
    date: 'May 29, 2024',
    duration: 2256,
    episodeNumber: 127,
    fileSize: 45.92,
  },
  {
    src: '/m2.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 7: Architect to the Stars with David Applebaum',
    description: 'Join us as we discuss the latest advancements in sustainable building materials...',
    date: 'May 29, 2024',
    duration: 3635,
    episodeNumber: 128,
    fileSize: 45.92,
  },
  {
    src: '/m3.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 8: Human-Centric Architecture with Ali Heshmati',
    description: 'Exploring the role of AI in the development of smart cities...',
    date: 'May 29, 2024',
    duration: 2444,
    episodeNumber: 129,
    fileSize: 45.92,
  },
  {
    src: '/m4.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 9: Overcoming Addiction Through Faith with Kevin Krestinski',
    description: 'How robotics is transforming the construction industry...',
    date: 'May 29, 2024',
    duration: 2727,
    episodeNumber: 130,
    fileSize: 45.92,
  },
  {
    src: '/m5.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 10: Remodeling Trends and Homeowner Motivations with Eric Finnigan',
    description: 'The impact of virtual reality on architectural design...',
    date: 'May 29, 2024',
    duration: 2749,
    episodeNumber: 131,
    fileSize: 45.92,
  },
  {
    src: '/m1.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 11: AI-Driven Pre-Construction Processes with Jon Sibley',
    description: 'In this episode of the Construction Disruption podcast...',
    date: 'May 29, 2024',
    duration: 2256,
    episodeNumber: 132,
    fileSize: 45.92,
  },
  {
    src: '/m2.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 12: Architect to the Stars with David Applebaum',
    description: 'Join us as we discuss the latest advancements in sustainable building materials...',
    date: 'May 29, 2024',
    duration: 3635,
    episodeNumber: 133,
    fileSize: 45.92,
  },
  {
    src: '/m3.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 13: Human-Centric Architecture with Ali Heshmati',
    description: 'Exploring the role of AI in the development of smart cities...',
    date: 'May 29, 2024',
    duration: 2444,
    episodeNumber: 134,
    fileSize: 45.92,
  },
  {
    src: '/m4.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 14: Overcoming Addiction Through Faith with Kevin Krestinski',
    description: 'How robotics is transforming the construction industry...',
    date: 'May 29, 2024',
    duration: 2727,
    episodeNumber: 135,
    fileSize: 45.92,
  },
  {
    src: '/m5.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 15: Remodeling Trends and Homeowner Motivations with Eric Finnigan',
    description: 'The impact of virtual reality on architectural design...',
    date: 'May 29, 2024',
    duration: 2749,
    episodeNumber: 136,
    fileSize: 45.92,
  },
  {
    src: '/m1.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 16: AI-Driven Pre-Construction Processes with Jon Sibley',
    description: 'In this episode of the Construction Disruption podcast...',
    date: 'May 29, 2024',
    duration: 2256,
    episodeNumber: 137,
    fileSize: 45.92,
  },
  {
    src: '/m2.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 17: Architect to the Stars with David Applebaum',
    description: 'Join us as we discuss the latest advancements in sustainable building materials...',
    date: 'May 29, 2024',
    duration: 3635,
    episodeNumber: 138,
    fileSize: 45.92,
  },
  {
    src: '/m3.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 18: Human-Centric Architecture with Ali Heshmati',
    description: 'Exploring the role of AI in the development of smart cities...',
    date: 'May 29, 2024',
    duration: 2444,
    episodeNumber: 139,
    fileSize: 45.92,
  },
  {
    src: '/m4.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 19: Overcoming Addiction Through Faith with Kevin Krestinski',
    description: 'How robotics is transforming the construction industry...',
    date: 'May 29, 2024',
    duration: 2727,
    episodeNumber: 140,
    fileSize: 45.92,
  },
  {
    src: '/m5.mp3',
    thumbnail: 'kunal.png',
    title: 'Episode 20: Remodeling Trends and Homeowner Motivations with Eric Finnigan',
    description: 'The impact of virtual reality on architectural design...',
    date: 'May 29, 2024',
    duration: 2749,
    episodeNumber: 141,
    fileSize: 45.92,
  }
];

const AudioPlayerList = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const showLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 5, 5));
    setSelectedTrack(null);
  };

  const closeAll = () => {
    setVisibleCount(5);
    setSelectedTrack(null);
  };

  return (
    <div>
      <div className="bg-gray-900 text-white py-4">
        <h2 className="text-center text-2xl font-semibold">Episodes</h2>
      </div>
      <AnimatePresence>
        {audioTracks.slice(0, visibleCount).map((track, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AudioPlayer
              audioSrc={track.src}
              thumbnail={track.thumbnail}
              title={track.title}
              description={track.description}
              date={track.date}
              duration={track.duration}
              episodeNumber={track.episodeNumber}
              fileSize={track.fileSize}
              onShare={() => setSelectedTrack(track)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="flex justify-center my-4">
        {visibleCount < audioTracks.length && (
          <button onClick={loadMore} className="bg-yellow-500 py-2 text-black font-Poppins font-bold mt-10  hover:bg-yellow-600  rounded-full text-sm px-8 text-center me-2 mb-2 dark:focus:ring-yellow-900 hover:underline">
            Load More
          </button>
        )}
        {visibleCount > 5 && (
          <button onClick={showLess} className="bg-blue-500 py-2 text-black font-Poppins font-bold mt-10  hover:bg-blue-700  rounded-full text-sm px-8 text-center me-2 mb-2 dark:focus:ring-yellow-900 hover:underline">
            Show Less
          </button>
        )}
        <button onClick={closeAll} className="bg-red-500 py-2 text-black font-Poppins font-bold mt-10  hover:bg-red-700  rounded-full text-sm px-8 text-center me-2 mb-2 dark:focus:ring-yellow-900 hover:underline">
          Close All
        </button>
      </div>
      {selectedTrack && (
        <SharePopup
          audioLink={selectedTrack.src}
          thumbnail={selectedTrack.thumbnail}
          title={selectedTrack.title}
          description={selectedTrack.description}
          onClose={() => setSelectedTrack(null)}
        />
      )}
    </div>
  );
};

export default AudioPlayerList;
