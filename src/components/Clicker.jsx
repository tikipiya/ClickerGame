import { useState } from 'react'

const Clicker = ({ theme }) => {
  const [count, setCount] = useState(0)

  const getThemeClasses = () => {
    switch (theme) {
      case 'cyberpunk':
        return 'bg-cyber-purple hover:bg-cyber-pink text-cyber-blue'
      case 'retro':
        return 'bg-yellow-400 hover:bg-yellow-500 text-black'
      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white'
    }
  }

  const getResetButtonClasses = () => {
    switch (theme) {
      case 'cyberpunk':
        return 'bg-red-500 hover:bg-red-600 text-white'
      case 'retro':
        return 'bg-red-400 hover:bg-red-500 text-black'
      default:
        return 'bg-red-500 hover:bg-red-600 text-white'
    }
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-6xl font-bold animate-glow">
        {count}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className={`px-8 py-4 rounded-lg text-2xl font-bold transition-all transform hover:scale-105 ${getThemeClasses()}`}
        >
          Click Me!
        </button>
        <button
          onClick={() => setCount(0)}
          className={`px-8 py-4 rounded-lg text-2xl font-bold transition-all transform hover:scale-105 ${getResetButtonClasses()}`}
        >
          リセット
        </button>
      </div>
    </div>
  )
}

export default Clicker 