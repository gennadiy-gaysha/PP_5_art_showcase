import React from "react";
import Form from "react-bootstrap/Form";

// Props are passed for current selected theme and the setter function

const ThemeFilter = ({ selectedTheme, setSelectedTheme, labelFont }) => {
  const THEME_CHOICES = [
    "Portrait",
    "Still Life",
    "Landscape",
    "Seascape",
    "Abstract",
    "Figurative",
    "Genre",
    "Animal",
  ];

  return (
    <Form>
      <Form.Group controlId="themeSelect">
        <Form.Label className={labelFont}>Theme:</Form.Label>
        <Form.Control
          as="select"
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          <option value="">--------</option>
          {THEME_CHOICES.map((theme, i) => (
            <option key={i} value={theme}>
              {theme}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default ThemeFilter;
