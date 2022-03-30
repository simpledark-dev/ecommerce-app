const areObjectsEqual = (o1, o2) =>
  Object.keys(o1).length === Object.keys(o2).length &&
  Object.keys(o1).every(p => o1[p] === o2[p])

export const areArraysOfObjectsEqual = (a1, a2) =>
  a1.length === a2.length && a1.every((o, idx) => areObjectsEqual(o, a2[idx]))

export const generateUniqueId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
