const Product = require('../models/Product');

exports.tienda_public = async (req, res) => {
  const products = await Product.find();
  res.render('tienda_public', { products });
};

exports.inicio_sesion = function(req, res) {
  res.render('inicio_sesion', { title: 'Final BackEnd', body: 'Contenido de mi página' });
};

exports.index = async (req, res) => {
  const products = await Product.find();
  res.render('tienda/index', { products });
};

exports.new = (req, res) => {
  res.render('tienda/new');
};

exports.create = async (req, res) => {
  const product = new Product(req.body.product);
  await product.save();
  res.redirect(`/tienda/${product._id}`);
};

exports.show = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('tienda/show', { product });
};

exports.edit = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render('tienda/edit', { product });
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, { ...req.body.product });
  res.redirect(`/tienda/${product._id}`);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect('/tienda/index');
};