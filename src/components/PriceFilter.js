import React from "react";
import Form from "react-bootstrap/Form";

// Props are passed for current selected technique and the setter function

const PriceFilter = ({ priceOrder, setPriceOrder, labelFont }) => {
  return (
    <Form>
      <Form.Group controlId="priceOrderSelect">
        <Form.Label className={labelFont}>Price:</Form.Label>
        <Form.Control
          as="select"
          value={priceOrder}
          onChange={(e) => setPriceOrder(e.target.value)}
        >
          <option value="">--------</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default PriceFilter;
