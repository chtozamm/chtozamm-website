import Link from "next/link";
import { ReactElement } from "react";
import { GitHubIcon, InstagramIcon, YouTubeIcon } from "./icons";

const socialLinks: socialLink[] = [
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
];

type socialLink = {
  title: string;
  href: string;
  icon: ReactElement;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-16">
      <h1 className="mb-6 flex flex-col gap-3 p-3">
        <p className="mb-3 text-xl font-bold">Hello there!</p>
        <p>
          My name is Mark, and I&apos;m a <strong>Web-developer</strong>, as
          well as Photographer and Musician.
        </p>
        <p>
          I&apos;m passionate when it comes to creative side of things, and
          enthusiast when something needs to be repaired or optimized. Knowledge
          is my kind of fuel and I&apos;m always open to learn and explore new
          fields.
        </p>
        <p>
          I&apos;m looking for an opportunity to create modern websites and to
          improve existing ones.
        </p>
      </h1>
      <ul>
        {socialLinks.map((link) => (
          <Link
            href={link.href}
            target="_blank"
            key={link.title}
            className="flex items-center gap-1"
          >
            {link.icon}
            {link.title}
          </Link>
        ))}
      </ul>
    </main>
  );
}
