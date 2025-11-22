import React from "react";
import { motion } from "framer-motion";

export default function App() {
  // ADD YOUR LINKS HERE:
  const audioURL = "https://docs.google.com/uc?export=download&id=1fcq5O1noEUZApx6XoLLn4k4299oFCAnD";
  const youtubeURL = "YOUR_YOUTUBE_LINK_HERE"; 
  const googleDriveVideoURL = "YOUR_GOOGLE_DRIVE_VIDEO_PREVIEW_LINK_HERE"; 

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-white flex flex-col items-center justify-center p-6"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-rose-600 text-center mb-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Happy 6 Month Anniversary My Love ❤️
      </motion.h1>

      {/* Sweet Message */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-xl text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I want you to remember always…  
        No matter how life feels, no matter how heavy the moments become —  
        <b>I’ll always be with you, holding your heart, comforting you, loving you endlessly.</b>  
        You’re never alone, my love. 💕
      </motion.p>

      {/* Surah Box */}
      <motion.div
        className="bg-white shadow-xl rounded-3xl p-8 max-w-xl text-center border border-rose-200 mb-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-rose-500 mb-4">
          Surah Ad-Duha — For Comfort & Peace 🌿
        </h2>

        <p
          className="text-xl leading-loose text-gray-800"
          style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
        >
          وَالضُّحَىٰ  
          <br />وَاللَّيْلِ إِذَا سَجَىٰ  
          <br />مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ  
          <br />وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ  
          <br />وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ  
        </p>

        <p className="mt-6 text-gray-600 italic">
          “Your Lord has not abandoned you, nor does He hate you.”  
        </p>
      </motion.div>

      {/* Audio Player */}
      {audioURL && (
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg border border-rose-200 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-rose-500 mb-3">
            Listen to something soothing 🎧
          </h3>
          <audio controls src={audioURL} className="w-full rounded-lg"></audio>
        </motion.div>
      )}

      {/* YouTube Video */}
      {youtubeURL && (
        <motion.div
          className="w-full max-w-2xl aspect-video mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <iframe
            className="w-full h-full rounded-3xl shadow-xl border border-rose-200"
            src={youtubeURL.replace("watch?v=", "embed/")}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </motion.div>
      )}

      {/* Google Drive Video */}
      {googleDriveVideoURL && (
        <motion.div
          className="w-full max-w-2xl aspect-video mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <iframe
            className="w-full h-full rounded-3xl shadow-xl border border-rose-200"
            src={googleDriveVideoURL}
            allow="autoplay"
          ></iframe>
        </motion.div>
      )}
    </div>
  );
}
