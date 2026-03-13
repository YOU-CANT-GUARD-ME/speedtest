let startTime = 0, elapsed = 0, id = null, run = false

function timer(now) {
  const time = now - startTime + elapsed

  min.innerHTML = String(Math.floor(time / 60000)).padStart("2", 0)
  sec.innerHTML = String(Math.floor((time % 60000) / 1000)).padStart("2", 0)
  ms.innerHTML = String(Math.floor(time / 1000)).padStart("3", 0)

  requestAnimationFrame(id)
}
function render() {
  run = !run

  if(run) {
    startTime = performance.now()
    id = requestAnimationFrame(timer)
    container.innerHTML = `<button onclick="render()">중지</button>`
  } else {
    elapsed += performance.now() - startTime
    cancelAnimationFrame(id)
    container.innerHTML = `<button onclick="render()">계속</button>`
  }
}