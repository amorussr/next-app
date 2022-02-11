import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Service from "./Service"

export default function Services({services}) {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  })

  return (
    <motion.div ref={carousel} className="carousel" whileTap={"grabbing"}>
      <motion.div 
        drag="x"
        dragConstraints={{right: 0, left: -width}}
        className="inner-carousel"
        >
        {services.map((s) => {
          return <Service key={s.id} service={s} />
        })}
      </motion.div>
    </motion.div>
  )
}