
const router = require("express").Router();
const productController = require("../controllers/productController")
const userController = require("../controllers/userController")



router.post("/products", productController.product_create);
router.post("/login", userController.user_create);
router.get("/products", productController.product_all);
router.get("/login", userController.user_all);
router.get("/products/:productId", productController.product_details);
router.get("/login/:productId", userController.user_details);
router.put("/products/:productId", productController.product_update);
router.put("/login/:productId", userController.user_update);
router.delete("/products/:productId",productController.product_delete);
router.delete("/login/:productId", userController.user_delete);

module.exports = router;