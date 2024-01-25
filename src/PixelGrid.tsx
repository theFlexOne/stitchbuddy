import { useRef } from 'react';
import Pixel from './Pixel';

export default function PixelGrid({ w, h }: { w: number; h: number }) {
  const gridRef = useRef<string[][]>(createEmptyGrid(w, h));

  // function updatePixelState(row: number, col: number) {
  //   return (color: string) => {
  //     const newGrid = grid.map((gridRow, rowIndex) => {
  //       return gridRow.map((gridPixel, colIndex) => {
  //         if (rowIndex === row && colIndex === col) {
  //           return color;
  //         }
  //         return gridPixel;
  //       });
  //     });
  //     setGrid(newGrid);
  //   };
  // }

  function updatePixelState(row: number, col: number) {
    return (color: string) => {
      gridRef.current[row][col] = color;
    };
  }

  return (
    <div
      className='grid w-4/6 bg-lime-500'
      style={{
        gridTemplateColumns: `repeat(${w}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${h}, minmax(0, 1fr))`,
      }}
    >
      {new Array(h).fill(0).map((_, rowIndex) => {
        return (
          <div className='subgrid col-span-full w-full' key={rowIndex}>
            {new Array(w).fill(0).map((_, colIndex) => {
              return (
                <Pixel
                  key={colIndex}
                  onChange={updatePixelState(rowIndex, colIndex)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function createEmptyGrid(w: number, h: number) {
  const grid: string[][] = [];
  for (let i = 0; i < h; i++) {
    grid.push([]);
    for (let j = 0; j < w; j++) {
      grid[i].push('#000000');
    }
  }
  return grid;
}
