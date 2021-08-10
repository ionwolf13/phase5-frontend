import './App.css';
import schoolShield from './pictures/valogo.jpg'
import MainContainer from './components/MainContainer.js'

function App() {
  return (
    <div className="app-container">
        <header id='main-header'> 
          <img className='main-header-details' id='school-shield-main' src={schoolShield} alt='Vanguard Shield' width={50}/> 
          <h1 className='main-header-details' id='main-title'>Vanguard Academy</h1>
        </header>
      <MainContainer />
    </div>
  )
}

export default App;
