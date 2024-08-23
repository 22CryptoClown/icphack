export const uint8ArrayToUuid = (uint8Array) => {
  const hex = Array.from(uint8Array, (byte) => {
    return byte.toString(16).padStart(2, '0');
  });

  return [
    hex.slice(0, 4).join(''),
    hex.slice(4, 6).join(''),
    hex.slice(6, 8).join(''),
    hex.slice(8, 10).join(''),
    hex.slice(10, 16).join('')
  ].join('-');
}