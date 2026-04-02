const db = require('../config/db');

const getAll = async () => {
  const [rows] = await db.query('SELECT * FROM libros');
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query('SELECT * FROM libros WHERE id = ?', [id]);
  return rows[0];
};

const create = async (libro) => {
  const [result] = await db.query(
    `INSERT INTO libros 
    (titulo, autor, anio_publicacion, editorial, lugar_publicacion,
     idioma, paginas, descripcion, isbn, categoria, estado, img)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      libro.titulo,
      libro.autor,
      libro.anio_publicacion,
      libro.editorial,
      libro.lugar_publicacion,
      libro.idioma,
      libro.paginas,
      libro.descripcion,
      libro.isbn,
      libro.categoria,
      libro.estado,
      libro.img
    ]
  );
  return result;
};

const update = async (id, libro) => {
  const [result] = await db.query(
    `UPDATE libros SET
    titulo=?, autor=?, anio_publicacion=?, editorial=?, lugar_publicacion=?,
    idioma=?, paginas=?, descripcion=?, isbn=?, categoria=?, estado=?, img=?
    WHERE id=?`,
    [
      libro.titulo,
      libro.autor,
      libro.anio_publicacion,
      libro.editorial,
      libro.lugar_publicacion,
      libro.idioma,
      libro.paginas,
      libro.descripcion,
      libro.isbn,
      libro.categoria,
      libro.estado,
      libro.img,
      id
    ]
  );
  return result;
};

const remove = async (id) => {
  const [result] = await db.query('DELETE FROM libros WHERE id=?', [id]);
  return result;
};

module.exports = { getAll, getById, create, update, remove };