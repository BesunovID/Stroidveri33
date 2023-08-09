

export default function handler(req, res) {
  res.status(200).json(productsList)
}

const productsList = [
  {
    'id': 1,
    'category': 'doors',
    'name': 'ИДО 21-10П',
    'desc': 'Строительная дверь...',
    'price': '2000',
    'image': '/vercel.svg'
  }, 
  {
    'id': 2,
    'category': 'doors',
    'name': 'ДУ21-10п',
    'desc': 'Строительная дверь...',
    'price': '2000',
    'image': '/vercel.svg'
  },
  {
    'id': 3,
    'category': 'doors',
    'name': '12432',
    'desc': 'Строительная дверь...',
    'price': '2000',
    'image': '/vercel.svg'
  },
  {
    'id': 4,
    'category': 'doors',
    'name': 'И632',
    'desc': 'Строительная дверь...',
    'price': '2000',
    'image': '/vercel.svg'
  },
  {
    'id': 5,
    'category': 'doors',
    'name': 'ИДО253',
    'desc': 'Строительная дверь...',
    'price': '2000',
    'image': '/vercel.svg'
  },
  {
    'id': 6,
    'category': 'doors',
    'name': 'ИДО7544',
    'desc': 'Строительная дверь...',
    'price': '2000',
    'image': '/vercel.svg'
  },
  {
    'id': 7,
    'category': 'furniture',
    'name': 'Петля 2353',
    'desc': 'Петли...',
    'price': '2000',
    'image': '/vercel.svg'
  },
  {
    'id': 8,
    'category': 'furniture',
    'name': 'Петля 5274',
    'desc': 'Петли...',
    'price': '2000',
    'image': '/vercel.svg'
  },
  {
    'id': 9,
    'category': 'furniture',
    'name': 'Замок 353 2353',
    'desc': 'Замок...',
    'price': '2000',
    'image': '/vercel.svg'
  },
]