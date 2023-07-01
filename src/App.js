import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const quotes = [
    {
      text:"Political power grows out of the barrel of a gun.",
      author:"Mao Zedong"
    },
    {
      text:"If destruction be our lot, we must ourselves be its author and finisher. As a nation of freemen, we must live through all time, or die by suicide.",
      author:"Abraham Lincoln"
    },
    {
      text:"Simplicity is a difficult thing to achieve.",
      author:"Charlie Chaplin"
    },
    {
      text:"When I was a child, ladies and gentlemen, I was a dreamer.",
      author:"Elvis Presley"
    },
    {
      text:"Education is the most powerful weapon which you can use to change the world.",
      author:"Nelson Mandela"
    },
    {
      text:"In a gentle way, you can shake the world.",
      author:"Gandh"
    }
  ]
  const [currentQuote, setCurrentQuote] = useState(randomQuote())

  function randomQuote(){
    return quotes[Math.floor(Math.random()*(quotes.length-1))]
  }
 



  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote Machine</h1>
      </header>

      <div id="quote-box">
        <blockquote id="text">
          {currentQuote.text}
        </blockquote>
        <figcaption id="author">
          {currentQuote.author}
        </figcaption>
        <a id="new-quote" onClick={() => setCurrentQuote(randomQuote())}>NEW</a>
        <a id="tweet-quote">TWEET</a>
      </div>

    </div>
  );
}

export default App;
