import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"; // Importa il backend per drag-and-drop
import FileUpload from "./Components/FileUpload";
import './App.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
          <h1>My File Upload App</h1>
        </header>
        <div className="App-mainContent">
          <FileUpload />
        </div>
        <footer className="App-footer">
          <p>© 2025 My Company. All rights reserved.</p>
        </footer>
      </div>
    </DndProvider>
  );
}

export default App;