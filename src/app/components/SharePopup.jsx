import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaPinterest, FaWhatsapp, FaTelegram, FaReddit } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const SharePopup = ({ audioLink, thumbnail, title, description, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(audioLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Hide the message after 2 seconds
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="bg-gray-900 p-6 rounded-lg text-white relative transform transition-transform duration-300 max-w-lg w-full"
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-4 md:mb-0 md:mr-4">
              <img src={thumbnail} alt="Podcast" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm mb-4">{description}</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 mt-4">
            <a href={`https://twitter.com/share?url=${audioLink}`} target="_blank" rel="noopener noreferrer" className="text-3xl p-2 rounded-3xl hover:bg-yellow-400">
              <FaTwitter />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${audioLink}`} target="_blank" rel="noopener noreferrer" className="text-3xl p-2 rounded-3xl hover:bg-yellow-400">
              <FaFacebook />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${audioLink}`} target="_blank" rel="noopener noreferrer" className="text-3xl p-2 rounded-3xl hover:bg-yellow-400">
              <FaLinkedin />
            </a>
            <a href={`https://pinterest.com/pin/create/button/?url=${audioLink}`} target="_blank" rel="noopener noreferrer" className="text-3xl p-2 rounded-3xl hover:bg-yellow-400">
              <FaPinterest />
            </a>
            <a href={`https://wa.me/?text=${audioLink}`} target="_blank" rel="noopener noreferrer" className="text-3xl p-2 rounded-3xl hover:bg-yellow-400">
              <FaWhatsapp />
            </a>
            <a href={`https://telegram.me/share/url?url=${audioLink}`} target="_blank" rel="noopener noreferrer" className="text-3xl p-2 rounded-3xl hover:bg-yellow-400">
              <FaTelegram />
            </a>
            <a href={`https://www.reddit.com/submit?url=${audioLink}`} target="_blank" rel="noopener noreferrer" className="text-3xl p-2 rounded-3xl hover:bg-yellow-400">
              <FaReddit />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center mt-4">
            <input type="text" value={audioLink} readOnly className="bg-gray-800 text-white p-2 rounded w-full sm:w-auto" />
            <button onClick={handleCopy} className="mt-2 sm:mt-0 sm:ml-2 p-2 bg-gray-700 rounded">
              Copy
            </button>
          </div>
          {isCopied && <div className="mt-2 text-green-500">Copied!</div>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SharePopup;
