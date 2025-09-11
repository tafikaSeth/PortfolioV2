import { useScroll, useTransform, motion } from "framer-motion"
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { useRef, useState, Suspense, lazy } from "react";
import { getImage } from "@/lib/cloudinary";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Cursor from "@/components/ui/cursor";
import { TEXT_KEYS } from "@/constants";
import { useTranslation } from "react-i18next";

// Lazy load all components
const Projects = lazy(() => import("./Projects"));
const Stack = lazy(() => import("./Stack"));
const Contact = lazy(() => import("./Contact"));
const ScrollVelocityText = lazy(() => import("@/components/scroll-velocity"));
const CanvaScene = lazy(() => import("../components/canva"));

export default function Home() {
  const container = useRef(null)
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  const sm = useTransform(scrollYProgress, [0, 1], [500, -500])
  const de = useTransform(scrollYProgress, [0, 1], [250, -250])

  const heroImage = getImage("home_bg3_tzy3fj", 1335);

  return (
    <div className="overflow-x-hidden">
      <Cursor isHovered={isHovered} />
      <SectionWrapper fullWidth>
        <div id="home" ref={container} className="w-full relative h-[100vh]">
          <AdvancedImage
            cldImg={heroImage}
            alt="Background home image"
            className="absolute w-full h-full object-cover"
            plugins={[lazyload()]}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 -translate-y-24 sm:-translate-y-36 md:-translate-y-48">
            <div className="flex flex-col items-center gap-2 text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white sansation-bold leading-tight"
                style={{ y: sm }}
                onMouseEnter={() => { setIsHovered(true) }}
                onMouseLeave={() => { setIsHovered(false) }}
              >
                SETH TAFIKA
              </motion.h1>
              <motion.p 
                style={{ y: de }} 
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-center font-bold text-white sansation-regular max-w-2xl mx-auto"
              >
                {t("devFrontAndMobile")}
              </motion.p>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper fullWidth={false} className="relative">
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
          <Suspense fallback={null}>
            <CanvaScene />
          </Suspense>
        </div>
        <div id="projects" className="relative z-10">
          <Suspense fallback={null}>
            <Projects />
          </Suspense>
        </div>
      </SectionWrapper>
      <SectionWrapper fullWidth>
        <div id="stack">
          <Suspense fallback={null}>
            <Stack />
          </Suspense>
        </div>
      </SectionWrapper>
      <SectionWrapper fullWidth>
        <Suspense fallback={null}>
          <ScrollVelocityText texts={TEXT_KEYS} />
        </Suspense>
      </SectionWrapper>
      <SectionWrapper fullWidth={false}>
        <div id="contact">
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        </div>
      </SectionWrapper>
    </div>
  );
}