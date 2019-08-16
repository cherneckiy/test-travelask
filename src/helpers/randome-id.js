const randomId = (function () {
  let id = 0

  return () => {
    return id++
  }
})()

export default randomId
