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

function PaintingsPage({ message, filter = "" }) {
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
        const { data } = await axiosReq.get(apiUrl);
        setPaintings(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPaintings();
  }, [filter, pathname, selectedTheme, selectedTechnique]);

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
