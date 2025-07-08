export const myProjects = [
  {
    id: 1,
    title: "Expense Tracker (MERN)",
    description:
      "A full-featured expense tracking web app with JWT auth, analytics, and Excel exports.",
    subDescription: [
      "Built with MERN stack: MongoDB, Express.js, React, and Node.js.",
      "Implemented JWT authentication and role-based access for users and admins.",
      "Added dynamic charts, category filters, and downloadable Excel reports.",
      "Integrated protected routes and custom Tailwind UI components.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/expense.png",
    tags: [
      { id: 1, name: "MongoDB", path: "/assets/logos/mongodb.png" },
      { id: 2, name: "Express.js", path: "/assets/logos/express2.png" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/nodejs.png" },
    ],
  },
  {
    id: 2,
    title: "Tasty Treat (React)",
    description:
      "A modern food ordering app with responsive design and cart functionality.",
    subDescription: [
      "Created with React and Tailwind CSS for a responsive UI.",
      "Implemented cart logic, category filters, and product detail pages.",
      "Utilized Redux Toolkit for state management.",
      "Enhanced performance with code splitting and lazy loading.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/tastytreat.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Redux", path: "/assets/logos/redux.png" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 3,
    title: "TPS Zombie Game (Unity)",
    description:
      "A third-person zombie shooter game built in Unity with enemy AI and survival mechanics.",
    subDescription: [
      "Developed using Unity and C# with custom AI and shooting systems.",
      "Implemented NavMesh pathfinding and character animations.",
      "Created enemy waves, scoring, health systems, and player progression.",
      "Optimized for smooth gameplay on mid-tier systems.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/zombiegame.png",
    tags: [
      { id: 1, name: "Unity", path: "/assets/logos/unity.png" },
      { id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 3, name: "NavMesh", path: "/assets/logos/navmesh.jpg" },
      { id: 4, name: "Blender", path: "/assets/logos/blender.png" },
    ],
  },
  {
    id: 4,
    title: "3D Runner Game (Unity)",
    description:
      "An endless 3D runner game with obstacle spawning, scoring, and animations.",
    subDescription: [
      "Designed 3D terrain and player mechanics using Unity and C#.",
      "Implemented obstacle generation, collectible items, and speed scaling.",
      "Created immersive camera transitions and SFX for better experience.",
      "Exported game builds and optimized for web and PC.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/3drunner.png",
    tags: [
      { id: 1, name: "Unity", path: "/assets/logos/unity.png" },
      { id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 3, name: "Blender", path: "/assets/logos/blender.png" },
      { id: 4, name: "GameDev", path: "/assets/logos/gamedev.png" },
    ],
  },
  {
    id: 5,
    title: "Event Ticketing System (Laravel)",
    description:
      "A complete Laravel-based system for event registration, ticketing, and admin control.",
    subDescription: [
      "Developed using Laravel 9 with Blade templates and MySQL.",
      "Implemented user, organizer, and admin roles with access control.",
      "Integrated payment module, Excel export, charts, and theme toggle.",
      "Created reports, event dashboards, and dynamic ticket PDFs.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ticketing.png",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.png" },
      { id: 2, name: "PHP", path: "/assets/logos/php.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/mysql.png" },
      { id: 4, name: "Blade", path: "/assets/logos/blade.png" },
    ],
  },
  {
    id: 6,
    title: "Ball in the Maze (Unity)",
    description:
      "A physics-based mobile game where the player tilts a maze to guide the ball to the goal.",
    subDescription: [
      "Built using Unity physics and C# scripting for realistic movement.",
      "Designed multiple maze levels and increasing difficulty.",
      "Integrated tilt-based mobile controls using accelerometer input.",
      "Tested and optimized for Android devices.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ballgame.png",
    tags: [
      { id: 1, name: "Unity", path: "/assets/logos/unity.png" },
      { id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 3, name: "Mobile", path: "/assets/logos/mobile.png" },
      { id: 4, name: "Physics", path: "/assets/logos/physics.png" },
    ],
  },
];


export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/harshavardhankarnati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Game Developer Intern",
    job: "TPS Zombie Game & 3D Runner Game",
    date: "2023-2024",
    contents: [
      "Developed a third-person zombie shooter game in Unity with enemy AI, NavMesh pathfinding, and survival mechanics.",
      "Built a 3D endless runner game with smooth animations, dynamic obstacles, and score tracking.",
      "Used C# and Unity’s game engine features to design gameplay logic, particle systems, and responsive UIs.",
      "Created and optimized assets using Blender and Unity’s lighting and post-processing systems.",
    ],
  },
  {
    title: "Full Stack Developer",
    job: "Expense Tracker & Tasty Treat",
    date: "2024-Present",
    contents: [
      "Built a responsive Expense Tracker web app using the MERN stack with authentication and dynamic chart visualizations.",
      "Developed Tasty Treat – a food ordering system with modern UI, cart features, and backend APIs using React and Node.js.",
      "Implemented RESTful APIs, JWT-based authentication, and MongoDB for secure and scalable data storage.",
      "Focused on clean architecture, modular code, and UI/UX design with Tailwind CSS and component libraries.",
    ],
  },
  {
    title: "Laravel Developer",
    job: "Event Ticketing System",
    date: "2025-Present",
    contents: [
      "Designed and developed a full-stack event management and ticketing platform using Laravel 9 and MySQL.",
      "Integrated Stripe for secure payments and implemented user, organizer, and admin roles with access control.",
      "Built dashboards, charts, and theme toggling for an enhanced user experience.",
      "Focused on performance, secure code practices, and clean Blade templating for maintainability.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
