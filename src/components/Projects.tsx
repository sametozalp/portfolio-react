import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { openModal } from '../store/slices/uiSlice';

const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.portfolio);

  const projects = data.projects || [
    {
      id: 1,
      title: 'Finans Paneli',
      summary: 'Spring Boot & React',
      description: 'Gerçek zamanlı borsa verilerini işleyen, Spring Boot ve React ile geliştirilmiş dashboard.',
      images: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600'],
      techStack: ['Spring Boot', 'React', 'PostgreSQL', 'Redis'],
      features: ['Real-time data', 'Advanced charts', 'User authentication'],
      projectDate: '2023-06-15',
      liveDemoUrl: 'https://demo.example.com',
      sourceCodeUrl: 'https://github.com/example/finance-panel'
    },
    {
      id: 2,
      title: 'AI Chat App',
      summary: 'Python & WebSocket',
      description: 'Yapay zeka modellerini WebSocket protokolü üzerinden anlık konuşturan chat arayüzü.',
      images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600'],
      techStack: ['Python', 'WebSocket', 'TensorFlow', 'React'],
      features: ['Real-time messaging', 'AI integration', 'Multi-user support'],
      projectDate: '2023-09-20',
      liveDemoUrl: 'https://chat.example.com',
      sourceCodeUrl: 'https://github.com/example/ai-chat'
    },
    {
      id: 3,
      title: 'Data Analytics',
      summary: 'Big Data & Spark',
      description: 'Büyük veri setlerini işleyip görselleştiren yüksek performanslı analitik aracı.',
      images: ['https://images.unsplash.com/photo-1551288049-bbb65181ef9b?w=600'],
      techStack: ['Apache Spark', 'Python', 'D3.js', 'Docker'],
      features: ['Big data processing', 'Interactive visualizations', 'Cloud deployment'],
      projectDate: '2023-11-10',
      liveDemoUrl: 'https://analytics.example.com',
      sourceCodeUrl: 'https://github.com/example/data-analytics'
    }
  ];

  const handleProjectClick = (project: any) => {
    dispatch(openModal(project));
  };

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Portfolyo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
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
