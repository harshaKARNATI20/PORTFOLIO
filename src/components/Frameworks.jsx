import { useEffect, useState } from "react";
import { OrbitingCircles } from "./OrbitingCircles";

const skills = [
  { name: "react", ext: "svg" },
  { name: "redux", ext: "png" },
  { name: "threejs", ext: "svg" },
  { name: "php", ext: "png" },
  { name: "mysql", ext: "png" },
  { name: "csharp", ext: "svg" },
  { name: "html5", ext: "svg" },
  { name: "css3", ext: "svg" },
  { name: "tailwindcss", ext: "svg" },
  { name: "javascript", ext: "svg" },
  { name: "vitejs", ext: "svg" },
  { name: "git", ext: "svg" },
  { name: "figma", ext: "png" },
  { name: "excel", ext: "png" },
  { name: "github", ext: "svg" },
  { name: "laravel", ext: "png" },
  { name: "unity", ext: "png" },
  { name: "nodejs", ext: "png" },
  { name: "express", ext: "png" },
  { name: "mongodb", ext: "png" },
  { name: "gamedev", ext: "png" },
  { name: "chartjs", ext: "png" },
  { name: "blender", ext: "png" },
];

export function Frameworks() {
  const [validLogos, setValidLogos] = useState([]);

  useEffect(() => {
    const validateLogos = async () => {
      const checked = await Promise.all(
        skills.map(async ({ name, ext }) => {
          const url = `assets/logos/${name}.${ext}`;
          try {
            const res = await fetch(url, { method: "HEAD" });
            if (res.ok) return url;
          } catch (e) {
            console.warn(`Missing or invalid: ${url}`,e);
          }
          return null;
        })
      );
      setValidLogos(checked.filter(Boolean));
    };

    validateLogos();
  }, []);

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {validLogos.map((src, index) => (
          <Icon key={index} src={src} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...validLogos].reverse().map((src, index) => (
          <Icon key={index} src={src} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    alt="skill"
    width={30}
    height={30}
    className="duration-200 object-contain rounded-sm hover:scale-110"
    onError={(e) => (e.target.style.display = "none")}
  />
);
