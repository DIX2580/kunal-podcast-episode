"use client"


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Videos = () => {
  const initialVideos = [
    { id: 1, src: "https://www.youtube.com/embed/AJCfETtP4MU?si=__wcJR3m0EBaXoin" },
    { id: 2, src: "https://www.youtube.com/embed/i2xxhRTs5Uc?si=mNo1aHr0s2o6SMlX" },
    { id: 3, src: "https://www.youtube.com/embed/rTzjYO3N3rQ?si=2YonFxCfv1jdnZsl" },
  ];

  const moreVideos = [
    { id: 4, src: "https://www.youtube.com/embed/Pv91eiIcAno?si=HlS5MGuQ4PQJYEdU" },
    { id: 5, src: "https://www.youtube.com/embed/F6PqxbvOCUI?si=lgSyRVOmVtlePqCj" },
    { id: 6, src: "https://www.youtube.com/embed/gnK_6sFRX8g?si=RFB-okNNwPlWnI3W" },
    { id: 7, src: "https://www.youtube.com/embed/2d5-SzWQ-2k?si=-ACxy4pDdJ8eh-KV" },
    { id: 8, src: "https://www.youtube.com/embed/AKVpL-thdEQ?si=qeeVFFFugIf6J3_5" },
    { id: 9, src: "https://www.youtube.com/embed/9E9bscLGTAA?si=cOwt7mW0LjNDyo_l" },
    
  ];

  const [videos, setVideos] = useState(initialVideos);
  const [videoIndex, setVideoIndex] = useState(0);

  const loadMoreVideos = () => {
    const nextVideos = moreVideos.slice(videoIndex, videoIndex + 3);
    setVideos((prevVideos) => [...prevVideos, ...nextVideos]);
    setVideoIndex(videoIndex + 3);
  };

  const showLessVideos = () => {
    const newVideoIndex = videoIndex - 3;
    const updatedVideos = videos.slice(0, initialVideos.length + newVideoIndex);
    setVideos(updatedVideos);
    setVideoIndex(newVideoIndex);
  };

  return (
    <div className="text-center py-8">
      <h4 className="text-lg font-Poppins font-bold text-amber-400 ">Listen To Our</h4>
      <h1 className="text-white mb-4 text-4xl font-Poppins font-bold ">Previous Episodes</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <AnimatePresence>
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="flex-shrink-0 p-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                className="w-full h-32 md:h-40 lg:h-48"
                src={video.src}
                title={`YouTube video player ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-8 gap-4">
        {videoIndex < moreVideos.length && (
          <button
            className=" py-2 text-black font-Poppins font-bold mt-10 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-8  text-center me-2 mb-2 dark:focus:ring-yellow-900 hover:underline"
            onClick={loadMoreVideos}
          >
            Load More
          </button>
        )}
        {videoIndex > 0 && (
          <button
            className="py-2 text-black font-Poppins font-bold mt-10 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-8  text-center me-2 mb-2 dark:focus:ring-yellow-900 hover:underline"
            onClick={showLessVideos}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Videos;