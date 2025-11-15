import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function Models2() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load("/models2/scene.gltf", (gltf) => {
      const model = gltf.scene;

      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const minY = box.min.y;

      // Modelni markazga va yerga moslash
      model.position.set(
        model.position.x - center.x,
        -minY,
        model.position.z - center.z
      );

      scene.add(model);

      // Kamera yaqinlashuvi
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 1 / Math.tan(fov / 2));

      camera.position.set(center.x, size.y / 2, cameraZ * 0.6);
      camera.lookAt(center.x, size.y / 2, center.z);

      controls.target.set(center.x, size.y / 2, center.z);
    });

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "500px",
        height: "300px",
        display: "block",
        background: "transparent",
      }}
    />
  );
}

export default Models2;
