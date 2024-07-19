import ProgressBar from "progressbar.js";
import React, { useEffect, useRef } from "react";

const ProgressBarLine = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const bar = new ProgressBar.Line(containerRef.current, {
        strokeWidth: 4,
        easing: "easeInOut",
        duration: 1400,
        color: "#FFEA82",
        trailColor: "#eee",
        trailWidth: 0,
        svgStyle: { width: "100%", height: "100%" },
        from: { color: "#FFEA82" },
        to: { color: "#ED6A5A" },
        step: (state, bar) => {
          bar.path.setAttribute("stroke", state.color);
        },
      });

      bar.animate(1.0);

      return () => {
        bar.destroy(); // Clean up the progress bar when the component unmounts
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ margin: "20px", width: "940px", height: "8px" }}
    />
  );
};

export default ProgressBarLine;
