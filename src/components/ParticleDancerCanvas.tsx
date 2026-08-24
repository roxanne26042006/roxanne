import React, { useEffect, useRef, useState, useCallback } from 'react';

interface ParticleDancerProps {
  isDarkMode: boolean;
  className?: string;
  interactive?: boolean;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface KeyframePose {
  head: Point3D;
  neck: Point3D;
  chest: Point3D;
  waist: Point3D;
  pelvis: Point3D;
  leftShoulder: Point3D;
  leftElbow: Point3D;
  leftWrist: Point3D;
  leftHand: Point3D;
  rightShoulder: Point3D;
  rightElbow: Point3D;
  rightWrist: Point3D;
  rightHand: Point3D;
  leftHip: Point3D;
  leftKnee: Point3D;
  leftAnkle: Point3D;
  leftToe: Point3D;
  rightHip: Point3D;
  rightKnee: Point3D;
  rightAnkle: Point3D;
  rightToe: Point3D;
  hairBack?: Point3D;
}

interface DancerParticle {
  role: 'head' | 'hair' | 'neck_shoulders' | 'torso_waist' | 'skirt_chiffon' | 'arm_left' | 'arm_right' | 'leg_left' | 'leg_right' | 'sparkles';
  index: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  baseRadius: number;
  alpha: number;
  hue: number;
  depth?: number;
}

export const ParticleDancerCanvas: React.FC<ParticleDancerProps> = ({
  isDarkMode,
  className = '',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const [colorMode, setColorMode] = useState<'turquoise' | 'neonBlue' | 'cyanPurple'>('turquoise');
  const [motionSpeed, setMotionSpeed] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  // 5 Master Classical & Contemporary Dance Choreography Keyframes
  const dancePoses: KeyframePose[] = [
    // 1. Grand Jeté (Veličanstveni baletni let u zraku - split skok)
    {
      head: { x: 15, y: -210, z: 10 },
      neck: { x: 8, y: -180, z: 5 },
      chest: { x: 0, y: -140, z: 0 },
      waist: { x: -5, y: -95, z: 0 },
      pelvis: { x: -10, y: -50, z: 0 },
      leftShoulder: { x: -35, y: -160, z: -20 },
      leftElbow: { x: -80, y: -195, z: -35 },
      leftWrist: { x: -130, y: -230, z: -45 },
      leftHand: { x: -155, y: -245, z: -50 },
      rightShoulder: { x: 35, y: -155, z: 20 },
      rightElbow: { x: 85, y: -190, z: 30 },
      rightWrist: { x: 135, y: -225, z: 40 },
      rightHand: { x: 160, y: -240, z: 45 },
      leftHip: { x: -25, y: -45, z: -15 },
      leftKnee: { x: -95, y: 10, z: -10 },
      leftAnkle: { x: -170, y: 60, z: -5 },
      leftToe: { x: -205, y: 80, z: 0 },
      rightHip: { x: 15, y: -50, z: 15 },
      rightKnee: { x: 85, y: -15, z: 10 },
      rightAnkle: { x: 165, y: 15, z: 5 },
      rightToe: { x: 200, y: 30, z: 0 },
      hairBack: { x: 35, y: -230, z: -25 }
    },
    // 2. Arabesque Penchée / Pirouette (Graciozna linija na prstima)
    {
      head: { x: -25, y: -175, z: 15 },
      neck: { x: -18, y: -150, z: 10 },
      chest: { x: -8, y: -115, z: 5 },
      waist: { x: 0, y: -70, z: 0 },
      pelvis: { x: 8, y: -25, z: -5 },
      leftShoulder: { x: -38, y: -130, z: -15 },
      leftElbow: { x: -90, y: -145, z: -25 },
      leftWrist: { x: -145, y: -160, z: -35 },
      leftHand: { x: -170, y: -165, z: -40 },
      rightShoulder: { x: 28, y: -125, z: 20 },
      rightElbow: { x: 75, y: -110, z: 35 },
      rightWrist: { x: 125, y: -90, z: 45 },
      rightHand: { x: 150, y: -75, z: 50 },
      leftHip: { x: -15, y: -20, z: -10 },
      leftKnee: { x: -10, y: 65, z: -5 },
      leftAnkle: { x: -5, y: 155, z: 0 },
      leftToe: { x: -5, y: 195, z: 0 },
      rightHip: { x: 22, y: -25, z: 10 },
      rightKnee: { x: 90, y: -15, z: -15 },
      rightAnkle: { x: 165, y: -10, z: -35 },
      rightToe: { x: 205, y: -5, z: -45 },
      hairBack: { x: -50, y: -190, z: 30 }
    },
    // 3. Contemporary Spiral & Attitude Turn (Spirala i okret)
    {
      head: { x: 20, y: -185, z: -15 },
      neck: { x: 12, y: -155, z: -10 },
      chest: { x: 5, y: -115, z: -5 },
      waist: { x: -5, y: -70, z: 0 },
      pelvis: { x: -10, y: -20, z: 5 },
      leftShoulder: { x: -28, y: -135, z: -25 },
      leftElbow: { x: -65, y: -175, z: 15 },
      leftWrist: { x: -50, y: -225, z: 50 },
      leftHand: { x: -35, y: -245, z: 65 },
      rightShoulder: { x: 38, y: -130, z: 15 },
      rightElbow: { x: 85, y: -100, z: 35 },
      rightWrist: { x: 125, y: -70, z: 45 },
      rightHand: { x: 145, y: -50, z: 50 },
      leftHip: { x: -20, y: -15, z: -10 },
      leftKnee: { x: -15, y: 70, z: 0 },
      leftAnkle: { x: -10, y: 160, z: 5 },
      leftToe: { x: -8, y: 200, z: 8 },
      rightHip: { x: 15, y: -18, z: 15 },
      rightKnee: { x: 65, y: -45, z: 35 },
      rightAnkle: { x: 35, y: -5, z: 60 },
      rightToe: { x: 15, y: 25, z: 75 },
      hairBack: { x: 45, y: -195, z: -35 }
    },
    // 4. Lyrical Cambré Backbend (Emotivni luk unazad)
    {
      head: { x: 45, y: -160, z: -35 },
      neck: { x: 25, y: -140, z: -20 },
      chest: { x: 0, y: -105, z: -5 },
      waist: { x: -15, y: -65, z: 0 },
      pelvis: { x: -25, y: -15, z: 5 },
      leftShoulder: { x: -30, y: -125, z: -25 },
      leftElbow: { x: -75, y: -155, z: -15 },
      leftWrist: { x: -115, y: -195, z: 10 },
      leftHand: { x: -135, y: -215, z: 25 },
      rightShoulder: { x: 32, y: -120, z: 20 },
      rightElbow: { x: 85, y: -160, z: -15 },
      rightWrist: { x: 135, y: -200, z: -45 },
      rightHand: { x: 155, y: -220, z: -60 },
      leftHip: { x: -25, y: -10, z: -10 },
      leftKnee: { x: -45, y: 70, z: -5 },
      leftAnkle: { x: -50, y: 160, z: 0 },
      leftToe: { x: -50, y: 200, z: 5 },
      rightHip: { x: 10, y: -15, z: 15 },
      rightKnee: { x: 40, y: 65, z: 20 },
      rightAnkle: { x: 70, y: 155, z: 30 },
      rightToe: { x: 90, y: 195, z: 35 },
      hairBack: { x: 75, y: -145, z: -55 }
    },
    // 5. Grand Développé à la Seconde (Visoka bočna ekstenzija)
    {
      head: { x: 0, y: -200, z: 0 },
      neck: { x: 0, y: -170, z: 0 },
      chest: { x: 0, y: -130, z: 0 },
      waist: { x: 2, y: -85, z: 0 },
      pelvis: { x: 5, y: -40, z: 0 },
      leftShoulder: { x: -35, y: -145, z: -15 },
      leftElbow: { x: -70, y: -180, z: -10 },
      leftWrist: { x: -65, y: -230, z: 10 },
      leftHand: { x: -55, y: -255, z: 20 },
      rightShoulder: { x: 35, y: -145, z: 15 },
      rightElbow: { x: 80, y: -150, z: 20 },
      rightWrist: { x: 125, y: -155, z: 25 },
      rightHand: { x: 150, y: -160, z: 30 },
      leftHip: { x: -18, y: -35, z: -10 },
      leftKnee: { x: -15, y: 55, z: -5 },
      leftAnkle: { x: -10, y: 155, z: 0 },
      leftToe: { x: -8, y: 195, z: 0 },
      rightHip: { x: 20, y: -38, z: 10 },
      rightKnee: { x: 95, y: -70, z: 15 },
      rightAnkle: { x: 155, y: -125, z: 20 },
      rightToe: { x: 190, y: -160, z: 25 },
      hairBack: { x: -10, y: -220, z: -25 }
    }
  ];

  // Helper: Interpolate 3D Point
  const lerp3D = (pA: Point3D, pB: Point3D, t: number): Point3D => ({
    x: pA.x + (pB.x - pA.x) * t,
    y: pA.y + (pB.y - pA.y) * t,
    z: pA.z + (pB.z - pA.z) * t
  });

  // Helper: Sample point along limb with anatomical volume radius
  const sampleLimb = (p1: Point3D, p2: Point3D, t: number, radiusX: number, radiusZ: number, angle: number): Point3D => {
    const bx = p1.x + (p2.x - p1.x) * t;
    const by = p1.y + (p2.y - p1.y) * t;
    const bz = p1.z + (p2.z - p1.z) * t;
    return {
      x: bx + Math.cos(angle) * radiusX,
      y: by,
      z: bz + Math.sin(angle) * radiusZ
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize 2,100 high-density particles
    const TOTAL_PARTICLES = 2100;
    const particles: DancerParticle[] = [];

    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      let role: DancerParticle['role'] = 'torso_waist';
      if (i < 130) role = 'head';
      else if (i < 270) role = 'hair';
      else if (i < 340) role = 'neck_shoulders';
      else if (i < 680) role = 'torso_waist';
      else if (i < 1180) role = 'skirt_chiffon';
      else if (i < 1380) role = 'arm_left';
      else if (i < 1580) role = 'arm_right';
      else if (i < 1820) role = 'leg_left';
      else if (i < 2040) role = 'leg_right';
      else role = 'sparkles';

      particles.push({
        role: role,
        index: i,
        x: width / 2,
        y: height / 2,
        targetX: width / 2,
        targetY: height / 2,
        vx: 0,
        vy: 0,
        baseRadius: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.5 + 0.5,
        hue: 175 + (i % 35),
      });
    }

    const hairNodes = [
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 0 }
    ];

    let progress = 0;
    let rotation = 0;

    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      if (!isPaused) {
        progress += 0.0055 * motionSpeed;
        rotation += 0.0045 * motionSpeed;
      }

      const totalPoses = dancePoses.length;
      const cycle = progress % totalPoses;
      const cur = Math.floor(cycle);
      const next = (cur + 1) % totalPoses;
      const t = cycle - cur;
      const ease = 0.5 - 0.5 * Math.cos(t * Math.PI);

      const poseA = dancePoses[cur];
      const poseB = dancePoses[next];

      const curPose: Record<string, Point3D> = {};
      for (const k in poseA) {
        const key = k as keyof KeyframePose;
        if (poseA[key] && poseB[key]) {
          curPose[key] = lerp3D(poseA[key]!, poseB[key]!, ease);
        }
      }

      // Hair physics
      const hairTarget = curPose.hairBack || { x: curPose.head.x + 20, y: curPose.head.y - 20, z: curPose.head.z - 20 };
      hairNodes[0].x = curPose.head.x;
      hairNodes[0].y = curPose.head.y - 12;
      hairNodes[0].z = curPose.head.z;

      for (let h = 1; h < hairNodes.length; h++) {
        const prev = hairNodes[h - 1];
        const curH = hairNodes[h];
        const targetX = prev.x + (hairTarget.x - curPose.head.x) * (h / hairNodes.length) + Math.sin(progress * 4 + h) * 12;
        const targetY = prev.y + (hairTarget.y - curPose.head.y) * (h / hairNodes.length) + Math.cos(progress * 3 + h) * 8;
        const targetZ = prev.z + (hairTarget.z - curPose.head.z) * (h / hairNodes.length);

        curH.x += (targetX - curH.x) * 0.25;
        curH.y += (targetY - curH.y) * 0.25;
        curH.z += (targetZ - curH.z) * 0.25;
      }

      const isMobile = width < 768;
      const scale = isMobile ? Math.min(width, height) * 0.00165 : Math.min(width, height) * 0.00205;
      const cx = isMobile ? width * 0.5 : width * 0.62;
      const cy = height * 0.53;

      const project = (pt3D: Point3D) => {
        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);
        const rx = pt3D.x * cosR - pt3D.z * sinR;
        const rz = pt3D.x * sinR + pt3D.z * cosR;
        const ry = pt3D.y;

        const fov = 750;
        const depth = fov / (fov + rz * scale);
        return {
          x: cx + rx * scale * depth,
          y: cy + ry * scale * depth,
          depth: depth
        };
      };

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let pt3D: Point3D = { x: 0, y: 0, z: 0 };

        if (p.role === 'head') {
          const hIdx = p.index;
          const u = hIdx / 130;
          const theta = u * Math.PI * 2 * 6.5;
          const phi = (u - 0.5) * Math.PI * 0.9;
          const rx = 10 * Math.cos(phi);
          const ry = 14;
          const rz = 10 * Math.cos(phi);
          const chinTaper = phi > 0.2 ? 0.75 : 1.0;

          pt3D = {
            x: curPose.head.x + Math.cos(theta) * rx * chinTaper,
            y: curPose.head.y + Math.sin(phi) * ry,
            z: curPose.head.z + Math.sin(theta) * rz * chinTaper
          };
        } else if (p.role === 'hair') {
          const hIdx = p.index - 130;
          const strand = hIdx % hairNodes.length;
          const node = hairNodes[strand];
          const spread = Math.sin(hIdx * 3.7) * 8;
          const spreadY = Math.cos(hIdx * 2.3) * 6;

          pt3D = {
            x: node.x + Math.cos(hIdx) * spread,
            y: node.y + spreadY + (hIdx * 0.15),
            z: node.z + Math.sin(hIdx) * spread
          };
        } else if (p.role === 'neck_shoulders') {
          const nIdx = p.index - 270;
          if (nIdx < 35) {
            const st = nIdx / 35;
            const angle = nIdx * 2.4;
            pt3D = sampleLimb(curPose.head, curPose.neck, st, 5.5, 5.5, angle);
          } else {
            const st = (nIdx - 35) / 35;
            const side = (nIdx % 2 === 0) ? curPose.leftShoulder : curPose.rightShoulder;
            const angle = nIdx * 2.8;
            pt3D = sampleLimb(curPose.neck, side, st, 6.0, 5.0, angle);
          }
        } else if (p.role === 'torso_waist') {
          const tIdx = p.index - 340;
          const st = tIdx / 340;
          const angle = (tIdx * 2.39996) + progress * 2;
          
          let rx = 16;
          let rz = 12;
          if (st < 0.35) {
            rx = 18 - st * 8;
            rz = 14 - st * 6;
          } else if (st < 0.7) {
            rx = 12 + (st - 0.35) * 14;
            rz = 9 + (st - 0.35) * 11;
          } else {
            rx = 18 + (st - 0.7) * 8;
            rz = 14 + (st - 0.7) * 6;
          }

          let basePt: Point3D;
          if (st < 0.5) {
            basePt = lerp3D(curPose.chest, curPose.waist, st * 2);
          } else {
            basePt = lerp3D(curPose.waist, curPose.pelvis, (st - 0.5) * 2);
          }

          pt3D = {
            x: basePt.x + Math.cos(angle) * rx,
            y: basePt.y,
            z: basePt.z + Math.sin(angle) * rz
          };
        } else if (p.role === 'skirt_chiffon') {
          const sIdx = p.index - 680;
          const tier = (sIdx % 8);
          const tierFrac = tier / 8;
          const angle = (sIdx / 500) * Math.PI * 2 * 6 + rotation * 2.8;
          
          const baseRadius = 22 + tierFrac * 45;
          const waveRipple = Math.sin(angle * 4 + progress * 4) * 8 + Math.cos(tier * 2 + progress * 3) * 6;
          const flareRadius = baseRadius + waveRipple;
          const dropY = curPose.pelvis.y + (tierFrac * 55) + Math.sin(angle * 3) * 6;

          pt3D = {
            x: curPose.pelvis.x + Math.cos(angle) * flareRadius,
            y: dropY,
            z: curPose.pelvis.z + Math.sin(angle) * flareRadius * 0.85
          };
        } else if (p.role === 'arm_left' || p.role === 'arm_right') {
          const isLeft = p.role === 'arm_left';
          const aIdx = isLeft ? (p.index - 1180) : (p.index - 1380);
          const st = aIdx / 200;
          const angle = aIdx * 2.4;

          const shoulder = isLeft ? curPose.leftShoulder : curPose.rightShoulder;
          const elbow = isLeft ? curPose.leftElbow : curPose.rightElbow;
          const wrist = isLeft ? curPose.leftWrist : curPose.rightWrist;
          const hand = isLeft ? curPose.leftHand : curPose.rightHand;

          if (st < 0.45) {
            const frac = st / 0.45;
            const r = 5.2 - frac * 1.5;
            pt3D = sampleLimb(shoulder, elbow, frac, r, r, angle);
          } else if (st < 0.85) {
            const frac = (st - 0.45) / 0.4;
            const r = 3.8 - frac * 1.4;
            pt3D = sampleLimb(elbow, wrist, frac, r, r, angle);
          } else {
            const frac = (st - 0.85) / 0.15;
            const r = 2.2 - frac * 1.2;
            pt3D = sampleLimb(wrist, hand, frac, r, r, angle);
          }
        } else if (p.role === 'leg_left' || p.role === 'leg_right') {
          const isLeft = p.role === 'leg_left';
          const lIdx = isLeft ? (p.index - 1580) : (p.index - 1820);
          const st = lIdx / 240;
          const angle = lIdx * 2.4;

          const hip = isLeft ? curPose.leftHip : curPose.rightHip;
          const knee = isLeft ? curPose.leftKnee : curPose.rightKnee;
          const ankle = isLeft ? curPose.leftAnkle : curPose.rightAnkle;
          const toe = isLeft ? curPose.leftToe : curPose.rightToe;

          if (st < 0.45) {
            const frac = st / 0.45;
            const r = 9.5 - frac * 4.0;
            pt3D = sampleLimb(hip, knee, frac, r, r * 0.9, angle);
          } else if (st < 0.85) {
            const frac = (st - 0.45) / 0.4;
            const calfBulge = Math.sin(frac * Math.PI) * 2.8;
            const r = (5.5 - frac * 2.4) + (frac < 0.6 ? calfBulge : 0);
            pt3D = sampleLimb(knee, ankle, frac, r, r * 0.85, angle);
          } else {
            const frac = (st - 0.85) / 0.15;
            const r = 2.8 - frac * 1.8;
            pt3D = sampleLimb(ankle, toe, frac, r, r * 0.8, angle);
          }
        } else {
          const spIdx = p.index - 2040;
          const orbitAngle = spIdx * 0.45 + progress * 2.5;
          const orbitRadius = 120 + Math.sin(spIdx * 7) * 70;
          const orbitY = (Math.sin(spIdx * 3 + progress) * 180);

          pt3D = {
            x: curPose.waist.x + Math.cos(orbitAngle) * orbitRadius,
            y: curPose.waist.y + orbitY,
            z: curPose.waist.z + Math.sin(orbitAngle) * orbitRadius
          };
        }

        const proj = project(pt3D);
        p.targetX = proj.x;
        p.targetY = proj.y;
        p.depth = proj.depth;

        p.x += (p.targetX - p.x) * 0.22;
        p.y += (p.targetY - p.y) * 0.22;

        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140 && dist > 0) {
            const force = (1 - dist / 140) * 16;
            p.x += (dx / dist) * force + (-dy / dist) * (force * 0.7);
            p.y += (dy / dist) * force + (dx / dist) * (force * 0.7);
          }
        }

        const depthScale = Math.max(0.4, p.depth);
        const radius = Math.max(0.6, p.baseRadius * depthScale * (p.role === 'skirt_chiffon' ? 1.15 : 1.0));
        const alpha = Math.min(1.0, p.alpha * depthScale * (p.role === 'sparkles' ? (Math.sin(progress * 6 + i) * 0.4 + 0.6) : 0.9));

        let hue = p.hue;
        if (colorMode === 'neonBlue') {
          hue = 210 + (i % 25);
        } else if (colorMode === 'cyanPurple') {
          hue = i % 2 === 0 ? 185 : 285;
        } else {
          if (p.role === 'skirt_chiffon') hue = 172 + (i % 20);
          else if (p.role === 'hair') hue = 188 + (i % 15);
          else if (p.role === 'sparkles') hue = 195 + (i % 30);
        }

        ctx.fillStyle = `hsla(${hue}, 95%, ${isDarkMode ? 68 : 48}%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();

        if (i % 14 === 0 && depthScale > 0.95) {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.85})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 0.55, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    // Mouse listeners
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!canvas || e.touches.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
        active: true,
      };
    };

    const handleTouchEnd = () => {
      mouseRef.current.active = false;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
      canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
      canvas.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isDarkMode, colorMode, motionSpeed, isPaused, interactive]);

  const triggerSparkleBurst = (e: React.MouseEvent) => {
    // Add rapid glowing particle interaction
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Dynamic Canvas element */}
      <canvas
        ref={canvasRef}
        onClick={triggerSparkleBurst}
        className="w-full h-full block pointer-events-auto cursor-crosshair"
      />

      {/* Interactive Controls Overlay Button (Discreet Floating Badge) */}
      <div className="absolute bottom-4 right-4 z-20 flex flex-col items-end gap-2">
        {showControls && (
          <div className="p-3.5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/95 border border-cyan-500/30 backdrop-blur-xl shadow-2xl text-xs space-y-3 min-w-[230px] animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
              <span className="font-semibold text-cyan-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                Efekti plesačice
              </span>
              <button
                onClick={() => setShowControls(false)}
                className="text-slate-400 hover:text-white px-1"
                title="Zatvori"
              >
                ✕
              </button>
            </div>

            {/* Palette selection */}
            <div>
              <label className="block text-slate-300 font-medium mb-1.5">Boja čestica:</label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  type="button"
                  onClick={() => setColorMode('turquoise')}
                  className={`py-1 px-2 rounded text-[11px] font-medium transition ${
                    colorMode === 'turquoise'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Tirkiz
                </button>
                <button
                  type="button"
                  onClick={() => setColorMode('neonBlue')}
                  className={`py-1 px-2 rounded text-[11px] font-medium transition ${
                    colorMode === 'neonBlue'
                      ? 'bg-blue-500 text-white font-bold shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Modra
                </button>
                <button
                  type="button"
                  onClick={() => setColorMode('cyanPurple')}
                  className={`py-1 px-2 rounded text-[11px] font-medium transition ${
                    colorMode === 'cyanPurple'
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Neon mix
                </button>
              </div>
            </div>

            {/* Speed slider */}
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Brzina pokreta:</span>
                <span className="text-cyan-400 font-mono">{motionSpeed}x</span>
              </div>
              <input
                type="range"
                min="0.4"
                max="2.2"
                step="0.2"
                value={motionSpeed}
                onChange={(e) => setMotionSpeed(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
              />
            </div>

            {/* Play / Pause */}
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="flex-1 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition flex items-center justify-center gap-1.5"
              >
                {isPaused ? '▶ Pokreni ples' : '⏸ Zaustavi'}
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setShowControls(!showControls)}
          className="px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-cyan-400 hover:text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 text-xs font-medium backdrop-blur-md shadow-lg transition flex items-center gap-1.5"
          title="Prilagodi animaciju plesačice"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Čestična plesačica</span>
          <span className="text-[10px] bg-cyan-950 px-1.5 py-0.5 rounded text-cyan-300 border border-cyan-800">
            {colorMode === 'turquoise' ? 'Tirkiz' : colorMode === 'neonBlue' ? 'Modra' : 'Neon'}
          </span>
        </button>
      </div>
    </div>
  );
};
