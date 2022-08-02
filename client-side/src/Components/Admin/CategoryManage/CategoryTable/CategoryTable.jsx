import React from "react";
import { Table } from "react-bootstrap";
import SingleCategory from "../SingleCategory/SingleCategory";

const CategoryTable = ({ categories }) => (
  <Table striped bordered hover className="mt-3 rounded">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Type</th>
        <th>Created By</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      {categories.map((item) => [
        <SingleCategory key={item.id} item={item} />,
        item.sub_category.map((subItem) => <SingleCategory key={subItem.id} item={subItem} />),
      ])}
    </tbody>
  </Table>
);

export default CategoryTable;
