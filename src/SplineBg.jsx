import { useRef, useEffect } from "react"

const SplineBg = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    videoRef.current.playbackRate = 0.25
  }, [])

  return (
    <video
      autoPlay
      loop
      muted
      ref={videoRef}
      id='spline'
      height={window.innerHeight}
      width={window.innerWidth}
    >
      <source src='/assets/spline-bg.mp4' type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default SplineBg