import React from "react";
import Board from './components/Board'

function App() {

  const styleHead = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    opacity: 0.8,
    };
      
  return (
    <div >
      <h1 style={styleHead}>Minesweeper</h1>
      <Board/>
    </div>
  );
}

export default App;
