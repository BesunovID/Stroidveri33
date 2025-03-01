
export default function handler(req, res) {
    res.status(200).json(posts)
}

export const posts = [
    {
        'id':  '1',
        'head': '',
        'image': '',
        'desc': 'Компания ООО "СтройДвери" занимается изготовлением деревянных дверей \
                более 5 лет. Мы выпускаем качественную продукцию\
                и доставляем ее по всей территории РФ. \
                Работаем напрямую со строительными организациями, \
                предоставляя хорошие скидки на оптовые заказы. \
                Наше производство способно выпускать несколько тысяч дверных блоков. \
                Транспортировка продукции осуществляется через транспортную компанию\
                 или самовывозом.',
    },
    {
        'id':  '2',
        'head': 'Цена',
        'image': '/about-img/price.png',
        'desc': 'Мы работаем без посредников, \
        что позволяет нам предлагать вам двери по самой выгодной цене. \
        Благодаря собственному производству и оптимизации процессов, \
        мы снизили затраты и передаем эту выгоду вам - нашим клиентам.',
    },
    {
        'id':  '3',
        'head': 'Надежность',
        'image': '/about-img/reliability.png',
        'desc': 'Мы предлагаем только высококачественные двери,\
         которые изготовлены из прочных материалов, обеспечивающих длительный срок службы.\
         Наша продукция соответствует самым строгим строительным стандартам,\
          чтобы вы могли быть уверены в ее надежности.',
    },
    {
        'id':  '4',
        'head': 'Безопасность',
        'image': '/about-img/guard.png',
        'desc': 'Наша продукция может поставляться со встроенными механизмами защиты,\
         предотвращающие несанкционированный доступ и вандализм. \
         Они оснащены надежными замками и усиленными конструкциями, \
         чтобы обеспечить защиту вашего объекта от кражи и повреждений.',
    },
    {
        'id':  '5',
        'head': 'Гибкость и адаптивность',
        'image': '/about-img/adaptive.png',
        'desc': 'Временные строительные двери легко устанавливаются и демонтируются,\
         что делает их идеальным решением для проектов различного масштаба. \
         Мы предлагаем широкий выбор размеров и конфигураций дверей, \
         чтобы точно соответствовать вашим потребностям.'
    },
]