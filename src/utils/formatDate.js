export default function (timestamp, showTime = false) {
  const d = new Date(+timestamp);
  let time = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d
    .getDay()
    .toString()
    .padStart(2, '0')}`;
  if (showTime) {
    const hour = d.getHours().toString().padStart(2, '0');
    const minute = d.getMinutes().toString().padStart(2, '0');
    const second = d.getSeconds().toString().padStart(2, '0');
    time += ` ${hour}:${minute}:${second}`;
  }
  return time;
}
