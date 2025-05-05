"use client";

import TSParticles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";


export default function Particles(): React.ReactElement {

  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <TSParticles
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#ffffff", // White background
            },
          },
          particles: {
            color: {
              value: "#C82973", // Same pink as the timeline line
            },
            number: {
              value: 100, // Number of particles
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            opacity: {
              value: 0.4, // Subtle opacity
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.2,
                sync: false,
              },
            },
            size: {
              value: 4, // Small particles
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 0.5,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.6, // Slow movement
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}