import {catalogList} from '../../consts/catalogList'

export default function handler(req, res) {
    if (!catalogList) {
        return res.status(404).json({
          status: 404,
          message: 'Not Found'
        });
    }
    res.status(200).json(catalogList);
}