
// import styles from './app.module.css';

// import NxWelcome from './nx-welcome';

// import { Route, Routes, Link } from 'react-router-dom';

// export function App() {
//   return (
//     <div>
//       <NxWelcome title="frontend" />
//       <br />
//       <hr />
//       <br />
//       <div role="navigation">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/page-2">Page 2</Link>
//           </li>
//         </ul>
//       </div>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div>
//               This is the generated root route.{' '}
//               <Link to="/page-2">Click here for page 2.</Link>
//             </div>
//           }
//         />
//         <Route
//           path="/page-2"
//           element={
//             <div>
//               <Link to="/">Click here to go back to root page.</Link>
//             </div>
//           }
//         />
//       </Routes>

//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { ProductForm } from './components/ProductForm';
import { ProductTable } from './components/ProductTable';

const App = () => {
  const [products, setProducts]: any = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products') 
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = (product: any) => {
    fetch('http://localhost:3000/api/products', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((newProduct) => setProducts([...products, newProduct]));
  };

  const deleteProduct = (id: any) => {
    fetch(`http://localhost:3000/api/products/${id}`, { method: 'DELETE' }) 
      .then(() => setProducts(products.filter((product: any) => product._id !== id)));
  };

  return (
    <div>
      <ProductForm onSubmit={addProduct} />
      <ProductTable products={products} onDelete={deleteProduct} />
    </div>
  );
};

export default App;

