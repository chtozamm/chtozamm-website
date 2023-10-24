import Link from "next/link";
import { ReactElement } from "react";
import { GitHubIcon, InstagramIcon, TwitchIcon, YouTubeIcon } from "./icons";

type Portfolio = {
  title: string;
  href: string;
  preview?: string;
  description?: string;
  comment?: string;
};

type SocialLink = {
  title: string;
  href: string;
  icon: ReactElement;
};

const portfolio: Portfolio[] = [
  {
    title: "Annycars 🚗",
    href: "https://www.annycars.online",
    description:
      "Удобная доска объявлений для сохранения, поиска и сортировки автомобилей.",
  },
  {
    title: "Annynotes ✨",
    href: "https://www.annynotes.fun",
    description: "A board for notes and legends told by well-known characters.",
  },
  {
    title: "Unionbarber 💈",
    href: "https://www.unionbarber.ru",
    description: "Сайт для мужской парикмахерской Union Barbershop.",
  },
];

const socialLinks: SocialLink[] = [
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
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 px-6 pb-16 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
      <div className="flex aspect-[12/5] w-screen flex-col items-center justify-center gap-1.5 bg-zinc-100 text-center">
        <video
          loop
          autoPlay
          muted
          className="aspect-[12/5] w-screen object-cover"
          placeholder=""
        >
          {/* <source src={"/people-are-strange.mp4"} type="video/mp4" /> */}
          <source src={"/otter.mp4"} type="video/mp4" />
        </video>
      </div>
      <section className="flex max-w-3xl flex-col items-center justify-center gap-3 [&_p]:w-full">
        <h1 className="mb-3 w-full">
          <span className="bg-gradient-to-tl from-blue-600 to-blue-400 bg-clip-text text-3xl font-bold text-transparent dark:from-zinc-50 dark:to-blue-400">
            Hello there!
          </span>
        </h1>
        <p>
          My name is Mark, and I&apos;m a{" "}
          <strong className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-lg text-transparent dark:from-zinc-50 dark:to-blue-400">
            web developer
          </strong>
          , as well as a photographer, filmmaker and musician.
        </p>
        <p>
          I&apos;m passionate about the creative side of things and enthusiastic
          about optimizing solutions. Knowledge is my kind of fuel, and I&apos;m
          always open to learning and exploring new fields. I&apos;m here to
          create modern, user-friendly websites and enhance existing ones.
        </p>
        <p>
          My goal is to turn your ideas into compelling digital experiences that
          stand out. Whether it&apos;s a stunning landing page, captivating
          online showcase, or engaging web application, I&apos;m dedicated to
          delivering top-quality results that exceed your expectations.
        </p>
        <p>
          Let&apos;s bring your vision to life. Contact me today, and let&apos;s
          create something amazing together!
        </p>
      </section>
      {/* Social links */}
      <ul className="flex flex-col gap-1.5">
        {socialLinks.map((link) => (
          <Link
            href={link.href}
            target="_blank"
            key={link.title}
            className="flex items-center gap-1 text-sm"
          >
            {link.icon}
            {link.title}
          </Link>
        ))}
      </ul>
      {/* Portfolio */}
      <ul className="grid w-3/4 gap-12">
        {portfolio.map((website) => (
          <li key={website.title} className="flex gap-x-12">
            <div className="flex aspect-[4/5] w-1/3 max-w-lg items-end justify-center overflow-hidden rounded-lg border shadow-sm">
              <Link
                href={website.href}
                target="_blank"
                className="w-full bg-zinc-900 p-1.5 text-center text-sm text-zinc-100"
              >
                {website.title}
              </Link>
            </div>
            <div className="flex w-2/3 flex-col gap-3">
              <h2 className="text-2xl font-bold">{website.title}</h2>
              {website.description}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
