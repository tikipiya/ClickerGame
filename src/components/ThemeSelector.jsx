const ThemeSelector = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { id: 'cyberpunk', name: 'サイバーパンク' },
    { id: 'retro', name: 'レトロ' },
    { id: 'default', name: 'デフォルト' }
  ]

  return (
    <div className="flex justify-center gap-4 mb-8">
      {themes.map(theme => (
        <button
          key={theme.id}
          onClick={() => onThemeChange(theme.id)}
          className={`px-4 py-2 rounded-lg transition-all ${
            currentTheme === theme.id
              ? 'bg-cyber-blue text-black'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          {theme.name}
        </button>
      ))}
    </div>
  )
}

export default ThemeSelector 