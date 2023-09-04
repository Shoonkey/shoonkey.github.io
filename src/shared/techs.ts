import { ImageProps } from "@chakra-ui/react";

import NextLogo from "@/components/tech-logos/NextLogo";
import NodeLogo from "@/components/tech-logos/NodeLogo";
import ReactLogo from "@/components/tech-logos/ReactLogo"

export interface ProjectTech {
  name: string;
  tag: string;
  component: (props: ImageProps) => JSX.Element
}

const techs: ProjectTech[] = [
  {
    name: "ReactJS",
    tag: "react",
    component: ReactLogo
  },
  {
    name: "NodeJS",
    tag: "node",
    component: NodeLogo
  },
  {
    name: "NextJS",
    tag: "next",
    component: NextLogo
  },
];

export default techs;
