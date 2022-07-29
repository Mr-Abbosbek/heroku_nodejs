const dbConn = require("../../config/dbconfig");

const Products = function (product) {
  this.id = product.id;
  this.login = product.login;
  this.password = product.password;
  this.role = product.role;
};
Products.getProducts = (result) => {
  dbConn.query("SELECT * FROM `employes`", (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Products.getProductsId = (id, result) => {
  dbConn.query("select * from `employes` where id=?", id, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Products.addProducts = (productData, result) => {
  dbConn.query(
    "Insert into `employes` set ?",
    productData,
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Products.updateProducts = (id, productData, result) => {
  dbConn.query(
    "UPDATE `employes` SET `id`=?, `login`=?, `password`=?, `role`=? WHERE id=?",
    [
      productData.id,
      productData.login,
      productData.password,
      productData.role,
      id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Products.deleteProducts = (id, result) => {
  dbConn.query("delete from `employes` where id=?", id, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Products;
