import React from "react";
import Form from "react-bootstrap/Form";

// Props are passed for current selected technique and the setter function

const PriceFilter = ({ priceOrder, setPriceOrder }) => {
  return (
    <Form>
      <Form.Group controlId="priceOrderSelect">
        <Form.Label className="d-none">Order by Price</Form.Label>
        <Form.Control
          as="select"
          value={priceOrder}
          onChange={(e) => setPriceOrder(e.target.value)}
        >
          <option value="">Order by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default PriceFilter;
