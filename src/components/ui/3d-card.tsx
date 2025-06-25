"use client";
import { cn } from "@/lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    rotateX.set(y);
    rotateY.set(-x);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 150,
    damping: 30,
    mass: 0.5,
  });
  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 150,
    damping: 30,
    mass: 0.5,
  });

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <motion.div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={cn(
          "flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className={cn("relative", className)}
        >
          {children}
        </motion.div>
      </motion.div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | MotionValue<number>;
  translateY?: number | MotionValue<number>;
  translateZ?: number | MotionValue<number>;
  rotateX?: number | MotionValue<number>;
  rotateY?: number | MotionValue<number>;
  rotateZ?: number | MotionValue<number>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  const x = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });

  const translateXValue = useTransform(
    isMouseEntered ? x : useMotionValue(0),
    [-1, 1],
    [-translateX, translateX]
  );
  const translateYValue = useTransform(
    isMouseEntered ? y : useMotionValue(0),
    [-1, 1],
    [-translateY, translateY]
  );

  useEffect(() => {
    if (isMouseEntered) {
      x.set(1);
      y.set(1);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [isMouseEntered, x, y]);

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        transform: `translateX(${translateXValue}px) translateY(${translateYValue}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
