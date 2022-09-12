import './App.css';
import Card from './components/card';
import data from './data';
import Header from './components/Header';

function App() {

  const cards = data.map(item =>{
    return (
      <Card 
      key ={item.id}
      item ={item}
      />
    )
  })
  return (
    <>
    <Header />
    <section className='cards'>
   {cards}
   </section>
   </>
  );
}

export default App;
