import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
// import { OrbitingCircles } from "./OrbitingCircles";

// export function Frameworks() {
//   const skills = [
//     "react",
//     "redux",
//     "nodejs",
//     "express",
//     "mongodb",
//     "laravel",
//     "php",
//     "mysql",
//     "blade",
//     "unity",
//     "csharp",
//     "blender",
//     "html5",
//     "css3",
//     "tailwindcss",
//     "javascript",
//     "vitejs",
//     "git",
//     "figma",
//     "excel",
//     "jwt",
//     "chartjs",
//   ];

//   const fileFormats = ["svg", "png", "jpg"];
//   const logoPaths = skills.flatMap((skill) =>
//     fileFormats.map((ext) => `assets/logos/${skill}.${ext}`)
//   );

//   return (
//     <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
//       <OrbitingCircles iconSize={40}>
//         {logoPaths.map((src, index) => (
//           <Icon key={index} src={src} />
//         ))}
//       </OrbitingCircles>
//       <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
//         {[...logoPaths].reverse().map((src, index) => (
//           <Icon key={index} src={src} />
//         ))}
//       </OrbitingCircles>
//     </div>
//   );
// }

// const Icon = ({ src }) => (
//   <img src={src} className="duration-200 rounded-sm hover:scale-110" />
// );
