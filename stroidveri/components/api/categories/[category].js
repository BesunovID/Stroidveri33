import {categories, catalogList, colors} from '../../consts/catalogList'


export default function handler(req, res) {
    const { category } = req.query;

    const products = catalogList.filter((product) => (
        product.category === category
    ));
    const categoryHeader = categories.filter((e) => (
        e.name === category
    ))[0].namePage;

    if (!products) {
        return res.status(404).json({
          status: 404,
          message: 'Not Found'
        });
    }
    res.status(200).json({products, categoryHeader, colors});
}