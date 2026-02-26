import { Briefcase, GraduationCap } from 'lucide-react';

function Resume() {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Company A",
      startDate: "2022-01",
      endDate: "2024-01",
      description: "React ve Node.js tabanlı büyük ölçekli projelerin geliştirilmesi ve liderliği."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Agency B",
      startDate: "2020-06",
      endDate: "2021-12",
      description: "Çeşitli müşteri projelerinde frontend ve backend geliştirme."
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Startup C",
      startDate: "2019-03",
      endDate: "2020-05",
      description: "Web uygulaması geliştirme ve bakım."
    }
  ];

  const educations = [
    {
      id: 1,
      title: "Bilgisayar Mühendisliği",
      school: "İstanbul Teknik Üniversitesi",
      startDate: "2015-09",
      endDate: "2019-06",
      description: "Lisans eğitimi"
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      school: "Tech Academy",
      startDate: "2018-07",
      endDate: "2018-09",
      description: "Yoğun web geliştirme programı"
    }
  ];

  return (
    <section id="resume" className="py-32 bg-black bg-opacity-30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Özgeçmiş</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="text-blue-400 mr-4" size={24} />
              <h3 className="text-2xl font-semibold">Deneyim</h3>
            </div>
            <div className="space-y-8 border-l border-gray-800 ml-4 pl-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  <div 
                    className={`absolute -left-10 w-4 h-4 rounded-full border-4 border-black ${
                      index === 0 ? 'bg-blue-500' : 'bg-gray-700'
                    }`}
                  />
                  <span className="text-xs text-blue-400 font-mono">
                    {exp.startDate} - {exp.endDate}
                  </span>
                  <h4 className="text-lg font-bold mt-2">{exp.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">{exp.company}</p>
                  {exp.description && (
                    <p className="text-sm text-gray-400">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-purple-400 mr-4" size={24} />
              <h3 className="text-2xl font-semibold">Eğitim</h3>
            </div>
            <div className="space-y-8 border-l border-gray-800 ml-4 pl-8">
              {educations.map((edu, index) => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-10 w-4 h-4 rounded-full bg-purple-500 border-4 border-black" />
                  <span className="text-xs text-purple-400 font-mono">
                    {edu.startDate} - {edu.endDate}
                  </span>
                  <h4 className="text-lg font-bold mt-2">{edu.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">{edu.school}</p>
                  {edu.description && (
                    <p className="text-sm text-gray-400">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
