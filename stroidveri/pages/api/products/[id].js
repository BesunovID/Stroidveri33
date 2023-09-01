import {colors, catalogList} from '../catalogList'


export default function handler(req, res) {
    const { id } = req.query;
    const product = catalogList.filter((product) => (
        product.id === id
    ));
    if (!product) {
        return res.status(404).json({
          status: 404,
          message: 'Not Found'
        });
    }
    res.status(200).json({product, colors});
}