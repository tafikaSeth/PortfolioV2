import { useScroll, useTransform, motion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import { getImage } from "@/lib/cloudinary";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { StackCard } from "@/components/stack/card";
import Slider from "react-slick";
import { databases, framework, tech, techs } from "@/constants/stack";
import { Canvas } from "@react-three/fiber";
import Cursor from "@/components/ui/cursor";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const NextArrow = lazy(() => import("@/components/ui/arrow-next"));
const PrevArrow = lazy(() => import("@/components/ui/arrow-prev"));
const MyAnimatedBox = lazy(() => import("@/components/scene"));
const Marquee = lazy(() => import("@/components/stack/Marquee"));

export default function Stack() {
  const [isHovered, setIsHovered] = useState(false)
  const container = useRef(null)
  const first = useRef(null)
  const second = useRef(null)
  const third = useRef(null)
  const fourth = useRef(null)
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const sm = useTransform(scrollYProgress, [0, 1], [500, -470])
  const de = useTransform(scrollYProgress, [0, 1], [250, -250])

  const heroImage = getImage("stack3_udhk5g", 1920);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const getWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', getWidth)
    return () => {
      window.removeEventListener('resize', getWidth)
    }
  }, [windowWidth])

  const slidesToShow = windowWidth <= 480
    ? 1
    : windowWidth <= 600
      ? 2
      : 3;

  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    nextArrow: <Suspense fallback={null}><NextArrow /></Suspense>,
    prevArrow: <Suspense fallback={null}><PrevArrow /></Suspense>,
  };

  return (
    <>
      <Cursor isHovered={isHovered} />
      <SectionWrapper fullWidth className="relative">
        <div className="w-full relative h-[100vh]">
          <AdvancedImage
            cldImg={heroImage}
            className="absolute w-full h-full object-cover"
            plugins={[lazyload()]}
          />
          <div ref={container} className="flex flex-col gap-3  w-[90%] left-1/12 absolute md:w-1/3 top-1/3 md:left-1/6">
            <motion.h1
              className="text-xl md:text-5xl sansation-bold text-white"
              style={{ y: sm }}
              onMouseEnter={() => { setIsHovered(true) }}
              onMouseLeave={() => { setIsHovered(false) }}
            >
              {t("myStackTitle")}
            </motion.h1>
            <motion.p
              onMouseEnter={() => { setIsHovered(true) }}
              onMouseLeave={() => { setIsHovered(false) }}
              className="text-lg text-white md:text-xl sansation-regular md:text-justify"
              style={{ y: de }}
            >
              {t("myStackSubtitle")}
            </motion.p>
          </div>
        </div>
      </SectionWrapper>

      <div className="mb-8 overflow-x-hidden">
        <Suspense fallback={null}>
          <Marquee />
        </Suspense>
      </div>

      <SectionWrapper fullWidth={false} className="relative">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <MyAnimatedBox />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10">
          <motion.div ref={first} className="slider-container">
            <h1 className="text-xl text-center md:text-2xl font-bold mb-3 md:text-left sansation-bold">{t("webTech")}</h1>
            <Slider {...settings}>
              {techs.map((tech, index) => (
                <div key={index} className="px-5 md:px-4">
                  <StackCard label={tech.label} icon={tech.icon} bg={tech.bg} />
                </div>
              ))}
            </Slider>
          </motion.div>

          <motion.div ref={second} className="slider-container mt-8">
            <h1 className="text-xl text-center md:text-2xl font-bold mb-3 md:text-left sansation-bold">{t("librariesFrameworks")}</h1>
            <Slider {...settings}>
              {framework.map((tech, index) => (
                <div key={index} className="px-5 md:px-4">
                  <StackCard label={tech.label} icon={tech.icon} bg={tech.bg} />
                </div>
              ))}
            </Slider>
          </motion.div>

          <motion.div ref={third} className="slider-container mt-8">
            <h1 className="text-xl text-center md:text-2xl font-bold mb-3 md:text-left sansation-bold">{t("database")}</h1>
            <Slider {...settings}>
              {databases.map((tech, index) => (
                <div key={index} className="px-5 md:px-4">
                  <StackCard label={tech.label} icon={tech.icon} bg={tech.bg} />
                </div>
              ))}
            </Slider>
          </motion.div>

          <motion.div ref={fourth} className="slider-container mt-8">
            <h1 className="text-xl text-center md:text-2xl font-bold mb-3 md:text-left sansation-bold">{t("versioningTools")}</h1>
            <Slider {...settings}>
              {tech.map((tech, index) => (
                <div key={index} className="px-5 md:px-4">
                  <StackCard label={tech.label} icon={tech.icon} bg={tech.bg} />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </SectionWrapper>

    </>
  );
}
