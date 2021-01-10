import React from "react";
import LazyImage from "./LazyImage";

export default function App() {
  return (
    <div className="App">
      <h1>Images Loader</h1>
      <div className="images">
        {[...Array(1000).keys()].map(i => (
          <LazyImage
            key={i}
            src={`https://picsum.photos/1000/1000?random=${i}`}
            alt={`Random image ${i}`}
          />
        ))}
      </div>
    </div>
  );
}
