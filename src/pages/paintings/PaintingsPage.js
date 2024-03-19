import React, { useEffect, useState } from "react";

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
import OrientationFilter from "../../components/OrientationFilter";
import PriceFilter from "../../components/PriceFilter";

function PaintingsPage({ message, filter = "" }) {
  const [priceOrder, setPriceOrder] = useState(
    sessionStorage.getItem("priceOrder") || ""
  );
  const [selectedOrientation, setSelectedOrientation] = useState(
    sessionStorage.getItem("selectedOrientation") || ""
  );
  const [selectedTechnique, setSelectedTechnique] = useState(
    sessionStorage.getItem("selectedTechnique") || ""
  );
  const [selectedTheme, setSelectedTheme] = useState(
    sessionStorage.getItem("selectedTheme") || ""
  );
  const [paintings, setPaintings] = useState({
    results: [],
  });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    sessionStorage.setItem("priceOrder", priceOrder);
    sessionStorage.setItem("selectedOrientation", selectedOrientation);
    sessionStorage.setItem("selectedTechnique", selectedTechnique);
    sessionStorage.setItem("selectedTheme", selectedTheme);
  });

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
    selectedOrientation,
    priceOrder,
  ]);

  const paintings_filters = (
    <Row>
      <Col xs={12} md={6} lg={2} className="mb-3">
        <ThemeFilter
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          labelFont={styles.labelFont}
        />
      </Col>
      <Col xs={12} md={6} lg={2} className="mb-3">
        <TechniqueFilter
          selectedTechnique={selectedTechnique}
          setSelectedTechnique={setSelectedTechnique}
          labelFont={styles.labelFont}
        />
      </Col>
      <Col xs={12} md={6} lg={2} className="mb-3">
        <OrientationFilter
          selectedOrientation={selectedOrientation}
          setSelectedOrientation={setSelectedOrientation}
          labelFont={styles.labelFont}
        />
      </Col>
      <Col xs={12} md={6} lg={2} className="mb-3">
        <PriceFilter
          priceOrder={priceOrder}
          setPriceOrder={setPriceOrder}
          labelFont={styles.labelFont}
        />
      </Col>
    </Row>
  );

  return (
    <Container className="mt-3">
      {hasLoaded ? (
        <>
          {paintings.results.length ? (
            <>
              {paintings_filters}
              <Row>
                {paintings.results.map((painting) => (
                  <Col sm={12} md={6} lg={4} className="mb-3" key={painting.id}>
                    <Painting {...painting} setPaintings={setPaintings} />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <>
              {paintings_filters}
              <Container
                className={`${appStyles.Content} ${styles.customWidth}`}
              >
                <Asset src={NoResults} message={message} />
              </Container>
            </>
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
