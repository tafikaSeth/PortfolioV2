import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiFlutter, SiDart, SiPostgresql, SiFirebase, SiExpo } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { Code2, Package, PackageCheck } from "lucide-react";

export  const techs = [
    { label: "Javascript", bg: "bg-chart-1",icon: <SiJavascript size={60} /> },
    { label: "Dart", bg: "bg-chart-2", icon: <SiDart size={60} /> },
    { label: "Typescript", bg: "bg-chart-3", icon: <SiTypescript size={60} /> },
    { label: "Html", bg: "bg-chart-4", icon: <IoLogoHtml5 size={60} /> },
    { label: "Css",  bg: "bg-chart-5",icon: <IoLogoCss3 size={60} /> },
  ];

export  const framework = [
    { label: "React", bg: "bg-chart-5", icon: <FaReact size={60} /> },
    { label: "Next", bg: "bg-chart-4", icon: <SiNextdotjs size={60} /> },
    { label: "Expo", bg: "bg-chart-3", icon: <SiExpo size={60} /> },
    { label: "Flutter", bg: "bg-chart-2", icon: <SiFlutter size={60} /> },
    { label: "Tailwind", bg: "bg-chart-1", icon: <SiTailwindcss size={60} /> }
  ];

export  const databases = [
    { label: "PostgreSQL", bg: "bg-chart-1", icon: <SiPostgresql size={60} /> },
    { label: "MongoDB Atlas", bg: "bg-chart-5", icon: <Code2 size={60} /> },
    { label: "Firebase", bg: "bg-chart-4", icon: <SiFirebase size={60} /> },
  ];

export  const tech = [
    { label: "Git", bg: "bg-chart-4", icon: <Package size={60} /> },
    { label: "Gitlab", bg: "bg-chart-3", icon: <PackageCheck size={60} /> },
  ]