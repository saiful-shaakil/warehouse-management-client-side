import React from "react";
import "./AddNewInventory.css";

import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

//to add new inventory
const AddNewInventory = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.name !== "" && data.model !== "" && data.quantity !== "") {
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
          email: user?.email,
        })
        .then((data) => {
          toast("New Inventory Added.");
          window.location.reload();
        });
    } else {
      toast("Please fill the form first.");
    }
  };
  return (
    <div className="my-20 mx-auto">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold mt-6">Add New Inventory</h1>
        <h2></h2>
        <h3 className="mb-6"></h3>
      </div>
      <div className="form">
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
          <input
            type="number"
            value="0"
            placeholder="Enter Product Sold Quantity"
            className="border-2 hidden md:w-1/2 my-2 h-9"
            {...register("sold")}
          />{" "}
          <br />
          <div className="flex items-center">
            <input
              className="px-8 py-3 cursor-pointer mx-auto font-semibold border rounded bg-gray-700 text-white mb-3"
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewInventory;
