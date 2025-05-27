/** @format */

import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const icons = [
  { icon: <Facebook size={16} />, href: "https://facebook.com" },
  { icon: <Twitter size={16} />, href: "https://twitter.com" },
  { icon: <Linkedin size={16} />, href: "https://linkedin.com" },
  { icon: <Instagram size={16} />, href: "https://instagram.com" },
  { icon: <Youtube size={16} />, href: "https://youtube.com" },
];

const SocialIcons = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
