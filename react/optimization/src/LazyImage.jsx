import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const LazyImage = (props) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      //   console.log(entry);
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return inView ? (
    <img {...props} />
  ) : (
    <div>
      <img
        ref={ref}
        style={{ width: "800px", height: "1000px", backgroundColor: "#ddd" }}
      />
    </div>
  );
};

export default LazyImage;
