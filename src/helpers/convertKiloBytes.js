export default function convertKiloBytes(bytes) {
  return `${+`${Math.round(`${bytes / 1024}e+2`)}e-2`} KB`;
}
