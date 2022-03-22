const areObjectsEqual = (o1, o2) =>
  Object.keys(o1).length === Object.keys(o2).length &&
  Object.keys(o1).every(p => o1[p] === o2[p])

export const areArraysOfObjectsEqual = (a1, a2) =>
  a1.length === a2.length && a1.every((o, idx) => areObjectsEqual(o, a2[idx]))
