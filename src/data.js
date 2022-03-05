const products = [
  {
    id: generateUniqueId(),
    name: 'River',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: [
      'https://picsum.photos/id/237/200/200',
      'https://picsum.photos/id/2/200/200'
    ]
  },
  {
    id: generateUniqueId(),
    name: 'Lelani',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: ['https://picsum.photos/id/2/200/200']
  },
  {
    id: generateUniqueId(),
    name: 'Carston',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: ['https://picsum.photos/id/33/200/200', 'https://picsum.photos/200']
  },
  {
    id: generateUniqueId(),
    name: 'Ramy',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: ['https://picsum.photos/id/21/200/200']
  },
  {
    id: generateUniqueId(),
    name: 'Lua',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: [
      'https://picsum.photos/id/23/200/200',
      'https://picsum.photos/id/24/200/200'
    ]
  },
  {
    id: generateUniqueId(),
    name: 'Gope',
    price_in_USD: 12,
    description: 'Lorems mustaford',
    images: ['https://picsum.photos/id/25/200/200']
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
