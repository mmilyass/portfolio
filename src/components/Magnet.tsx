import React, { useRef, useState, useEffect, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  disabled?: boolean;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
  disabled = false,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("translate3d(0px, 0px, 0px)");
  const [transition, setTransition] = useState<string>(inactiveTransition);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (disabled || !elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Check if within padding boundary
    const isWithinBounds =
      e.clientX >= rect.left - padding &&
      e.clientX <= rect.right + padding &&
      e.clientY >= rect.top - padding &&
      e.clientY <= rect.bottom + padding;

    if (isWithinBounds) {
      setIsHovered(true);
      setTransition(activeTransition);
      const moveX = distanceX / strength;
      const moveY = distanceY / strength;
      setTransform(`translate3d(${moveX}px, ${moveY}px, 0px)`);
    } else if (isHovered) {
      setIsHovered(false);
      setTransition(inactiveTransition);
      setTransform("translate3d(0px, 0px, 0px)");
    }
  }, [disabled, padding, strength, activeTransition, inactiveTransition, isHovered]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransition(inactiveTransition);
    setTransform("translate3d(0px, 0px, 0px)");
  }, [inactiveTransition]);

  useEffect(() => {
    if (disabled) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, disabled]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
