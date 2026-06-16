import React from "react";

export const Card = ({
  username,
  imgsrc,
  role,
  summary,
  posts,
  followers,
  following,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        {/* Cover */}
        <div className="h-24 bg-linear-to-r from-blue-500 to-purple-500"></div>

        {/* Profile Image */}
        <div className="flex justify-center -mt-12">
          <img
            src={imgsrc}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* User Info */}
        <div className="text-center p-5">
          <h2 className="text-xl font-bold text-black"> {username}</h2>

          <p className="text-sm text-blue-500 font-medium mt-1">{role}</p>

          <p className="text-gray-600 text-sm mt-3">{summary}</p>

          {/* Stats */}
          <div className="flex justify-around mt-5 border-t pt-4">
            <div>
              <h3 className="font-bold text-lg">120</h3>
              <p className="text-gray-500 text-sm">{posts}</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">5.2K</h3>
              <p className="text-gray-500 text-sm">{followers}</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">450</h3>
              <p className="text-gray-500 text-sm">{following}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-5">
            <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Follow
            </button>

            <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
