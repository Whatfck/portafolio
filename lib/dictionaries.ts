export type Locale = 'en' | 'es'

type LanguageItem = {
  name: string
  level: string
  label: string
}

type SkillCategory = {
  title: string
  items: string[]
}

type ProjectItem = {
  title: string
  desc: string
  repo: string
  image_url: string
  image_alt: string
  stack: string[]
  architecture: string
}

type Dictionary = {
  navbar: {
    hero: string
    about: string
    skills: string
    projects: string
    contact: string
    theme_light: string
    theme_dark: string
  }
  hero: {
    eyebrow: string
    name: string
    role: string
    copy: string
    btn_work: string
    github_url: string
  }
  about: {
    title: string
    kicker: string
    lead: string
    p1: string
    p2: string
    languages_title: string
    languages: LanguageItem[]
    highlight_title: string
    highlight_text: string
  }
  skills: {
    title: string
    kicker: string
    intro: string
    categories: SkillCategory[]
  }
  projects: {
    title: string
    kicker: string
    intro: string
    items: ProjectItem[]
    repo_label: string
  }
  contact: {
    title: string
    kicker: string
    intro: string
    email: string
    location: string
    github: string
  }
  footer: {
    rights: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    navbar: {
      hero: 'INICIO',
      about: 'SOBRE MÍ',
      skills: 'SISTEMAS',
      projects: 'PROYECTOS',
      contact: 'CONTACTO',
      theme_light: 'Claro',
      theme_dark: 'Oscuro',
    },
    hero: {
      eyebrow: 'UNIVERSIDAD COOPERATIVA DE COLOMBIA · 2024–2027',
      name: 'Daniel Pérez',
      role: 'Ingeniería de Software & Infraestructura Cloud',
      copy: 'Construyo sistemas rigurosos en backend, infraestructura cloud y programación de sistemas. Sin adornos innecesarios; arquitectura basada en evidencia.',
      btn_work: 'VER PROYECTOS',
      github_url: 'https://github.com/Whatfck',
    },
    about: {
      title: 'FORMACIÓN & FILOSOFÍA',
      kicker: '01 / IDENTIDAD',
      lead: 'Estudiante de Ingeniería de Software enfocado en entender y operar la infraestructura que sostiene el software moderno.',
      p1: 'Cursando el sexto semestre en la Universidad Cooperativa de Colombia (UCC). Mi trabajo diario combina el modelado riguroso en backend (Java Spring Boot, Python), la programación de sistemas en Rust y la operación de entornos Linux y Docker.',
      p2: 'Creo firmemente que un buen ingeniero no solo escribe código que compila, sino que comprende redes, gestión de memoria, observabilidad y despliegue automatizado.',
      languages_title: 'IDIOMAS',
      languages: [
        { name: 'Español', level: 'Nativo', label: 'C2' },
        { name: 'Inglés', level: 'Técnico / Lectura fluida', label: 'B2' },
      ],
      highlight_title: 'PRINCIPIO TÉCNICO',
      highlight_text: 'La complejidad innecesaria es deuda técnica acumulada. Priorizo código tipado, contenedores limpios y observabilidad nativa.',
    },
    skills: {
      title: 'CAPACIDADES TÉCNICAS',
      kicker: '02 / STACK VERIFICADO',
      intro: 'Tecnologías probadas en proyectos reales, homelab y arquitectura cloud.',
      categories: [
        {
          title: 'Backend & Sistemas',
          items: ['Python (Django, REST)', 'Java (Spring Boot, OOP)', 'Rust (NSPasteboard, CLIs)', 'SQL / PostgreSQL'],
        },
        {
          title: 'Cloud & Infraestructura',
          items: ['AWS (Lambda, SQS/SNS, RDS)', 'Terraform (IaC)', 'Docker & Docker Compose', 'Linux (Administración avanzada)'],
        },
        {
          title: 'Redes, Seguridad & SRE',
          items: ['Tailscale (VPN mesh)', 'Prometheus & Grafana (Métricas)', 'Vaultwarden (Gestión de secretos)', 'AdGuard (DNS filtering)'],
        },
      ],
    },
    projects: {
      title: 'PROYECTOS DESTACADOS',
      kicker: '03 / EVIDENCIA',
      intro: 'Sistemas reales desarrollados con código abierto y despliegue documentado.',
      repo_label: 'VER REPOSITORIO',
      items: [
        {
          title: 'hot-clipboard',
          desc: 'CLI moderno para macOS escrito en Rust que reimagina pbcopy/pbpaste usando NSPasteboard. Permite copiar/pegar archivos, texto e imágenes con conversión automática.',
          repo: 'https://github.com/Whatfck/hot-clipboard',
          image_url: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Terminal Rust CLI interface',
          stack: ['Rust', 'macOS Cocoa APIs', 'NSPasteboard', 'Homebrew'],
          architecture: 'CLI binario compilado de alto rendimiento con gestión segura de memoria en Rust y enlace nativo a las APIs del portapapeles de macOS.',
        },
        {
          title: 'daniel-homelab',
          desc: 'Infraestructura doméstica auto-gestionada para experimentación en redes y seguridad. Incluye VPN mesh, observabilidad y gestión de secretos.',
          repo: 'https://github.com/Whatfck/daniel-homelab',
          image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Server rack network infrastructure',
          stack: ['Docker', 'Tailscale', 'Prometheus', 'Grafana', 'Vaultwarden'],
          architecture: 'Arquitectura de servicios containerizados interconectados mediante red virtual segura Tailscale con recolección continua de métricas en Prometheus/Grafana.',
        },
        {
          title: 'Proyecto-Final-Cloud-Computing',
          desc: 'Arquitectura serverless en AWS desplegada con Infrastructure as Code (Terraform), integrando procesamiento asíncrono con SQS/SNS y bases de datos relacionales.',
          repo: 'https://github.com/Whatfck/Proyecto-Final-Cloud-Computing',
          image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Cloud infrastructure globe network',
          stack: ['Terraform', 'AWS Lambda', 'SQS / SNS', 'Amazon RDS', 'Python'],
          architecture: 'Infraestructura como Código modular en Terraform aprovisionando funciones serverless orientadas a eventos con colas de mensajes y bases de datos gestionadas.',
        },
      ],
    },
    contact: {
      title: 'CONTACTO DIRECTO',
      kicker: '04 / COMUNICACIÓN',
      intro: 'Abierto a oportunidades en Cloud Engineering, Backend y DevOps.',
      email: 'contacto@danielperez.dev',
      location: 'Pasto, Nariño, Colombia · Remoto global',
      github: 'https://github.com/Whatfck',
    },
    footer: {
      rights: '© 2026 Daniel Pérez. Construido con rigor y sistemas limpios.',
    },
  },
  en: {
    navbar: {
      hero: 'HOME',
      about: 'ABOUT',
      skills: 'SYSTEMS',
      projects: 'PROJECTS',
      contact: 'CONTACT',
      theme_light: 'Light',
      theme_dark: 'Dark',
    },
    hero: {
      eyebrow: 'UNIVERSIDAD COOPERATIVA DE COLOMBIA · 2024–2027',
      name: 'Daniel Pérez',
      role: 'Software Engineering & Cloud Infrastructure',
      copy: 'Building rigorous systems in backend engineering, cloud infrastructure, and systems programming. No unnecessary decoration; evidence-driven architecture.',
      btn_work: 'VIEW PROJECTS',
      github_url: 'https://github.com/Whatfck',
    },
    about: {
      title: 'BACKGROUND & PHILOSOPHY',
      kicker: '01 / IDENTITY',
      lead: 'Software engineering student focused on understanding and operating the infrastructure powering modern software.',
      p1: 'Currently in my 6th semester at Universidad Cooperativa de Colombia (UCC). My work combines rigorous backend domain modeling (Java Spring Boot, Python), systems programming in Rust, and Linux/Docker operations.',
      p2: 'I believe a strong engineer does more than write code that compiles—they understand networking, memory management, observability, and automated deployment.',
      languages_title: 'LANGUAGES',
      languages: [
        { name: 'Spanish', level: 'Native', label: 'C2' },
        { name: 'English', level: 'Technical / Fluent reading', label: 'B2' },
      ],
      highlight_title: 'TECHNICAL PRINCIPLE',
      highlight_text: 'Unnecessary complexity is accumulated technical debt. I prioritize typed code, clean containers, and native observability.',
    },
    skills: {
      title: 'TECHNICAL CAPABILITIES',
      kicker: '02 / VERIFIED STACK',
      intro: 'Technologies proven in real projects, homelabs, and cloud deployments.',
      categories: [
        {
          title: 'Backend & Systems',
          items: ['Python (Django, REST)', 'Java (Spring Boot, OOP)', 'Rust (NSPasteboard, CLIs)', 'SQL / PostgreSQL'],
        },
        {
          title: 'Cloud & Infrastructure',
          items: ['AWS (Lambda, SQS/SNS, RDS)', 'Terraform (IaC)', 'Docker & Docker Compose', 'Linux (Advanced administration)'],
        },
        {
          title: 'Networking, Security & SRE',
          items: ['Tailscale (VPN mesh)', 'Prometheus & Grafana (Metrics)', 'Vaultwarden (Secrets management)', 'AdGuard (DNS filtering)'],
        },
      ],
    },
    projects: {
      title: 'SELECTED WORK',
      kicker: '03 / EVIDENCE',
      intro: 'Real systems built with open-source code and documented deployments.',
      repo_label: 'VIEW REPOSITORY',
      items: [
        {
          title: 'hot-clipboard',
          desc: 'A modern Rust CLI for macOS that reimagines pbcopy/pbpaste using NSPasteboard. Handles copying/pasting files, text, and images with automatic conversion.',
          repo: 'https://github.com/Whatfck/hot-clipboard',
          image_url: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Terminal Rust CLI interface',
          stack: ['Rust', 'macOS Cocoa APIs', 'NSPasteboard', 'Homebrew'],
          architecture: 'High-performance compiled binary CLI with safe memory management in Rust and native binding to macOS pasteboard APIs.',
        },
        {
          title: 'daniel-homelab',
          desc: 'Self-hosted home infrastructure for experimentation in networking and security. Features mesh VPN, observability, and secrets management.',
          repo: 'https://github.com/Whatfck/daniel-homelab',
          image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Server rack network infrastructure',
          stack: ['Docker', 'Tailscale', 'Prometheus', 'Grafana', 'Vaultwarden'],
          architecture: 'Containerized service architecture interconnected via secure Tailscale virtual network with continuous metric scraping in Prometheus/Grafana.',
        },
        {
          title: 'Proyecto-Final-Cloud-Computing',
          desc: 'Serverless AWS architecture deployed with Infrastructure as Code (Terraform), integrating asynchronous processing via SQS/SNS and managed relational databases.',
          repo: 'https://github.com/Whatfck/Proyecto-Final-Cloud-Computing',
          image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Cloud infrastructure globe network',
          stack: ['Terraform', 'AWS Lambda', 'SQS / SNS', 'Amazon RDS', 'Python'],
          architecture: 'Modular Terraform IaC provisioning event-driven serverless functions with message queues and managed databases.',
        },
      ],
    },
    contact: {
      title: 'DIRECT CONTACT',
      kicker: '04 / COMMUNICATION',
      intro: 'Open to opportunities in Cloud Engineering, Backend, and DevOps.',
      email: 'contacto@danielperez.dev',
      location: 'Pasto, Nariño, Colombia · Global Remote',
      github: 'https://github.com/Whatfck',
    },
    footer: {
      rights: '© 2026 Daniel Pérez. Built with rigor and clean systems.',
    },
  },
}

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale] || dictionaries.en
