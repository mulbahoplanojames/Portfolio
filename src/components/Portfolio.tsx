"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projectsData";

const Portfolio: React.FC = () => {
  const [items, setItems] = useState(projects);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prev) => prev + 3);
  };

  useEffect(() => {
    // Setting items state to slice of blogData from 0 to visible state
    setItems(projects.slice(0, visible));
  }, [visible]); // Updating items state whenever visible state changes

  return (
    <>
      <div
        className="md:px-20 md:py-16 bg-secondary1 text-text w-full px-2 py-8"
        id="/Portfolio"
      >
        <h1 className="md:text-4xl pb-3 text-3xl font-semibold text-center">
          Recent Works
        </h1>
        <p className="pb-10 text-lg text-center">
          Showcasing my recent projects and achievements
        </p>

        <div className="lg:grid-cols-3 md:grid-cols-2 md:gap-8 gap-y-8 grid items-center justify-center grid-cols-1 place-items-center">
          {items.slice(0, visible).map((project) => {
            return (
              <ProjectCard
                key={project.projectID}
                image={project.image}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
                technologiesUsed={project.technologiesUsed}
                liveDemo={project.liveDemo}
                code={project.code}
              />
            );
          })}
        </div>

        {/* Button to show more posts */}
        <div className="mt-7 flex justify-center">
          {projects.length > visible && (
            <button
              type="button"
              className="hover:underline bg-gray-50 px-6 py-3 text-sm text-gray-600 rounded-md"
              onClick={showMoreItems}
            >
              Preview More Works...
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
