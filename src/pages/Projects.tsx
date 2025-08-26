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
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div ref={container} className="p-3 flex flex-col gap-8 w-[100%]">
            <h1 className="text-2xl sansation-bold md:text-4xl font-bold text-center md:text-left">
                {t('projectsTitle')}
            </h1>
            <motion.div
                style={ isMobile ? {x: deMobile} : {x: de} }
                className="slider-container"
            >
                <h1 className="text-center text-xl md:text-2xl md:text-left font-bold mb-3 sansation-bold">
                    {t('frontendDev')}
                </h1>
                <Slider {...settings}>
                    {PROJECTS.map(({ title, image, content, year, url, stack, client }) => (
                        <div className="px-3 md:px-0" key={title}>
                            <ProjectCard title={title} image={image} content={content} url={url} year={year} stack={stack} client={client} />
                        </div>
                    ))}
                </Slider>
            </motion.div>
            <motion.div
                style={isMobile ? {x: smMobile} : { x: sm }}
                className="slider-container"
            >
                <h1 className="text-center text-xl md:text-2xl font-bold mb-3 md:text-left sansation-bold">{t('mobileDev')}</h1>
                <Slider {...settings}>
                    {MOBILES.map(({ title, image, content, year, url, stack, client }) => (
                        <div className="px-3 md:px-0" key={title}>
                            <ProjectCard title={title} image={image} content={content} url={url} year={year} stack={stack} client={client} />
                        </div>
                    ))}
                </Slider>
            </motion.div>
        </div>
    );
}
