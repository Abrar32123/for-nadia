/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronRight, Sparkles } from 'lucide-react';

const messages = [
  {
    title: "নাদিয়া...",
    content: "এই ওয়েবসাইটটা বানানোর সময় আমি একটা কথাই ভাবছিলাম...\nহয়তো তুমি এখন আমার উপর একটু রাগ করে আছো।\nহয়তো কথা বলতে ইচ্ছে করছে না।\n\nকিন্তু আমি চাই তুমি এই কয়টা মেসেজ শুধু শান্ত হয়ে পড়ো।\n\nকারণ এগুলা শুধু লেখা না...\nএগুলা আমার হৃদয়ের ভেতরের কথা।"
  },
  {
    title: "তুমি কি জানো…",
    content: "১৫ ডিসেম্বর ২০২৩\nআমি প্রথম তোমাকে দেখি।\n\nতুমি আমাকে দেখোনি।\nকিন্তু আমি তোমাকে দেখেছিলাম।\n\nভিডিও কলে তোমাকে প্রথম দেখার পর\nআমার মনে হয়েছিল...\n\nএই মেয়েটা অন্যরকম।\n\nআমি তখনও জানতাম না\nএই মেয়েটাই একদিন আমার জীবনের এত বড় একটা অংশ হয়ে যাবে।"
  },
  {
    title: "তারপর মে ২০২৪…",
    content: "আমরা Facebook এ কথা বলা শুরু করলাম।\n\nছোট ছোট কথা\nহাসি\nমজা\nস্টোরি\nডিজাইন\n\nআমি যখন তোমার ছবি Photoshop এ edit করেছিলাম\nআর তুমি যখন বলেছিলে \"অনেক সুন্দর হয়েছে\"\n\nসেই ছোট একটা কথায়\nআমি অনেক খুশি হয়েছিলাম।"
  },
  {
    title: "তারপর সেই দিনটা…",
    content: "২ জুন ২০২৪\n\nযেদিন তুমি আমাকে propose করেছিলে।\n\nসত্যি বলতে আমি অবাক হয়ে গেছিলাম।\n\nকারণ আমি ভাবতেও পারিনি\nতুমিও আমাকে এতটা অনুভব করো।"
  },
  {
    title: "তারপর ১২ জুন…",
    content: "তুমি চট্টগ্রাম যাচ্ছিলে\nদাদুর বাড়ি ঈদ করতে।\n\nআমি চেয়েছিলাম শুধু ৫ মিনিট\nফেনী স্টেশনে তোমাকে দেখতে।\n\nকিন্তু সেদিন বৃষ্টি ছিল\nআর আমি বের হতে পারিনি।\n\nসেই দিনটা আমার খুব খারাপ লেগেছিল।"
  },
  {
    title: "তারপর আমি সিদ্ধান্ত নিই...",
    content: "আমি চট্টগ্রাম যাব।\n\n১৮ জুন সকালে\nআমি কাউকে না বলে তোমার শহরে চলে যাই।\n\nযখন তোমার বাসায় তোমাকে প্রথম সামনে দেখলাম…\n\nতোমার হাত কাঁপছিল\nচা দিচ্ছিলে।\n\nআর আমার হৃদয়ও তখন কাঁপছিল।"
  },
  {
    title: "সেই সুন্দর স্মৃতি…",
    content: "সেদিন আমরা রিকশায় ঘুরেছিলাম।\n\nনদীর পাশে বসেছিলাম।\n\nতুমি আর আমি\nএকসাথে আইসক্রিম খেয়েছিলাম।\n\nআর বৃষ্টিতে ভিজেছিলাম।\n\nআমাদের জীবনের\nসবচেয়ে সুন্দর দিনগুলোর একটা ছিল সেই দিন।"
  },
  {
    title: "তুমি জানো নাদিয়া…",
    content: "তোমার সাথে কাটানো ছোট ছোট মুহূর্তগুলোই\nআমার জীবনের বড় সুখ।\n\nরাস্তায় হাঁটা\nচা খাওয়া\nতোমার ছবি তোলা\nতোমার হাসি দেখা\n\nএইসব জিনিস আমার কাছে খুব মূল্যবান।"
  },
  {
    title: "গতকাল রাত…",
    content: "গতকাল রাতে আমাদের কথা হয়নি।\n\nহয়তো ভুল বোঝাবুঝি হয়েছে।\n\nহয়তো আমি ভুল করেছি।\n\nকিন্তু একটা কথা সত্যি…\n\nআমি কখনো ইচ্ছা করে তোমাকে কষ্ট দিতে চাই না।"
  },
  {
    title: "নাদিয়া…",
    content: "যদি তুমি এই পর্যন্ত পড়ে থাকো\nতাহলে শুধু একটা কথা বলবো।\n\nরাগ করলে করো\nকিন্তু দয়া করে আমার সাথে কথা বলা বন্ধ করো না।\n\nকারণ তুমি না থাকলে\nআমার পৃথিবীটা অনেক ফাঁকা লাগে।\n\nআমি এখনও তোমাকে আগের মতোই ভালোবাসি।\n\n– Abrar ❤️"
  }
];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="heart fill-current"
          style={{
            left: heart.left,
            width: heart.size,
            height: heart.size,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            bottom: '-50px'
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [index, setIndex] = useState(0);
  const isLast = index === messages.length - 1;

const playSound = (type: 'click' | 'transition') => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      }
    } catch (e) {
      console.error('Audio error:', e);
    }
  };

  const nextMessage = () => {
    if (index < messages.length - 1) {
      playSound('click');
      setTimeout(() => playSound('transition'), 100);
      setIndex(index + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative font-sans">
      <div className="atmosphere" />
      <FloatingHearts />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full glass-card rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-rose-500 opacity-50" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-rose-400">
              <Sparkles size={20} className="animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold opacity-70">A Message for You</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-white">
              {messages[index].title}
            </h1>

            <div className="horizontal-line h-px bg-white/10 w-full" />

            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light whitespace-pre-line">
              {messages[index].content}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-between">
          <div className="flex gap-1">
            {messages.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-rose-500' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextMessage}
            disabled={isLast}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              isLast 
                ? 'bg-white/5 text-white/30 cursor-default' 
                : 'bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/20'
            }`}
          >
            {isLast ? 'The End ❤️' : 'Next Message'}
            {!isLast && <ChevronRight size={18} />}
          </motion.button>
        </div>
      </motion.div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-[10px] uppercase tracking-[0.3em] font-medium">
        Crafted with Love for Nadia
      </div>
    </div>
  );
}
