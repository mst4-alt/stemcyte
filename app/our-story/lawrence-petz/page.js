'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import s from './page.module.css';

const awards = [
  { side: 'left', year: '1991', title: 'Emily Cooley Memorial Award', org: 'AABB', desc: 'Outstanding scientific and teaching contributions' },
  { side: 'right', year: '1994', title: 'Tibor Greenwalt Scientific Award', org: 'AABB', desc: 'With George Garratty' },
  { side: 'left', year: null, title: 'Morten Grove-Rasmussen Award', org: 'AABB', desc: null },
  { side: 'right', year: null, title: 'NHLBI Transfusion Medicine Academic Award', org: 'National Heart, Lung, and Blood Institute', desc: null },
  { side: 'left', year: '2006', title: 'Landsteiner Award Lectureship', org: 'AABB', desc: 'Research of international significance' },
  { side: 'right', year: '2010', title: 'Lifetime Achievement Medal', org: 'AABB Bernard Fantus Medal', desc: 'Highest honor in the field' },
  { side: 'left', year: null, title: "President's Award", org: 'AABB', desc: 'Exceptional service and leadership' },
  { side: 'right', year: '2014', title: 'Cord Blood Symposium Leadership Award', org: null, desc: 'For founding & leading the symposium (2003–2014)' },
  { side: 'left', year: null, title: 'Owen Thomas & Service Awards', org: 'California Blood Bank Society', desc: null },
];

const careerTimeline = [
  { year: '1955', title: 'University of Illinois College of Medicine', desc: 'Earned his MD, followed by residency at Cook County Hospital and San Francisco General Hospital.', highlight: false },
  { year: 'London', title: 'Hematology Fellowship, Royal Postgraduate Medical School', desc: 'Board certified in Internal Medicine with subspecialty in Hematology.', highlight: false },
  { year: 'Military', title: 'Chief of Medicine, Walker Air Force Base', desc: 'Served as Chief of Medicine during military service.', highlight: false },
  { year: 'City of Hope', title: 'Section Head, Hematology & Blood Transfusion', desc: 'Chairman of the Division of Medicine at the NCI-designated comprehensive cancer center.', highlight: true },
  { year: 'UCLA', title: 'Professor of Pathology & Director of Transfusion Medicine', desc: `Built UCLA's transfusion medicine program. President of the California Blood Bank Society.`, highlight: true },
  { year: '1983', title: 'Clinical Bone Marrow Transplantation published', desc: 'First textbook on clinical bone marrow transplantation, co-edited with Karl Blume.', highlight: true },
  { year: '2001', title: 'Joins StemCyte as Chief Medical Officer', desc: `Built StemCyte's quality framework: 400+ SOPs, AABB/FACT/FDA accreditation.`, highlight: true },
  { year: 'Today', title: 'Emeritus Professor & Medical Director', desc: 'Emeritus Professor at UCLA. Medical Director of StemCyte International Cord Blood Bank.', highlight: true },
];

const tags = ['Transfusion Medicine', 'Hematology', 'Bone Marrow Transplantation', 'Cord Blood Banking', 'Cord Blood Transplantation', 'Immune Hemolytic Anemias', 'Immunohematology', 'Quality Systems & SOPs'];

const otherLeaders = [
  { name: 'Jonas Wang, PhD', role: 'Chairman', href: '/our-story/jonas-wang', img: '/images/our%20story/jonas-sm.jpg' },
  { name: 'Tong-Young Lee, PhD', role: 'CEO', href: '/our-story/tong-young-lee', img: '/images/our%20story/lee-sm.jpg' },
  { name: 'Joseph Rosenthal, MD', role: 'Chief Medical Officer', href: '/our-story/joseph-rosenthal', img: '/images/our%20story/rosenthal-sm.jpg' },
];

export default function LawrencePetzPage() {
  const canvasRef = useRef(null);
  const hivCanvasRef = useRef(null);

  // ── Floating cell particles canvas ──
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let animId;
    let cells = [];
    const COUNT = 50;
    function resize() {
      c.width = c.offsetWidth * window.devicePixelRatio;
      c.height = c.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }
    function init() {
      resize();
      const W = c.offsetWidth, H = c.offsetHeight;
      cells = Array.from({ length: COUNT }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.3 + 0.1;
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 4 + 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          opacity: Math.random() * 0.12 + 0.04,
          hue: Math.random() > 0.5 ? '232,160,208' : '192,106,165',
        };
      });
    }
    function draw() {
      const W = c.offsetWidth, H = c.offsetHeight;
      ctx.clearRect(0, 0, W, H);
      for (const cell of cells) {
        cell.x += cell.vx;
        cell.y += cell.vy;
        if (cell.x < -10 || cell.x > W + 10) cell.vx *= -1;
        if (cell.y < -10 || cell.y > H + 10) cell.vy *= -1;
        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cell.hue},${cell.opacity * 0.3})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cell.x, cell.y, cell.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cell.hue},${cell.opacity})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }
    init();
    draw();
    window.addEventListener('resize', () => { resize(); });
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  // ── Scroll animations ──
  useEffect(() => {
    const els = document.querySelectorAll("[data-anim]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(s.animVisible); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ── 3D Cell Sphere Canvas (HIV section) ──
  useEffect(() => {
    var c = hivCanvasRef.current;
    if (!c) return;
    if (window.innerWidth <= 900) return;
    var wrap = c.parentElement;
    var ctx = c.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    var animId;

    function initSize() {
      var ww = wrap.clientWidth || 500;
      var wh = wrap.clientHeight || 500;
      var SIZE = Math.min(ww, wh, 500);
      c.width = SIZE * dpr; c.height = SIZE * dpr;
      c.style.width = SIZE + 'px'; c.style.height = SIZE + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      return SIZE;
    }

    var SIZE = initSize();
    var W = SIZE, H = SIZE, cx = W / 2, cy = H / 2;
    var R = W * 0.32;
    var nR = R * 0.28;
    var rotSpeed = 0.00015;
    var tilt = 0.45;
    var cosT = Math.cos(tilt), sinT = Math.sin(tilt);

    function handleResize() {
      if (window.innerWidth <= 900) return;
      SIZE = initSize();
      W = SIZE; H = SIZE; cx = W / 2; cy = H / 2;
      R = W * 0.32; nR = R * 0.28;
      orbitalRings[0].radius = R * 1.35;
      orbitalRings[1].radius = R * 1.55;
      orbitalRings[2].radius = R * 1.45;
    }
    window.addEventListener('resize', handleResize);

    var tCols = [{ r: 232, g: 160, b: 208 }, { r: 123, g: 168, b: 224 }, { r: 123, g: 196, b: 165 }, { r: 192, g: 106, b: 165 }, { r: 196, g: 148, b: 62 }, { r: 160, g: 140, b: 200 }, { r: 220, g: 180, b: 220 }, { r: 180, g: 200, b: 240 }];
    function rgba(c, a) { return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + a + ')'; }

    function project(phi, theta, radius, rot) {
      var p = phi + rot;
      var x3 = radius * Math.cos(theta) * Math.sin(p);
      var y3 = radius * Math.sin(theta);
      var z3 = radius * Math.cos(theta) * Math.cos(p);
      var y3t = y3 * cosT - z3 * sinT;
      var z3t = y3 * sinT + z3 * cosT;
      return { x: cx + x3, y: cy + y3t, z: z3t, depth: (z3t / radius + 1) / 2 };
    }

    var lipids = []; for (var i = 0; i < 250; i++) lipids.push({ phi: Math.random() * Math.PI * 2, theta: (Math.random() - 0.5) * Math.PI * 0.95 });
    var travelers = []; for (var i = 0; i < 50; i++) travelers.push({ phi: Math.random() * Math.PI * 2, theta: (Math.random() - 0.5) * Math.PI * 0.8, speed: (Math.random() * 0.001 + 0.0002) * (Math.random() > 0.5 ? 1 : -1), r: Math.random() * 2.5 + 1, col: tCols[i % tCols.length], trail: [], trailMax: Math.floor(Math.random() * 35) + 18, orbitR: 0.5 + Math.random() * 0.4 });
    var sparks = []; for (var i = 0; i < 10; i++) sparks.push({ phi: i * (Math.PI * 2 / 10), theta: (Math.random() - 0.5) * 0.7, speed: Math.random() * 0.0012 + 0.0004, phase: Math.random() * Math.PI * 2 });
    var pores = []; for (var i = 0; i < 24; i++) pores.push({ phi: (i / 24) * Math.PI * 2, theta: (Math.random() - 0.5) * Math.PI * 0.65, phase: Math.random() * Math.PI * 2, speed: Math.random() * 0.003 + 0.001 });
    var chromatinData = []; for (var i = 0; i < 20; i++) { var pts = []; var sa = Math.random() * Math.PI * 2; var st = (Math.random() - 0.5) * Math.PI * 0.4; var len = Math.floor(Math.random() * 10) + 6; for (var j = 0; j < len; j++) pts.push({ phi: sa + j * 0.3 + (Math.random() - 0.5) * 0.2, theta: st + (Math.random() - 0.5) * 0.4 }); chromatinData.push({ pts: pts, col: tCols[i % 4], alpha: Math.random() * 0.06 + 0.03 }); }
    var hotspots = []; for (var i = 0; i < 10; i++) hotspots.push({ phi: Math.random() * Math.PI * 2, theta: (Math.random() - 0.5) * Math.PI * 0.5, r: Math.random() * 25 + 15, d: 0.3 + Math.random() * 0.35, phase: Math.random() * Math.PI * 2, speed: Math.random() * 0.001 + 0.0005, col: tCols[Math.floor(Math.random() * tCols.length)] });

    var emitted = [], lastEmit = 0;
    var pulseWaves = [], lastPulse = 0;
    var flares = [], lastFlare = 0;

    var orbitalRings = [
      { tilt: 0.3, radius: R * 1.35, col: { r: 232, g: 160, b: 208 }, alpha: 0.04, width: 1 },
      { tilt: -0.5, radius: R * 1.55, col: { r: 123, g: 168, b: 224 }, alpha: 0.03, width: 0.8 },
      { tilt: 0.8, radius: R * 1.45, col: { r: 123, g: 196, b: 165 }, alpha: 0.025, width: 0.6 },
    ];

    var orbiters = [];
    for (var i = 0; i < 20; i++) {
      orbiters.push({ phi: Math.random() * Math.PI * 2, speed: (Math.random() * 0.0008 + 0.0003) * (Math.random() > 0.5 ? 1 : -1), ringIdx: Math.floor(Math.random() * 3), r: Math.random() * 2 + 1, col: tCols[Math.floor(Math.random() * tCols.length)], trail: [], trailMax: Math.floor(Math.random() * 20) + 10 });
    }

    var arcs = []; var lastArc = 0;

    var extParticles = [];
    for (var i = 0; i < 40; i++) {
      var angle = Math.random() * Math.PI * 2;
      var dist = R * 1.2 + Math.random() * R * 0.8;
      extParticles.push({ x: cx + Math.cos(angle) * dist, y: cy + Math.sin(angle) * dist, vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15, r: Math.random() * 1.5 + 0.5, col: tCols[Math.floor(Math.random() * tCols.length)], alpha: Math.random() * 0.06 + 0.02 });
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      var rot = t * rotSpeed;

      var g0 = ctx.createRadialGradient(cx, cy, R * 0.05, cx, cy, R * 2.5);
      g0.addColorStop(0, 'rgba(108,26,85,0.12)'); g0.addColorStop(0.15, 'rgba(108,26,85,0.06)'); g0.addColorStop(0.4, 'rgba(108,26,85,0.02)'); g0.addColorStop(1, 'rgba(108,26,85,0)');
      ctx.fillStyle = g0; ctx.beginPath(); ctx.arc(cx, cy, R * 2.5, 0, Math.PI * 2); ctx.fill();

      extParticles.forEach(function (ep) { ep.x += ep.vx; ep.y += ep.vy; var dx = ep.x - cx, dy = ep.y - cy, dist = Math.sqrt(dx * dx + dy * dy); if (dist > R * 2.2 || dist < R * 1.1) { ep.vx *= -1; ep.vy *= -1; } ctx.beginPath(); ctx.arc(ep.x, ep.y, ep.r, 0, Math.PI * 2); ctx.fillStyle = rgba(ep.col, ep.alpha); ctx.fill(); });

      orbitalRings.forEach(function (ring, ri) { ctx.beginPath(); var ringTilt = ring.tilt + Math.sin(t * 0.00005 + ri) * 0.05; var cosR = Math.cos(ringTilt), sinR = Math.sin(ringTilt); for (var i = 0; i <= 120; i++) { var rotA = (i / 120) * Math.PI * 2 + rot * 0.3 * (ri + 1); var fx = cx + ring.radius * Math.cos(rotA); var fy = cy + ring.radius * Math.sin(rotA) * cosR * 0.35; var fz = ring.radius * Math.sin(rotA) * sinR; if (fz < 0) { if (i === 0) ctx.moveTo(fx, fy); else ctx.lineTo(fx, fy); } } ctx.strokeStyle = rgba(ring.col, ring.alpha * 0.5); ctx.lineWidth = ring.width; ctx.stroke(); });

      if (t - lastPulse > 3500) { lastPulse = t; pulseWaves.push({ r: nR, maxR: R * 1.6, speed: 0.35, alpha: 0.1 }); }
      for (var i = pulseWaves.length - 1; i >= 0; i--) { var pw = pulseWaves[i]; pw.r += pw.speed; var life = 1 - (pw.r - nR) / (pw.maxR - nR); if (life <= 0) { pulseWaves.splice(i, 1); continue; } ctx.beginPath(); ctx.ellipse(cx, cy, pw.r, pw.r * cosT * 0.85, 0, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(232,160,208,' + (pw.alpha * life * life) + ')'; ctx.lineWidth = 2 * life; ctx.stroke(); ctx.beginPath(); ctx.ellipse(cx, cy, pw.r, pw.r * cosT * 0.85, 0, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(255,230,245,' + (0.025 * life * life) + ')'; ctx.lineWidth = 8 * life; ctx.stroke(); }

      hotspots.forEach(function (h) { var p = project(h.phi, h.theta, R * h.d, rot); if (p.depth < 0.2) return; var pulse = 0.5 + Math.sin(t * h.speed + h.phase) * 0.5; var da = p.depth * pulse; var hg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, h.r * da); hg.addColorStop(0, 'rgba(' + h.col.r + ',' + h.col.g + ',' + h.col.b + ',' + (0.05 * da) + ')'); hg.addColorStop(1, 'rgba(' + h.col.r + ',' + h.col.g + ',' + h.col.b + ',0)'); ctx.fillStyle = hg; ctx.beginPath(); ctx.arc(p.x, p.y, h.r * da, 0, Math.PI * 2); ctx.fill(); });

      var sphereGrad = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.2, R * 0.1, cx, cy, R);
      sphereGrad.addColorStop(0, 'rgba(108,26,85,0.06)'); sphereGrad.addColorStop(0.5, 'rgba(108,26,85,0.03)'); sphereGrad.addColorStop(0.85, 'rgba(60,15,50,0.04)'); sphereGrad.addColorStop(1, 'rgba(40,10,30,0.06)');
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fillStyle = sphereGrad; ctx.fill();

      var memLayers = [{ w: 40, a: 0.01 }, { w: 18, a: 0.025 }, { w: 8, a: 0.055 }, { w: 3.5, a: 0.12 }, { w: 1.5, a: 0.35 }];
      memLayers.forEach(function (l) { ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(232,160,208,' + l.a + ')'; ctx.lineWidth = l.w; ctx.stroke(); });
      ctx.beginPath(); ctx.arc(cx, cy, R, Math.PI * 0.85, Math.PI * 1.65); ctx.strokeStyle = 'rgba(255,230,245,0.06)'; ctx.lineWidth = 3; ctx.stroke();

      lipids.forEach(function (lp) { var p = project(lp.phi, lp.theta, R, rot); if (p.depth < 0.1) return; ctx.beginPath(); ctx.arc(p.x, p.y, 1.8 * p.depth, 0, Math.PI * 2); ctx.fillStyle = 'rgba(232,160,208,' + (p.depth * 0.18) + ')'; ctx.fill(); });

      sparks.forEach(function (sp) { sp.phi += sp.speed; var p = project(sp.phi, sp.theta, R, rot); if (p.depth < 0.15) return; var b = (0.5 + Math.sin(t * 0.002 + sp.phase) * 0.4) * p.depth; ctx.beginPath(); ctx.arc(p.x, p.y, 16 * p.depth, 0, Math.PI * 2); ctx.fillStyle = 'rgba(232,160,208,' + (0.035 * b) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(p.x, p.y, 6 * p.depth, 0, Math.PI * 2); ctx.fillStyle = 'rgba(232,160,208,' + (0.1 * b) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(p.x, p.y, 2.5 * p.depth, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,240,250,' + (0.5 * b) + ')'; ctx.fill(); });

      chromatinData.forEach(function (th) { ctx.beginPath(); var started = false; th.pts.forEach(function (pt) { var p = project(pt.phi, pt.theta, nR * 0.75, rot); if (p.depth < 0.15) { started = false; return; } if (!started) { ctx.moveTo(p.x, p.y); started = true; } else ctx.lineTo(p.x, p.y); }); ctx.strokeStyle = 'rgba(' + th.col.r + ',' + th.col.g + ',' + th.col.b + ',' + (th.alpha * 0.5) + ')'; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.stroke(); ctx.beginPath(); started = false; th.pts.forEach(function (pt) { var p = project(pt.phi, pt.theta, nR * 0.75, rot); if (p.depth < 0.15) { started = false; return; } if (!started) { ctx.moveTo(p.x, p.y); started = true; } else ctx.lineTo(p.x, p.y); }); ctx.strokeStyle = 'rgba(' + th.col.r + ',' + th.col.g + ',' + th.col.b + ',' + th.alpha + ')'; ctx.lineWidth = 1.2; ctx.stroke(); });

      travelers.forEach(function (tr) { tr.phi += tr.speed; var p = project(tr.phi, tr.theta, R * tr.orbitR, rot); tr.trail.push({ x: p.x, y: p.y, d: p.depth }); if (tr.trail.length > tr.trailMax) tr.trail.shift(); });
      for (var i = 0; i < travelers.length; i++) { var ti = travelers[i]; var pi = ti.trail.length ? ti.trail[ti.trail.length - 1] : null; if (!pi || pi.d < 0.3) continue; for (var j = i + 1; j < travelers.length; j++) { var tj = travelers[j]; var pj = tj.trail.length ? tj.trail[tj.trail.length - 1] : null; if (!pj || pj.d < 0.3) continue; var dx = pi.x - pj.x, dy = pi.y - pj.y, d = Math.sqrt(dx * dx + dy * dy); if (d < 55) { var alpha = (1 - d / 55) * 0.04 * Math.min(pi.d, pj.d); ctx.beginPath(); ctx.moveTo(pi.x, pi.y); ctx.lineTo(pj.x, pj.y); ctx.strokeStyle = 'rgba(232,160,208,' + alpha + ')'; ctx.lineWidth = 0.5; ctx.stroke(); } } }
      travelers.forEach(function (tr) { if (tr.trail.length > 2) { ctx.beginPath(); var started = false; for (var i = 0; i < tr.trail.length; i++) { var pt = tr.trail[i]; if (pt.d < 0.12) { started = false; continue; } if (!started) { ctx.moveTo(pt.x, pt.y); started = true; } else ctx.lineTo(pt.x, pt.y); } ctx.strokeStyle = 'rgba(' + tr.col.r + ',' + tr.col.g + ',' + tr.col.b + ',0.04)'; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.stroke(); ctx.beginPath(); started = false; for (var i = 0; i < tr.trail.length; i++) { var pt = tr.trail[i]; if (pt.d < 0.12) { started = false; continue; } if (!started) { ctx.moveTo(pt.x, pt.y); started = true; } else ctx.lineTo(pt.x, pt.y); } ctx.strokeStyle = 'rgba(' + tr.col.r + ',' + tr.col.g + ',' + tr.col.b + ',0.1)'; ctx.lineWidth = 1.2; ctx.stroke(); } var last = tr.trail[tr.trail.length - 1]; if (!last || last.d < 0.12) return; var dd = last.d; ctx.beginPath(); ctx.arc(last.x, last.y, tr.r * 5 * dd, 0, Math.PI * 2); ctx.fillStyle = 'rgba(' + tr.col.r + ',' + tr.col.g + ',' + tr.col.b + ',' + (0.03 * dd) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(last.x, last.y, tr.r * 2 * dd, 0, Math.PI * 2); ctx.fillStyle = 'rgba(' + tr.col.r + ',' + tr.col.g + ',' + tr.col.b + ',' + (0.18 * dd) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(last.x, last.y, tr.r * 0.6 * dd, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,245,252,' + (0.4 * dd) + ')'; ctx.fill(); });

      if (t - lastEmit > 450) { lastEmit = t; var ep = Math.random() * Math.PI * 2; var et = (Math.random() - 0.5) * Math.PI * 0.7; var pp = project(ep, et, R, rot); if (pp.depth > 0.3) { var dx = pp.x - cx, dy = pp.y - cy, dl = Math.sqrt(dx * dx + dy * dy) || 1; emitted.push({ x: pp.x, y: pp.y, vx: dx / dl * 0.5, vy: dy / dl * 0.5, life: 1, col: tCols[Math.floor(Math.random() * tCols.length)], r: Math.random() * 2 + 1 }); } }
      for (var i = emitted.length - 1; i >= 0; i--) { var e = emitted[i]; e.x += e.vx; e.y += e.vy; e.life -= 0.004; if (e.life <= 0) { emitted.splice(i, 1); continue; } ctx.beginPath(); ctx.arc(e.x, e.y, e.r * 10 * e.life, 0, Math.PI * 2); ctx.fillStyle = 'rgba(' + e.col.r + ',' + e.col.g + ',' + e.col.b + ',' + (0.02 * e.life) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(e.x, e.y, e.r * 3.5 * e.life, 0, Math.PI * 2); ctx.fillStyle = 'rgba(' + e.col.r + ',' + e.col.g + ',' + e.col.b + ',' + (0.08 * e.life) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(e.x, e.y, e.r * e.life, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,245,252,' + (0.3 * e.life) + ')'; ctx.fill(); }

      var nPulse = 1 + Math.sin(t * 0.0003) * 0.02, nRR = nR * nPulse;
      var nng = ctx.createRadialGradient(cx - nRR * 0.2, cy - nRR * 0.15, 0, cx, cy, nRR * 3.5); nng.addColorStop(0, 'rgba(108,26,85,0.1)'); nng.addColorStop(0.2, 'rgba(108,26,85,0.05)'); nng.addColorStop(1, 'rgba(108,26,85,0)');
      ctx.fillStyle = nng; ctx.beginPath(); ctx.arc(cx, cy, nRR * 3.5, 0, Math.PI * 2); ctx.fill();
      var nucGrad = ctx.createRadialGradient(cx - nRR * 0.2, cy - nRR * 0.15, nRR * 0.1, cx, cy, nRR);
      nucGrad.addColorStop(0, 'rgba(108,26,85,0.06)'); nucGrad.addColorStop(0.7, 'rgba(108,26,85,0.03)'); nucGrad.addColorStop(1, 'rgba(60,15,50,0.05)');
      ctx.beginPath(); ctx.arc(cx, cy, nRR, 0, Math.PI * 2); ctx.fillStyle = nucGrad; ctx.fill();
      var nL = [{ w: 20, a: 0.015 }, { w: 10, a: 0.035 }, { w: 5, a: 0.07 }, { w: 2.5, a: 0.15 }, { w: 1.2, a: 0.32 }];
      nL.forEach(function (l) { ctx.beginPath(); ctx.arc(cx, cy, nRR, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(232,160,208,' + l.a + ')'; ctx.lineWidth = l.w; ctx.stroke(); });
      ctx.beginPath(); ctx.arc(cx, cy, nRR, Math.PI * 0.8, Math.PI * 1.6); ctx.strokeStyle = 'rgba(255,230,245,0.05)'; ctx.lineWidth = 2; ctx.stroke();

      if (t - lastFlare > 2200) { lastFlare = t; flares.push({ phi: Math.random() * Math.PI * 2, theta: (Math.random() - 0.5) * 0.6, life: 1, maxR: 25 + Math.random() * 18 }); }
      for (var i = flares.length - 1; i >= 0; i--) { var f = flares[i]; f.life -= 0.008; if (f.life <= 0) { flares.splice(i, 1); continue; } var fp = project(f.phi, f.theta, nRR, rot); if (fp.depth < 0.3) continue; var fSize = f.maxR * (1 - f.life) * f.life * 4 * fp.depth; ctx.beginPath(); ctx.arc(fp.x, fp.y, fSize, 0, Math.PI * 2); ctx.fillStyle = 'rgba(232,160,208,' + (0.06 * f.life * fp.depth) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(fp.x, fp.y, fSize * 0.4, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,230,245,' + (0.12 * f.life * fp.depth) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(fp.x, fp.y, fSize * 0.15, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,255,255,' + (0.15 * f.life * fp.depth) + ')'; ctx.fill(); }

      for (var i = 0; i < pores.length; i++) { var pp = project(pores[i].phi, pores[i].theta, nRR, rot); if (pp.depth < 0.2) continue; var pulse = 1 + Math.sin(t * pores[i].speed + pores[i].phase) * 0.6; var dd = pp.depth; ctx.beginPath(); ctx.arc(pp.x, pp.y, 9 * pulse * dd, 0, Math.PI * 2); ctx.fillStyle = 'rgba(232,160,208,' + (0.015 * pulse * dd) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(pp.x, pp.y, 3.5 * dd, 0, Math.PI * 2); ctx.fillStyle = 'rgba(232,160,208,' + ((0.18 + pulse * 0.1) * dd) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(pp.x, pp.y, 1.3 * dd, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,240,250,' + (0.3 * pulse * dd) + ')'; ctx.fill(); }

      var nlR = nRR * 0.25;
      ctx.beginPath(); ctx.arc(cx + 5, cy - 3, nlR * 2.5, 0, Math.PI * 2); ctx.fillStyle = 'rgba(232,160,208,0.02)'; ctx.fill();
      ctx.beginPath(); ctx.arc(cx + 5, cy - 3, nlR, 0, Math.PI * 2); ctx.fillStyle = 'rgba(108,26,85,0.08)'; ctx.fill();
      ctx.strokeStyle = 'rgba(232,160,208,0.15)'; ctx.lineWidth = 1; ctx.stroke();

      orbitalRings.forEach(function (ring, ri) { ctx.beginPath(); var ringTilt = ring.tilt + Math.sin(t * 0.00005 + ri) * 0.05; var cosR = Math.cos(ringTilt), sinR = Math.sin(ringTilt); for (var i = 0; i <= 120; i++) { var rotA = (i / 120) * Math.PI * 2 + rot * 0.3 * (ri + 1); var fx = cx + ring.radius * Math.cos(rotA); var fy = cy + ring.radius * Math.sin(rotA) * cosR * 0.35; var fz = ring.radius * Math.sin(rotA) * sinR; if (fz >= 0) { ctx.moveTo(fx, fy); ctx.lineTo(fx + 0.5, fy + 0.5); } } ctx.strokeStyle = rgba(ring.col, ring.alpha); ctx.lineWidth = ring.width; ctx.stroke(); ctx.beginPath(); for (var i = 0; i <= 120; i++) { var rotA = (i / 120) * Math.PI * 2 + rot * 0.3 * (ri + 1); var fx = cx + ring.radius * Math.cos(rotA); var fy = cy + ring.radius * Math.sin(rotA) * cosR * 0.35; var fz = ring.radius * Math.sin(rotA) * sinR; if (fz >= 0) { if (i === 0) ctx.moveTo(fx, fy); else ctx.lineTo(fx, fy); } } ctx.strokeStyle = rgba(ring.col, ring.alpha * 0.3); ctx.lineWidth = ring.width * 4; ctx.stroke(); });

      orbiters.forEach(function (ob) { ob.phi += ob.speed; var ring = orbitalRings[ob.ringIdx]; var ringTilt = ring.tilt; var cosR = Math.cos(ringTilt), sinR = Math.sin(ringTilt); var rotA = ob.phi + rot * 0.3 * (ob.ringIdx + 1); var ox = cx + ring.radius * Math.cos(rotA); var oy = cy + ring.radius * Math.sin(rotA) * cosR * 0.35; var oz = ring.radius * Math.sin(rotA) * sinR; var odepth = (oz > 0) ? 1 : 0.2; ob.trail.push({ x: ox, y: oy, d: odepth }); if (ob.trail.length > ob.trailMax) ob.trail.shift(); if (ob.trail.length > 2) { ctx.beginPath(); for (var i = 0; i < ob.trail.length; i++) { var pt = ob.trail[i]; if (pt.d < 0.3) continue; if (i === 0) ctx.moveTo(pt.x, pt.y); else ctx.lineTo(pt.x, pt.y); } ctx.strokeStyle = 'rgba(' + ob.col.r + ',' + ob.col.g + ',' + ob.col.b + ',' + (0.06 * odepth) + ')'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.stroke(); ctx.beginPath(); for (var i = 0; i < ob.trail.length; i++) { var pt = ob.trail[i]; if (pt.d < 0.3) continue; if (i === 0) ctx.moveTo(pt.x, pt.y); else ctx.lineTo(pt.x, pt.y); } ctx.strokeStyle = 'rgba(' + ob.col.r + ',' + ob.col.g + ',' + ob.col.b + ',' + (0.15 * odepth) + ')'; ctx.lineWidth = 1; ctx.stroke(); } ctx.beginPath(); ctx.arc(ox, oy, ob.r * 5 * odepth, 0, Math.PI * 2); ctx.fillStyle = 'rgba(' + ob.col.r + ',' + ob.col.g + ',' + ob.col.b + ',' + (0.03 * odepth) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(ox, oy, ob.r * 2 * odepth, 0, Math.PI * 2); ctx.fillStyle = 'rgba(' + ob.col.r + ',' + ob.col.g + ',' + ob.col.b + ',' + (0.2 * odepth) + ')'; ctx.fill(); ctx.beginPath(); ctx.arc(ox, oy, ob.r * 0.6 * odepth, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,245,252,' + (0.4 * odepth) + ')'; ctx.fill(); });

      if (t - lastArc > 1800) { lastArc = t; var aa = Math.random() * Math.PI * 2; var sx = cx + Math.cos(aa) * R, sy = cy + Math.sin(aa) * R; var ea2 = aa + (Math.random() - 0.5) * 1.5; var er = R * 1.3 + Math.random() * R * 0.4; var ex = cx + Math.cos(ea2) * er, ey = cy + Math.sin(ea2) * er; arcs.push({ sx: sx, sy: sy, ex: ex, ey: ey, cpx: (sx + ex) / 2 + (Math.random() - 0.5) * 80, cpy: (sy + ey) / 2 + (Math.random() - 0.5) * 80, life: 1, col: tCols[Math.floor(Math.random() * tCols.length)] }); }
      for (var i = arcs.length - 1; i >= 0; i--) { var arc = arcs[i]; arc.life -= 0.012; if (arc.life <= 0) { arcs.splice(i, 1); continue; } var prog = 1 - arc.life; ctx.beginPath(); ctx.moveTo(arc.sx, arc.sy); var steps = 30; for (var s = 0; s <= steps * Math.min(prog * 3, 1); s++) { var f = s / steps; var x = (1 - f) * (1 - f) * arc.sx + 2 * (1 - f) * f * arc.cpx + f * f * arc.ex; var y = (1 - f) * (1 - f) * arc.sy + 2 * (1 - f) * f * arc.cpy + f * f * arc.ey; ctx.lineTo(x, y); } ctx.strokeStyle = 'rgba(' + arc.col.r + ',' + arc.col.g + ',' + arc.col.b + ',' + (0.15 * arc.life) + ')'; ctx.lineWidth = 1.5; ctx.lineCap = 'round'; ctx.stroke(); ctx.beginPath(); ctx.moveTo(arc.sx, arc.sy); for (var s = 0; s <= steps * Math.min(prog * 3, 1); s++) { var f = s / steps; var x = (1 - f) * (1 - f) * arc.sx + 2 * (1 - f) * f * arc.cpx + f * f * arc.ex; var y = (1 - f) * (1 - f) * arc.sy + 2 * (1 - f) * f * arc.cpy + f * f * arc.ey; ctx.lineTo(x, y); } ctx.strokeStyle = 'rgba(' + arc.col.r + ',' + arc.col.g + ',' + arc.col.b + ',' + (0.04 * arc.life) + ')'; ctx.lineWidth = 6; ctx.stroke(); }

      animId = requestAnimationFrame(draw);
    }
    animId = requestAnimationFrame(draw);

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', handleResize); };
  }, []);

  return (
    <>
      {/* ── 1. HERO ── */}
      <section className={s.hero} id="hero">
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
        <div className={s.orb + ' ' + s.orbA}></div>
        <div className={s.orb + ' ' + s.orbB}></div>
        <div className={s.heroInner}>
          <Image className={s.heroPortrait} src="/images/our%20story/press_release_distribution_0452818_127664.jpg" alt="Lawrence D. Petz, MD" width={200} height={200} priority sizes="(max-width: 768px) 140px, 200px" />
          <div className={s.heroText}>
            <Link href="/our-story" className={s.backLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Our Story
            </Link>
            <h1 className={s.heroName}>Lawrence D. Petz, MD</h1>
            <div className={s.heroRole}>Founding Medical Director, StemCyte</div>
            <p className={s.heroSub}>Over 60 years in medicine. Author of the first bone marrow transplant textbook. Founding architect of one of the world&rsquo;s most trusted cord blood banks.</p>
          </div>
        </div>
      </section>

      {/* ── 2. BACKGROUND ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel + ' ' + s.anim} data-anim="">Background</div>
          <h2 className={s.secH2 + ' ' + s.anim} data-anim="">The physician who built a field</h2>
          <p className={s.bodyP + ' ' + s.anim} data-anim="">
            Dr. Lawrence Petz earned his MD from the University of Illinois College of Medicine in 1955 and completed his residency in Internal Medicine at Cook County Hospital, San Francisco General Hospital, and the SF VA Hospital. He then completed a fellowship in Hematology at the Royal Postgraduate Medical School in London, establishing the foundation for a career that would span transfusion medicine, transplantation science, and cord blood banking.
          </p>
          <p className={s.bodyP + ' ' + s.anim} data-anim="">
            Over the following decades, Dr. Petz held leadership positions at some of the most respected medical institutions in the country. He served as Chief of Medicine at Walker Air Force Base, Section Head of Hematology and Blood Transfusion Services and Chairman of the Division of Medicine at City of Hope Medical Center, and Professor of Pathology and Director of Transfusion Medicine at UCLA Medical Center.
          </p>
          <p className={s.bodyP + ' ' + s.anim} data-anim="">
            In 2001, Dr. Petz joined StemCyte as its founding Medical Director and Chief Medical Officer. Under his clinical leadership, StemCyte achieved AABB, FACT, and FDA accreditation and developed more than 400 proprietary standard operating procedures, establishing the quality framework that has supported over 2,300 transplants worldwide.
          </p>

          <div className={s.insightCard + ' ' + s.anim} data-anim="">
            <div className={s.quoteText}>&ldquo;Our consistently excellent one-year patient survival data continue to point to both the increasing level of transplant physician care as well as to the high degree of efficacy of our cord blood units.&rdquo;</div>
            <div className={s.quoteAttr}>Lawrence D. Petz, MD &mdash; Founding Medical Director, StemCyte</div>
          </div>
        </div>
      </section>

      {/* ── 3. DIVIDER ── */}
      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* ── 4. AWARDS ALTERNATING TIMELINE ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel + ' ' + s.anim} data-anim="">Awards</div>
          <h2 className={s.secH2 + ' ' + s.anim} data-anim="">Honors and recognition</h2>
          <div className={s.awTl}>
            <div className={s.awTrack}></div>
            {/* LEFT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awLeft}><div className={s.awYear}>1991</div><div className={s.awTitle}>Emily Cooley Memorial Award</div><div className={s.awOrg}>AABB &mdash; Outstanding scientific and teaching contributions</div></div><div className={s.awDotW}><div className={s.awDot}></div></div></div>
            {/* RIGHT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awDotW}><div className={s.awDot}></div></div><div className={s.awRight}><div className={s.awYear}>1994</div><div className={s.awTitle}>Tibor Greenwalt Scientific Award</div><div className={s.awOrg}>AABB &mdash; With George Garratty</div></div></div>
            {/* LEFT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awLeft}><div className={s.awYear}></div><div className={s.awTitle}>Morten Grove-Rasmussen Award</div><div className={s.awOrg}>AABB</div></div><div className={s.awDotW}><div className={s.awDot}></div></div></div>
            {/* RIGHT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awDotW}><div className={s.awDot}></div></div><div className={s.awRight}><div className={s.awYear}></div><div className={s.awTitle}>NHLBI Transfusion Medicine Academic Award</div><div className={s.awOrg}>National Heart, Lung, and Blood Institute</div></div></div>
            {/* LEFT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awLeft}><div className={s.awYear}>2006</div><div className={s.awTitle}>Landsteiner Award Lectureship</div><div className={s.awOrg}>AABB &mdash; Research of international significance</div></div><div className={s.awDotW}><div className={s.awDot}></div></div></div>
            {/* RIGHT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awDotW}><div className={s.awDot}></div></div><div className={s.awRight}><div className={s.awYear}>2010</div><div className={s.awTitle}>Lifetime Achievement Medal</div><div className={s.awOrg}>AABB Bernard Fantus Medal &mdash; Highest honor in the field</div></div></div>
            {/* LEFT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awLeft}><div className={s.awYear}></div><div className={s.awTitle}>President&rsquo;s Award</div><div className={s.awOrg}>AABB &mdash; Exceptional service and leadership</div></div><div className={s.awDotW}><div className={s.awDot}></div></div></div>
            {/* RIGHT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awDotW}><div className={s.awDot}></div></div><div className={s.awRight}><div className={s.awYear}>2014</div><div className={s.awTitle}>Cord Blood Symposium Leadership Award</div><div className={s.awOrg}>For founding &amp; leading the symposium (2003&ndash;2014)</div></div></div>
            {/* LEFT */}
            <div className={s.awItem + ' ' + s.anim} data-anim=""><div className={s.awLeft}><div className={s.awYear}></div><div className={s.awTitle}>Owen Thomas &amp; Service Awards</div><div className={s.awOrg}>California Blood Bank Society</div></div><div className={s.awDotW}><div className={s.awDot}></div></div></div>
          </div>
        </div>
      </section>

      {/* ── 5. DIVIDER ── */}
      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* ── 6. SYMPOSIUM ── */}
      <section className={s.section + ' ' + s.sectionLav}>
        <div className={s.inner}>
          <div className={s.secLabel + ' ' + s.anim} data-anim="">Convening the field</div>
          <h2 className={s.secH2 + ' ' + s.anim} data-anim="">International Cord Blood Symposium</h2>
          <div className={s.syCard + ' ' + s.anim} data-anim="">
            <div className={s.syLeft}>
              <div className={s.syImageWrap}>
                <div className={s.syOverlay}>
                  <div className={s.syYears}>2003&ndash;2014</div>
                  <div className={s.sySub}>Annual symposium at City of Hope</div>
                </div>
              </div>
            </div>
            <div>
              <h3>A global gathering of transplant leaders</h3>
              <p className={s.syBody}>Dr. Petz founded and organized the annual International Symposium on Cord Blood Transplantation. The symposium convened 31-member faculty from the United States, France, Japan, Spain, Taiwan, and beyond&mdash;with attendees from over 20 countries sharing advances in cord blood science and clinical practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. HIV REMISSION (full-width dark) ── */}
      <section className={s.hivSection}>
        <div className={s.cellCanvasWrap}>
          <canvas ref={hivCanvasRef} />
        </div>
        <div className={s.hivInner}>
          <div className={s.hivGrid}>
            <div>
              <div className={s.hivBadge + ' ' + s.anim} data-anim=""><span className={s.hivPDot}></span>Published in Cell &middot; 2023</div>
              <div className={s.hivLabel + ' ' + s.anim} data-anim="">HIV Remission</div>
              <h2 className={s.hivH2 + ' ' + s.anim} data-anim="">The <em className={s.hivEm}>Cure for HIV</em></h2>
              <p className={s.hivPatient + ' ' + s.anim} data-anim="">The New York Patient became the first person to achieve HIV remission through a stem cell transplant. A StemCyte cord blood unit made it possible.</p>
              <p className={s.hivDesc + ' ' + s.anim} data-anim="">Through the NIH-funded IMPAACT P1107 study, Dr. Petz helped pioneer a novel approach: combining a CCR5&#916;32 cord blood unit with adult stem cells from a relative. By day 100, the patient&rsquo;s immune system was fully reconstituted by cord blood cells. She has remained off antiretroviral therapy with no viral rebound since.</p>
              <p className={s.hivStemcyte + ' ' + s.anim} data-anim="">The cord blood unit came from StemCyte&rsquo;s registry&mdash;one of over 300 homozygous CCR5&#916;32 units Dr. Petz had identified by screening more than 18,000 donated units for the HIV-resistant mutation.</p>
              <Link href="/our-story/hiv-remission" className={s.hivCta + ' ' + s.anim} data-anim="">Read the full story <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
            </div>
            <div className={s.hivRight}>
              <div className={s.hivStatCard + ' ' + s.anim} data-anim=""><div className={s.hivStatNum}>7+ yrs</div><div className={s.hivStatLabel}>Post-transplant with no detectable HIV and cancer in remission</div></div>
              <div className={s.hivStatCard + ' ' + s.anim} data-anim=""><div className={s.hivStatNum}>100%</div><div className={s.hivStatLabel}>Immune reconstitution by cord blood cells at day 100</div></div>
              <div className={s.hivStatCard + ' ' + s.anim} data-anim=""><div className={s.hivStatNum}>18,000+</div><div className={s.hivStatLabel}>Cord blood units screened for the CCR5&#916;32 mutation</div></div>
              <div className={s.hivStatCard + ' ' + s.anim} data-anim=""><div className={s.hivStatNum}>300+</div><div className={s.hivStatLabel}>Homozygous CCR5&#916;32 units identified in StemCyte&rsquo;s registry</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TEXTBOOKS ── */}
      <section className={s.section + ' ' + s.sectionPlum}>
        <div className={s.inner}>
          <div className={s.secLabel + ' ' + s.anim} data-anim="">Textbooks</div>
          <h2 className={s.secH2 + ' ' + s.anim} data-anim="">Landmark publications</h2>
          <div className={s.bookGrid}>
            <a href="https://www.amazon.com/Clinical-Bone-Marrow-Blood-Transplantation/dp/0521829127" target="_blank" rel="noopener noreferrer" className={s.bookCard + ' ' + s.bookCardLink + ' ' + s.anim} data-anim="">
              <div className={s.bookCover} style={{ background: 'linear-gradient(135deg, #3D0F31, #6C1A55)' }}>
                <div className={s.bookCoverTitle}>Clinical Bone Marrow Transplantation</div>
              </div>
              <div className={s.bookTitle}>Clinical Bone Marrow Transplantation</div>
              <div className={s.bookMeta}>With Karl Blume &middot; Churchill Livingstone &middot; 1983</div>
              <div className={s.bookEdition}>First textbook in the field</div>
              <div className={s.bookLink}>View on Amazon &#8599;</div>
            </a>
            <a href="https://www.amazon.com/Immune-Hemolytic-Anemias-Lawrence-Petz/dp/0443085595" target="_blank" rel="noopener noreferrer" className={s.bookCard + ' ' + s.bookCardLink + ' ' + s.anim} data-anim="">
              <div className={s.bookCover} style={{ background: 'linear-gradient(135deg, #8A3030, #C45050)' }}>
                <div className={s.bookCoverTitle}>Immune Hemolytic Anemias</div>
              </div>
              <div className={s.bookTitle}>Immune Hemolytic Anemias</div>
              <div className={s.bookMeta}>With George Garratty &middot; 2 editions &middot; 624 pages</div>
              <div className={s.bookEdition}>Now in its 3rd edition (Petz &amp; Garratty&rsquo;s)</div>
              <div className={s.bookLink}>View on Amazon &#8599;</div>
            </a>
            <a href="https://www.amazon.com/Clinical-Practice-Transfusion-Medicine-Lawrence/dp/0443089817" target="_blank" rel="noopener noreferrer" className={s.bookCard + ' ' + s.bookCardLink + ' ' + s.anim} data-anim="">
              <div className={s.bookCover} style={{ background: 'linear-gradient(135deg, #2A6B4F, #3D8B6A)' }}>
                <div className={s.bookCoverTitle}>Clinical Practice of Transfusion Medicine</div>
              </div>
              <div className={s.bookTitle}>Clinical Practice of Transfusion Medicine</div>
              <div className={s.bookMeta}>Co-editor &middot; Churchill Livingstone</div>
              <div className={s.bookEdition}>3 editions</div>
              <div className={s.bookLink}>View on Amazon &#8599;</div>
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. CAREER TIMELINE ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel + ' ' + s.anim} data-anim="">Career</div>
          <h2 className={s.secH2 + ' ' + s.anim} data-anim="">Professional journey</h2>
          <div className={s.timeline}>
            <div className={s.tlTrack}></div>
            {careerTimeline.map((item, i) => (
              <div className={s.tlItem + ' ' + s.anim} data-anim="" key={i}>
                <div className={s.tlDot + (item.highlight ? ' ' + s.tlDotHighlight : ' ' + s.tlDotActive)}></div>
                <div className={s.tlYear}>{item.year}</div>
                <div className={s.tlTitle}>{item.title}</div>
                <div className={s.tlDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. DIVIDER ── */}
      <div className={s.divider}><div className={s.dividerLine}></div></div>

      {/* ── 11. EXPERTISE TAGS ── */}
      <section className={s.section + ' ' + s.sectionLav}>
        <div className={s.inner}>
          <div className={s.secLabel}>Expertise</div>
          <h2 className={s.secH2}>Areas of focus</h2>
          <div className={s.tagGrid}>
            {tags.map((t, i) => (
              <span className={s.tag} key={i}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. OTHER LEADERS ── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.secLabel}>Leadership</div>
          <h2 className={s.secH2}>Meet our team</h2>
          <div className={s.otherLeaders}>
            {otherLeaders.map((leader, i) => (
              <Link href={leader.href} className={s.otherCard} key={i}>
                <Image className={s.otherAvatar} src={leader.img} alt={leader.name} width={64} height={64} sizes="64px" />
                <div className={s.otherInfo}>
                  <h4>{leader.name}</h4>
                  <span>{leader.role}</span>
                </div>
                <svg className={s.otherArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. CTA BANNER ── */}
      <section className={s.ctaBanner}>
        <h2>Learn how StemCyte protects families</h2>
        <p>Explore our cord blood and cord tissue banking plans.</p>
        <Link href="/pricing" className={s.ctaBtn}>See pricing</Link>
      </section>
    </>
  );
}
