import { useState } from 'react';
import { ColorChangeHandler, ColorResult, SketchPicker } from 'react-color';

export default function Pixel({
  onChange,
}: {
  onChange: (color: string) => void;
}) {
  const [color, setColor] = useState('#000000');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleColorChange: ColorChangeHandler = (color: ColorResult) => {
    setIsPickerOpen(false);
    setColor(color.hex);
    onChange(color.hex);
  };

  return (
    <div
      className='border border-neutral-500 relative basis-0'
      style={{ backgroundColor: color }}
      onClick={() => setIsPickerOpen(!isPickerOpen)}
    >
      {isPickerOpen && (
        <SketchPicker
          className='absolute left-[110%] z-10'
          onChangeComplete={handleColorChange}
        />
      )}
    </div>
  );
}
