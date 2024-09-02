import React, { useState } from 'react';

export const ProductForm = ({ onSubmit } : any) => {
  const [product, setProduct] = useState({ name: '', description: '', price: '' });

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({ name: '', description: '', price: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={product.name}
            onChange={handleChange}
            placeholder="Nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Desc</label>
          <input
            type="text"
            id="description"
            name="description"
            className="form-control"
            value={product.description}
            onChange={handleChange}
            placeholder="Descripcion"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Valor</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-control"
            value={product.price}
            onChange={handleChange}
            placeholder="Valor"
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Producto</button>
      </form>
    </div>
  );
};
