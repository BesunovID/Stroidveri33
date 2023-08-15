import {catalogList} from '../catalogList'


export default function handler(req, res) {
    const { category } = req.query;
    const result = catalogList.filter((product) => (
        product.category === category
    ));
    if (!result) {
        return res.status(404).json({
          status: 404,
          message: 'Not Found'
        });
    }
    res.status(200).json(result);
}