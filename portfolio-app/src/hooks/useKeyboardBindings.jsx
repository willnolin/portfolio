import { useEffect } from 'react'
// adapted from https://github.com/joshwcomeau/use-sound/blob/master/stories/demos/DrumMachine.js
// Josh W. Comeau
const useKeyboardBindings = map => {
  useEffect(() => {
    const handlePress = ev => {
      const handler = map[ev.key];

      if (typeof handler === 'function') {
        handler();
      }
    };

    window.addEventListener('keydown', handlePress);

    return () => {
      window.removeEventListener('keydown', handlePress);
    };
  }, [map]);
};

export default useKeyboardBindings