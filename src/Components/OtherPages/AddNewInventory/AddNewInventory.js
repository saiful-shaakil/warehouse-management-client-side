import React from "react";
import "./AddNewInventory.css";

import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

//

const AddNewInventory = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://infinite-gorge-79896.herokuapp.com/laptopCollection", {
        name: data.name,
        desc: data.desc,
        model: data.model,
        suplierName: data.suplierName,
        sold: parseInt(data.sold),
        price: parseInt(data.price),
        quantity: parseInt(data.quantity),
        img: data.img,
      })
      .then((data) => {
        toast("New Inventory Added.");
      });
  };
  return (
    <div className="my-20 mx-auto w-full">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter Product Name"
            className="border-2 md:w-1/2 my-2 h-9"
            {...register("name")}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Product Model"
            className="border-2 md:w-1/2 my-2 h-9"
            {...register("model")}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Product Supplier Name"
            className="border-2 md:w-1/2 my-2 h-9"
            {...register("suplierName")}
          />{" "}
          <br />
          <input
            type="number"
            placeholder="Enter Product Price"
            className="border-2 md:w-1/2 my-2 h-9"
            {...register("price")}
          />{" "}
          <br />
          <input
            type="number"
            placeholder="Enter Product Quantity"
            className="border-2 md:w-1/2 my-2 h-9"
            {...register("quantity")}
          />{" "}
          <br />
          <input
            type="number"
            value="0"
            placeholder="Enter Product Sold Quantity"
            className="border-2 md:w-1/2 my-2 h-9"
            {...register("sold")}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Product Description"
            className="border-2 md:w-1/2 my-2 h-9"
            {...register("desc")}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Product Image Link"
            className="border-2 md:w-1/2 my-2 h-9"
            {...register("img")}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddNewInventory;
