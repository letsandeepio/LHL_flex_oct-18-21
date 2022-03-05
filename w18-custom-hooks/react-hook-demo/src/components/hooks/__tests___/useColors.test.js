import useColors from '../useColors';
import { renderHook, act } from '@testing-library/react-hooks';
const arrayOfColors = ['red', 'green', 'blue', 'magenta'];

describe('useColor hook testing', () => {
  
  test('2+2 = 4 should pass', ()=>{
    console.log("this works");
        expect(2+2).toEqual(4);
  })

  test('if given an array of colors it should chose the first color as the current color',()=>{
      const { result } = renderHook(() => useColors(arrayOfColors));
      expect(result.current.currentColor).toBe("red");
  })

    test('if user calls the next method, the current color should be what green', () => {
    const { result } = renderHook(() => useColors(arrayOfColors));
    act(()=>result.current.next())
      expect(result.current.currentColor).toBe('green');
    });

  test('if user calls the next method, the current color should be what blue', () => {
          const { result } = renderHook(() => useColors(arrayOfColors));
          act(() => result.current.next());
          act(() => result.current.next());
          expect(result.current.currentColor).toBe('blue');
        });


  test('if user calls the next method twice, and then call the back once, the current color should be what green', () => {
    const { result } = renderHook(() => useColors(arrayOfColors));
    act(() => result.current.next());
    act(() => result.current.next());
    act(() => result.current.back());
    expect(result.current.currentColor).toBe('green');
  });

    test('if we are at first color and user press back, it should still be red', () => {
      const { result } = renderHook(() => useColors(arrayOfColors));
      act(() => result.current.back());
      expect(result.current.currentColor).toBe('red');
    });

      test('if we are at last color and user press next, it should still be at the last color', () => {
        const { result } = renderHook(() => useColors(arrayOfColors));
         act(() => result.current.next());
          act(() => result.current.next());
           act(() => result.current.next());
        act(() => result.current.next());
        expect(result.current.currentColor).toBe('magenta');
      });



})

