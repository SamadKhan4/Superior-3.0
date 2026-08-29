import { motion, useReducedMotion } from 'framer-motion';
const EASE = [0.22, 1, 0.36, 1];
function RevealImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  direction = 'vertical',
  priority = false,
}) {
  const reduce = useReducedMotion();
  const hidden =
    direction === 'vertical'
      ? { clipPath: 'inset(100% 0% 0% 0%)' }
      : { clipPath: 'inset(0% 100% 0% 0%)' };
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={reduce ? { opacity: 0 } : hidden}
      whileInView={reduce ? { opacity: 1 } : { clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={reduce ? void 0 : { scale: 1.08 }}
        whileInView={reduce ? void 0 : { scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease: EASE }}
      />
    </motion.div>
  );
}
export { RevealImage };
