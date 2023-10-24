"use client";

import { useTheme } from "next-themes";
import { CrescentIcon, SunIcon } from "./icons";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return !mounted ? null : (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <CrescentIcon />}
    </button>
  );
}
