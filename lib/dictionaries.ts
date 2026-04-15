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
      eyebrow: 'Portafolio 2026',
      name: 'Daniel Perez',
      role: 'Estudiante Ing. Software',
      copy: 'Enfocado en software, redes y arquitectura de servidores para crear soluciones robustas y eficientes.',
      btn_cv: 'Ver CV',
    },
    about: {
      title: 'Sobre mi',
      kicker: 'Perfil tecnico',
      lead: 'Soy Daniel Perez, estudiante de ingenieria de software con interes en construir soluciones solidas y entender los sistemas de forma integral.',
      p1: 'Me motiva comprender como funciona una aplicacion de extremo a extremo: logica, rendimiento, redes y arquitectura de servidores en entornos reales.',
      p2: 'Estoy fortaleciendo mis bases tecnicas mediante proyectos que conectan desarrollo con infraestructura, priorizando estabilidad, eficiencia y escalabilidad.',
      languages_title: 'Idiomas',
      languages: [
        { name: 'Español', level: '100%', label: 'Lengua materna' },
        { name: 'Inglés', level: '50%', label: 'Intermedio (~50%)' }
      ],
      highlight_title: 'Ahora mismo',
      highlight_text: 'Aprendiendo a disenar sistemas mas robustos, mejorar rendimiento y tomar decisiones tecnicas con enfoque de largo plazo.',
      pill1_title: 'Intereses',
      pill1_text: 'Redes, arquitectura de servidores, ciberseguridad y rendimiento.',
      pill2_title: 'Enfoque',
      pill2_text: 'Comprender el por que de cada solucion, no solo que funcione.',
      pill3_title: 'Objetivo',
      pill3_text: 'Construir software confiable, escalable y bien pensado.',
    },
    skills: {
      title: 'Habilidades',
      kicker: 'Herramientas',
      intro: 'Tecnologias y conceptos con los que trabajo habitualmente para construir soluciones solidas.',
      cat1_title: 'Frontend',
      cat2_title: 'Backend & Infraestructura',
      cat3_title: 'Otras Competencias',
      skills_cat3: ['Git / Github', 'Arquitecturas red', 'Resolucion de problemas', 'Trabajo en equipo']
    },
    experience: {
      title: 'Experiencia',
      kicker: 'Trayectoria',
      intro: 'Un resumen de mi formacion academica y mi experiencia profesional en el ambito de desarrollo tech.',
      current_date: 'Ene 2024 - Presente',
      current_role: 'Desarrollador Junior / Practicas',
      current_company: 'Nombre de la Empresa',
      current_desc: 'Desarrollo de nuevas funcionalidades, optimizacion de codigo y colaboracion con el equipo en entornos de despliegue.',
      edu_date: 'Ago 2021 - 2026',
      edu_role: 'Estudiante de Ingenieria de Software',
      edu_company: 'Nombre de tu Universidad',
      edu_desc: 'Formacion integral en desarrollo de software, arquitectura de computadoras, redes y bases de datos.',
    },
    projects: {
      title: 'Proyectos',
      kicker: 'Mi codigo',
      intro: 'Una seleccion de trabajos en los que he aplicado mis conocimientos arquitectonicos y de desarrollo.',
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
        },
        {
          title: 'Portafolio Personal',
          desc: 'Este mismo sitio web, desarrollado con Next.js y CSS moderno, enfocado en una experiencia de usuario y visualmente atractiva.',
          repo: 'https://github.com/Whatfck/portafolio',
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
      eyebrow: 'Portfolio 2026',
      name: 'Daniel Perez',
      role: 'Software Engineering Student',
      copy: 'Focused on software, networks, and server architecture to build robust and efficient solutions.',
      btn_cv: 'View CV',
    },
    about: {
      title: 'About me',
      kicker: 'Technical profile',
      lead: 'I am Daniel Perez, a software engineering student interested in building solid solutions and understanding systems holistically.',
      p1: 'I am motivated by understanding how an application works end-to-end: logic, performance, networks, and server architecture in real environments.',
      p2: 'I am strengthening my technical foundations through projects that connect development with infrastructure, prioritizing stability, efficiency, and scalability.',
      languages_title: 'Languages',
      languages: [
        { name: 'Spanish', level: '100%', label: 'Native language' },
        { name: 'English', level: '50%', label: 'Intermediate (~50%)' }
      ],
      highlight_title: 'Currently',
      highlight_text: 'Learning to design more robust systems, improve performance, and make long-term technical decisions.',
      pill1_title: 'Interests',
      pill1_text: 'Networks, server architecture, cybersecurity, and performance.',
      pill2_title: 'Focus',
      pill2_text: 'Understanding why each solution works, not just making it work.',
      pill3_title: 'Goal',
      pill3_text: 'To build reliable, scalable, and well-thought-out software.',
    },
    skills: {
      title: 'Skills',
      kicker: 'Tools',
      intro: 'Technologies and concepts I regularly work with to build solid solutions.',
      cat1_title: 'Frontend',
      cat2_title: 'Backend & Infrastructure',
      cat3_title: 'Other Competencies',
      skills_cat3: ['Git / Github', 'Network Architectures', 'Problem Solving', 'Teamwork']
    },
    experience: {
      title: 'Experience',
      kicker: 'Career path',
      intro: 'A summary of my academic background and professional experience in the tech development field.',
      current_date: 'Jan 2024 - Present',
      current_role: 'Junior Developer / Intern',
      current_company: 'Company Name',
      current_desc: 'Development of new features, code optimization, and team collaboration in deployment environments.',
      edu_date: 'Aug 2021 - 2026',
      edu_role: 'Software Engineering Student',
      edu_company: 'Your University Name',
      edu_desc: 'Comprehensive training in software development, computer architecture, networks, and databases.',
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
        },
        {
          title: 'Personal Portfolio',
          desc: 'This very website, developed with Next.js and modern CSS, focused on a premium and visually attractive user experience.',
          repo: 'https://github.com/Whatfck/portafolio',
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
