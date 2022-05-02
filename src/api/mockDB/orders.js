const orders = [
  {
    id: 'O1',
    user_id: 'U2',
    created_date: '2022-03-03 20:00:00',
    processed_date: '2022-03-03 21:00:00',
    fulfilled_date: '2022-03-04 10:00:00',
    status: 'fulfilled',
    order: [
      {
        product_id: 'P1',
        selectedVariations: [
          { variation_key: 'RAM', value: '16GB' },
          { variation_key: 'Screen Size', value: '15 inch' }
        ],
        quantity: 12
      },
      {
        product_id: 'P2',
        quantity: 2
      },
      {
        product_id: 'P7',
        quantity: 3
      }
    ],
    shippingInfo: {
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      address: '',
      zip_code: '',
      country: '',
      state: ''
    }
  },
  {
    id: 'O2',
    user_id: 'U3',
    created_date: '2022-03-05 10:00:00',
    processed_date: '2022-03-05 11:00:00',
    fulfilled_date: '',
    status: 'in_progress',
    order: [
      {
        product_id: 'P1',
        selectedVariations: [
          { variation_key: 'RAM', value: '32GB' },
          { variation_key: 'Screen Size', value: '13 inch' }
        ],
        quantity: 5
      },
      {
        product_id: 'P2',
        quantity: 4
      }
    ],
    shippingInfo: {
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      address: '',
      zip_code: '',
      country: '',
      state: ''
    }
  },
  {
    id: 'O3',
    user_id: 'U3',
    created_date: '2022-03-05 11:00:00',
    processed_date: '2022-03-05 13:00:00',
    fulfilled_date: '2022-03-06 05:00:00',
    status: 'fulfilled',
    order: [
      {
        product_id: 'P6',
        quantity: 20
      },
      {
        product_id: 'P7',
        quantity: 10
      }
    ],
    shippingInfo: {
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      address: '',
      zip_code: '',
      country: '',
      state: ''
    }
  }
]

export default orders
