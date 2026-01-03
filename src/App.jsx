import React from 'react';
import Navbar from './components/Navbar';
import Cover from './cover';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Cover />
      </main>
    </div>
  );
}

export default App;