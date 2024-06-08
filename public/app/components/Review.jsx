// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const reviews = [
    {
      name:"Aarav Sharma",
      title: "Great and Timely Content!",
      content: "Glad to see that this podcast addresses staying on top of market changes, trends and best practices from forward thinkers! Thanks for the continued great content!"
    },
    {
      name:  "Zoya Khanna",
      title:"Incredible Insights!",
      content:"I have learned so much from this podcast. It's truly incredible!"
    },
    {
      name:  "Aryan Verma",
      title: "Super relevant",
      content:     "This podcast has inspired me to think differently and strive for greatness!",
    },
    {
      name:  "Ananya Desai",
      title: "Great variety and forward thinking",
      content: "It's good to see a podcast dedicated to those who are serious about the future of construction. So far the guests have covered great topics including the subject of change, building science and safety, and new product development. Looking forward to future episodes and learning more about what's to come in construction."
    },
    {
      name:  "Kabir Shah",
      title: "Great a!",
      content: "Glad Thanks for the continued great content!"
    },
    {
      name:   "Riya Kumar",
      title: "Great guests with faaried insight into the future of building and remodeling!",
      content: "Great li the job site."
    },
    {
      name:  "Ishaan Gupta",
      title: "Super fsdfsdsdrelevant",
      content: "I've been a fan of podcasts for years, and this one stands out from the rest. The topics are diverse, the guests are top-notch, and the hosts have a genuine chemistry that makes for compelling listening"
    },
    {
      name:  "Neha Reddy",
      title: "Great thinking",
      content: "This podcast has reignited my passion for learning. I appreciate the depth of research that goes into each episode, as well as the engaging way the hosts present the material."
    },
    {
      name:  "Arjun Singh",
      title: "Discovering Truths!",
      content: "I can't get enough of this podcast! Whether I'm commuting to work or doing chores around the house, it's always on in the background. Such a great way to stay informed and entertained."
    },
    {
      name:   "Naman Rath",
      title: "Great guestht into the future of building and remodeling!",
      content: "Greate job site."
    },
    {
      name:  "Surya Sen",

      title: "Insightful Conversations",
      content: "Great lison the way to loremsdfsffeaf the job site."
    },
    {
      name:   "Ankit Barma",
      title: "Great  thinking",
      content: "It's good toe and safety, and new product development. Looking forward to future episodes and learning more about what's to come in construction."
    }  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < reviews.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Animation controls and in-view detection
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  if (inView) {
    controls.start('visible');
  }

  // Variants for animation
  const textVariant = {
    hidden: { opacity: 0, y: 5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="min-h-screen episode text-white flex flex-col items-center justify-center px-4 md:px-20 py-6">
      <Head>
        <title>Reviews</title>
      </Head>
      <div className="text-center" ref={ref}>
        <motion.h1
          className="text-3xl font-bold mb-4 text-yellow-400"
          initial="hidden"
          animate={controls}
          custom={0}
          variants={textVariant}
        >
          We Love Your Reviews
        </motion.h1>
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial="hidden"
          animate={controls}
          custom={1}
          variants={textVariant}
        >
          What People Are Saying
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.slice(currentIndex, currentIndex + 4).map((review, index) => (
            <ReviewCard key={index} name={review.name} title={review.title} content={review.content} />
          ))}
        </div>
        <div className="flex mt-10 w-full justify-between">
          <button onClick={handlePrevious} className="bg-yellow-400 text-black py-2 px-6 rounded-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-11.293a1 1 0 010 1.414L9.414 10l2.293 2.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Previous
          </button>
          <button onClick={handleNext} className="bg-yellow-400 text-black py-2 px-6 rounded-full flex items-center">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-5.293a1 1 0 010-1.414L10.586 10 8.293 7.707a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ name, title, content }) {
  return (
    <div className="p-6 rounded-lg bg-gray-800">
      <p className="text-yellow-400 font-Poppins font-bold underline p-10">{name}</p>
      <div className="flex items-center place-content-evenly mb-4">
        <StarRating />
      </div>
      <h3 className="text-sm font-Poppins font-bold mb-2 underline">{title}</h3>
      <p className="text-sm font-Poppins font-bold font-mono">{content}</p>
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex space-x-2">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-yellow-400"
        >
          <path d="M9.049.325a1 1 0 011.902 0l1.86 5.7a1 1 0 00.95.69h6.027c.969 0 1.371 1.24.588 1.81l-4.89 3.558a1 1 0 00-.364 1.118l1.86 5.7c.303.926-.755 1.696-1.54 1.118L10 14.347l-4.49 3.252c-.784.578-1.842-.192-1.539-1.118l1.86-5.7a1 1 0 00-.364-1.118L.575 8.525C-.207 7.955.196 6.715 1.165 6.715h6.027a1 1 0 00.95-.69L9.049.325z" />
        </svg>
      ))}
    </div>
  );
}
