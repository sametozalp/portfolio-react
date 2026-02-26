import React from 'react';

interface Project {
  id?: number;
  title: string;
  summary: string;
  description: string;
  features: string[];
  images: string[];
  projectDate: string;
  techStack: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
}

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Ticaret Platformu",
      summary: "React ve Node.js tabanlı modern e-ticaret çözümü",
      description: "Kullanıcı dostu arayüzü ve güçlü admin paneli ile tam özellikli e-ticaret platformu. Sepet yönetimi, ödeme sistemleri ve envanter takibi gibi özellikler içerir.",
      features: ["Kullanıcı Kimlik Doğrulama", "Sepet Yönetimi", "Ödeme Sistemleri", "Admin Paneli", "Real-time Bildirimler"],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
      ],
      projectDate: "2023-12",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      liveDemoUrl: "https://demo.example.com",
      sourceCodeUrl: "https://github.com/example/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      summary: "Modern proje yönetim ve iş birliği platformu",
      description: "Ekipler için tasarlanmış görev yönetim uygulaması. Drag-and-drop, real-time güncellemeler ve detaylı raporlama özellikleri sunar.",
      features: ["Görev Yönetimi", "Real-time Güncellemeler", "Dosya Paylaşımı", "Raporlama", "Takvim Entegrasyonu"],
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
      ],
      projectDate: "2023-10",
      techStack: ["React", "TypeScript", "PostgreSQL", "Socket.io", "Docker"],
      liveDemoUrl: "https://tasks.example.com",
      sourceCodeUrl: "https://github.com/example/taskmanager"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      summary: "Çoklu platform sosyal medya yönetim aracı",
      description: "Birden fazla sosyal medya hesabını tek bir yerden yönetmek için geliştirilen kapsamlı dashboard. İçerik planlama ve analitik özellikleri içerir.",
      features: ["Multi-platform Entegrasyon", "İçerik Planlama", "Analitik ve Raporlar", "Otomasyon", "Takvim Görünümü"],
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1566492030073-8f0958a09f08?w=400&h=300&fit=crop"
      ],
      projectDate: "2023-08",
      techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
      liveDemoUrl: "https://social.example.com",
      sourceCodeUrl: "https://github.com/example/socialdashboard"
    },
    {
      id: 4,
      title: "Video Streaming Platform",
      summary: "Adaptive streaming ile video içerik platformu",
      description: "Yüksek kalitede video akışı sağlayan modern streaming platformu. Canlı yayın, VOD ve kullanıcı yönetimi özellikleri içerir.",
      features: ["Adaptive Streaming", "Canlı Yayın", "VOD", "Kullanıcı Yönetimi", "CDN Entegrasyonu"],
      images: [
        "https://images.unsplash.com/photo-1574375927936-d5a98e8ffe85?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1462823703073-4d1c834bbd27?w=400&h=300&fit=crop"
      ],
      projectDate: "2023-06",
      techStack: ["React", "Node.js", "AWS", "FFmpeg", "HLS"],
      liveDemoUrl: "https://stream.example.com",
      sourceCodeUrl: "https://github.com/example/streaming"
    },
    {
      id: 5,
      title: "AI Chat Assistant",
      summary: "Machine learning tabanlı sohbet asistanı",
      description: "Doğal dil işleme kullanarak akıllı cevaplar veren chat asistanı. Multi-language destek ve özelleştirilebilir personality özellikleri.",
      features: ["NLP", "Multi-language", "Custom Personality", "Context Memory", "API Integration"],
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131e5e1?w=400&h=300&fit=crop"
      ],
      projectDate: "2023-04",
      techStack: ["Python", "TensorFlow", "FastAPI", "React", "WebSocket"],
      liveDemoUrl: "https://chat.example.com",
      sourceCodeUrl: "https://github.com/example/aichat"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      summary: "Modern emlak yönetim ve arama platformu",
      description: "Emlak ilanları için geliştirilmiş comprehensive platform. Filtreleme, harita entegrasyonu ve sanal tur özellikleri içerir.",
      features: ["İlan Yönetimi", "Harita Entegrasyonu", "Filtreleme", "Sanal Tur", "Mobil Uyumlu"],
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop"
      ],
      projectDate: "2023-02",
      techStack: ["React", "Node.js", "MongoDB", "Google Maps", "Three.js"],
      liveDemoUrl: "https://realestate.example.com",
      sourceCodeUrl: "https://github.com/example/realestate"
    }
  ];

  const handleProjectClick = (project: Project) => {
    onProjectClick(project);
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
