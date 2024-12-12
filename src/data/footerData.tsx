import { NavLinksType, SocialsType } from "@/types/types";

import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const footerlinks: NavLinksType[] = [
  {
    label: "Portfolio",
    path: "/Portfolio",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const socials: SocialsType[] = [
  {
    id: 1,
    icon: <FaLinkedin className="text-3xl" />,
    link: "https://www.linkedin.com/in/oplano-james-mulbah/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="text-3xl" />,
    link: "https://github.com/mulbahoplanojames",
  },
  {
    id: 3,
    icon: <FaXTwitter className="text-3xl" />,
    link: "https://x.com/JamesOplan23726",
  },
  {
    id: 4,
    icon: <FaInstagram className="text-3xl" />,
    link: "https://www.instagram.com/oplanojames/",
  },
];
