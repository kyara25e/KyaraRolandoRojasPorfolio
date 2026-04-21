export const translations = {
  es: {
    nav: {
      home: "Home",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Portfolio personal · Frontend + Diseño",
      titleStart: "Hola, soy",
      role: "Frontend / Full Stack Developer",
      description:
        "Construyo experiencias web modernas combinando desarrollo, diseño gráfico y creatividad. Me gusta crear interfaces prolijas, visualmente fuertes y con identidad propia.",
      projectsBtn: "Ver proyectos",
      contactBtn: "Contacto",
      pills: ["React / Next.js", "Diseño Creativo", "Edición de Video"],
      descriptionProject:
        "Montevino es una aplicación web diseñada para ofrecer una experiencia de usuario moderna y atractiva, combinando desarrollo frontend con un diseño visualmente fuerte.",
      text: ["QUE HAGO", "Desarrollo web", "Diseño visual", "Contenido creativo"],
      textDescription: ["Creo interfaces modernas, responsivas y enfocadas en la experiencia del usuario utilizando tecnologías como React, Next.js, TypeScript y Tailwind CSS.", "Me gusta combinar desarrollo con diseño gráfico para crear productos digitales que no solo funcionen bien, sino que también tengan identidad, estética y coherencia visual.", "También disfruto la edición de video, el contenido visual y la parte creativa de comunicar proyectos y marcas de forma más atractiva."],
      more: ["Motos", "Edición y contenido", "Ciberseguridad", "Deportes"],
      moreDesciption: ["Me apasionan las motos y todo lo que transmite ese mundo: energía, estilo y libertad.", "Disfruto crear contenido visual y editar videos con un enfoque creativo y estético.", "Tengo interés en seguir aprendiendo sobre ciberseguridad y el funcionamiento más profundo del mundo tech.", "Me gustan los deportes y todo lo que tenga que ver con disciplina, constancia y superación." ],
    },
    projectsPage: {
      eyebrow: "Portfolio",
      title: "Mis Proyectos",
      subtitle:
        "Una selección de proyectos donde combiné desarrollo frontend, diseño visual y creatividad.",
      featured: "Proyecto destacado",
      viewProject: "Ver proyecto",
      github: "GitHub",
      noMedia: "Sin imagen ni video",
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Hablemos",
      subtitle:
        "Si querés trabajar conmigo, colaborar en un proyecto o conocer más sobre lo que hago, podés contactarme por estos medios.",
      github: "Ver perfil",
      linkedin: "Conectar",
      emailLabel: "Email",
    },
    footer: {
      text: "Diseñado y desarrollado por Kyara Rojas. Portfolio personal creado con Next.js y Tailwind CSS.",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Personal portfolio · Frontend + Design",
      titleStart: "Hi, I'm",
      role: "Frontend / Full Stack Developer",
      description:
        "I build modern web experiences by combining development, graphic design, and creativity. I enjoy creating clean, visually strong interfaces with their own identity.",
      projectsBtn: "View projects",
      contactBtn: "Contact",
      pills: ["React / Next.js", "Creative Design", "Video Editing"],
      descriptionProject:
        "Montevino is a modern and attractive web application designed to provide a cutting-edge user experience, combining frontend development with a visually strong design.",
      text: ["WHAT I DO", "Web Development", "Visual Design", "Creative Content"],
      textDescription: ["I create modern, responsive interfaces focused on the user experience using technologies like React, Next.js, TypeScript, and Tailwind CSS.", "I like to combine development with graphic design to create digital products that not only function well but also have identity, aesthetics, and visual coherence.", "I also enjoy video editing, visual content, and the creative part of communicating projects and brands in a more attractive way."  ],
      more: ["Motorcycles", "Editing and content", "Cybersecurity", "Sports"],
      moreDesciption: ["I am passionate about motorcycles and everything they convey: energy, style, and freedom.", "I enjoy creating visual content and editing videos with a creative and aesthetic approach.", "I have an interest in continuing to learn about cybersecurity and the deeper workings of the tech world.", "I like sports and everything related to discipline, perseverance, and achievement." ],
    },
    projectsPage: {
      eyebrow: "Portfolio",
      title: "My Projects",
      subtitle:
        "A selection of projects where I combined frontend development, visual design, and creativity.",
      featured: "Featured project",
      viewProject: "View project",
      github: "GitHub",
      noMedia: "No image or video",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let's talk",
      subtitle:
        "If you'd like to work with me, collaborate on a project, or learn more about what I do, you can contact me through these channels.",
      github: "View profile",
      linkedin: "Connect",
      emailLabel: "Email",
    },
    footer: {
      text: "Designed and developed by Kyara Rojas. Personal portfolio built with Next.js and Tailwind CSS.",
    },
  },
} as const;

export type Language = keyof typeof translations;