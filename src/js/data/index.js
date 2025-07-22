export const projects = () => {
  let id = 1;
  return new Map([
    [
      id++,
      {
        name: "FiniteViz",
        description:
          "Web-based Finite Element Mesh Generator for creating and visualising Finite Element meshes on the web.",
        link: "https://github.com/chubi-x/FiniteViz",
        thumbnail: "/images/projects/finiteViz.jpg",
        tools: [
          "react",
          "threejs",
          "c++",
          "flask",
          "redis",
          "docker",
          "rabbitmq",
        ],
      },
    ],
    [
      id++,
      {
        name: "Sorta",
        description:
          "an app that lets twitter users manage and categorize their bookmarks.",
        link: "https://github.com/chubi-x/sorta",
        thumbnail: "/images/projects/sorta.jpg",
        tools: [
          "typescript",
          "react",
          "tailwindcss",
          "expressjs",
          "firebase",
          "twitterAPI",
        ],
      },
    ],
    [
      id++,
      {
        name: "Json Parser",
        description: "A CLI tool that parses JSON input",
        link: "https://github.com/chubi-x/json-parser",
        thumbnail: "/images/projects/json-parser.png",
        tools: ["Go"],
      },
    ],

    [
      id++,
      {
        name: "Ball Academy",
        description: "Landing page for a fictional basketball academy",
        link: "https://github.com/chubi-x/ball-academy-landing-page",
        thumbnail: "/images/projects/ball.png",
        tools: ["sass", "tailwindcss", "javascript"],
      },
    ],
    [
      id++,
      {
        name: "OrthoForum",
        description: "Forum for Orthodox Christian Content.",
        link: "https://github.com/chubi-x/orthoforum",
        thumbnail: "/images/projects/orthoforum.png",
        tools: ["react", "inertiajs", "laravel", "tailwindcss"],
      },
    ],
  ]);
};

export const testimonials = [
  {
    name: "Professor Wulf Dettmer",
    job: "Professor of Aerospace Engineering, Swansea University",
    link: "https://www.linkedin.com/in/wulf-dettmer-bbab09a/",
    testimonial:
      "Chubi did a very good job on his masters dissertation and it was a pleasure working with him. I learnt a lot myself and am keen to continue building on his work.",
  },
  {
    name: "Ojima Aniegboka",
    job: "Senior Product Designer, GoCo.io",
    link: "https://www.linkedin.com/in/ojima-aniegboka/",
    testimonial:
      "Chubi is not only a genius problem-solver but also an exceptional collaborator. His willingness to listen, share ideas, and work seamlessly within a team environment is truly admirable. He elevates the whole team with his expertise and positive attitude, making every project a success.",
  },
  {
    name: "Joshua Harrigan",
    job: "Data Executive, Admiral",
    link: "https://www.linkedin.com/in/joshua-harrigan-7b1b5a149/",
    testimonial:
      "It’s been a pleasure working with such amazing talent in our student communities. You’re a fantastic person, and an incredibly skilled practitioner!",
  },
  {
    name: "Professor Wulf Dettmer",
    job: "Professor of Aerospace Engineering, Swansea University",
    link: "https://www.linkedin.com/in/wulf-dettmer-bbab09a/",
    testimonial:
      "Chubi did a very good job on his masters dissertation and it was a pleasure working with him. I learnt a lot myself and am keen to continue building on his work.",
  },
  {
    name: "Ojima Aniegboka",
    job: "Senior Product Designer, GoCo.io",
    link: "https://www.linkedin.com/in/ojima-aniegboka/",
    testimonial:
      "Chubi is not only a genius problem-solver but also an exceptional collaborator. His willingness to listen, share ideas, and work seamlessly within a team environment is truly admirable. He elevates the whole team with his expertise and positive attitude, making every project a success.",
  },
];

export const navLinks = [
  { name: "projects", link: "/projects" },
  {
    name: "resume",
    link: "https://docs.google.com/document/d/1ZbwJEVmN7KPrIflB-bRXPVuV3U68sLC1DVO47P0KhZw/edit?usp=sharing",
  },
  { name: "contact", link: "/contact" },
];
