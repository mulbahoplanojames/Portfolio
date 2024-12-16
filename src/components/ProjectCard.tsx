import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface ProjectCardProps {
  key: number;
  image: string;
  projectTitle: string;
  projectDescription: string;
  technologiesUsed: string[];
  liveDemo: string;
  code: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  projectTitle,
  projectDescription,
  technologiesUsed,
  liveDemo,
  code,
}) => {
  return (
    <>
      <Card className="md:p-4 border-spacing-1 border-primary text-text group max-w-lg p-3 border rounded-md shadow-md">
        <CardContent className="bg-secondary1">
          <div className="md:h-64 block w-full h-52 bg-gray-500 rounded-md relative mb-3">
            <Image src={image! ?? ""} alt="" className="object-scale " fill />
          </div>
          <div className="space-y-3">
            <h3 className="text-text group-hover:underline md:text-2xl text-2xl font-semibold">
              {projectTitle}
            </h3>
            <p className="text-text text-base leading-snug">
              {projectDescription.slice(0, 150)} .....
            </p>
          </div>
          {/* technology used */}
          <div className="flex flex-wrap items-center gap-3  py-4">
            {technologiesUsed.map((tech, index) => (
              <p
                key={index}
                className="w-fit h-fit bg-primary1  text-text px-2 py-1 text-sm rounded-md"
              >
                {tech}
              </p>
            ))}
          </div>
          {/* code and live demo  */}
          <div className="flex items-center justify-between">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={code}
              className="text-text flex items-center gap-1 text-lg font-medium"
            >
              Code
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={liveDemo}
              className="text-text flex items-center gap-1 text-lg font-medium"
            >
              Live Demo
              <FaSquareArrowUpRight />
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
