import {categories} from '../catalogList'

export default function handler(req, res) {
    if (!categories) {
        return res.status(404).json({
          status: 404,
          message: 'Not Found'
        });
    }
    res.status(200).json(categories);
}