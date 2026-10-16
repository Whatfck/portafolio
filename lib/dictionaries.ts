export type Locale = 'en' | 'es'

export type LanguageItem = {
  name: string
  level: string
  label: string
}

export type SkillCategory = {
  title: string
  tag: string
  items: { name: string; detail: string }[]
}

export type SchematicStep = {
  node: string
  role: string
  type: 'client' | 'gateway' | 'compute' | 'queue' | 'database' | 'observability'
}

export type SchematicItem = {
  id: string
  tab: string
  title: string
  system_type: string
  summary: string
  flow: SchematicStep[]
  architecture_decisions: string[]
  trade_offs: string
  stack: string[]
  repo: string
}

export type FeaturedProject = {
  title: string
  subtitle: string
  kicker: string
  desc: string
  repo: string
  stack: string[]
  problem: string
  constraints: string[]
  architecture: string
  trade_offs: string
  outcome: string
  image_url: string
  image_alt: string
}

export type SupportingProject = {
  title: string
  category: string
  desc: string
  repo: string
  stack: string[]
  architecture: string
  image_url: string
  image_alt: string
}

export type Dictionary = {
  navbar: {
    hero: string
    skills: string
    architecture: string
    projects: string
    about: string
    contact: string
  }
  hero: {
    eyebrow: string
    name: string
    role: string
    headline_p1: string
    headline_p2: string
    copy: string
    btn_work: string
    btn_schematics: string
    github_url: string
    linkedin_url: string
    meta_domain_label: string
    meta_domain_val: string
    meta_stack_label: string
    meta_stack_val: string
    meta_base_label: string
    meta_base_val: string
  }
  skills: {
    title: string
    kicker: string
    intro: string
    categories: SkillCategory[]
  }
  architecture: {
    title: string
    kicker: string
    intro: string
    schematics: SchematicItem[]
  }
  projects: {
    title: string
    kicker: string
    intro: string
    featured_label: string
    supporting_label: string
    repo_label: string
    featured: FeaturedProject
    supporting: SupportingProject[]
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
  contact: {
    title: string
    kicker: string
    intro: string
    primary_note: string
    location_label: string
    location: string
    github_label: string
    github_url: string
    linkedin_label: string
    linkedin_url: string
    form_title: string
    form_name_label: string
    form_email_label: string
    form_subject_label: string
    form_message_label: string
    form_submit_label: string
    form_sending_label: string
    form_success: string
    form_reset: string
    form_error: string
    form_error_required: string
    channel_info_title: string
    channel_info_desc: string
    privacy_notice: string
  }
  footer: {
    rights: string
    engineering_creed: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    navbar: {
      hero: '00. INICIO',
      skills: '01. DOMINIOS',
      architecture: '02. ARQUITECTURA',
      projects: '03. EVIDENCIA',
      about: '04. FILOSOFÍA',
      contact: '05. CONTACTO',
    },
    hero: {
      eyebrow: 'UNIVERSIDAD COOPERATIVA DE COLOMBIA · 2024–2027',
      name: 'Daniel Pérez',
      role: 'Software Architecture & Cloud Infrastructure',
      headline_p1: 'SYSTEMS WITH CHARACTER.',
      headline_p2: 'SOFTWARE IS STRUCTURE.',
      copy: 'Estudiante de Ingeniería de Software enfocado en arquitectura backend, infraestructura cloud orientada a eventos y programación de sistemas. Sin adornos innecesarios; ingeniería basada en evidencia demostrable.',
      btn_work: 'VER CASOS DE ESTUDIO',
      btn_schematics: 'ESQUEMAS TÉCNICOS',
      github_url: 'https://github.com/Whatfck',
      linkedin_url: 'https://linkedin.com/in/daniel-perez-blank',
      meta_domain_label: 'ENFOQUE PRIMARIO',
      meta_domain_val: 'Cloud Native & Systems Programming',
      meta_stack_label: 'STACK CENTRAL',
      meta_stack_val: 'Rust · Java · Python · AWS · Terraform · Linux',
      meta_base_label: 'UBICADO EN',
      meta_base_val: 'Colombia',
    },
    skills: {
      title: 'CAPACIDADES & DOMINIOS DE SISTEMAS',
      kicker: '01 / DOMINIOS VERIFICADOS',
      intro: 'Competencias técnicas respaldadas por implementación de código, configuración de infraestructura y operación continua.',
      categories: [
        {
          title: 'Cloud & Infrastructure as Code',
          tag: 'DOM-01',
          items: [
            { name: 'Terraform (IaC)', detail: 'Módulos reutilizables, provisionamiento reproducible' },
            { name: 'AWS Lambda & Serverless', detail: 'Microservicios basados en eventos, mínima latencia' },
            { name: 'AWS SQS / SNS', detail: 'Desacoplamiento asíncrono con Dead Letter Queues (DLQ)' },
            { name: 'AWS RDS & IAM', detail: 'Persistencia gestionada y principio de mínimo privilegio' },
          ],
        },
        {
          title: 'Sistemas & Backend Engineering',
          tag: 'DOM-02',
          items: [
            { name: 'Rust', detail: 'Programación de sistemas, memoria segura, FFI macOS nativo' },
            { name: 'Java (Spring Boot)', detail: 'Arquitecturas limpias, OOP riguroso y suites de tests unitarios' },
            { name: 'Python (FastAPI, Django)', detail: 'APIs RESTful orientadas a eventos y automatización' },
            { name: 'PostgreSQL & SQL', detail: 'Modelado relacional, constraints e integridad referencial' },
          ],
        },
        {
          title: 'Redes, Observabilidad & Linux',
          tag: 'DOM-03',
          items: [
            { name: 'Linux Internals', detail: 'Inspección de kernel via /proc, gestión de procesos, systemd' },
            { name: 'Prometheus & Grafana', detail: 'Métricas de host (node_exporter) y contenedores (cAdvisor)' },
            { name: 'Docker & Compose', detail: 'Aislamiento de microservicios y despliegues reproducibles' },
            { name: 'Tailscale (Zero-Trust)', detail: 'VPN mesh segura sobre WireGuard sin exponer puertos WAN' },
          ],
        },
      ],
    },
    architecture: {
      title: 'RAZONAMIENTO ARQUITECTÓNICO',
      kicker: '02 / ESQUEMAS TÉCNICOS',
      intro: 'El software confiable surge de diseñar las fronteras del sistema antes de escribir la primera línea de código.',
      schematics: [
        {
          id: 'aws-serverless',
          tab: '01. AWS Event-Driven Pipeline',
          title: 'Arquitectura Serverless Asíncrona en AWS con Terraform',
          system_type: 'DISTRIBUTED EVENT-DRIVEN CLOUD',
          summary: 'Infraestructura como Código que desacopla la ingesta de solicitudes del procesamiento de datos pesados mediante buffers SQS con protección de sobrecarga.',
          flow: [
            { node: 'HTTPS Request', role: 'Cliente perimetral', type: 'client' },
            { node: 'ALB / API Gateway', role: 'Enrutador e inspección TLS', type: 'gateway' },
            { node: 'Ingestion Lambda', role: 'Validación en Python runtime', type: 'compute' },
            { node: 'SQS Queue + DLQ', role: 'Buffer persistente y control de fallos', type: 'queue' },
            { node: 'Processor Lambda', role: 'Ejecutor de lógica de negocio', type: 'compute' },
            { node: 'Amazon RDS (Postgres)', role: 'Almacén transaccional ACID', type: 'database' },
          ],
          architecture_decisions: [
            'Desacoplamiento total: Si la base de datos o el procesador se ralentizan, la cola SQS absorbe los picos de tráfico sin degradar la respuesta HTTP del cliente.',
            'Dead Letter Queue (DLQ): Mensajes con payload corrupto se aíslan automáticamente tras 3 reintentos fallidos, alertando a SNS sin bloquear la cola principal.',
            'Reproducibilidad 100%: Cada recurso (VPC, subnets públicas/privadas, IAM roles, lambdas) está definido en Terraform sin configuraciones manuales en consola.',
          ],
          trade_offs: 'Cold-starts en Lambda mitigados mediante dimensionamiento de memoria y empaquetado optimizado del runtime.',
          stack: ['Terraform', 'AWS Lambda', 'SQS', 'SNS', 'RDS PostgreSQL', 'Python'],
          repo: 'https://github.com/Whatfck/Proyecto-Final-Cloud-Computing',
        },
        {
          id: 'homelab-mesh',
          tab: '02. Homelab Zero-Trust Mesh',
          title: 'Topología Homelab Segura con Telemetría Integral',
          system_type: 'INFRASTRUCTURE & OBSERVABILITY MESH',
          summary: 'Entorno de servidores contenerizados orquestado con Docker Compose, interconectado por VPN mesh WireGuard y supervisado continuamente.',
          flow: [
            { node: 'Remote Node / CLI', role: 'Terminal autenticado', type: 'client' },
            { node: 'Tailscale Mesh (WireGuard)', role: 'Cifrado peer-to-peer sin WAN abierta', type: 'gateway' },
            { node: 'AdGuard Home', role: 'Resolución DNS interna y filtrado', type: 'gateway' },
            { node: 'Docker Host Containers', role: 'Microservicios aislados (Vaultwarden, etc.)', type: 'compute' },
            { node: 'cAdvisor + Node Exporter', role: 'Sondas de cgroups y kernel', type: 'observability' },
            { node: 'Prometheus + Grafana', role: 'Scraping TSDB y tableros analíticos', type: 'observability' },
          ],
          architecture_decisions: [
            'Cero puertos abiertos en router WAN: Toda comunicación externa se canaliza por Tailscale, neutralizando vectores de escaneo perimetral.',
            'Telemetría estratificada: Node Exporter recolecta métricas de hardware/SO mientras cAdvisor extrae el consumo de cgroups por contenedor individual.',
            'Aislamiento de secretos: Credenciales de infraestructura desacopladas en bóveda cifrada Vaultwarden con respaldos programados.',
          ],
          trade_offs: 'Dependencia del plano de coordinación de Tailscale para el intercambio inicial de llaves públicas de WireGuard.',
          stack: ['Docker Compose', 'Tailscale', 'Prometheus', 'Grafana', 'cAdvisor', 'Linux'],
          repo: 'https://github.com/Whatfck/daniel-homelab',
        },
        {
          id: 'hot-clipboard-rust',
          tab: '03. Rust Native Interop',
          title: 'CLI de Sistemas con Enlace Seguro a Memoria en macOS',
          system_type: 'SYSTEMS PROGRAMMING & FFI INTEROP',
          summary: 'Herramienta binaria compilada en Rust que reemplaza utilidades heredadas interactuando directamente con el subsistema NSPasteboard de Cocoa.',
          flow: [
            { node: 'Terminal Pipeline', role: 'hc (copy) / hp (paste)', type: 'client' },
            { node: 'Rust CLI Core', role: 'Gestión de argumentos y tipos', type: 'compute' },
            { node: 'Cocoa Obj-C FFI Bridge', role: 'Enlace estático sin subprocesos', type: 'gateway' },
            { node: 'NSPasteboard Server', role: 'Servidor IPC nativo de macOS', type: 'compute' },
            { node: 'Zero-Copy OS Buffers', role: 'Formatos texto, imagen y archivo', type: 'database' },
          ],
          architecture_decisions: [
            'Enlace nativo frente a subprocesos: A diferencia de invocar pbcopy mediante fork/exec, hot-clipboard enlaza las APIs de AppKit directamente con tiempo de ejecución sub-milimétrico.',
            'Garantía de memoria: El sistema de tipos de Rust envuelve los punteros sin procesar de Objective-C, garantizando liberación de memoria atómica sin leaks en pipelines continuos.',
            'Detección polimórfica: Manejo automático de texto plano, rutas de archivos en disco y secuencias binarias de imágenes PNG/TIFF.',
          ],
          trade_offs: 'Acoplamiento específico a las APIs Cocoa de macOS, sacrificando portabilidad genérica para maximizar la integración con el sistema anfitrión.',
          stack: ['Rust', 'macOS Cocoa APIs', 'NSPasteboard', 'Clang FFI', 'Homebrew'],
          repo: 'https://github.com/Whatfck/hot-clipboard',
        },
      ],
    },
    projects: {
      title: 'CASOS DE ESTUDIO & EVIDENCIA',
      kicker: '03 / CÓDIGO & SISTEMAS',
      intro: 'Proyectos desarrollados bajo premisas de ingeniería rigurosa, código auditable y despliegue verificable.',
      featured_label: 'PROYECTO DESTACADO // CASE STUDY',
      supporting_label: 'SISTEMAS & HERRAMIENTAS ADICIONALES',
      repo_label: 'AUDITAR CÓDIGO EN GITHUB',
      featured: {
        title: 'hot-clipboard',
        subtitle: 'CLI moderno de alto rendimiento para macOS en Rust',
        kicker: 'SYSTEMS PROGRAMMING // CASE STUDY 01',
        desc: 'Reinvención de las herramientas históricas pbcopy/pbpaste de macOS mediante llamadas directas al framework Cocoa NSPasteboard. Capaz de manejar flujos bidireccionales entre la terminal Unix y el Finder gráfico.',
        repo: 'https://github.com/Whatfck/hot-clipboard',
        stack: ['Rust', 'macOS Cocoa APIs', 'NSPasteboard', 'Clang FFI', 'Homebrew'],
        problem: 'Las utilidades estándar del sistema pierden metadatos de archivos, no gestionan formatos binarios de imágenes directamente desde stdin y requieren spawning de procesos lentos.',
        constraints: [
          'Latencia de ejecución menor a 15ms para no entorpecer tuberías de shell.',
          'Cero fugas de memoria al transferir buffers de imagen de gran tamaño.',
          'Interoperabilidad transparente con scripts POSIX existentes.',
        ],
        architecture: 'Binario compilado en Rust que exporta los comandos `hc` y `hp`. Utiliza enlaces FFI directos contra la biblioteca de clases de Objective-C sin dependencias dinámicas pesadas.',
        trade_offs: 'Renuncia a compatibilidad Linux/Windows para aprovechar características exclusivas del pasteboard atómico de macOS.',
        outcome: 'Distribuido mediante Homebrew Tap, reduciendo en un 40% la latencia de copiado de pipelines y permitiendo el transporte de imágenes binarias directas a discos locales.',
        image_url: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
        image_alt: 'Terminal Rust CLI interface',
      },
      supporting: [
        {
          title: 'Proyecto-Final-Cloud-Computing',
          category: 'CLOUD & INFRASTRUCTURE',
          desc: 'Arquitectura serverless en AWS diseñada con Terraform. Desacoplamiento de microservicios con AWS Lambda, SQS con colas DLQ, topics SNS y base relacional Amazon RDS.',
          repo: 'https://github.com/Whatfck/Proyecto-Final-Cloud-Computing',
          stack: ['Terraform', 'AWS Lambda', 'SQS / SNS (DLQ)', 'PostgreSQL RDS', 'Python'],
          architecture: 'Infraestructura como Código modular que provisiona una VPC con subredes privadas aisladas, balanceador de carga y procesamiento reactivo.',
          image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Cloud infrastructure globe network',
        },
        {
          title: 'daniel-homelab',
          category: 'NETWORKING & OBSERVABILITY',
          desc: 'Infraestructura doméstica orquestada con Docker Compose y protegida mediante VPN mesh Zero-Trust con Tailscale. Supervisión continua en tiempo real con Prometheus y Grafana.',
          repo: 'https://github.com/Whatfck/daniel-homelab',
          stack: ['Docker Compose', 'Tailscale WireGuard', 'Prometheus', 'Grafana', 'AdGuard Home'],
          architecture: 'Topología dividida en dominios con sondas Node Exporter y cAdvisor scrapeadas periódicamente por Prometheus.',
          image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Server rack network infrastructure',
        },
        {
          title: 'UniShop',
          category: 'DISTRIBUTED SYSTEMS',
          desc: 'Plataforma multi-servicio integrada por backend core en Java Spring Boot, microservicio auxiliar de IA en Python, SPA en React/TypeScript y persistencia en PostgreSQL.',
          repo: 'https://github.com/Whatfck/UniShop',
          stack: ['Java (Spring Boot)', 'Python', 'React / TS', 'PostgreSQL', 'Docker'],
          architecture: 'Separación estricta de responsabilidades entre el motor transaccional de pedidos en Java y el microservicio analítico en Python.',
          image_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Distributed systems diagram visualization',
        },
        {
          title: 'procmon',
          category: 'LINUX KERNEL INTERNALS',
          desc: 'Herramienta de diagnóstico CLI desarrollada en Bash que examina el sistema de archivos virtual `/proc` para analizar estados de memoria, descriptores de archivos y métricas de procesos Linux.',
          repo: 'https://github.com/Whatfck/procmon',
          stack: ['Bash / Shell Scripting', 'Linux /proc', 'POSIX Utilities', 'Kernel Internals'],
          architecture: 'Acceso directo a tablas de estado de Linux sin bibliotecas intermedias pesadas, permitiendo diagnóstico en entornos mínimos de recuperación.',
          image_url: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Linux terminal process debugging',
        },
      ],
    },
    about: {
      title: 'FORMACIÓN ACADÉMICA & FILOSOFÍA',
      kicker: '04 / IDENTIDAD & FUNDAMENTOS',
      lead: 'La ingeniería de software rigurosa se distingue por entender los cimientos sobre los que opera la abstracción.',
      p1: 'Estudiante activo de Ingeniería de Software en la Universidad Cooperativa de Colombia (UCC), con graduación proyectada para 2027. Mi formación se enfoca en sistemas distribuidos, infraestructura en la nube, programación de sistemas y redes.',
      p2: 'Rechazo el desarrollo superficial que se limita a ensamblar paquetes sin comprender el consumo de CPU, la seguridad perimetral o las fallas transitorias de red. Cada proyecto que construyo está concebido para ser medible, observable y mantenible.',
      languages_title: 'COMPETENCIAS LINGÜÍSTICAS',
      languages: [
        { name: 'Español', level: 'Nativo', label: 'C2' },
        { name: 'Inglés', level: 'Intermedio Técnico (Lectura fluida y documentación de arquitectura)', label: 'B1' },
      ],
      highlight_title: 'DIRECTRIZ TÉCNICA',
      highlight_text: 'Priorizo la simplicidad de la arquitectura sobre la complejidad accidental. Menos componentes móviles equivalen a menor superficie de fallo.',
    },
    contact: {
      title: 'CANAL DE TRANSMISIÓN DIRECTA',
      kicker: '05 / COMUNICACIÓN',
      intro: 'Abierto a conversaciones técnicas, discusiones sobre arquitectura de software y oportunidades en Cloud, DevOps e Ingeniería Backend.',
      primary_note: 'Envío seguro vía API serverless. No se publican correos en texto plano para prevenir recolección automatizada.',
      location_label: 'UBICACIÓN PRINCIPAL',
      location: 'Pasto, Nariño, Colombia (Remoto / Híbrido)',
      github_label: 'REPOSITORIOS PÚBLICOS',
      github_url: 'https://github.com/Whatfck',
      linkedin_label: 'PERFIL PROFESIONAL',
      linkedin_url: 'https://linkedin.com/in/daniel-perez-blank',
      form_title: 'ENVIAR MENSAJE DIRECTO',
      form_name_label: 'NOMBRE / IDENTIFICADOR',
      form_email_label: 'CORREO DE CONTACTO',
      form_subject_label: 'ASUNTO O CONTEXTO',
      form_message_label: 'MENSAJE / DESCRIPCIÓN DEL REQUERIMIENTO',
      form_submit_label: 'TRANSMITIR MENSAJE',
      form_sending_label: 'TRANSMITIENDO...',
      form_success: 'Mensaje transmitido con éxito al servidor.',
      form_reset: 'Enviar otro mensaje',
      form_error: 'Error al enviar la comunicación. Por favor intenta de nuevo o conecta vía LinkedIn.',
      form_error_required: 'Por favor completa todos los campos requeridos.',
      channel_info_title: 'REDES PROFESIONALES CONFIRMADAS',
      channel_info_desc: 'Canales oficiales con actividad y auditoría técnica verificable.',
      privacy_notice: 'Protección contra spam activa mediante honeypot y saneamiento estricto de entrada.',
    },
    footer: {
      rights: '© 2026 Daniel Pérez · Ingeniería de Software UCC (2024–2027).',
      engineering_creed: 'Build rigorous systems. Present them with character.',
    },
  },
  en: {
    navbar: {
      hero: '00. START',
      skills: '01. DOMAINS',
      architecture: '02. ARCHITECTURE',
      projects: '03. EVIDENCE',
      about: '04. PHILOSOPHY',
      contact: '05. TRANSMISSION',
    },
    hero: {
      eyebrow: 'UNIVERSIDAD COOPERATIVA DE COLOMBIA · 2024–2027',
      name: 'Daniel Pérez',
      role: 'Software Architecture & Cloud Infrastructure',
      headline_p1: 'SYSTEMS WITH CHARACTER.',
      headline_p2: 'SOFTWARE IS STRUCTURE.',
      copy: 'Software Engineering student focused on backend architecture, event-driven cloud infrastructure, and systems programming. No superfluous decoration; engineering based on demonstrable evidence.',
      btn_work: 'INSPECT CASE STUDIES',
      btn_schematics: 'TECHNICAL SCHEMATICS',
      github_url: 'https://github.com/Whatfck',
      linkedin_url: 'https://linkedin.com/in/daniel-perez-blank',
      meta_domain_label: 'PRIMARY FOCUS',
      meta_domain_val: 'Cloud Native & Systems Programming',
      meta_stack_label: 'CORE STACK',
      meta_stack_val: 'Rust · Java · Python · AWS · Terraform · Linux',
      meta_base_label: 'LOCATION',
      meta_base_val: 'Colombia',
    },
    skills: {
      title: 'CAPABILITIES & SYSTEM DOMAINS',
      kicker: '01 / VERIFIED DOMAINS',
      intro: 'Technical competencies grounded in source code implementation, infrastructure configuration, and ongoing operations.',
      categories: [
        {
          title: 'Cloud & Infrastructure as Code',
          tag: 'DOM-01',
          items: [
            { name: 'Terraform (IaC)', detail: 'Modular definitions, reproducible cloud provisioning' },
            { name: 'AWS Lambda & Serverless', detail: 'Event-driven compute with minimal idle footprint' },
            { name: 'AWS SQS / SNS', detail: 'Asynchronous decoupling with Dead Letter Queues (DLQ)' },
            { name: 'AWS RDS & IAM', detail: 'Managed persistence and least-privilege security policy' },
          ],
        },
        {
          title: 'Systems & Backend Engineering',
          tag: 'DOM-02',
          items: [
            { name: 'Rust', detail: 'Systems programming, memory safety, native macOS FFI interop' },
            { name: 'Java (Spring Boot)', detail: 'Clean architecture, OOP patterns, and unit test suites' },
            { name: 'Python (FastAPI, Django)', detail: 'Event-driven RESTful APIs and automation tooling' },
            { name: 'PostgreSQL & SQL', detail: 'Relational data modeling, foreign keys, and ACID constraints' },
          ],
        },
        {
          title: 'Networking, Observability & Linux',
          tag: 'DOM-03',
          items: [
            { name: 'Linux Internals', detail: 'Virtual /proc inspection, process handling, systemd management' },
            { name: 'Prometheus & Grafana', detail: 'Host metrics (node_exporter) and container cgroups (cAdvisor)' },
            { name: 'Docker & Compose', detail: 'Containerized service isolation and deterministic runs' },
            { name: 'Tailscale (Zero-Trust)', detail: 'Private WireGuard mesh VPN without exposed WAN ports' },
          ],
        },
      ],
    },
    architecture: {
      title: 'ARCHITECTURAL REASONING',
      kicker: '02 / TECHNICAL SCHEMATICS',
      intro: 'Reliable software originates from designing systemic boundaries before writing the first line of code.',
      schematics: [
        {
          id: 'aws-serverless',
          tab: '01. AWS Event-Driven Pipeline',
          title: 'Asynchronous Serverless Architecture in AWS via Terraform',
          system_type: 'DISTRIBUTED EVENT-DRIVEN CLOUD',
          summary: 'Infrastructure as Code decoupling request ingestion from compute-intensive work via SQS buffers with overload dampening.',
          flow: [
            { node: 'HTTPS Request', role: 'Perimeter client', type: 'client' },
            { node: 'ALB / API Gateway', role: 'Router and TLS inspection', type: 'gateway' },
            { node: 'Ingestion Lambda', role: 'Validation in Python runtime', type: 'compute' },
            { node: 'SQS Queue + DLQ', role: 'Persistent buffer and fault isolation', type: 'queue' },
            { node: 'Processor Lambda', role: 'Business logic execution', type: 'compute' },
            { node: 'Amazon RDS (Postgres)', role: 'Transactional ACID persistence', type: 'database' },
          ],
          architecture_decisions: [
            'Total decoupling: If database or downstream processors slow down, the SQS queue buffers spikes without degrading client HTTP responsiveness.',
            'Dead Letter Queue (DLQ): Poison-pill payloads are quarantined automatically after 3 retries, notifying SNS without blocking the main stream.',
            '100% Reproducibility: Every resource (VPC, private subnets, IAM roles, lambdas) is strictly versioned in Terraform.',
          ],
          trade_offs: 'Lambda cold-starts mitigated by memory tuning and lean runtime packaging.',
          stack: ['Terraform', 'AWS Lambda', 'SQS', 'SNS', 'RDS PostgreSQL', 'Python'],
          repo: 'https://github.com/Whatfck/Proyecto-Final-Cloud-Computing',
        },
        {
          id: 'homelab-mesh',
          tab: '02. Homelab Zero-Trust Mesh',
          title: 'Hardened Homelab Topology with Full-Spectrum Telemetry',
          system_type: 'INFRASTRUCTURE & OBSERVABILITY MESH',
          summary: 'Containerized service cluster orchestrated with Docker Compose, interlinked via WireGuard mesh, and continuously monitored.',
          flow: [
            { node: 'Remote Node / CLI', role: 'Authenticated terminal client', type: 'client' },
            { node: 'Tailscale Mesh (WireGuard)', role: 'Peer-to-peer cipher without open WAN ports', type: 'gateway' },
            { node: 'AdGuard Home', role: 'Internal DNS resolution & filtering', type: 'gateway' },
            { node: 'Docker Host Containers', role: 'Isolated services (Vaultwarden, etc.)', type: 'compute' },
            { node: 'cAdvisor + Node Exporter', role: 'cgroups and kernel probe agents', type: 'observability' },
            { node: 'Prometheus + Grafana', role: 'TSDB metrics scraping and dashboard analytics', type: 'observability' },
          ],
          architecture_decisions: [
            'Zero WAN open ports: Ingress is strictly mediated by mutual WireGuard authentication, eliminating perimeter scanning vectors.',
            'Layered telemetry: Node Exporter collects bare-metal OS metrics while cAdvisor isolates individual container cgroup consumption.',
            'Secret isolation: Infrastructure credentials managed in encrypted Vaultwarden instances with scheduled offsite snapshots.',
          ],
          trade_offs: 'Reliance on Tailscale coordination servers for initial WireGuard public key exchange.',
          stack: ['Docker Compose', 'Tailscale', 'Prometheus', 'Grafana', 'cAdvisor', 'Linux'],
          repo: 'https://github.com/Whatfck/daniel-homelab',
        },
        {
          id: 'hot-clipboard-rust',
          tab: '03. Rust Native Interop',
          title: 'Systems CLI with Memory-Safe macOS Native Interop',
          system_type: 'SYSTEMS PROGRAMMING & FFI INTEROP',
          summary: 'Compiled Rust binary replacing legacy tools by interfacing directly with Cocoa NSPasteboard without process overhead.',
          flow: [
            { node: 'Terminal Pipeline', role: 'hc (copy) / hp (paste)', type: 'client' },
            { node: 'Rust CLI Core', role: 'Argument parser and type resolver', type: 'compute' },
            { node: 'Cocoa Obj-C FFI Bridge', role: 'Static linkage without subshell spawning', type: 'gateway' },
            { node: 'NSPasteboard Server', role: 'macOS native IPC pasteboard server', type: 'compute' },
            { node: 'Zero-Copy OS Buffers', role: 'Text, image, and file descriptors', type: 'database' },
          ],
          architecture_decisions: [
            'Direct linkage vs process fork: Rather than executing pbcopy in a child subshell, hot-clipboard calls AppKit APIs directly in sub-millisecond time.',
            'Memory safety guarantees: Rust ownership model encapsulates raw Objective-C pointers, ensuring zero memory leaks in streaming pipes.',
            'Polymorphic pasteboard detection: Transparently handles plain text, paths, and binary PNG/TIFF image streams.',
          ],
          trade_offs: 'Strict coupling to macOS Cocoa frameworks, trading platform agnosticism for maximum OS integration.',
          stack: ['Rust', 'macOS Cocoa APIs', 'NSPasteboard', 'Clang FFI', 'Homebrew'],
          repo: 'https://github.com/Whatfck/hot-clipboard',
        },
      ],
    },
    projects: {
      title: 'CASE STUDIES & EVIDENCE',
      kicker: '03 / CODE & SYSTEMS',
      intro: 'Engineering projects founded on architectural rigor, verifiable codebases, and documented deployments.',
      featured_label: 'FEATURED CASE STUDY',
      supporting_label: 'ADDITIONAL SYSTEMS & TOOLS',
      repo_label: 'AUDIT REPOSITORY ON GITHUB',
      featured: {
        title: 'hot-clipboard',
        subtitle: 'Modern high-performance macOS CLI written in Rust',
        kicker: 'SYSTEMS PROGRAMMING // CASE STUDY 01',
        desc: 'Reengineering macOS historical pbcopy/pbpaste through direct Cocoa NSPasteboard API calls. Seamlessly bridges Unix terminal pipelines with the graphical Finder.',
        repo: 'https://github.com/Whatfck/hot-clipboard',
        stack: ['Rust', 'macOS Cocoa APIs', 'NSPasteboard', 'Clang FFI', 'Homebrew'],
        problem: 'System standard tools drop file metadata, fail to pipe binary image formats through stdin, and incur slow process creation overhead.',
        constraints: [
          'Sub-15ms execution latency to avoid stalling interactive shell pipelines.',
          'Zero heap leaks when transmitting multi-megabyte image buffers.',
          'Seamless interoperability with standard POSIX shell scripts.',
        ],
        architecture: 'Compiled standalone binary in Rust exposing `hc` and `hp`. Leverages direct FFI bindings into Objective-C runtime classes without heavy dependencies.',
        trade_offs: 'Foregoes Linux/Windows portability in order to exploit macOS-specific atomic pasteboard types.',
        outcome: 'Packaged and distributed via Homebrew Tap; cut pipeline transfer latency by 40% and enabled automated binary image streaming directly to disk.',
        image_url: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
        image_alt: 'Terminal Rust CLI interface',
      },
      supporting: [
        {
          title: 'Proyecto-Final-Cloud-Computing',
          category: 'CLOUD & INFRASTRUCTURE',
          desc: 'Serverless AWS architecture codified in Terraform. Microservice decoupling via AWS Lambda, SQS with Dead Letter Queues, SNS alerts, and Amazon RDS.',
          repo: 'https://github.com/Whatfck/Proyecto-Final-Cloud-Computing',
          stack: ['Terraform', 'AWS Lambda', 'SQS / SNS (DLQ)', 'PostgreSQL RDS', 'Python'],
          architecture: 'Modular Infrastructure as Code provisioning an isolated VPC, private subnets, and reactive event handlers.',
          image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Cloud infrastructure globe network',
        },
        {
          title: 'daniel-homelab',
          category: 'NETWORKING & OBSERVABILITY',
          desc: 'Self-hosted infrastructure orchestrated with Docker Compose and secured through a Zero-Trust Tailscale mesh. Real-time metric gathering with Prometheus and Grafana.',
          repo: 'https://github.com/Whatfck/daniel-homelab',
          stack: ['Docker Compose', 'Tailscale WireGuard', 'Prometheus', 'Grafana', 'AdGuard Home'],
          architecture: 'Segmented multi-domain architecture with Node Exporter and cAdvisor scraped periodically by Prometheus.',
          image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Server rack network infrastructure',
        },
        {
          title: 'UniShop',
          category: 'DISTRIBUTED SYSTEMS',
          desc: 'Multi-service platform comprising a Java Spring Boot core backend, a Python AI microservice, a React/TypeScript SPA, and PostgreSQL relational storage.',
          repo: 'https://github.com/Whatfck/UniShop',
          stack: ['Java (Spring Boot)', 'Python', 'React / TS', 'PostgreSQL', 'Docker'],
          architecture: 'Strict boundary between transactional order processing in Java and analytical assistance in Python.',
          image_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Distributed systems diagram visualization',
        },
        {
          title: 'procmon',
          category: 'LINUX KERNEL INTERNALS',
          desc: 'CLI diagnostic tool developed in Bash inspecting the virtual `/proc` filesystem for real-time analysis of Linux process states, memory allocation, and file descriptors.',
          repo: 'https://github.com/Whatfck/procmon',
          stack: ['Bash / Shell Scripting', 'Linux /proc', 'POSIX Utilities', 'Kernel Internals'],
          architecture: 'Direct reads from Linux kernel runtime tables without heavy libraries, ideal for minimal recovery environments.',
          image_url: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
          image_alt: 'Linux terminal process debugging',
        },
      ],
    },
    about: {
      title: 'ACADEMIC FORMATION & PHILOSOPHY',
      kicker: '04 / IDENTITY & FOUNDATIONS',
      lead: 'Rigorous software engineering is distinguished by understanding the concrete foundations beneath abstractions.',
      p1: 'Active Software Engineering student at Universidad Cooperativa de Colombia (UCC), with expected graduation in 2027. My technical focus centers on distributed systems, cloud infrastructure, systems programming, and networking.',
      p2: 'I avoid shallow development that merely stitches dependencies without inspecting CPU utilization, network failure modes, or boundary security. Every system I build is meant to be measurable, observable, and maintainable.',
      languages_title: 'LINGUISTIC PROFICIENCY',
      languages: [
        { name: 'Spanish', level: 'Native', label: 'C2' },
        { name: 'English', level: 'Intermediate Technical (Fluent documentation & architecture reading)', label: 'B1' },
      ],
      highlight_title: 'ENGINEERING PRINCIPLE',
      highlight_text: 'Prioritize architectural clarity over accidental complexity. Fewer moving components result in smaller failure surfaces.',
    },
    contact: {
      title: 'DIRECT TRANSMISSION CHANNEL',
      kicker: '05 / COMMUNICATION',
      intro: 'Open to technical conversations, software architecture discussions, and opportunities across Cloud, DevOps, and Backend Engineering.',
      primary_note: 'Dispatched securely via serverless API. No public plaintext emails to eliminate automated scrapers.',
      location_label: 'PRIMARY BASE',
      location: 'Pasto, Nariño, Colombia (Remote / Hybrid)',
      github_label: 'PUBLIC CODE REPOSITORIES',
      github_url: 'https://github.com/Whatfck',
      linkedin_label: 'PROFESSIONAL NETWORK',
      linkedin_url: 'https://linkedin.com/in/daniel-perez-blank',
      form_title: 'DISPATCH DIRECT TRANSMISSION',
      form_name_label: 'NAME / IDENTIFIER',
      form_email_label: 'RETURN EMAIL ADDRESS',
      form_subject_label: 'SUBJECT / CONTEXT',
      form_message_label: 'TRANSMISSION PAYLOAD / SPECIFICATION',
      form_submit_label: 'TRANSMIT MESSAGE',
      form_sending_label: 'TRANSMITTING...',
      form_success: 'Transmission successfully delivered to server.',
      form_reset: 'Dispatch another message',
      form_error: 'Transmission failure. Please try again or reach out via LinkedIn.',
      form_error_required: 'Please populate all mandatory fields.',
      channel_info_title: 'CONFIRMED PROFESSIONAL CHANNELS',
      channel_info_desc: 'Verified channels with active technical footprint and audit trails.',
      privacy_notice: 'Honeypot protection enabled with strict server-side payload sanitation.',
    },
    footer: {
      rights: '© 2026 Daniel Pérez · Software Engineering UCC (2024–2027).',
      engineering_creed: 'Build rigorous systems. Present them with character.',
    },
  },
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.es
}
