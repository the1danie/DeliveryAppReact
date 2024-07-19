import ProgressBar from "progressbar.js";
import React, { useEffect, useRef } from "react";

const ProgressBarLine = ({ progress }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const bar = new ProgressBar.Line(containerRef.current, {
        strokeWidth: 4,
        easing: "easeInOut",
        duration: 1400,
        color: "#0089ff",
        trailColor: "#dcdcdc",
        trailWidth: 0,
        svgStyle: { width: "100%", height: "100%" },
        from: { color: "#0089ff" },
        to: { color: "#7b00ff" },
        step: (state, bar) => {
          bar.path.setAttribute("stroke", state.color);
        },
      });

      bar.animate(progress); // Use the progress prop to animate the bar

      return () => {
        bar.destroy(); // Clean up the progress bar when the component unmounts
      };
    }
  }, [progress]); // Re-run effect when progress changes

  return (
      <div
          ref={containerRef}
          style={{width: "940px", height: "8px", marginLeft: "20px", marginBottom: "30px", marginTop: "-10px" }}
      />
  );
};

export default ProgressBarLine;
