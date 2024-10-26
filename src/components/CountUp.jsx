import { useCallback, useEffect, useRef, useState } from 'react';

// Easing function to slow down the count-up animation
const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const useScrollTriggeredCountUp = (ref, end, duration = 1000) => {
  const [count, setCount] = useState(0); 
  const isCounting = useRef(false);
  const frameRate = 1000 / 60; // 60 frames per second
  const totalFrames = Math.round(duration / frameRate);

  const handleScroll = useCallback(([entry]) => {
    if (entry.isIntersecting && !isCounting.current) {
      isCounting.current = true;
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = easeOutExpo(frame / totalFrames);
        setCount(Math.round(end * progress));

        if (frame === totalFrames) {
          clearInterval(counter);
          isCounting.current = false;
        }
      }, frameRate);
    }
  }, [end, frameRate, totalFrames]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleScroll, ref]);

  return count;
};

export default useScrollTriggeredCountUp;
