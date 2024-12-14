import { JSX } from "react";

export type NavLinksType = {
  label: string;
  path: string;
};

export type SocialsType = {
  id: number;
  icon: JSX.Element;
  link: string;
};

export type ExpertiseType = {
  id: number;
  name: string;
};
