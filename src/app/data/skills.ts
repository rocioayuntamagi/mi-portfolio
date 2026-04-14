export type Skill = {
  name: string;
  emoji: string;
  description: string;
};
 
export const skills: Skill[] = [
  { name: "HTML",
    emoji: "🌐",
    description: "Estructuro páginas web con semántica correcta, accesibilidad y buenas prácticas." },
  { name: "CSS",
    emoji: "🎨",
    description: "Creo interfaces modernas, responsivas y visualmente atractivas usando layouts flexibles y animaciones." },
  { name: "JS",
    emoji: "⚡",
    description: "Desarrollo lógica dinámica, interacción con el usuario y funcionalidades que hacen que la web cobre vida." },
  { name: "React",
    emoji: "⚛️",
    description: "Construyo interfaces modulares y eficientes con componentes reutilizables, hooks y manejo de estado." },
  { name: "Node",
    emoji: "🟢",
    description: "Desarrollo servidores y APIs simples, gestiono rutas y conecto aplicaciones con bases de datos." },
  { name: "Git",
    emoji: "🔗",
    description: "Versiono proyectos de forma organizada, gestiono ramas y mantengo un flujo de trabajo profesional." },
  { name: "GitHub",
    emoji: "🐙",
    description: "Trabajo con repositorios remotos, colaboro en proyectos y publico código de manera clara y documentada." },
];
 