import { motion } from "framer-motion";

interface MyProp {
  images: string[]
  from: string | number
  to: string | number
}
const MarqueeItem = ({ images, from, to }: MyProp) => {
  return (
    <div className="flex">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="w-40 p-5" src={image} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="w-40 p-5" src={image} key={index} alt="stack"/>;
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;

