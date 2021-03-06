import './App.css';
import schoolShield from './pictures/valogo.png'
import MainContainer from './components/MainContainer.js'

function App() {
  return (
    <div className="app-container">
        <div id='main-header'> 
          <img className='main-header-details' id='school-shield-main' src={schoolShield} alt='Vanguard Shield' width={50}/> 
          <h1 className='main-header-details' id='main-title'>Vanguard Academy</h1>
        </div>
      <MainContainer />
    </div>
  )
}

export default App;
