'use client'
import {motion} from 'framer-motion'

type LeftSectionProps = {
    title: string | React.ReactNode
    bg: string
}
export const LeftSection = (props:LeftSectionProps) => {
    const {title, bg} = props;
    const variants = {
        initial: {
          width: '50%'
        },
        fixed: {
            width: '100%',
        }
    }
    return (
        <motion.div
            className={`h-full p-4 flex flex-col justify-between `}
            style={{
                background: bg,
                position: 'fixed'
            }}
            initial={{width: '100%'}}
            animate={'initial'}
            variants={variants}
            exit={{width: '100%', opacity: 0}}
            transition={{duration: .5, delay: .5}}
        >
            <div className='text-7xl lg:text-8xl font-semibold text-neutral-100 break-words'>
                {title}
            </div>
        </motion.div>
    )
}