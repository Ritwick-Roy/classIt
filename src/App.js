import React from 'react';
import './App.css';
import VideoChat from './VideoChat';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>classIt</h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          Made with{' '}
          <span role="img" aria-label="React">
          ❤️
          </span>{' '}
          by <a href="https://github.com/ritwick-roy">Ritwick</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
