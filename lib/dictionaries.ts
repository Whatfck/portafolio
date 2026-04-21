export const dictionaries: Record<string, any> = {
  es: {
    navbar: {
      hero: 'Inicio',
      about: 'Sobre mi',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      theme_light: 'Claro',
      theme_dark: 'Oscuro',
      aria_light: 'Cambiar a modo claro',
      aria_dark: 'Cambiar a modo oscuro',
    },
    hero: {
      eyebrow: '',
      name: 'Daniel Perez',
      role: 'Estudiante Ing. Software',
      copy: 'Enfocado en software, redes y arquitectura de servidores para crear soluciones robustas y eficientes.',
      btn_cv: 'Ver CV',
      photo_url: '/media/hero/daniel-perez.jpg',
      photo_alt: 'Retrato de Daniel Perez',
      linkedin_url: 'https://www.linkedin.com/in/daniel-perez-blank',
      github_url: 'https://github.com/Whatfck',
      cv_url: '#',
      linkedin_label: 'LinkedIn',
      github_label: 'GitHub',
    },
    about: {
      title: 'Sobre mí',
      kicker: 'Mi perfil',
      location_title: 'Ubicación',
      location_value: 'Colombia · UTC-5',
      location_note: 'Hora local de referencia para coordinación y trabajo remoto.',
      lead: 'Soy Daniel Pérez, estudiante de Ingeniería de Software con interés en el desarrollo de sistemas y la infraestructura que los soporta.',
      p1: 'Me enfoco en entender cómo funcionan las aplicaciones de extremo a extremo, desde la lógica hasta su despliegue, incluyendo redes y entornos Linux.',
      p2: 'Actualmente construyo mis bases técnicas a través de proyectos prácticos orientados a despliegues reales, virtualización y automatización de procesos.',
      languages_title: 'Idiomas',
      languages: [
        { name: 'Español', level: '100%', label: 'Lengua materna' },
        { name: 'Inglés', level: '50%', label: 'Intermedio (~50%)' }
      ],
      highlight_title: 'Enfoque actual',
      highlight_text: 'Aplicando conocimientos teóricos en laboratorios de redes y servidores para dominar el ciclo de vida del software y la infraestructura subyacente.',
      pill1_title: 'Enfoque',
      pill1_text: 'Comprender el funcionamiento de los sistemas más allá de su implementación, priorizando decisiones técnicas sostenibles y bien fundamentadas.',
      pill2_title: 'Objetivo',
      pill2_text: 'Desarrollar software confiable y escalable, con una base sólida en sistemas e infraestructura.',
      pill3_title: 'Intereses',
      pill3_text: 'Redes, Infraestructura, Ciberseguridad y Rendimiento de sistemas.',
    },
    skills: {
      title: 'Habilidades',
      kicker: 'Mi arsenal',
      focus: 'Perfil: Inclinación técnica hacia el backend y la infraestructura, complementado con bases esenciales de desarrollo frontend.',
      intro: 'Tecnologías y herramientas que utilizo en mi día a día.',
      categories: [
        {
          title: 'Sistemas e Infraestructura',
          items: ['Linux (Fedora/Ubuntu Server)', 'Docker', 'Entornos de desarrollo', 'Despliegue de servicios']
        },
        {
          title: 'Redes',
          items: ['OpenWrt', 'Reverse Proxy', 'DNS (Pi-hole/AdGuard)', 'VPN', 'Nmap']
        },
        {
          title: 'Desarrollo Web',
          items: ['React / Next.js', 'Tailwind CSS', 'JavaScript / TypeScript', 'Node.js / Express', 'Django', 'APIs REST']
        },
        {
          title: 'Bases de Datos',
          items: ['PostgreSQL', 'SQLite']
        },
        {
          title: 'Herramientas',
          items: ['Git / GitHub', 'Figma', 'Postman']
        }
      ]
    },
    experience: {
      title: 'Experiencia',
      kicker: 'Trayectoria',
      intro: 'La etapa actual de mi formación académica.',
      items: [
        {
          date: '2024 - 2028',
          role: 'Estudiante de Ingeniería de Software',
          company: 'Universidad',
          desc: 'Adquiriendo fundamentos en algoritmia, bases de datos y arquitectura, complementando la teoría con interés propio por la infraestructura y redes.'
        }
      ]
    },
    projects: {
      title: 'Proyectos',
      kicker: 'Mi codigo',
      intro: 'Una selección de trabajos en los que he aplicado mis conocimientos.',
      items: [
        {
          title: 'UniShop',
          desc: 'Plataforma de comercio electrónico diseñada para la comunidad universitaria, facilitando la compra y venta de productos entre estudiantes.',
          repo: 'https://github.com/Whatfck/UniShop',
          view: 'https://uni-shop-frontend.vercel.app/',
          image_url: '/media/projects/UniShop.png',
          image_alt: 'Vista previa del proyecto UniShop'
        },
        {
          title: 'Reproductor Web',
          desc: 'Aplicación de reproducción de audio moderna con interfaz intuitiva, soporte para listas de reproducción y controles avanzados.',
          repo: 'https://github.com/Whatfck/reproductor-web',
          view: 'https://reproductor-web-omega.vercel.app/',
          image_url: '/media/projects/reproductor-web.png',
          image_alt: 'Vista previa del proyecto Reproductor Web'
        },
        {
          title: 'Portafolio',
          desc: 'Portafolio personal multilenguaje construido con Next.js, diseñado para mostrar perfil profesional, experiencia, habilidades y proyectos.',
          repo: 'https://github.com/Whatfck/portafolio',
          view: 'https://portafolio-daniel-perez.vercel.app/',
          image_url: '/media/projects/portafolio.png',
          image_alt: 'Vista previa del proyecto Portafolio'
        }
      ],
      repo_label: 'Repo',
      view_label: 'Ver',
    },
    testimonials: {
      title: 'Testimonios',
      kicker: 'Referencias',
      intro: 'Lo que dicen las personas con las que he trabajado o estudiado a lo largo de mis proyectos.',
      t1_text: 'Daniel tiene una excelente capacidad analitica. Durante el proyecto final, siempre encontro soluciones a los problemas de arquitectura mas complejos.',
      t1_author: 'Nombre del Profesor/Colega',
      t1_role: 'Profesor Universitario / Cargo de la persona',
      t2_text: 'Trabajar con el significa no preocuparse por la calidad del codigo. Es muy meticuloso con los detalles y el rendimiento del servidor.',
      t2_author: 'Nombre de la Persona 2',
      t2_role: 'Ingeniero Senior / Jefe',
      t3_text: 'Siempre dispuesto a aprender nuevas tecnologias y aplicarlas de manera eficiente en entornos reales de manera colaborativa.',
      t3_author: 'Nombre de la Persona 3',
      t3_role: 'Companero de equipo / Lider de Proyecto',
    },
    contact: {
      title: 'Contacto',
      kicker: 'Hablemos',
      intro: 'Si quieres colaborar, tienes una propuesta o simplemente deseas conversar sobre tecnologia, escribeme.',
      form_title: 'Enviar mensaje',
      form_name_label: 'Nombre *',
      form_email_label: 'Correo *',
      form_subject_label: 'Asunto',
      form_message_label: 'Mensaje *',
      form_submit_label: 'Enviar mensaje',
      form_sending_label: 'Enviando...',
      form_success: 'Mensaje enviado. Te respondere pronto.',
      form_error: 'No se pudo enviar el mensaje. Intenta nuevamente en unos minutos.',
      form_error_required: 'Completa nombre, correo y mensaje para continuar.',
      c1_title: 'Email',
      c1_desc: 'Canal principal para propuestas y colaboraciones.',
      c1_href: 'mailto:danieleperez12@gmail.com',
      c1_text: 'danieleperez12@gmail.com',
      c2_title: 'LinkedIn',
      c2_desc: 'Contacto profesional y networking.',
      c2_href: 'https://www.linkedin.com/in/daniel-perez-blank',
      c2_text: 'linkedin.com/in/daniel-perez-blank',
      c3_title: 'GitHub',
      c3_desc: 'Repositorio de proyectos y experimentos.',
      c3_href: 'https://github.com/Whatfck',
      c3_text: 'github.com/Whatfck',
      note1: 'Disponible para colaboraciones freelance y remotas.',
      note2: 'Tiempo de respuesta estimado: 24 a 48 horas.',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      more_about_label: 'Más sobre mí',
      more_about_href: 'https://linktr.ee/danielperzz'
    }
  },
  en: {
    navbar: {
      hero: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      testimonials: 'Testimonials',
      contact: 'Contact',
      theme_light: 'Light',
      theme_dark: 'Dark',
      aria_light: 'Switch to light mode',
      aria_dark: 'Switch to dark mode',
    },
    hero: {
      eyebrow: '',
      name: 'Daniel Perez',
      role: 'Software Engineering Student',
      copy: 'Focused on software, networks, and server architecture to build robust and efficient solutions.',
      btn_cv: 'View CV',
      photo_url: '/media/hero/daniel-perez.jpg',
      photo_alt: 'Portrait of Daniel Perez',
      linkedin_url: 'https://www.linkedin.com/in/daniel-perez-blank',
      github_url: 'https://github.com/Whatfck',
      cv_url: '#',
      linkedin_label: 'LinkedIn',
      github_label: 'GitHub',
    },
    about: {
      title: 'About me',
      kicker: 'My profile',
      location_title: 'Location',
      location_value: 'Colombia · UTC-5',
      location_note: 'Local reference time for coordination and remote work.',
      lead: 'I am Daniel Pérez, a Software Engineering student with an interest in system development and the infrastructure that supports them.',
      p1: 'I focus on understanding how applications work end-to-end, from logic to deployment, including networking and Linux environments.',
      p2: 'Currently, I am building my technical foundations through hands-on projects focused on real-world deployments, virtualization, and process automation.',
      languages_title: 'Languages',
      languages: [
        { name: 'Spanish', level: '100%', label: 'Native language' },
        { name: 'English', level: '50%', label: 'Intermediate (~50%)' }
      ],
      highlight_title: 'Current focus',
      highlight_text: 'Applying theoretical knowledge in networking and server labs to master the software lifecycle and underlying infrastructure.',
      pill1_title: '🚀 Focus',
      pill1_text: 'Understanding the inner workings of systems beyond implementation, prioritizing sustainable and well-founded technical decisions.',
      pill2_title: '🎯 Goal',
      pill2_text: 'To develop reliable and scalable software with a solid foundation in systems and infrastructure.',
      pill3_title: '💡 Interests',
      pill3_text: 'Networking, Infrastructure, Cybersecurity, and System performance.',
    },
    skills: {
      title: 'Skills',
      kicker: 'Tools',
      focus: 'Profile: Technical inclination towards backend and infrastructure, complemented by essential frontend development skills.',
      intro: 'Technologies and tools I use on a daily basis.',
      categories: [
        {
          title: 'Systems & Infrastructure',
          items: ['Linux (Fedora/Ubuntu Server)', 'Docker', 'Development Environments', 'Service Deployment']
        },
        {
          title: 'Networking',
          items: ['OpenWrt', 'Reverse Proxy', 'DNS (Pi-hole/AdGuard)', 'VPN', 'Nmap']
        },
        {
          title: 'Web Development',
          items: ['React / Next.js', 'Tailwind CSS', 'JavaScript / TypeScript', 'Node.js / Express', 'Django', 'REST APIs']
        },
        {
          title: 'Databases',
          items: ['PostgreSQL', 'SQLite']
        },
        {
          title: 'Tools',
          items: ['Git / GitHub', 'Figma', 'Postman']
        }
      ]
    },
    experience: {
      title: 'Experience',
      kicker: 'Path',
      intro: 'The current stage of my academic training.',
      items: [
        {
          date: '2024 - 2028 (expected)',
          role: 'Software Engineering Student',
          company: 'University',
          desc: 'Acquiring solid fundamentals in algorithms, databases, and architecture, supplementing theory with a self-driven interest in infrastructure and networks.'
        }
      ]
    },
    projects: {
      title: 'Projects',
      kicker: 'My code',
      intro: 'A selection of works where I have applied my knowledge.',
      items: [
        {
          title: 'UniShop',
          desc: 'E-commerce platform designed for the university community, facilitating the purchase and sale of products among students.',
          repo: 'https://github.com/Whatfck/UniShop',
          view: 'https://uni-shop-frontend.vercel.app/',
          image_url: '/media/projects/UniShop.png',
          image_alt: 'Project preview for UniShop'
        },
        {
          title: 'Web Player',
          desc: 'Modern audio playback application with an intuitive interface, playlist support, and advanced controls.',
          repo: 'https://github.com/Whatfck/reproductor-web',
          view: 'https://reproductor-web-omega.vercel.app/',
          image_url: '/media/projects/reproductor-web.png',
          image_alt: 'Project preview for Web Player'
        },
        {
          title: 'Portfolio',
          desc: 'Multilingual personal portfolio built with Next.js to showcase professional profile, experience, skills, and projects.',
          repo: 'https://github.com/Whatfck/portafolio',
          view: 'https://portafolio-daniel-perez.vercel.app/',
          image_url: '/media/projects/portafolio.png',
          image_alt: 'Project preview for Portfolio'
        }
      ],
      repo_label: 'Repo',
      view_label: 'View',
    },
    testimonials: {
      title: 'Testimonials',
      kicker: 'References',
      intro: 'What people I have worked or studied with say throughout my projects.',
      t1_text: 'Daniel has excellent analytical skills. During the final project, he always found solutions to the most complex architectural problems.',
      t1_author: 'Professor/Colleague Name',
      t1_role: 'University Professor / Person\'s Role',
      t2_text: 'Working with him means not worrying about code quality. He is very meticulous with details and server performance.',
      t2_author: 'Person 2 Name',
      t2_role: 'Senior Engineer / Manager',
      t3_text: 'Always willing to learn new technologies and efficiently apply them in real environments in a collaborative way.',
      t3_author: 'Person 3 Name',
      t3_role: 'Teammate / Project Leader',
    },
    contact: {
      title: 'Contact',
      kicker: 'Let\'s talk',
      intro: 'If you want to collaborate, have a proposal, or just want to chat about technology, write to me.',
      form_title: 'Send message',
      form_name_label: 'Name *',
      form_email_label: 'Email *',
      form_subject_label: 'Subject',
      form_message_label: 'Message *',
      form_submit_label: 'Send message',
      form_sending_label: 'Sending...',
      form_success: 'Message sent. I will reply soon.',
      form_error: 'Message could not be sent. Please try again in a few minutes.',
      form_error_required: 'Please complete name, email, and message.',
      c1_title: 'Email',
      c1_desc: 'Main channel for proposals and collaborations.',
      c1_href: 'mailto:danieleperez12@gmail.com',
      c1_text: 'danieleperez12@gmail.com',
      c2_title: 'LinkedIn',
      c2_desc: 'Professional contact and networking.',
      c2_href: 'https://www.linkedin.com/in/daniel-perez-blank',
      c2_text: 'linkedin.com/in/daniel-perez-blank',
      c3_title: 'GitHub',
      c3_desc: 'Repository for projects and experiments.',
      c3_href: 'https://github.com/Whatfck',
      c3_text: 'github.com/Whatfck',
      note1: 'Available for freelance and remote collaborations.',
      note2: 'Estimated response time: 24 to 48 hours.',
    },
    footer: {
      rights: 'All rights reserved.',
      more_about_label: 'More about me',
      more_about_href: 'https://linktr.ee/danielperzz'
    }
  }
};

export type Locale = 'en' | 'es';
export const getDictionary = (locale: Locale) => dictionaries[locale] || dictionaries['en'];
