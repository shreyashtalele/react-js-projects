import { useEffect, useState } from "react";

export const Profile = () => {
  const [username, setuserName] = useState("");
  const [Data, setData] = useState({});

  const handleSubmit = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((data) => data.json())
      .then((data) => setData(data));

    console.log(Data);
  };

  useEffect(() => {
    document.title = `${Data.login}'s Profile `;
  }, [Data]);

  const handleInput = (e) => {
    console.log(e.target.value);
    setuserName(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          GitHub Profile Finder
        </h1>

        <div className="flex gap-3">
          <input
            type="text"
            value={username}
            onChange={handleInput}
            placeholder="Enter GitHub Username"
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            onClick={() => handleSubmit(username)}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition duration-300"
          >
            Fetch
          </button>
        </div>

        <div className="mt-8 bg-gray-700 rounded-xl p-6 min-h-[220px] flex items-center justify-center border border-gray-600">
          <div className="text-gray-400">
            <h5>Login Name : {Data.login}</h5>
            <h5>Follower :{Data.followers}</h5>
            <h5>Public Repos :{Data.public_repos}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
