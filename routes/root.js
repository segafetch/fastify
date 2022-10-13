'use strict'
const productController = require("../src/controller/product.controller");
module.exports = async function (fastify, opts) {

  fastify.get('/:id', productController.get)
  fastify.get('/', productController.get)
  fastify.put('/', productController.get)
  fastify.post('/', productController.get)
  fastify.delete('/:id', productController.get)

}


