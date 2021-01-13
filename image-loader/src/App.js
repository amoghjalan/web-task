import React from "react";
import LazyImage from "./LazyImage";

export default function App() {
  const [data, setData] = React.useState([]);
  const url = "https://jsonplaceholder.typicode.com/photos";

  React.useEffect(() => {
    fetchImageData();
  }, [data]);

  const fetchImageData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <div className="App">
      <h1>Images Loader</h1>
      {data.length > 0 ? (
        <div className="images">
          {data.map(image => (
            <LazyImage key={image.id} src={image.url} alt={image.title} />
          ))}
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </div>
  );
}
