import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
  const testAPI = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.development.DEMO_KEY}`
      )
      .then((response) => {
        return response
      })
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          target='_blank'
          href={`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_DEMO_KEY}`}
        >
          <img src={logo} className='App-logo' alt='logo' />
        </a>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
