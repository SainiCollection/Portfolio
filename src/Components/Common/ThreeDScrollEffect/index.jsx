// src/components/Common/ThreeDScrollEffect/index.jsx
// This component creates a more dynamic 3D scene using Three.js, featuring a central
// document and surrounding "data blocks" that animate based on scroll, providing a richer visual.

import React, { useRef, useEffect, useState } from 'react';
import { Box, useTheme } from '@mui/material'; // MUI Box for container styling, useTheme for colors

const ThreeDScrollEffect = () => {
  const theme = useTheme(); // Access the MUI theme to get colors
  const mountRef = useRef(null); // Ref for the DOM element where Three.js canvas mounts
  const animationFrameId = useRef(null); // Stores requestAnimationFrame ID for cleanup

  // Refs to store Three.js objects to prevent re-creation on re-renders
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const mainDocumentRef = useRef(null); // Ref for the central 3D object
  const infoBlocksGroupRef = useRef(null); // Ref for a group holding multiple small info blocks

  const [scrollY, setScrollY] = useState(0); // State to track window scroll position

  useEffect(() => {
    // --- IMPORTANT: Access the global THREE object directly ---
    if (typeof window.THREE === 'undefined') {
      console.error("Three.js (THREE) is not globally available. Please ensure it's loaded via a CDN in index.html.");
      return;
    }
    const THREE = window.THREE; // Reference the global THREE object
    // --- End Important ---

    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // --- 1. Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- 2. Scene Setup ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // --- 3. Camera Setup ---
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // --- 4. Object Creation: Main Document ---
    const mainGeometry = new THREE.BoxGeometry(2.5, 3.5, 0.2); // Larger, thin box
    const mainMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(theme.palette.primary.main).getHex() }); // Use MUI primary blue
    const mainDocument = new THREE.Mesh(mainGeometry, mainMaterial);
    scene.add(mainDocument);
    mainDocumentRef.current = mainDocument;

    // --- 5. Object Creation: Info Blocks (a group of smaller rectangles) ---
    const infoBlocksGroup = new THREE.Group(); // Use a Group to easily animate multiple objects together
    infoBlocksGroupRef.current = infoBlocksGroup;
    scene.add(infoBlocksGroup);

    const numInfoBlocks = 10; // Number of smaller floating blocks
    const infoGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.1); // Small, flat square
    const colors = [
      new THREE.Color(theme.palette.customColors.green).getHex(),
      new THREE.Color(theme.palette.customColors.orange).getHex(),
      new THREE.Color(theme.palette.customColors.lightBlue).getHex(),
      new THREE.Color(theme.palette.customColors.textSecondary).getHex(), // Darker grey
    ];

    for (let i = 0; i < numInfoBlocks; i++) {
      const infoMaterial = new THREE.MeshBasicMaterial({ color: colors[i % colors.length] });
      const infoBlock = new THREE.Mesh(infoGeometry, infoMaterial);

      // Random initial positions around the main document
      infoBlock.position.x = (Math.random() - 0.5) * 6;
      infoBlock.position.y = (Math.random() - 0.5) * 6;
      infoBlock.position.z = (Math.random() - 0.5) * 2;

      // Random initial rotations
      infoBlock.rotation.x = Math.random() * Math.PI * 2;
      infoBlock.rotation.y = Math.random() * Math.PI * 2;

      infoBlocksGroup.add(infoBlock);
    }

    // --- 6. Lighting (Minimal, as MeshBasicMaterial doesn't react to it) ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // --- 7. Animation Loop ---
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      // Main Document Animation: Subtle rotation and vertical float
      if (mainDocumentRef.current) {
        mainDocumentRef.current.rotation.x += 0.002;
        mainDocumentRef.current.rotation.y += 0.003;
        // Simple vertical bobbing
        mainDocumentRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.2;
      }

      // Info Blocks Animation: More dynamic movement based on scroll
      if (infoBlocksGroupRef.current) {
        // Rotate the entire group of info blocks
        infoBlocksGroupRef.current.rotation.y = scrollY * 0.001; // Slower group rotation
        infoBlocksGroup.rotation.x = scrollY * 0.0005;

        infoBlocksGroup.children.forEach((block, index) => {
          // Individual rotation
          block.rotation.x += 0.01 + (index * 0.0001);
          block.rotation.y += 0.015 + (index * 0.0001);

          // Animate position relative to scroll
          // They move outwards and vertically based on scroll
          const baseOffset = 1.5; // Base distance from center
          const scrollEffectFactor = scrollY * 0.0005; // How much scroll affects spread
          const angle = (index / numInfoBlocks) * Math.PI * 2 + scrollEffectFactor; // Spread blocks in a circle

          block.position.x = Math.cos(angle) * (baseOffset + scrollEffectFactor);
          block.position.z = Math.sin(angle) * (baseOffset + scrollEffectFactor);
          block.position.y = (Math.sin(angle * 2 + scrollY * 0.001) * 0.5) + (scrollEffectFactor * 0.2); // Vertical wave + general upward float
        });
      }

      renderer.render(scene, camera);
    };

    animate(); // Start the animation loop.

    // --- 8. Handle Window Resize ---
    const handleResize = () => {
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;

      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.setSize(newWidth, newHeight);
        cameraRef.current.aspect = newWidth / newHeight;
        cameraRef.current.updateProjectionMatrix();
      }
    };
    window.addEventListener('resize', handleResize);

    // --- 9. Cleanup Function ---
    return () => {
      cancelAnimationFrame(animationFrameId.current);
      if (rendererRef.current) {
        renderer.dispose();
        currentMount.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      mainGeometry.dispose();
      mainMaterial.dispose();
      infoGeometry.dispose();
      // Dispose materials for info blocks
      colors.forEach(color => {
        const mat = new THREE.MeshBasicMaterial({ color: color });
        mat.dispose();
      });
      // Dispose info block geometries (if unique per block)
      infoBlocksGroup.children.forEach(block => {
        if (block.geometry) block.geometry.dispose();
        if (block.material) block.material.dispose();
      });
    };
  }, [scrollY, theme.palette.primary.main, theme.palette.customColors.green, theme.palette.customColors.orange, theme.palette.customColors.lightBlue, theme.palette.customColors.textSecondary]);
  // Dependency array includes scrollY and theme colors to react to theme changes if they were dynamic

  // --- Scroll Event Listener for updating `scrollY` state ---
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update state with current scroll position.
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this listener is set up once.

  return (
    <Box
      ref={mountRef}
      sx={{
        width: '100%',
        height: '300px', // Set a fixed height for the 3D canvas area. Adjust as needed.
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Hide any overflow from the 3D object
        position: 'relative',
        zIndex: 1,
        borderRadius: '12px',
        boxShadow: 3,
        bgcolor: 'background.paper', // Use a neutral background color from the theme
      }}
    >
      {/* The Three.js canvas element will be appended inside this Box by the useEffect. */}
    </Box>
  );
};

export default ThreeDScrollEffect;