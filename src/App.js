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
      author:"Gandhi"
    }
  ]

  const bgColors = [
    "#37306B",
    "#66347F",
    "#9E4784",
    "#D27685",
    "#19376D",
    "#576CBC",
    "#A5D7E8"
  ]
  const [currentQuote, setCurrentQuote] = useState(getRandomArrayElement(quotes))
  const [currentBgColor, setCurrentBgColor] = useState(getRandomArrayElement(bgColors))

  
  function getRandomArrayElement(array){
    return array[Math.floor(Math.random()*(array.length-1))]
  }
  function getDifferentArrayElement(array,currentElement){
    let newElement = currentElement
    while(JSON.stringify(newElement)===JSON.stringify(currentElement)){
      newElement = getRandomArrayElement(array)
    }
    return newElement
  }
 
  function handleClick(){
    setCurrentQuote(getDifferentArrayElement(quotes,currentQuote))
    setCurrentBgColor(getDifferentArrayElement(bgColors,currentBgColor))
  }
  const params = new URLSearchParams({
    text:currentQuote.text+" || "+currentQuote.author
  }).toString()




  return (
    <>
    <div id="welcome" className="flex-container" style={{backgroundColor: currentBgColor}}>
        <div className='quote-box'>
        <blockquote>Welcome to the quote machine!</blockquote>
        
        <a className="clickable" href="#app">
          BEGIN
        </a>
        </div>
    </div>
    <div className="App flex-container" id="app" style={{backgroundColor: currentBgColor}}>
      <header className="App-header">
        <h1>Quote Machine</h1>
      </header> 
      <div id="quote-box" className='quote-box'>
        <blockquote id="text">
          <span className='quote'>
          {currentQuote.text}
          </span>
        </blockquote>
        <figcaption id="author">
          {currentQuote.author}
        </figcaption>
        
        
        <button id="new-quote" className="clickable" onClick={handleClick}>NEW</button>
        <a id="tweet-quote" className="clickable"  href={"https://twitter.com/intent/tweet?"+params}>TWEET</a>
        </div>
      

    </div>
    </>
  );
}

export default App;
