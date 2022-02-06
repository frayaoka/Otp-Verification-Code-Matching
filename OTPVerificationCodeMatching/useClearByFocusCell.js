import { useMemo, useRef } from 'react';
import { Platform } from 'react-native';
const findIndex = ({ locationX, locationY }, map) => {
  for (const [index, { x, y, xEnd, yEnd }] of Object.entries(map)) {
    if (
      x < locationX &&
      locationX < xEnd &&
      y < locationY &&
      locationY < yEnd
    ) {
      return parseInt(index, 10);
    }
  }
  return -1;
};
const useClearByFocusCell = options => {
  const valueRef = useRef(options);
  const cellsLayouts = useRef({});
  valueRef.current = options;
  const clearCodeByCoords = coords => {
    const index = findIndex(coords, cellsLayouts.current);
    if (index !== -1) {
      const {
        value,
        setValue,
        error,
        setError,
        initErrState,
      } = valueRef.current;
      const text = (value || '').slice(0, index);
      setValue(text);
      if (error.value != null) {
        setError(initErrState);
      }
    }
  };
  const getCellOnLayoutHandler = index => event => {
    const { width, height, x, y } = event.nativeEvent.layout;
    cellsLayouts.current[`${index}`] = {
      x,
      xEnd: x + width,
      y,
      yEnd: y + height,
    };
  };
  const onTouchStart = event => clearCodeByCoords(event.nativeEvent);
  const onClick = e => {
    const offset = e.target.getClientRects()[0];
    const locationX = e.clientX - offset.left;
    const locationY = e.clientY - offset.top;
    clearCodeByCoords({ locationX, locationY });
  };
  return [
    useMemo(() => (Platform.OS === 'web' ? { onClick } : { onTouchStart }), []),
    getCellOnLayoutHandler,
  ];
};
export default useClearByFocusCell;
