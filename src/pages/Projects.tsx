import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProjectCard } from "@/components/projects/card";
import { MOBILES, PROJECTS } from "@/constants";
import NextArrow from "@/components/ui/arrow-next";
import PrevArrow from "@/components/ui/arrow-prev"
import { useTranslation } from "react-i18next";
import useIsMobile from "@/hooks/useResponsive";


export default function Projects() {
    const container = useRef(null)
    const isMobile = useIsMobile()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const { t } = useTranslation();

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [450, -400])
    const de = useTransform(scrollYProgress, [0, 1], [-450, 400])
    const smMobile = useTransform(scrollYProgress, [0, 1], [0, 0])
    const deMobile = useTransform(scrollYProgress, [0, 1], [0, 0])

    const getWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', getWidth)
        return () => {
            window.removeEventListener('resize', getWidth)
        }
    }, [])

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
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div ref={container} className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl sansation-bold font-bold text-center md:text-left">
                {t('projectsTitle')}
            </h1>
            <motion.div
                style={ isMobile ? {x: deMobile} : {x: de} }
                className="slider-container w-full"
            >
                <h1 className="text-center text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl md:text-left font-bold mb-2 sm:mb-3 md:mb-4 sansation-bold">
                    {t('frontendDev')}
                </h1>
                <div className="px-2 sm:px-0">
                    <Slider {...settings}>
                        {PROJECTS.map(({ title, image, content, year, url, stack, client }) => (
                            <div className="px-2 sm:px-3 md:px-4" key={title}>
                                <ProjectCard title={title} image={image} content={content} url={url} year={year} stack={stack} client={client} type="frontend"/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </motion.div>
            <motion.div
                style={isMobile ? {x: smMobile} : { x: sm }}
                className="slider-container w-full"
            >
                <h1 className="text-center text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 md:text-left sansation-bold">
                    {t('mobileDev')}
                </h1>
                <div className="px-2 sm:px-0">
                    <Slider {...settings}>
                        {MOBILES.map(({ title, image, content, year, url, stack, client }) => (
                            <div className="px-2 sm:px-3 md:px-4" key={title}>
                                <ProjectCard title={title} image={image} content={content} url={url} year={year} stack={stack} client={client} type="mobile"/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </motion.div>
        </div>
    );
}