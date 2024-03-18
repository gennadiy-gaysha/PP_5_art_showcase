import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PaintingsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Painting from "./Painting";
import NoResults from "../../assets/no_results.png";
import Asset from "../../components/Asset";
import ThemeFilter from "../../components/ThemeFilter";
import TechniqueFilter from "../../components/TechniqueFilter";
import AvailabilityFilter from "../../components/AvailabilityFilter";
import OrientationFilter from "../../components/OrientationFilter";
import PriceFilter from "../../components/PriceFilter";

function PaintingsPage({ message, filter = "" }) {
  const [priceOrder, setPriceOrder] = useState("");
  const [selectedOrientation, setSelectedOrientation] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedTechnique, setSelectedTechnique] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [paintings, setPaintings] = useState({
    results: [],
  });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        let apiUrl = `/paintings/?${filter}`;
        if (selectedTheme) {
          apiUrl += `&theme=${encodeURIComponent(selectedTheme)}`;
        }
        if (selectedTechnique) {
          apiUrl += `&technique=${encodeURIComponent(selectedTechnique)}`;
        }
        if (selectedAvailability) {
          apiUrl += `&availability=${encodeURIComponent(selectedAvailability)}`;
        }
        if (selectedOrientation) {
          apiUrl += `&orientation=${encodeURIComponent(selectedOrientation)}`;
        }
        if (priceOrder === "asc") {
          apiUrl += `&ordering=price`;
        } else if (priceOrder === "desc") {
          apiUrl += `&ordering=-price`;
        }

        const { data } = await axiosReq.get(apiUrl);
        setPaintings(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPaintings();
  }, [
    filter,
    pathname,
    selectedTheme,
    selectedTechnique,
    selectedAvailability,
    selectedOrientation,
    priceOrder,
  ]);

  return (
    <Container className="mt-3">
      {hasLoaded ? (
        <>
          {paintings.results.length ? (
            <>
              <ThemeFilter
                selectedTheme={selectedTheme}
                setSelectedTheme={setSelectedTheme}
              />
              <TechniqueFilter
                selectedTechnique={selectedTechnique}
                setSelectedTechnique={setSelectedTechnique}
              />
              <AvailabilityFilter
                selectedAvailability={selectedAvailability}
                setSelectedAvailability={setSelectedAvailability}
              />
              <OrientationFilter
                selectedOrientation={selectedOrientation}
                setSelectedOrientation={setSelectedOrientation}
              />
              <PriceFilter
                priceOrder={priceOrder}
                setPriceOrder={setPriceOrder}
              />
              <Row>
                {paintings.results.map((painting) => (
                  <Col sm={12} md={6} lg={4} className="mb-3" key={painting.id}>
                    <Painting {...painting} setPaintings={setPaintings} />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <Container className={`${appStyles.Content} ${styles.customWidth}`}>
              <Asset src={NoResults} message={message} />
            </Container>
          )}
        </>
      ) : (
        <Container className={appStyles.Content}>
          <Asset spinner />
        </Container>
      )}
    </Container>
  );
}

export default PaintingsPage;
