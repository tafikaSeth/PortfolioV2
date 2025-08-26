import { useScroll, useTransform, motion } from "framer-motion"
import { AdvancedImage, lazyload } from "@cloudinary/react";
import Projects from "./Projects";
import { useRef, useState } from "react";
import { getImage } from "@/lib/cloudinary";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import { Canvas } from "@react-three/fiber";
import MyAnimatedBox from "@/components/scene";
import Cursor from "@/components/ui/cursor";
import Contact from "./Contact";
import ScrollVelocityText from "@/components/scroll-velocity";
import { TEXT_KEYS } from "@/constants";
import Stack from "./Stack";
import { useTranslation } from "react-i18next";

export default function Home() {
  const container = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  const sm = useTransform(scrollYProgress, [0, 1], [500, -500])
  const de = useTransform(scrollYProgress, [0, 1], [250, -250])

  const heroImage = getImage("home_bg3_tzy3fj", 1920);

  const { t } = useTranslation();

  return (
    <div className="overflow-x-hidden">
      <Cursor isHovered={isHovered} />
      <SectionWrapper fullWidth>
        <div id="home" ref={container} className="w-full relative h-[100vh]">
          <AdvancedImage
            cldImg={heroImage}
            className="absolute w-full h-full object-cover"
            plugins={[lazyload()]}
          />
          <div className="flex flex-col gap-2 top-1/4 left-[18%] absolute md:top-1/4 md:left-[38%]">
            <motion.h1
              className="text-4xl md:text-7xl font-bold text-white sansation-bold"
              style={{ y: sm }}
              onMouseEnter={() => { setIsHovered(true) }}
              onMouseLeave={() => { setIsHovered(false) }}
            >
              SETH TAFIKA
              
            </motion.h1>
            <motion.p style={{ y: de }} className="text-sm md:text-xl text-center font-bold text-white sansation-regular">{t("devFrontAndMobile")}</motion.p>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper fullWidth={false} className="relative">
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
          <Canvas>
            <ambientLight intensity={0.5} />
            <MyAnimatedBox />
          </Canvas>
        </div>
        <div id="projects" className="relative z-10">
          <Projects />
        </div>
      </SectionWrapper>
      <SectionWrapper fullWidth>
        <div id="stack">
          <Stack />
        </div>
      </SectionWrapper>
      <SectionWrapper fullWidth>
        <ScrollVelocityText texts={TEXT_KEYS} />
      </SectionWrapper>
      <SectionWrapper fullWidth={false}>
        <div id="contact">
          <Contact />
        </div>
      </SectionWrapper>
    </div>
  );
}
