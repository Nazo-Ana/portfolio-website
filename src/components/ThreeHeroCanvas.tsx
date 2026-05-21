import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ThreeHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
    camera.position.set(0, 0.3, 6)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const group = new THREE.Group()
    scene.add(group)

    const geometry = new THREE.IcosahedronGeometry(1.4, 2)
    const material = new THREE.MeshBasicMaterial({
      color: 0x6d8cff,
      transparent: true,
      opacity: 0.18,
      wireframe: true,
    })
    const core = new THREE.Mesh(geometry, material)
    group.add(core)

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.12,
      wireframe: true,
    })
    const ring = new THREE.Mesh(new THREE.TorusKnotGeometry(1.9, 0.018, 150, 12), ringMaterial)
    group.add(ring)

    const particleCount = 620
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const palette = [
      new THREE.Color('#4f8cff'),
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#22d3ee'),
      new THREE.Color('#f472b6'),
    ]

    for (let index = 0; index < particleCount; index += 1) {
      const radius = 2.4 + Math.random() * 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const color = palette[index % palette.length]

      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.55
      positions[index * 3 + 2] = radius * Math.cos(phi)
      colors[index * 3] = color.r
      colors[index * 3 + 1] = color.g
      colors[index * 3 + 2] = color.b
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      blending: THREE.AdditiveBlending,
      size: 0.022,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    group.add(particles)

    const pointer = new THREE.Vector2(0, 0)

    const resize = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      renderer.setSize(width, height, false)
      camera.aspect = width / Math.max(height, 1)
      camera.updateProjectionMatrix()
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    canvas.addEventListener('pointermove', handlePointerMove)
    resize()

    const timer = new THREE.Timer()
    let animationFrame = 0

    const animate = (timestamp?: number) => {
      timer.update(timestamp)
      const elapsed = timer.getElapsed()
      group.rotation.y = elapsed * 0.1 + pointer.x * 0.08
      group.rotation.x = Math.sin(elapsed * 0.45) * 0.1 + pointer.y * 0.05
      core.rotation.y = elapsed * 0.18
      ring.rotation.x = elapsed * 0.13
      ring.rotation.z = elapsed * 0.09
      particles.rotation.y = elapsed * 0.035
      renderer.render(scene, camera)
      animationFrame = window.requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.cancelAnimationFrame(animationFrame)
      observer.disconnect()
      canvas.removeEventListener('pointermove', handlePointerMove)
      particleGeometry.dispose()
      particleMaterial.dispose()
      geometry.dispose()
      material.dispose()
      ring.geometry.dispose()
      ringMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas aria-hidden="true" className="absolute inset-0 h-full w-full" ref={canvasRef} />
}
