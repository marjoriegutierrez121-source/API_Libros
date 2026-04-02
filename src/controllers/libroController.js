const libroModel = require('../models/libro');

exports.getLibros = async (req, res) => {
  try {
    const libros = await libroModel.getAll();
    res.json(libros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLibro = async (req, res) => {
  try {
    const libro = await libroModel.getById(req.params.id);
    res.json(libro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createLibro = async (req, res) => {
  try {
    const result = await libroModel.create(req.body);
    res.json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLibro = async (req, res) => {
  try {
    await libroModel.update(req.params.id, req.body);
    res.json({ message: 'Libro actualizado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteLibro = async (req, res) => {
  try {
    await libroModel.remove(req.params.id);
    res.json({ message: 'Libro eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};