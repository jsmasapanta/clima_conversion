function toCelsius(f) {
  if (!Number.isFinite(f)) throw new TypeError('f debe ser un número finito');
  return Number((((f - 32) * 5) / 9).toFixed(1));
}

function toFahrenheit(c) {
  if (!Number.isFinite(c)) throw new TypeError('c debe ser un número finito');
  return Number(((c * 9) / 5 + 32).toFixed(1));
}

function movingAverage(series, window) {
  if (!Array.isArray(series)) throw new TypeError('series debe ser un arreglo');
  if (!Number.isInteger(window)) throw new TypeError('window debe ser entero');
  if (window < 2 || window > series.length) throw new RangeError('window fuera de rango');

  for (const x of series) {
    if (!Number.isFinite(x)) throw new TypeError('series contiene valores no numéricos');
  }

  const out = [];
  for (let i = 0; i <= series.length - window; i++) {
    let sum = 0;
    for (let j = 0; j < window; j++) sum += series[i + j];
    out.push(Number((sum / window).toFixed(2)));
  }
  return out;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };
