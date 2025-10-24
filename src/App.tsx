import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const appTitle = import.meta.env.VITE_APP_TITLE || 'Vite App';
console.dir(import.meta.env);

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{appTitle}</h1>
    </>
  )
}

export default App
