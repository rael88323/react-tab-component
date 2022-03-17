import { useState, useEffect } from 'react'

function getWindowDimens() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export default function useWindowDimens() {
  const [windowDimens, setWindowDimens] = useState(getWindowDimens())

  useEffect(() => {
    function handleResize() {
      setWindowDimens(getWindowDimens())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimens
}
