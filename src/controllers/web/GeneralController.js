import ProductTestDao from '../../dao/ProductTestDao.js'
import MessageDao from '../../dao/MessageDao.js'

class GeneralController {

    getAll =  async (req, res) => {
        try {
            let productList = await ProductTestDao.getAll()
            let messages = await MessageDao.getAll()
            res.render('index', { productList, messages })
        }
        catch(err) {
            res.json(err)
        }
    }

}
export default new GeneralController();
