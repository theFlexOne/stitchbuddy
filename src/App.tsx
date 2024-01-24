import PixelGrid from "./PixelGrid"

const GRID = [
  ['#83FF33'],
]

function App() {

  return (
    <div className="min-h-screen bg-neutral-800 grid place-items-center">

      <PixelGrid w={2} h={2} />
    </div>
  )
}

export default App
