
function About() {
  const aboutData = {
    title: "Full Stack Developer",
    description: "Modern web teknolojileri konusunda uzmanlaşmış, kullanıcı odaklı ve performanslı uygulamalar geliştiren yazılım mühendisi. React, Node.js ve cloud teknolojileri gibi alanlarda derin deneyime sahibim.",
    profileImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  };

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", 
    "Java", "Spring Boot", "PostgreSQL", "MongoDB", "Redis",
    "Docker", "AWS", "Git", "Tailwind CSS", "Next.js"
  ];

  // const stats = [
  //   { number: '5+', label: 'Yıllık Deneyim' },
  //   { number: '25+', label: 'Proje Sayısı' },
  //   { number: '12', label: 'Ödül & Sertifika' }
  // ];

  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border-2 border-blue-500/30">
              <img 
                src={aboutData?.profileImageUrl} 
                alt="Profil Fotoğrafı" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* <div className="absolute -bottom-4 -right-4 bg-blue-900/50 border border-blue-500/40 p-6 rounded-xl hidden md:block backdrop-blur-sm shadow-lg">
              <p className="text-3xl font-bold gradient-text">{stats[0].number}</p>
              <p className="text-xs text-gray-300 uppercase">{stats[0].label}</p>
            </div> */}
          </div>
          
          <div>
            <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-2">Hakkımda</h2>
            <h3 className="text-4xl font-bold mb-6">{aboutData?.title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {aboutData?.description}
            </p>
            
            {/* <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.slice(1).map((stat, index) => (
                <div key={index} className="bg-gray-800/60 border border-gray-600/50 p-4 rounded-lg backdrop-blur-sm shadow-md">
                  <p className="text-2xl font-bold text-white">{stat.number}</p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div> */}

            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-gray-300">Teknik Skiller</h4>
              <div className="flex flex-wrap gap-2">
                {skills?.map((skill, index) => (
                  <span 
                    key={index} 
                    className="skill-tag px-4 py-1 rounded-full text-xs"
                  >
                  {/* {typeof skill === 'string' ? skill : skill.name} */}
                  {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
