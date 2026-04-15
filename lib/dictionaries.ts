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
    },
    about: {
      title: 'Sobre mí',
      kicker: 'Mi perfil',
      lead: 'Soy Daniel Pérez, estudiante de Ingeniería de Software con interés en el desarrollo de sistemas y la infraestructura que los soporta.',
      p1: 'Me enfoco en entender cómo funcionan las aplicaciones de extremo a extremo, desde la lógica hasta su despliegue, incluyendo redes y entornos Linux.',
      p2: 'Actualmente estoy fortaleciendo mis bases técnicas mediante proyectos prácticos, especialmente en sistemas, contenedores y exposición de servicios, buscando construir soluciones estables y bien estructuradas.',
      languages_title: 'Idiomas',
      languages: [
        { name: 'Español', level: '100%', label: 'Lengua materna' },
        { name: 'Inglés', level: '50%', label: 'Intermedio (~50%)' }
      ],
      highlight_title: 'Enfoque actual',
      highlight_text: 'Construyendo una base sólida en arquitectura de red y administración de servidores para desplegar servicios de forma profesional.',
      pill1_title: '🚀 Enfoque',
      pill1_text: 'Comprender el funcionamiento de los sistemas más allá de su implementación, priorizando decisiones técnicas sostenibles y bien fundamentadas.',
      pill2_title: '🎯 Objetivo',
      pill2_text: 'Desarrollar software confiable y escalable, con una base sólida en sistemas e infraestructura.',
      pill3_title: '💡 Intereses',
      pill3_text: 'Redes, Infraestructura, Ciberseguridad y Rendimiento de sistemas.',
    },
    skills: {
      title: 'Habilidades',
      kicker: 'Mi arsenal',
      focus: 'Enfoque: Interés en sistemas, redes e infraestructura, con experiencia práctica en entornos Linux y despliegue de servicios.',
      intro: 'Tecnologías y conceptos con los que trabajo habitualmente para construir soluciones robustas y seguras.',
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
      intro: 'Mi formación académica enfocada en la ingeniería de software y la especialización técnica.',
      items: [
        {
          date: '2024 - 2028',
          role: 'Estudiante de Ingeniería de Software',
          company: 'Universidad',
          desc: 'Formación integral en desarrollo de software, arquitectura de sistemas y redes de computadoras.'
        }
      ]
    },
    projects: {
      title: 'Proyectos',
      kicker: 'Mi codigo',
      intro: 'Una seleccion de trabajos en los que he aplicado mis conocimientos.',
      items: [
        {
          title: 'UniShop',
          desc: 'Plataforma de comercio electrónico diseñada para la comunidad universitaria, facilitando la compra y venta de productos entre estudiantes.',
          repo: 'https://github.com/Whatfck/UniShop',
          demo: '#'
        },
        {
          title: 'Reproductor Web',
          desc: 'Aplicación de reproducción de audio moderna con interfaz intuitiva, soporte para listas de reproducción y controles avanzados.',
          repo: 'https://github.com/Whatfck/reproductor-web',
          demo: '#'
        }
      ],
      repo_label: 'Repo',
      demo_label: 'Demo',
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
      c1_title: 'Email',
      c1_desc: 'Canal principal para propuestas y colaboraciones.',
      c2_title: 'LinkedIn',
      c2_desc: 'Contacto profesional y networking.',
      c3_title: 'GitHub',
      c3_desc: 'Repositorio de proyectos y experimentos.',
      note1: 'Disponible para colaboraciones freelance y remotas.',
      note2: 'Tiempo de respuesta estimado: 24 a 48 horas.',
    },
    footer: {
      rights: 'Todos los derechos reservados.'
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
    },
    about: {
      title: 'About me',
      kicker: 'My profile',
      lead: 'I am Daniel Pérez, a Software Engineering student with an interest in system development and the infrastructure that supports them.',
      p1: 'I focus on understanding how applications work end-to-end, from logic to deployment, including networking and Linux environments.',
      p2: 'Currently, I am strengthening my technical foundations through practical projects, specifically in systems, containers, and service exposure, seeking to build stable and well-structured solutions.',
      languages_title: 'Languages',
      languages: [
        { name: 'Spanish', level: '100%', label: 'Native language' },
        { name: 'English', level: '50%', label: 'Intermediate (~50%)' }
      ],
      highlight_title: 'Current focus',
      highlight_text: 'Building a solid foundation in network architecture and server administration to deploy services professionally.',
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
      focus: 'Focus: Interest in systems, networks, and infrastructure, with practical experience in Linux environments and service deployment.',
      intro: 'Technologies and concepts I regularly work with to build robust and secure solutions.',
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
      intro: 'My academic training focused on software engineering and technical specialization.',
      items: [
        {
          date: '2024 - 2028 (expected)',
          role: 'Software Engineering Student',
          company: 'University',
          desc: 'Comprehensive training in software development, systems architecture, and computer networks.'
        }
      ]
    },
    projects: {
      title: 'Projects',
      kicker: 'My code',
      intro: 'A selection of works where I have applied my architectural and development knowledge.',
      items: [
        {
          title: 'UniShop',
          desc: 'E-commerce platform designed for the university community, facilitating the purchase and sale of products among students.',
          repo: 'https://github.com/Whatfck/UniShop',
          demo: '#'
        },
        {
          title: 'Web Player',
          desc: 'Modern audio playback application with an intuitive interface, playlist support, and advanced controls.',
          repo: 'https://github.com/Whatfck/reproductor-web',
          demo: '#'
        }
      ],
      repo_label: 'Repo',
      demo_label: 'Demo',
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
      c1_title: 'Email',
      c1_desc: 'Main channel for proposals and collaborations.',
      c2_title: 'LinkedIn',
      c2_desc: 'Professional contact and networking.',
      c3_title: 'GitHub',
      c3_desc: 'Repository for projects and experiments.',
      note1: 'Available for freelance and remote collaborations.',
      note2: 'Estimated response time: 24 to 48 hours.',
    },
    footer: {
      rights: 'All rights reserved.'
    }
  }
};

export type Locale = 'en' | 'es';
export const getDictionary = (locale: Locale) => dictionaries[locale] || dictionaries['en'];
