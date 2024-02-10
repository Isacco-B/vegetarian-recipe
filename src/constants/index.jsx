import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import italian from "../assets/img/Italian.jpg";
import american from "../assets/img/american.jpg";
import chinese from "../assets/img/chinese.jpg";
import mexican from "../assets/img/mexican.jpg";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "About Us",
    to: "/about",
  },
  {
    id: 3,
    name: "Subscribe",
    to: "/subscribe",
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/isacco-bertoli-10aa16252/",
    icon: <FaLinkedin size={20} />,
  },
  {
    id: 2,
    name: "Github",
    href: "https://github.com/Isacco-B",
    icon: <FaGithub size={20} />,
  },
  {
    id: 3,
    name: "Website",
    href: "https://www.isaccobertoli.com/",
    icon: <TbWorldWww size={20} />,
  },
];

export const categories = [
  {
    id: 1,
    name: "Italian",
    image: italian,
  },
  {
    id: 2,
    name: "Mexican",
    image: mexican,
  },
  {
    id: 3,
    name: "American",
    image: american,
  },
  {
    id: 4,
    name: "Asian",
    image: chinese,
  },
];
