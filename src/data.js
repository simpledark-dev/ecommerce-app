const products = [
  {
    id: generateUniqueId(),
    name: 'Test',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: ['https://random.imagecdn.app/200/200', 'https://picsum.photos/200']
  },
  {
    id: generateUniqueId(),
    name: 'Test',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: ['https://random.imagecdn.app/200/200']
  },
  {
    id: generateUniqueId(),
    name: 'Test',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: ['https://random.imagecdn.app/200/200', 'https://picsum.photos/200']
  },
  {
    id: generateUniqueId(),
    name: 'Test',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: ['https://random.imagecdn.app/200/200']
  },
  {
    id: generateUniqueId(),
    name: 'Test',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: ['https://random.imagecdn.app/200/200', 'https://picsum.photos/200']
  },
  {
    id: generateUniqueId(),
    name: 'Test',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: ['https://random.imagecdn.app/200/200']
  }
]

function generateUniqueId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export { products }
