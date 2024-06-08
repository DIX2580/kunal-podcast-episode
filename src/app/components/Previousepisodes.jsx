"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Videos = () => {
  const initialVideos = [
    { id: 1, src: "https://www.youtube.com/embed/JhrcCr0LsGk?si=Udoqs4aaO8-5bqMY" },
    { id: 2, src: "https://www.youtube.com/embed/zXC6-mkC9cI?si=3kfM_vFPcNcoQazg" },
    { id: 3, src: "https://www.youtube.com/embed/UHoaIZmhK_o?si=G6sHavH3C4BSvSJw" },
  ];

  const moreVideos = [
    { id: 4, src: "https://www.youtube.com/embed/p67DOPfxm5c?si=uWkINeos-N8Taw-F" },
    { id: 5, src: "https://www.youtube.com/embed/nvefYHPEZ-A?si=nhmUnDiO6IfD8C6u" },
    { id: 6, src: "https://www.youtube.com/embed/-6aFLghjj34?si=tFzZsHDNCuF4RfFw" },
    { id: 7, src: "https://www.youtube.com/embed/BOCoXy55cO4?si=7lhjEJufNB6IFPeM" },
    { id: 8, src: "https://www.youtube.com/embed/t2XusdE-0v4?si=1qKZKFahTD8c6c_e" },
    { id: 9, src: "https://www.youtube.com/embed/JhrcCr0LsGk?si=Udoqs4aaO8-5bqMY" },
    { id: 10, src: "https://www.youtube.com/embed/p67DOPfxm5c?si=uWkINeos-N8Taw-F" },
    { id: 11, src: "https://www.youtube.com/embed/nvefYHPEZ-A?si=nhmUnDiO6IfD8C6u" },
    { id: 12, src: "https://www.youtube.com/embed/-6aFLghjj34?si=tFzZsHDNCuF4RfFw" },
    { id: 13, src: "https://www.youtube.com/embed/BOCoXy55cO4?si=7lhjEJufNB6IFPeM" },
    { id: 14, src: "https://www.youtube.com/embed/t2XusdE-0v4?si=1qKZKFahTD8c6c_e" },
    { id: 15, src: "https://www.youtube.com/embed/JhrcCr0LsGk?si=Udoqs4aaO8-5bqMY" },
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

  const closeAllVideos = () => {
    setVideos(initialVideos);
    setVideoIndex(0);
  };

  return (
    <div className="text-center py-8">
      <h4 className="text-lg font-Poppins font-bold text-amber-400">Listen To Our</h4>
      <h1 className="text-white mb-4 text-4xl font-Poppins font-bold">Previous Episodes</h1>
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
              className="py-2 text-black font-Poppins font-bold mt-10 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-8 text-center me-2 mb-2 dark:focus:ring-yellow-900 hover:underline"
              onClick={loadMoreVideos}
            >
              Load More
            </button>
          )}
          {videoIndex > 0 && (
            <button
              className="py-2 text-black font-Poppins font-bold mt-10 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-8 text-center me-2 mb-2 dark:focus:ring-yellow-900 hover:underline"
              onClick={showLessVideos}
            >
              Show Less
            </button>
          )}
          {videoIndex > 0 && (
            <button
              className="py-2 text-black font-Poppins font-bold mt-10 bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full text-sm px-8 text-center me-2 mb-2 dark:focus:ring-red-900 hover:underline"
              onClick={closeAllVideos}
            >
              Close All
            </button>
        )}
      </div>
    </div>
  );
};

export default Videos;