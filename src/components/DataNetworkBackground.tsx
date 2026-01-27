import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DataNetworkBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // PARTICLES (shader = super fluide)
    const particlesCount = 300;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 6;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: "#ADFD8C",
      size: 0.045,
      transparent: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // LINES (10% randomly connected)
    const linesGroup = new THREE.Group();
    scene.add(linesGroup);

    const createLinesFast = () => {
      linesGroup.clear();
      const pos = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particlesCount; i += 1) {
        if (Math.random() > 0.1) continue; // 10% des points seulement

        const j = Math.floor(Math.random() * particlesCount);

        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute(
          "position",
          new THREE.BufferAttribute(
            new Float32Array([
              pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
              pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2],
            ]),
            3
          )
        );

        const line = new THREE.Line(
          lineGeo,
          new THREE.LineBasicMaterial({
            color: "#ADFD8C",
            transparent: true,
            opacity: 0.12,
          })
        );
        linesGroup.add(line);
      }
    };

    createLinesFast();

    // ANIMATION
    let t = 0;

    const animate = () => {
      t += 0.01;

      const pos = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        // mouvement ondulé + rotation légère
        pos[i3] += Math.sin(t + i) * 0.0008;
        pos[i3 + 1] += Math.cos(t + i * 0.3) * 0.0008;

        // oscillation en profondeur (effet vivant)
        pos[i3 + 2] += Math.sin(t * 0.3 + i) * 0.0004;
      }

      geometry.attributes.position.needsUpdate = true;

      // tourner lentement toute la scène
      scene.rotation.y += 0.0007;

      // reconstruire les lignes toutes les 0.5s
      if (Math.floor(t * 10) % 5 === 0) createLinesFast();

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // RESIZE
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
