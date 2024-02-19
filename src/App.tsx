
import './App.css'
import Navbar from './components/Navbar'
function App() {


  return (
   
    <header>
      <Navbar    links={[
            { text: 'Home', href: '/' },
            { text: 'Sobre', href: '/sobre' },
            { text: 'Contato', href: '/contato' },
            { text: 'Ajuda', href: '/ajuda' },
          ]} />
    </header>

  )
}

export default App
