const newId = (function () {
  let id = 0

  return () => id++
})()

export default newId
