import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./ManageItem.css";
const ManageItem = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState([]);
  const navigate = useNavigate();
  //to get the laptop details
  const getItem = useRef();
  useEffect(() => {
    fetch(`https://infinite-gorge-79896.herokuapp.com/laptop/${id}`)
      .then((res) => res.json())
      .then((data) => setLaptop(data));
  }, [id]);

  const { _id, name, desc, sold, price, quantity, model, img, suplierName } =
    laptop;

  //to update the stock items
  const updateStock = async (id) => {
    toast("Updating Data");
    const item = parseInt(getItem.current.value);
    const totalQuantity = item + quantity;
    const soldItem = sold;
    if (item) {
      await axios
        .put(`https://infinite-gorge-79896.herokuapp.com/laptop/${id}`, {
          quantity: totalQuantity,
          sold: soldItem,
        })
        .then((res) => {
          window.location.reload();
        })
        .catch((error) => {
          toast(error.message);
        });
    } else {
      toast("Please input a valid number.");
    }
  };
  //to update the sold item
  const deliverItem = (id) => {
    toast("Updaing Data");
    const totalSold = parseInt(sold) + 1;
    const remainQuantity = parseInt(quantity) - 1;

    axios
      .put(`https://infinite-gorge-79896.herokuapp.com/laptop/${id}`, {
        quantity: remainQuantity,
        sold: totalSold,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  //to navigate the manage inventories
  const handleManageInventories = () => {
    navigate("/manage-inventories");
  };
  return (
    <div className="manage-item">
      <div className="bg-grey-light py-8 w-full flex justify-center items-center">
        <div className="bg-white rounded w-2/3 shadow hover:shadow-md duration-4">
          <div className="flex flex-row justify-between uppercase font-bold text-blue-dark border-b p-6">
            <p>{name}</p>
            <div className="cursor-pointer text-grey-dark hover:text-blue duration-4">
              <i className="fas fa-ellipsis-v"></i>
            </div>
          </div>
          <div className="p-6 text-grey-darker text-justify flex flex-col">
            <img src={img} className="w-64 flex self-center shadow-lg mb-6" />
            <p className="font-bold text-sm product_code uppercase mb-2 text-blue-darker">
              Product Code: {_id}
            </p>
            <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
              Model: {model}
            </p>
            <span className="text-grey-darker">{desc}</span>
            <div className="pt-4 info">
              <span className="uppercase bg-yellow-dark text-grey-darkest font-bold p-2 text-xs shadow rounded">
                ${price}
              </span>
              <span className="uppercase bg-yellow-dark text-grey-darkest font-bold p-2 text-xs shadow rounded">
                In stock: {quantity}
              </span>
              <span className="uppercase bg-yellow-dark text-grey-darkest font-bold p-2 text-xs shadow rounded mx-3">
                Sold: {sold}
              </span>
              <span className=" bg-yellow-dark text-grey-darkest font-bold p-2 text-xs shadow rounded mx-3">
                Supplier: {suplierName}
              </span>
            </div>
          </div>
          <div className="p-6 text-grey-darker button text-justify flex sm:flex-col lg:flex-row md:justify-between border-t">
            <button
              type="button"
              onClick={() => deliverItem(_id)}
              className="px-8 py-3 font-semibold border rounded bg-gray-700 text-white mb-3"
            >
              Deliver Now
            </button>
            <div className="flex md:flex-row sm:flex-col restock sm:justify-center sm:items-center">
              <div>
                <input
                  ref={getItem}
                  className="h-12 w-60 border p-5 "
                  type="text"
                  placeholder="Enter the Product Quantity"
                />
              </div>{" "}
              <br />
              <button
                type="button"
                className="px-8 py-3 font-semibold border rounded bg-gray-700 text-white mb-3"
                onClick={() => updateStock(_id)}
              >
                Add In Stock
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="px-8 py-3 mx-auto font-semibold border rounded bg-gray-700 text-white mb-3"
          onClick={handleManageInventories}
        >
          Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default ManageItem;
