import { useState } from 'react'
import Clicker from './components/Clicker'
import ThemeSelector from './components/ThemeSelector'

function App() {
  const [theme, setTheme] = useState('cyberpunk')

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 animate-glow">
          Clicker Game
        </h1>
        <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
        <Clicker theme={theme} />
      </div>
    </div>
  )
}

export default App 