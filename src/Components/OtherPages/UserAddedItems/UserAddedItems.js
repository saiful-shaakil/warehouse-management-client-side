import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const UserAddedItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    const email = user?.email;
    fetch(`https://infinite-gorge-79896.herokuapp.com/my-items?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [user]);

  //to delete item
  const deleteInventoy = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      axios
        .delete(`https://infinite-gorge-79896.herokuapp.com/laptop/${id}`)
        .then((data) => {
          const remain = myItems.filter((laptop) => id !== laptop._id);
          setMyItems(remain);
        })
        .catch((error) => {
          toast(error.message);
        });
    }
  };
  return (
    <div className="manage-inventories">
      <div className="text-center">
        <p className="my-6">Your Item: {myItems.length}</p>
      </div>
      {myItems.length > 0 ? (
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
              {myItems.map((laptop) => (
                <tr key={laptop._id} className="text-gray-700">
                  <td className="border-2 p-4 dark:border-dark-5">
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
      ) : (
        <>
          <p className="text-center">
            Sorry,You didn't add any item.{" "}
            <Link
              to="/add-new-inventory"
              className="px-8 py-3 cursor-pointer mx-auto font-semibold border rounded bg-gray-700 text-white mb-3"
              type="submit"
            >
              {" "}
              Add Now{" "}
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default UserAddedItems;
