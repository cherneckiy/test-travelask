const randomId = (function () {
  let id = 0

  return () => id++
})()

export default randomId
