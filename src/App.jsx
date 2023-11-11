import './App.css';
import Card from './components/Card';
import dataJSON from './data.json';

const heroes = JSON.parse(JSON.stringify(dataJSON));

export default function App() {
  return (
    <div className='wrapper'>
    <header>
      <h1 className='title'>Супер-герои</h1>
    </header>
    <main className='heroes'>
      {heroes.map((hero, index) => 
      <Card 
      key={index}
      name={hero.name}
      universe={hero.universe}
      alterego={hero.alterego}
      occupation={hero.occupation}
      friends={hero.friends}
      superpowers={hero.superpowers}
      url={hero.url}
      info={hero.info}
      ></Card>
      )}
    </main>
    </div>
  )
}

