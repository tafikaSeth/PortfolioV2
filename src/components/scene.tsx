import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "./theme-provider";

const MyAnimatedBox = () => {
    const pointsRef = useRef<THREE.Points>(null!);
    const { theme } = useTheme()
    const particles = useMemo(() => {
        const positions = new Float32Array(4000);
        for (let i = 0; i < positions.length; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, []);

    useFrame(() => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.0009;
        }
    });

    return (
        <points ref={pointsRef}>
            <OrbitControls />
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                color={theme === "dark" ? "#ffffff" : "#000000"}
                size={0.02}
            />
        </points>
    );
};

export default MyAnimatedBox;
