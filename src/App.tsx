import React from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <header>
        <Navbar links={[
          { text: 'Home', href: '/' },
          { text: 'Sobre', href: '/sobre' },
          { text: 'Contato', href: '/contato' },
          { text: 'Ajuda', href: '/ajuda' },
        ]} />
      </header>
      <main>
        <Login />
      </main>
    </div>
  );
}

export default App;
