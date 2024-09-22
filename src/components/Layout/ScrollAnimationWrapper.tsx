import {motion} from "framer-motion";

export default function ScrollAnimationWrapper(props) {
  let {children, className, ...otherProps} = props
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...otherProps}
    >
      {children}
    </motion.div>
  )
}