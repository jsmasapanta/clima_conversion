const { toCelsius, toFahrenheit, movingAverage } = require('./clima');

test('32°F -> 0.0°C', () => {
  expect(toCelsius(32)).toBe(0.0);
});

test('0°C -> 32.0°F', () => {
  expect(toFahrenheit(0)).toBe(32.0);
});

test('100°C -> 212.0°F', () => {
  expect(toFahrenheit(100)).toBe(212.0);
});

test('-40°C <-> -40°F', () => {
  expect(toFahrenheit(-40)).toBe(-40.0);
  expect(toCelsius(-40)).toBe(-40.0);
});

test('toCelsius valida número finito', () => {
  expect(() => toCelsius(NaN)).toThrow(TypeError);
  expect(() => toCelsius(Infinity)).toThrow(TypeError);
  expect(() => toCelsius('32')).toThrow(TypeError);
});

test('toFahrenheit valida número finito', () => {
  expect(() => toFahrenheit(NaN)).toThrow(TypeError);
  expect(() => toFahrenheit(-Infinity)).toThrow(TypeError);
  expect(() => toFahrenheit('0')).toThrow(TypeError);
});

test('movingAverage([10,20,30,40], 2) -> [15.00, 25.00, 35.00]', () => {
  expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
});

test('movingAverage([1,2,3], 3) -> [2.00]', () => {
  expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
});

test('movingAverage valida tipos y valores', () => {
  expect(() => movingAverage('x', 2)).toThrow(TypeError);
  expect(() => movingAverage([1, 2, '3'], 2)).toThrow(TypeError);
  expect(() => movingAverage([1, 2, NaN], 2)).toThrow(TypeError);
  expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
  expect(() => movingAverage([1, 2, 3], 4)).toThrow(RangeError);
  expect(() => movingAverage([1, 2, 3], 2.5)).toThrow(TypeError);
});
