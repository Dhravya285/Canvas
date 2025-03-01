import { useEffect, useRef, useState } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";

const socket = new WebSocket("ws://localhost:3000");

const ExcalidrawComponent = () => {
  const excalidrawRef = useRef(null);
  const [sceneData, setSceneData] = useState(null);

  useEffect(() => {
    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      setSceneData(receivedData);
    };
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Excalidraw
        ref={excalidrawRef}
        initialData={{ elements: sceneData }}
        onChange={(elements) => {
          socket.send(JSON.stringify(elements));
        }}
      />
    </div>
  );
};

export default ExcalidrawComponent;
