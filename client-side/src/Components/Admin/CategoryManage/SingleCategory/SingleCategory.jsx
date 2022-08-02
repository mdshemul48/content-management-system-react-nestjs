import React from "react";
import moment from "moment";
import { Button } from "react-bootstrap";

const SingleCategory = ({ item }) => (
  <tr>
    <td>{item.id}</td>
    <td>
      {item.type === "subcategory" && "── "}
      {item.name}
    </td>
    <td>{item.type}</td>
    <td>{item.createdBy}</td>
    <td>{moment(item.created_at).format("MMMM Do YYYY, h:mm:ss A")}</td>
    <td>
      <div>
        <Button variant="warning" className="me-1">
          Update
        </Button>
        <Button variant="danger">Delete</Button>
      </div>
    </td>
  </tr>
);
export default SingleCategory;
