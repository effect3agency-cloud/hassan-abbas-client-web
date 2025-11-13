'use client'

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react'
import { cn } from '@/lib/utils'

const DOCK_HEIGHT = 128
const DEFAULT_MAGNIFICATION = 80
const DEFAULT_DISTANCE = 150
const DEFAULT_PANEL_HEIGHT = 64

type DockProps = {
  children: React.ReactNode
  className?: string
  distance?: number
  panelHeight?: number
  magnification?: number
}

type DockItemProps = {
  className?: string
  children: React.ReactNode
}

type DockLabelProps = {
  className?: string
  children: React.ReactNode
}

type DockIconProps = {
  className?: string
  children: React.ReactNode
}

const DockContext = createContext<any | undefined>(undefined)
const useDock = () => {
  const context = useContext(DockContext)
  if (!context) throw new Error('useDock must be used within a DockProvider')
  return context
}

function Dock({ children, className, magnification = DEFAULT_MAGNIFICATION, distance = DEFAULT_DISTANCE, panelHeight = DEFAULT_PANEL_HEIGHT }: DockProps) {
  const mouseX = useMotionValue(Infinity)
  const isHovered = useMotionValue(0)

  const height = useSpring(useTransform(isHovered, [0, 1], [panelHeight, DOCK_HEIGHT]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      style={{ height }}
      className="mx-2 flex max-w-full items-end overflow-x-auto"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1)
          mouseX.set(pageX)
        }}
        onMouseLeave={() => {
          isHovered.set(0)
          mouseX.set(Infinity)
        }}
        className={cn(
          "mx-auto flex w-fit gap-4 px-6 py-3 rounded-3xl border-2 border-orange-500 bg-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(249,115,22,0.25)] transition-all duration-300 relative group",
          className
        )}
        style={{ height: panelHeight }}
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/0 via-orange-400/10 to-orange-500/0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
        <DockContext.Provider value={{ mouseX, distance, magnification }}>
          {children}
        </DockContext.Provider>
      </motion.div>
    </motion.div>
  )
}

function DockItem({ children, className }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { distance, magnification, mouseX } = useDock()
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseDistance = useTransform(mouseX, (val: number) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - rect.x - rect.width / 2
  })
  const width = useSpring(useTransform(mouseDistance, [-distance, 0, distance], [40, magnification, 40]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative inline-flex items-center justify-center aspect-square rounded-full bg-white/20 dark:bg-neutral-800/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300 backdrop-blur-sm",
        className
      )}
    >
      {Children.map(children, (child) => cloneElement(child as React.ReactElement, { width, isHovered }))}
    </motion.div>
  )
}

function DockLabel({ children, className, ...rest }: DockLabelProps) {
  const restProps = rest as Record<string, unknown>
  const isHovered = restProps['isHovered'] as boolean
  
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute -top-6 left-1/2 -translate-x-1/2 whitespace-pre rounded-md border border-orange-400/20 bg-white/30 px-2 py-0.5 text-xs text-neutral-700 dark:text-white backdrop-blur-lg",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function DockIcon({ children, className }: DockIconProps) {
  return <div className={cn("flex items-center justify-center h-full w-full", className)}>{children}</div>
}

export { Dock, DockItem, DockLabel, DockIcon }
