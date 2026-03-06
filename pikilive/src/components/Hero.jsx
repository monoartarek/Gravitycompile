// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Hero.css";
// import heroPreview from "../assets/others_image/pikiliveHero.png";
// import { Link } from "react-router-dom";


// export default function Hero() {
//   const navigate = useNavigate(); //  must be inside component

//   const fullText = "Live Streaming App...";
//   const [text, setText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     let timeout;

//     if (!deleting && index <= fullText.length) {
//       timeout = setTimeout(() => {
//         setText(fullText.slice(0, index));
//         setIndex(index + 1);
//       }, 50);
//     } else if (deleting && index >= 0) {
//       timeout = setTimeout(() => {
//         setText(fullText.slice(0, index));
//         setIndex(index - 1);
//       }, 50);
//     }

//     if (index === fullText.length && !deleting) {
//       timeout = setTimeout(() => setDeleting(true), 1500);
//     }

//     if (index === 0 && deleting) {
//       timeout = setTimeout(() => setDeleting(false), 500);
//     }

//     return () => clearTimeout(timeout);
//   }, [index, deleting, fullText]);

//   return (
//     <section className="hero-sections">
//       <div className="hero-content">
//         <div className="hero-text">
//           <h1 className="hero-typing">
//             Start Your Own <br />
//             <span>{text}</span>
//           </h1>
//           <p>
//             Get a complete live streaming app like Bigo on a $1,000/month rental
//             or own the full source code. Full control over your app, hosts,
//             agency, and earnings - all under your brand. PikiLive app Price 3000$ with 100 animations.<br />
//           </p>
      
//           <Link to="/contact-us">
//             <button className="hero-btn">Contact Us</button>
//           </Link>
//         </div>

//         <div className="hero-image">
//           <img src={heroPreview} alt="App Preview" />
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroPreview from "../assets/others_image/pikiliveHero.png";

export default function Hero() {
  const canvasRef = useRef(null);
  const fullText = "Live Streaming App...";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // ── Typewriter ──
  useEffect(() => {
    let timeout;
    if (!deleting && index <= fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex((i) => i + 1);
      }, 50);
    } else if (deleting && index >= 0) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, index));
        setIndex((i) => i - 1);
      }, 50);
    }
    if (index === fullText.length && !deleting)
      timeout = setTimeout(() => setDeleting(true), 1500);
    if (index === 0 && deleting)
      timeout = setTimeout(() => setDeleting(false), 500);
    return () => clearTimeout(timeout);
  }, [index, deleting]);

  // ── Three.js 3D scene ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId, renderer, scene, camera, particles;
    let rings = [];
    let floatingOrbs = [];
    let cleanup;

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

    script.onload = () => {
      const THREE = window.THREE;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        canvas.offsetWidth / canvas.offsetHeight,
        0.1,
        1000
      );
      camera.position.z = 30;

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      // PARTICLES
      const pGeo = new THREE.BufferGeometry();
      const count = 2200;
      const pos = new Float32Array(count * 3);
      const cols = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3]     = (Math.random() - 0.5) * 130;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 130;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
        const t = Math.random();
        cols[i * 3]     = 0.4 + t * 0.4;
        cols[i * 3 + 1] = 0.05;
        cols[i * 3 + 2] = 0.8 + t * 0.2;
      }
      pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      pGeo.setAttribute("color", new THREE.BufferAttribute(cols, 3));
      particles = new THREE.Points(
        pGeo,
        new THREE.PointsMaterial({
          size: 0.18,
          vertexColors: true,
          transparent: true,
          opacity: 0.8,
        })
      );
      scene.add(particles);

      // RINGS
      [
        { r: 18, tube: 0.06,  color: 0xaa44ff, rx: 1.2, ry: 0.3 },
        { r: 12, tube: 0.05,  color: 0x7722dd, rx: 0.5, ry: 1.0 },
        { r: 26, tube: 0.04,  color: 0xcc66ff, rx: 0.8, ry: 0.6 },
        { r: 8,  tube: 0.07,  color: 0xff44cc, rx: 0.2, ry: 1.4 },
        { r: 20, tube: 0.035, color: 0x6622cc, rx: 1.8, ry: 0.9 },
      ].forEach((d) => {
        const m = new THREE.Mesh(
          new THREE.TorusGeometry(d.r, d.tube, 16, 200),
          new THREE.MeshBasicMaterial({
            color: d.color,
            transparent: true,
            opacity: 0.45,
          })
        );
        m.rotation.x = d.rx;
        m.rotation.y = d.ry;
        scene.add(m);
        rings.push(m);
      });

      // ORBS
      [
        [-20, 10, -5],
        [18, -8, -8],
        [-10, -14, -3],
        [22, 12, -10],
        [-25, -5, -12],
      ].forEach((p, i) => {
        const orb = new THREE.Mesh(
          new THREE.SphereGeometry(1.2 + i * 0.3, 32, 32),
          new THREE.MeshPhongMaterial({
            color: i % 2 === 0 ? 0x9933ff : 0xcc44ff,
            emissive: i % 2 === 0 ? 0x6600cc : 0x990099,
            shininess: 200,
            transparent: true,
            opacity: 0.6,
          })
        );
        orb.position.set(...p);
        orb.userData = { ox: p[0], oy: p[1], phase: i * 1.3 };
        scene.add(orb);
        floatingOrbs.push(orb);
      });

      // LIGHTS
      scene.add(new THREE.AmbientLight(0x220044, 2));
      const pl1 = new THREE.PointLight(0xaa33ff, 3, 60);
      pl1.position.set(0, 0, 10);
      scene.add(pl1);
      const pl2 = new THREE.PointLight(0xff33aa, 2, 40);
      pl2.position.set(-15, 10, 5);
      scene.add(pl2);

      let mx = 0,
        my = 0;
      const onMouse = (e) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      const onResize = () => {
        if (!canvas.offsetWidth) return;
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      };
      window.addEventListener("mousemove", onMouse);
      window.addEventListener("resize", onResize);

      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.008;
        particles.rotation.y = t * 0.04;
        particles.rotation.x = t * 0.015;
        rings.forEach((r, i) => {
          r.rotation.x += 0.003 * (i % 2 === 0 ? 1 : -1);
          r.rotation.y += 0.005 * (i % 2 === 0 ? -1 : 1);
          r.rotation.z += 0.002;
        });
        floatingOrbs.forEach((o) => {
          o.position.y = o.userData.oy + Math.sin(t + o.userData.phase) * 2;
          o.position.x =
            o.userData.ox + Math.cos(t * 0.7 + o.userData.phase) * 1.5;
          o.rotation.x += 0.01;
          o.rotation.z += 0.008;
        });
        camera.position.x += (mx * 4 - camera.position.x) * 0.05;
        camera.position.y += (my * 3 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      };
      animate();

      cleanup = () => {
        window.removeEventListener("mousemove", onMouse);
        window.removeEventListener("resize", onResize);
      };
    };

    document.head.appendChild(script);

    return () => {
      cancelAnimationFrame(animId);
      if (cleanup) cleanup();
      if (renderer) renderer.dispose();
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <section className="hero-3d-wrap">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-3d-inner">

        {/* ── TEXT ── */}
        <div className="h3d-text">
          <span className="h3d-eyebrow">A product of GC</span>

          <h1 className="h3d-title">
            <span className="h3d-static">Start Your Own</span>
            <span className="h3d-typed">
              {text}
              <span className="h3d-cursor" />
            </span>
          </h1>

          <p className="h3d-desc">
            Get a complete live streaming app like Bigo on a{" "}
            <strong>$1,000/month rental</strong> or own the full source code.
            Full control over hosts, agency, and earnings — all under your
            brand. <strong>PikiLive — $3,000 with 100 animations.</strong>
          </p>

          <div className="h3d-stats">
            {[
              ["100+", "Animations"],
              ["$1K/mo", "Rental Plan"],
              ["$3K", "Full Source"],
            ].map(([v, l]) => (
              <div className="h3d-stat-item" key={l}>
                <div className="stat-val">{v}</div>
                <div className="stat-lbl">{l}</div>
              </div>
            ))}
          </div>

          <Link to="/contact-us" className="h3d-btn">
            Contact Us
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* ── IMAGE ── */}
        <div className="h3d-image">
          <div className="h3d-frame">
            <span className="corner c-tl" />
            <span className="corner c-tr" />
            <span className="corner c-bl" />
            <span className="corner c-br" />
            <img src={heroPreview} alt="PikiLive App Preview" />
            <div className="price-badge">
              <div className="badge-lbl">Own it for</div>
              <div className="badge-price">$3,000</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}