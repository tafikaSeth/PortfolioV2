import { lazy, Suspense, useEffect, useRef, useState, type JSX } from "react";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import { getImage } from "@/lib/cloudinary";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { StackCard } from "@/components/stack/card";
import { databases, framework, tech, techs } from "@/constants/stack";
import Cursor from "@/components/ui/cursor";
import { useTranslation } from "react-i18next";
const Marquee = lazy(() => import("@/components/stack/Marquee"));
const CanvaScene = lazy(() => import("../components/canva"));
const Slider = lazy(() => import("react-slick"));

export default function Stack() {
  const [isHovered, setIsHovered] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // Lazy-load arrows
  const [NextArrow, setNextArrow] = useState<JSX.Element | null>(null);
  const [PrevArrow, setPrevArrow] = useState<JSX.Element | null>(null);

  useEffect(() => {
    import("@/components/ui/arrow-next").then((mod) => {
      setNextArrow(<mod.default />);
    });
    import("@/components/ui/arrow-prev").then((mod) => {
      setPrevArrow(<mod.default />);
    });
  }, []);

  const heroImage = getImage(
    "stack3_udhk5g",
    window.innerWidth < 768 ? 768 : 1920
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesToShow =
    windowWidth <= 480 ? 1 : windowWidth <= 600 ? 2 : 3;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    nextArrow: NextArrow || <div />, // flèche fallback
    prevArrow: PrevArrow || <div />,
  };

  return (
    <>
      <Cursor isHovered={isHovered} />

      {/* HERO SECTION */}
      <SectionWrapper fullWidth className="relative">
        <div className="w-full relative h-[100vh]">
          <AdvancedImage
            cldImg={heroImage}
            className="absolute w-full h-full object-cover"
            plugins={[lazyload()]}
          />
          <div
            ref={container}
            className="flex flex-col gap-3 w-[90%] left-1/12 absolute md:w-1/3 top-1/3 md:left-1/6"
          >
            <h1
              className="text-xl md:text-5xl sansation-bold text-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t("myStackTitle")}
            </h1>
            <p
              className="text-lg text-white md:text-xl sansation-regular md:text-justify"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {t("myStackSubtitle")}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* MARQUEE */}
      <div className="mb-8 overflow-x-hidden">
        <Suspense fallback={null}>
          <Marquee />
        </Suspense>
      </div>

      {/* CANVAS */}
      <SectionWrapper fullWidth={false} className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Suspense fallback={null}>
            <CanvaScene />
          </Suspense>
        </div>

        {/* SLIDERS */}
        <div className="relative z-10 space-y-12">
          {[
            { title: t("webTech"), data: techs },
            { title: t("librariesFrameworks"), data: framework },
            { title: t("database"), data: databases },
            { title: t("versioningTools"), data: tech },
          ].map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl text-center md:text-2xl font-bold mb-3 md:text-left sansation-bold">
                {section.title}
              </h2>
              <Suspense fallback={<div>Loading slider...</div>}>
                <Slider {...sliderSettings}>
                  {section.data.map((item, i) => (
                    <div key={i} className="px-5 md:px-4">
                      <StackCard
                        label={item.label}
                        icon={item.icon}
                        bg={item.bg}
                      />
                    </div>
                  ))}
                </Slider>
              </Suspense>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
