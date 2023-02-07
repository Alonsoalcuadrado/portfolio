import Navbar from './components/Navbar'

function App() {

  return (
    <div className="app">
      <Navbar />
      <img className='app-header-decoration' src="src/assets/decoration.png" alt="page decoration" />
      <img className='app-header-photo' src="src/assets/erickalonso.png" alt="profile photo Erick Alonso" />
      <img className='app-header-oval' src="src/assets/oval.svg" alt="oval decorator" />
      <h2 className="app-header">Nice to meet you! I'm <span className='app-header-text-underline'>Adam Keyes.</span></h2>
      <p className='app-header-description'>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
    </div>
  )
}

export default App
