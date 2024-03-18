import React from "react";
import Form from "react-bootstrap/Form";

// Props are passed for current selected technique and the setter function

const TechniqueFilter = ({ selectedTechnique, setSelectedTechnique }) => {
  const TECHNIQUE_CHOICES = [
    "Oil Paint",
    "Acrylic Paint",
    "Watercolor",
    "Gouache",
    "Pastel",
    "Charcoal",
    "Graphite",
    "Ink",
    "Mixed Media",
  ];
  return (
    <Form>
      <Form.Group controlId="techniqueSelect">
        <Form.Label className="d-none">Technique</Form.Label>
        <Form.Control
          as="select"
          value={selectedTechnique}
          onChange={(e) => setSelectedTechnique(e.target.value)}
        >
          <option value="">Select a technique</option>
          {TECHNIQUE_CHOICES.map((technique, i) => (
            <option key={i} value={technique}>
              {technique}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default TechniqueFilter;
