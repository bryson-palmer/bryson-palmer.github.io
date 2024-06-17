import { useRef, useEffect } from "react"
import { useWindowSize } from "@/utils"

const SplineBg = () => {
  const videoRef = useRef(null)
  const windowSize = useWindowSize()
  const [windowHeight, windowWidth] = windowSize

  useEffect(() => {
    videoRef.current.playbackRate = 0.25
  }, [])

  return (
    <video
      autoPlay
      loop
      muted
      ref={videoRef}
      id='spline-background'
      height={windowHeight}
      width={windowWidth}
    >
      <source src='/assets/spline-bg.mp4' type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default SplineBg