import { useEffect, useRef } from "react";
import gsap from "gsap"

interface MoveCircle {
    x: number;
    y: number;
}
interface ChildProps {
  isHovered: boolean;
}

const Cursor = ({isHovered}: ChildProps) => {
    const size = isHovered ? 300: 30
    const circle = useRef(null)
    const mouse = useRef({
        x: 0,
        y: 0
    })
    const delayMouse = useRef({
        x: 0,
        y: 0
    })

    const manageMouseMove = (event: MouseEvent): void => {
        const { clientX, clientY } = event;
        mouse.current = {
            x: clientX,
            y: clientY
        }

        moveCircle(mouse.current)
    };

    const lerp = (x: number, y: number, a:number) => x * ( 1-a ) + y * a

    const moveCircle = ({ x, y }: MoveCircle) => {
        gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
    };

    const animate =() => {
        const {x, y} = delayMouse.current
        delayMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075),
        }
        moveCircle(delayMouse.current)
        window.requestAnimationFrame(animate)
    }

    useEffect(() => {
        animate()
        window.addEventListener("mousemove", manageMouseMove)
        return () => window.removeEventListener('mousemove', manageMouseMove)
    }, [])

    return (
        <div
            ref={circle}
            className="fixed top-0 left-0 bg-red-500 rounded-full mix-blend-difference pointer-events-none z-50"
            style={{
                width: size,
                height: size,
                filter: `blur(${isHovered ? 30: 0}px)`,
                transition: 'height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out'
            }}
        >

        </div>
    )
}

export default Cursor