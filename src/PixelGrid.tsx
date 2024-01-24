import { useState } from 'react'
import { SketchPicker, ColorChangeHandler, ColorResult } from 'react-color'

export default function PixelGrid({ w, h }: {
  w: number,
  h: number,
}) {
  const [grid, setGrid] = useState(createEmptyGrid(w, h))

  function updatePixelState(row: number, col: number) {
    return (color: string) => {
      const newGrid = grid.map((gridRow, rowIndex) => {
        return gridRow.map((gridPixel, colIndex) => {
          if (rowIndex === row && colIndex === col) {
            return color
          }
          return gridPixel
        })
      })
      setGrid(newGrid)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      {grid.map((row, rowIndex) => {
        return (
          <div className="flex" key={rowIndex}>
            {
              row.map((color, colIndex) => {
                return (
                  <Pixel key={colIndex} color={color} onChange={updatePixelState(rowIndex, colIndex)} />
                )
              })
            }
          </div>
        )
      })
      }
    </div>
  )
}

function Pixel({
  color,
  onChange
}: {
  color: string;
  onChange: (color: string) => void;
}) {
  const [isPickerOpen, setIsPickerOpen] = useState(false)

  const handleColorChange: ColorChangeHandler = (color: ColorResult) => {
    console.log(color);
    setIsPickerOpen(false);
    onChange(color.hex);
  }

  function handlePixelClick() {
    setIsPickerOpen(!isPickerOpen)
  }

  return (
    <div className="w-8 aspect-square border border-neutral-500 relative" style={{ backgroundColor: color }} onClick={handlePixelClick}>
      {isPickerOpen &&
        <SketchPicker className='absolute left-[110%] z-10' onChangeComplete={handleColorChange} />}
    </div>
  )
}

function createEmptyGrid(w: number, h: number) {
  const grid: string[][] = []
  for (let i = 0; i < h; i++) {
    grid.push([])
    for (let j = 0; j < w; j++) {
      grid[i].push('#000000')
    }
  }
  return grid
}