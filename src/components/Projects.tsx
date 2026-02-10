import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { openModal } from '../store/slices/uiSlice';

const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.portfolio);

  const projects = data.projects;

  const handleProjectClick = (project: any) => {
    dispatch(openModal(project));
  };

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Portfolyo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl glass cursor-pointer h-72"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="text-sm text-blue-300">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
