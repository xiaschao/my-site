export default function (timestamp) {
  const d = new Date(+timestamp);
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d
    .getDay()
    .toString()
    .padStart(2, '0')}`;
}
