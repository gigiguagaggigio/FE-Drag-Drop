import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";  // Importa il backend per drag-and-drop
import FileUpload from "./Components/FileUpload";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>  {/* Wrappa tutto il codice in DndProvider */}
      <div className="App" style={{ padding: "20px" }}>
        <h1>Carica un File</h1>
        <FileUpload />
      </div>
    </DndProvider>
  );
}

export default App;