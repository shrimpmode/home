'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type LeftSectionProps = {
  title: string | React.ReactNode
  bg: string
}
export const LeftSection = (props: LeftSectionProps) => {
  const { title, bg } = props;
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint (adjust if necessary)
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const variants = {
    section: {
      width: '50%',

    },
    sectionMobile: {
      width: '100%',
      opacity: 0,
      display: 'none'
    },
  }

  const item = {
    sectionMobile: {
      x: -10
    }
  }

  return (
    <motion.div
      className="h-full p-4 flex flex-col justify-between opacity-1"
      style={{
        background: bg,
        position: 'fixed'
      }}
      initial={isMobile ? { width: 0, opacity: 0 } : { width: '100%', opacity: 1 }}
      animate={isMobile ? 'sectionMobile' : 'section'}
      variants={variants}
      transition={{ duration: .8, delay: .5 }}
    >
      <motion.div
        variants={item}
        className='text-6xl lg:text-8xl font-semibold text-neutral-100 break-words'>
        {title}
      </motion.div>
    </motion.div>
  )
}
