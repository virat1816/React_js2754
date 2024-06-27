import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  DELETE_PRODUCT_PENDING,
  GET_PRODUCT_PENDING,
  POST_PRODUCT_PENDING,
  UPDATE_PRODUCT_PENDING,
} from "./redux-saga/admin/action";

function App() {
  const [view, setview] = useState({});

  let dispatch = useDispatch();

  let productName = useRef();
  let price = useRef();
  let desc = useRef();

  // Fetch data from the store
  let result = useSelector((state) => state.adminReducer);

  function addProduct() {
    // Get the product details from the input refs
    let product = {
      productName: productName.current.value,
      price: price.current.value,
      desc: desc.current.value,
    };

    // Check if the product with the same name already exists
    const isDuplicate = result.product.some(
      (existingProduct) => existingProduct.productName === product.productName
    );

    // If the product is a duplicate, show alert and stop execution
    if (isDuplicate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product with the same name already exists!",
      });
      return;
    }

    // Dispatch the action to add the product
    dispatch({ type: POST_PRODUCT_PENDING, payload: product });

    Swal.fire({
      title: "Good job!",
      text: "Product added successfully",
      icon: "success",
    });
  }

  // Delete product
  function deleteProduct(id) {
    Swal.fire({
      title: "Are you sure delete this product?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: DELETE_PRODUCT_PENDING, payload: id });
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    });
  }

  // View data
  function viewData(product) {
    setview(product);
  }

  function handle(e) {
    setview({ ...view, [e.target.name]: e.target.value });
  }

  function updateProduct() {
    dispatch({ type: UPDATE_PRODUCT_PENDING, payload: view });
    Swal.fire({
      title: "Updated!",
      text: "Product updated successfully",
      icon: "success",
    });
  }

  useEffect(() => {
    // Fetch products
    dispatch({ type: GET_PRODUCT_PENDING });
  }, [dispatch]);

  if (result.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <input type="text" ref={productName} placeholder="Product Name" />
      <input type="number" ref={price} placeholder="Price" />
      <input type="text" ref={desc} placeholder="Description" />
      <button onClick={addProduct}>Submit</button>
      <br />
      <br />
      <br />

      <input
        type="text"
        name="productName"
        value={view.productName || ""}
        onChange={handle}
        placeholder="Product Name"
      />
      <input
        type="number"
        name="price"
        value={view.price || ""}
        onChange={handle}
        placeholder="Price"
      />
      <input
        type="text"
        name="desc"
        value={view.desc || ""}
        onChange={handle}
        placeholder="Description"
      />
      <button onClick={updateProduct}>Update</button>
      {result.product.map((val, index) => (
        <div key={index}>
          <h1>{val.id}</h1>
          <h2>{val.productName}</h2>
          <h3>{val.price}</h3>
          <button onClick={() => deleteProduct(val.id)}>Delete</button>
          <button onClick={() => viewData(val)}>View</button>
        </div>
      ))}
    </div>
  );
}

export default App;
