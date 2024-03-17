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

function PaintingsPage({ message, filter = "" }) {
  const [paintings, setPaintings] = useState({
    results: [],
  });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const { data } = await axiosReq.get(`/paintings/?${filter}`);
        setPaintings(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPaintings();
  }, [filter, pathname]);

  return (
    <Container className="mt-3">
      {hasLoaded ? (
        <>
          {paintings.results.length ? (
            <Row>
              {paintings.results.map((painting) => (
                <Col sm={12} md={6} lg={4} className="mb-3" key={painting.id}>
                  <Painting {...painting} setPaintings={setPaintings} />
                </Col>
              ))}
            </Row>
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
