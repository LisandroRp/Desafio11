import ProductDao from '../../dao/ProductDao.js'

class ProductController {

    getAll = async (req, res) => {
        ProductDao.getAll().then(products => {
            res.render("./productTable/productsTest", products)
        }).catch(err => {
            res.status(err.error)
            res.json(err)
        })
    }
}
export default new ProductController();
