"use client"
import { TypeAnimation } from "react-type-animation"
import React from 'react'

interface AnimatedTextProps {
    className: string
}

export default function AnimatedText({className}: AnimatedTextProps) {
  return (
    <TypeAnimation className={className}
    sequence={[
      // Same substring at the start will only be typed once, initially
      'Tickets für dein Event.',
      3000,
      'Tickets für dein Festival.',
      3000,
      'Tickets für deine Party.',
      3000,
      'Tickets für deine Veranstaltung.',
      3000,
    ]}
    speed={50}
    repeat={Infinity}
  />
  )
}