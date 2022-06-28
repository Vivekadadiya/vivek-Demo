import React from "react";
import { selectProduct, edit, Removedetails, remove } from "../store/reducer/formReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Table() {
  const details = useSelector(selectProduct);
  const dispatch = useDispatch();
  const removeitemindex = useSelector(remove);

  const editBtn = (i) => {
    let a = i;
    dispatch(
      edit(a)
    );
  };
  const Removebtn = (i) => {
    dispatch(
      Removedetails(i)
    )
  }
  return (
    <>
      <div className="container">
        <div className="row text-end">
          <div className="col-12">
            <Link to="/">
              <input type="button" className="btn btn-warning" value="form" />
            </Link>
          </div>
        </div>
      </div>

      <table class="table table-warning">
        <thead>
          <tr>
            <th scope="col">index</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">File</th>
            <th scope="col">Dropdown value</th>
            <th scope="col">Edit</th>

          </tr>
        </thead>
        <tbody>
          {details.map((item, index) => {
            return (
              <>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.Id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Price}</td>
                  <td><img src={item.File} height="100"></img></td>
                  <td>{item.DropValue}</td>
                  <td>{
                    <Link to="/">
                      <button
                        className="btn btn-primary"
                        onClick={() => editBtn(item.id)}
                      >
                        Edit
                      </button></Link>}</td>
                  <td><button onClick={() => Removebtn(item.id)}>Delete</button></td>

                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}