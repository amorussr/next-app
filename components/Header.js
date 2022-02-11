export default function Header() {
  return (
    <div className="flex items-center p-2 py-4 mx-auto">
      <img className="w-8 h-8 rounded-full mr-4" src="./logo.jpg" />
      <h1 className="title text-white text-sm uppercase tracking-wide">Счастье есть для каждого</h1>
      <div>

      </div>
      <style jsx>{`
        .title {
          font-family: 'Merriweather', serif;
        }
      `}</style>
    </div>
  )
}
