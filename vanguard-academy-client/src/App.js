import './App.css';
import schoolShield from './schoolShield.jpg'
import MainContainer from './components/MainContainer.js'
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      
      <div styel='backgroundColor: white'>
      <h1> <img src={schoolShield} alt='Vanguard Shield' width={50}/> Vanguard Academy  <img src={schoolShield} alt='Vanguard Shield' width={50}/></h1>
     
      </div>
            <Box component="span" m={1}>
              <MainContainer />
            </Box>
          

      </header>
    </div>
  );
}

export default App;
