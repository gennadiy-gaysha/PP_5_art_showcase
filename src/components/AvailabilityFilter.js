import React from "react";
import Form from "react-bootstrap/Form";

// Props are passed for current selected technique and the setter function

const AvailabilityFilter = ({
  selectedAvailability,
  setSelectedAvailability,
}) => {
  const AVAILABILITY_CHOICES = ["In stock", "Reserved", "Sold"];
  return (
    <Form>
      <Form.Group controlId="techniqueSelect">
        <Form.Label className="d-none">Availability</Form.Label>
        <Form.Control
          as="select"
          value={selectedAvailability}
          onChange={(e) => setSelectedAvailability(e.target.value)}
        >
          <option value="">Select availability</option>
          {AVAILABILITY_CHOICES.map((availability, i) => (
            <option key={i} value={availability}>
              {availability}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default AvailabilityFilter;
