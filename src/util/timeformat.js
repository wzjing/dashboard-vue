export function formatTime(date) {
  if ( Object.prototype.toString.call(date) !== '[object Date]') {
    console.log('invalid time object, required type must be Date, found ', Object.prototype.toString.call(date))
    return
  }

  return `${date.getFullYear()}年${date.getMonth()}月${date.getDay()} ${date.getHours()}:${date.getMinutes()}`
}