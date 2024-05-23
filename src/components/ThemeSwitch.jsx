"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loading />;
  }
  if (resolvedTheme === "dark") {
    return <FiSun onClick={() => setTheme("light")}  className="text-xl"/>;
  }
  if (resolvedTheme === "light") {
    return <FiMoon onClick={() => setTheme("dark")}  className="text-xl"/>;
  }
};

export default ThemeSwitch;
