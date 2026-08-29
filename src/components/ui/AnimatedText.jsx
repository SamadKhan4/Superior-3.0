import { motion, useReducedMotion } from 'framer-motion';
const EASE = [0.22, 1, 0.36, 1];
function AnimatedText({ lines, as = 'h2', className = '', lineClassName = '', delay = 0 }) {
  const Tag = motion[as];
  const reduce = useReducedMotion();
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className={`block ${lineClassName}`}
            variants={{
              hidden: reduce ? { opacity: 0 } : { y: '100%' },
              visible: reduce
                ? { opacity: 1, transition: { duration: 0.3 } }
                : {
                    y: 0,
                    transition: {
                      duration: 0.85,
                      ease: EASE,
                      delay: delay + i * 0.1,
                    },
                  },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
function FadeUp({ children, className = '', delay = 0, distance = 24 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
export { AnimatedText, FadeUp };
