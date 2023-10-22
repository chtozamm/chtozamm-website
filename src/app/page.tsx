import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

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

export function GitHubIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  );
}

export function YouTubeIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
      <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}
