import { useEffect, useState } from 'react'

export const getElementAsync = async selector => {
  while (document.querySelector(selector) === null) {
    await new Promise( resolve =>  requestAnimationFrame(resolve) )
  }
  return document.querySelector(selector);
}

export const createObserver = (id, options) => {
  getElementAsync(id).then(selector => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }

    const observerCallback = (sections) => {
      sections.forEach(({ isIntersecting, target }) => {
        if (isIntersecting && !target.className.includes('fade-in')) {
          if (target.className.includes('fade-out')) {
            target.classList.remove('fade-out')
          }
          target.classList.add('fade-in')
        }
        if (!isIntersecting && !target.className.includes('fade-out')) {
          if (target.className.includes('fade-in')) {
            target.classList.remove('fade-in')
          }
          target.classList.add('fade-out')
        }
      })
    }

    const sectionObserver = new IntersectionObserver(
      observerCallback,
      options ?? observerOptions
    )
    sectionObserver.observe(selector)
  })
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerHeight,
    window.innerWidth,
  ]);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize;
}