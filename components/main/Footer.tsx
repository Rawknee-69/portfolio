import React from "react";
import Image from "next/image";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer glow-on-hover">
              <FaYoutube />
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">😎</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer glow-on-hover">
              <RxGithubLogo />
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">Rawknee-69</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer glow-on-hover">
              <RxDiscordLogo />
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">rawknee.69</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer glow-on-hover">
              <RxInstagramLogo />
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">rawknee.69</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer glow-on-hover">
              <RxTwitterLogo />
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">rawknee.69</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer glow-on-hover">
              <Image
                src="/snapchats.png" // Replace with the correct path to your Snapchat logo
                alt="Snapchat Logo"
                width={24}
                height={24}
              />
              <a
                href="https://www.snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px]">rawknee.69</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer glow-on-hover">
              <a href="#become-sponsor">
                <span className="text-[15px] ml-[6px]">Become Sponsor</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer glow-on-hover">
              <a href="#learning-about-me">
                <span className="text-[15px] ml-[6px]">wanna know about me</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer glow-on-hover">
              <a href="mailto:rawknee.6069@gmail.com">
                <span className="text-[15px] ml-[6px]">
                  rawknee.6069@gmail.com
                </span>
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Srijan Raj 2023. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
