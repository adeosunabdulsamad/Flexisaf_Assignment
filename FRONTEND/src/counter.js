/**
 * Initializes a clickable counter on a DOM element.
 * @param {HTMLElement} element - The element whose text displays the current count.
 */
export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
