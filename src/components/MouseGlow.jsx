import { useMouseGlow } from '../hooks/useMouseGlow';

export default function MouseGlow() {
  const position = useMouseGlow();
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 lg:block"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(20, 184, 166, 0.1), transparent 80%)`,
      }}
      aria-hidden="true"
    />
  );
}
