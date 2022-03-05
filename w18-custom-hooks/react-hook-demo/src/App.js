import logo from './logo.svg';
import './App.css';
import EpisodeList from './components/EpisodeList';
import CharacterList from './components/CharacterList';
import Colors from './components/Colors';

function App() {


  return (
    <div className='App'>
      <h1>Hello Rick and Morty Fans</h1>
      <Colors/>
      <EpisodeList />
      <CharacterList/>
    </div>
  );
}

export default App;
