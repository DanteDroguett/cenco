import React from 'react';

export const ProductTable = ({ products, onDelete }: any) => {
    return (
        <div className="container mt-4">
            <h2>Listado Productos</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Valor</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: any) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>${product.price}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => onDelete(product._id)}
                                >
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
