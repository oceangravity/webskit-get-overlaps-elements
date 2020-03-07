module.exports.getOverlaps = function (element, elements) {
  const rect1 = element.getBoundingClientRect()
  let collide = [];
  [].forEach.call(elements, el => {
    const rect2 = el.getBoundingClientRect()
    if (!(rect1.top > rect2.bottom || rect1.right < rect2.left || rect1.bottom < rect2.top || rect1.left > rect2.right)) {
      collide.push(el)
    }
  })
  return collide
}
