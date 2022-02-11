export default function Header() {
  return (
    <div className="flex items-center p-2 py-4">
      <img className="w-16 h-16 rounded-full mr-2" src="./logo.jpg" />
      <h1 className="title text-white text-lg uppercase tracking-wide">Счастье есть для каждого</h1>

      <style jsx>{`
        .title {
          font-family: 'Merriweather', serif;
        }
      `}</style>
    </div>
  )
}
