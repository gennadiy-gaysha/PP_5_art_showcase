import React from "react";
import Form from "react-bootstrap/Form";

// Props are passed for current selected technique and the setter function

const OrientationFilter = ({ selectedOrientation, setSelectedOrientation }) => {
  const ORIENTATION_CHOICES = ["Landscape", "Portrait", "Square"];
  return (
    <Form>
      <Form.Group controlId="orientationSelect">
        <Form.Label className="d-none">Orientation</Form.Label>
        <Form.Control
          as="select"
          value={selectedOrientation}
          onChange={(e) => setSelectedOrientation(e.target.value)}
        >
          <option value="">Select orientation</option>
          {ORIENTATION_CHOICES.map((orientation, i) => (
            <option key={i} value={orientation}>
              {orientation}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default OrientationFilter;
