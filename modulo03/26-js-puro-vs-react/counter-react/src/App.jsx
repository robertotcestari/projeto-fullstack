import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [specialMessage, setSpecialMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  // Função para incrementar o contador
  const incrementCount = () => {
    setCount(prev => prev + 1)
  }

  // Função para decrementar o contador
  const decrementCount = () => {
    setCount(prev => prev - 1)
  }

  // Função para resetar o contador
  const resetCount = () => {
    setCount(0)
  }

  // Verifica se é múltiplo de 10 e não é zero para mostrar mensagem especial
  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      if (count > 0) {
        setSpecialMessage(`🎉 Parabéns! Você chegou a ${count}! 🎉`)
      } else {
        setSpecialMessage(`⚠️ Atenção! Contador está em ${count}! ⚠️`)
      }
      setShowMessage(true)
    } else {
      setShowMessage(false)
    }
  }, [count])

  // Suporte para teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch(event.key) {
        case '+':
        case '=':
        case 'ArrowUp':
          event.preventDefault()
          incrementCount()
          break
        case '-':
        case '_':
        case 'ArrowDown':
          event.preventDefault()
          decrementCount()
          break
        case 'r':
        case 'R':
        case '0':
          event.preventDefault()
          resetCount()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    
    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Define a classe CSS baseada no valor do contador
  const getCounterClass = () => {
    if (count > 0) return 'counter-display positive'
    if (count < 0) return 'counter-display negative'
    return 'counter-display zero'
  }

  return (
    <div className="container">
      <h1>Contador React</h1>
      
      <div className={getCounterClass()}>
        <span className="counter-number">{count}</span>
      </div>
      
      {showMessage && (
        <div className="special-message">
          {specialMessage}
        </div>
      )}
      
      <div className="buttons">
        <button 
          className="btn btn-decrease" 
          onClick={decrementCount}
        >
          -1
        </button>
        <button 
          className="btn btn-reset" 
          onClick={resetCount}
        >
          Reset
        </button>
        <button 
          className="btn btn-increase" 
          onClick={incrementCount}
        >
          +1
        </button>
      </div>
    </div>
  )
}

export default App
