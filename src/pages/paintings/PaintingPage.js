import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import PaintingDetail from "./PaintingDetail";

function PaintingPage() {
  const { id } = useParams();
  const [painting, setPainting] = useState({
    results: [],
  });

  useEffect(() => {
    const handleMount = async () => {
      try {
        // Attempt to fetch data using axios
        const [{ data: painting }] = await Promise.all([
          axiosReq.get(`/paintings/${id}`),
        ]);
        // Update state with the fetched painting data
        setPainting({ results: [painting] });
        console.log(painting);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount(); // Execute the async function immediately
  }, [id]);

  return (
    <>
      <Row className="h-100">
        <p>Description for mobile</p>
        {/* {...painting.results[0]} "unpacks" the properties of the first painting object in the array and passes them as individual props to the Painting component */}
        <PaintingDetail
          {...painting.results[0]}
          setPaintings={setPainting}
          paintingPage
        />
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <Container className={appStyles.Content}>Comments</Container>
        </Col>

        <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
          Description for desktop
        </Col>
      </Row>
    </>
  );
}

export default PaintingPage;
