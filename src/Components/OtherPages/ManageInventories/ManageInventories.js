import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useLaptops from "../../../Hooks/useLaptop/useLaptops";
import "./ManageInventories.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ManageInventories = () => {
  const [laptops, setLaptops] = useLaptops();
  const navigate = useNavigate();
  //to delete inventory
  const deleteInventoy = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      axios
        .delete(`https://infinite-gorge-79896.herokuapp.com/laptop/${id}`)
        .then((data) => {
          let remain = laptops.filter((laptop) => id !== laptop._id);
          setLaptops(remain);
          toast("Inventory Removed.");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //to navigate the user
  const addNewInventory = () => {
    navigate("/add-new-inventory");
  };
  return (
    <div className="manage-inventories">
      <div className="text-right mb-8">
        <button
          type="button"
          onClick={addNewInventory}
          className="px-8 py-3 mt-8 mx-auto font-semibold border rounded bg-gray-700 text-white mb-3"
        >
          Add New Inventory
        </button>
      </div>
      <div>
        <table className="table p-4 bg-white shadow rounded-lg">
          <thead>
            <tr>
              <th className="border-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Product Code
              </th>
              <th className="border-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Product Name
              </th>
              <th className="border-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Model
              </th>
              <th className="border-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Stock
              </th>
              <th className="border-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {laptops.map((laptop) => (
              <tr key={laptop._id} className="text-gray-700">
                <td className="border-2 p-4 dark:border-dark-5 product_id">
                  {laptop._id}
                </td>
                <td className="border-2 p-4 dark:border-dark-5">
                  {laptop.name}
                </td>
                <td className="border-2 p-4 dark:border-dark-5">
                  {laptop.model}
                </td>
                <td className="border-2 p-4 dark:border-dark-5">
                  {laptop.quantity}
                </td>
                <td className="border-2 p-4 dark:border-dark-5">
                  <button
                    onClick={() => deleteInventoy(laptop._id)}
                    title="Delete"
                    className="cursor-pointer "
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageInventories;
