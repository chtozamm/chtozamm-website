"use client";

import { motion } from "framer-motion";
import {
  GitHubIcon,
  InstagramIcon,
  MailIcon,
  TwitchIcon,
  YouTubeIcon,
} from "./icons";

const socialLinks: SocialLink[] = [
  {
    title: "chtozamm@gmail.com",
    href: "mailto:chtozamm@gmail.com",
    icon: <MailIcon />,
  },
  {
    title: "GitHub",
    href: "https://github.com/chtozamm",
    icon: <GitHubIcon />,
  },
  {
    title: "YouTube",
    href: "https://youtube.com/@chtozamm",
    icon: <YouTubeIcon />,
  },
  {
    title: "Instagram",
    href: "https://instagram.com/chtozamm",
    icon: <InstagramIcon />,
  },
  {
    title: "Twitch",
    href: "https://twitch.tv/chtozamm",
    icon: <TwitchIcon />,
  },
];

export default function Home() {
  setTimeout(() => {
    document.querySelector('html')!.style.overflowY = "auto"
  }, 1000)
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden bg-black px-6 pb-12 text-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <motion.span
            initial={{ y: "42vh", scale: 2 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ delay: 0.5, ease: "anticipate", duration: 1.5 }}
            className="pt-3.5 text-center text-6xl font-black tracking-tight sm:text-7xl"
          >
            MM
          </motion.span>
          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 1.4 }}
            className="h-0.5 w-full border-none bg-amber-400"
          />
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", delay: 1.5, duration: 1.5 }}
            className="my-4 max-w-md text-lg font-light leading-5 tracking-tight sm:text-2xl"
          >
            Hello there! My name is{" "}
            <strong className="font-semibold">Mark</strong>,<br /> and I&apos;m
            a <strong className="font-semibold">web developer</strong>, as well
            as
            <br /> a photographer, filmmaker and musician.
          </motion.p>
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", delay: 2.5, duration: 1.5 }}
            loop
            autoPlay
            // controls
            muted
            playsInline
            className="mt-2 w-full rounded-xl border-2 border-amber-400 "
            poster="placeholder-2.jpg"
          >
            <source src={"/introduction.mp4"} type="video/mp4" />
          </motion.video>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", delay: 3, duration: 1.5 }}
          className="text-md w-full mx-auto mt-4 flex max-w-xl flex-col gap-8 font-light leading-5 tracking-tight sm:text-lg"
        >
          <p className="border-s-2 border-amber-400 bg-zinc-900 py-3 pl-3">
            I&apos;m passionate about the creative side of things and
            enthusiastic about optimizing solutions. Knowledge is my kind of
            fuel, and I&apos;m always open to learning and exploring new fields.
            I&apos;m here to create{" "}
            <strong className="font-bold">
              modern, user-friendly websites
            </strong>{" "}
            and enhance existing ones.
          </p>
          <p className="border-s-2 border-amber-400 bg-zinc-900 py-3 pl-3">
            My goal is to turn <strong className="font-bold">your ideas</strong>{" "}
            into compelling digital experiences that stand out. Whether
            it&apos;s a stunning landing page, captivating online showcase, or
            engaging web application, I&apos;m dedicated to delivering
            top-quality results that exceed your expectations.
          </p>
          <p className="mt-4 text-center text-xl font-medium italic">
            Let&apos;s bring{" "}
            <strong className="font-black tracking-normal">your vision</strong>{" "}
            to life.
          </p>
          <p
            className="mx-auto my-6 max-w-md text-center text-3xl font-black
        uppercase leading-8 tracking-tight"
          >
            Contact me today,
            <br /> and let&apos;s
            <br />
            <i className="text-amber-400">create</i>&nbsp;&nbsp;something
            <br />
            <i className="text-amber-400">amazing together!</i>
          </p>

          <ul className="flex flex-col justify-center gap-3 text-center text-base font-light tracking-tight">
            {socialLinks.map((link) => (
              <li
                key={link.title}
                className="flex items-center justify-center gap-1.5 hover:text-zinc-200"
              >
                {link.icon}
                <motion.a
                  whileHover={{ underlinePosition: 10, underlineThickness: 10 }}
                  href={link.href}
                  target="_blank"
                >
                  {link.title.toUpperCase()}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
