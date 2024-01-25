import { useState } from 'react';
import PixelGrid from './PixelGrid';

const GRID = [['#83FF33']];

function App() {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [forceSquare, setForceSquare] = useState(true);

  function handleWidthChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newWidth = parseInt(e.target.value);
    setWidth(newWidth);
    forceSquare && setHeight(newWidth);
  }

  function handleHeightChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newHeight = parseInt(e.target.value);
    setHeight(newHeight);
    forceSquare && setWidth(newHeight);
  }

  return (
    <div className='min-h-screen bg-neutral-800 flex'>
      <div className='bg-neutral-600 p-4 flex flex-col'>
        <label htmlFor='wInput' className='min-w-20ch'>
          <span>Width</span>
          <input
            id='wInput'
            type='number'
            min={1}
            max={100}
            value={width}
            onChange={handleWidthChange}
          />
        </label>
        <label htmlFor='hInput'>
          <span>Height</span>
          <input
            id='hInput'
            type='number'
            min={1}
            max={100}
            value={height}
            onChange={handleHeightChange}
          />
        </label>
        <label htmlFor='forceSquare'>
          <input
            id='forceSquare'
            type='checkbox'
            checked={forceSquare}
            onChange={(e) => setForceSquare(e.target.checked)}
          />
          <span>Force Square</span>
        </label>
      </div>
      <div className='grow grid place-content-center'>
        <PixelGrid w={width} h={height} />
      </div>
    </div>
  );
}

export default App;
