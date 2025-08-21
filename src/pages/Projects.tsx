import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProjectCard } from "@/components/projects/card";
import { MOBILES, PROJECTS } from "@/constants";
import NextArrow from "@/components/ui/arrow-next";
import PrevArrow from "@/components/ui/arrow-prev"
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";


export default function Projects() {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [-450, 400])
    const de = useTransform(scrollYProgress, [0, 1], [-450, 400])

    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div ref={container} className="p-3 flex flex-col gap-8 w-[100%]">
            <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">Mes projets réalisés</h1>
            <motion.div style={{ x: de }} className="slider-container">
                <h1 className="text-center text-xl md:text-2xl md:text-left font-bold mb-3">Devéloppement frontend</h1>
                <Slider {...settings}>
                    {PROJECTS.map(({ title, image, content, year, url, stack, client }) => (
                        <div className="px-3 md:px-0" key={title}>
                            <ProjectCard title={title} image={image} content={content} url={url} year={year} stack={stack} client={client} />
                        </div>
                    ))}
                </Slider>
            </motion.div>
            <motion.div style={{ x: sm }} className="slider-container">
                <h1 className="text-center text-xl md:text-2xl font-bold mb-3 md:text-left">Mobile</h1>
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
