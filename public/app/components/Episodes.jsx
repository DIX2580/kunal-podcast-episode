import React from "react";

const ProjectCard = () => {
  return (
    <div className="text-white episode font-Poppins">
      <div className="container flex flex-col  mx-auto p-8">
        <div className="">
          <div className="flex bg-contain top-0 md:ml-20 ml-4 mr-4">
          <div className="bg-yellow-400 text-black font-bold py-2 px-4">
            Latest Episode
           </div>
          </div>

        </div>
        <div className="flex items-center place-content-center top-0 md:ml-20 ml-4 mr-4 md:mt-0 mt-5 space-x-0 md:space-x-5">
          <div className="justify-items-center">
            <iframe
              width="auto"
              height="auto"
              src="https://www.youtube.com/embed/9KJJQzDBsj0?si=IdBejZ9R0b7MK4_t"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
