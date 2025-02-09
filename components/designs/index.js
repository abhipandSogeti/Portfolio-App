import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/streamgraph-transitions";

function StreamgraphTransitions() {
  const viewofOffsetRef = useRef();
  const chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "viewof offset") return new Inspector(viewofOffsetRef.current);
      if (name === "chart") return new Inspector(chartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={viewofOffsetRef} />
      <div ref={chartRef} />
      <p>Credit: <a href="https://observablehq.com/@d3/streamgraph-transitions">Streamgraph transitions by D3</a></p>
    </>
  );
}

export default StreamgraphTransitions;