import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showToast } from '../store/slices/uiSlice';

function Contact() {
  const dispatch = useDispatch();
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactData = {
    title: "İletişim",
    description: "Yeni projeler ve iş birlikleri için her zaman açıkım. Aşağıdaki form üzerinden veya sosyal medya hesaplarımdan benimle iletişime geçebilirsiniz.",
    myEmail: "samet@example.com"
  };

  const socials = [
    { socialMedia: 'GITHUB', url: 'https://github.com/sametozalp' },
    { socialMedia: 'LINKEDIN', url: 'https://linkedin.com/in/sametozalp' },
    { socialMedia: 'X', url: 'https://twitter.com/sametozalp' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(showToast({ message: 'Mesajınız başarıyla iletildi!', type: 'success' }));
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      dispatch(showToast({ message: error || 'Mesaj gönderilemedi. Lütfen tekrar deneyin.', type: 'error' }));
    } finally {
      setContactSubmitting(false);
    }
  };

  const getSocialIcon = (socialMedia: string) => {
    switch (socialMedia) {
      case 'GITHUB':
        return <Github size={20} />;
      case 'LINKEDIN':
        return <Linkedin size={20} />;
      case 'X':
        return <Twitter size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">İletişim</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">{contactData?.title}</h3>
            <p className="text-gray-400 mb-8">{contactData?.description}</p>
            <div className="space-y-6">
              <div className="flex items-center glass p-4 rounded-xl">
                <Mail className="text-blue-400 mr-4" size={20} />
                <span>{contactData?.myEmail}</span>
              </div>
              <div className="flex space-x-6 pt-6 justify-center md:justify-start">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="hover:text-blue-400 transition-all transform hover:scale-110"
                  >
                    {getSocialIcon(social.socialMedia)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="İsim"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-blue-500 outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="E-posta"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-blue-500 outline-none transition-colors"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Mesajınız"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:border-blue-500 outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={contactSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/20"
              >
                {contactSubmitting ? 'Gönderiliyor...' : 'Gönder'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
