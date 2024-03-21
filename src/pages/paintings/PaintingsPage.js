import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PaintingsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import PaintingList from "./PaintingList";
import NoResults from "../../assets/no_results.png";
import Asset from "../../components/Asset";
import ThemeFilter from "../../components/ThemeFilter";
import TechniqueFilter from "../../components/TechniqueFilter";
import OrientationFilter from "../../components/OrientationFilter";
import PriceFilter from "../../components/PriceFilter";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function PaintingsPage({ message, filter = "" }) {
  // useHistory and useLocation Hooks:
  //These hooks from react-router-dom are used to programmatically navigate and access the current URL's details, respectively.
  const history = useHistory();
  const { search } = useLocation();
  // Creates an instance of URLSearchParams with the current URL's search string that includes ${path}?resetFilters=true - see NavBar,  const resetFiltersAndNavigate!
  const queryParams = new URLSearchParams(search);
  // Looks for the resetFilters query parameter to determine whether the filters should be reset (resetFilters=true)
  const resetFilters = queryParams.get("resetFilters") === "true";
  const resetSearch = queryParams.get("resetSearch") === "true";

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

  // When initializing the query state, we check if there's a value saved in sessionStorage and use it; otherwise, default to an empty string. This ensures that when the component mounts, it retrieves any previously saved search query.
  const [query, setQuery] = useState(
    sessionStorage.getItem("searchQuery") || ""
  );

  // Hook logic to update session storage:
  useEffect(() => {
    sessionStorage.setItem("priceOrder", priceOrder);
    sessionStorage.setItem("selectedOrientation", selectedOrientation);
    sessionStorage.setItem("selectedTechnique", selectedTechnique);
    sessionStorage.setItem("selectedTheme", selectedTheme);
  });

  // Save the query to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("searchQuery", query);
  }, [query]);

  useEffect(() => {
    // Resets filters if URL contains 'resetFilters', another words if the user clicks the link on NavBar
    if (resetFilters) {
      setSelectedTheme("");
      setSelectedTechnique("");
      setSelectedOrientation("");
      setPriceOrder("");
      sessionStorage.clear(); // Clears session storage
      history.push(pathname); // Navigates to the current path without the query parameter, cleaning up the URL
    }
    if (resetSearch) {
      setQuery("");
    }

    const fetchPaintings = async () => {
      try {
        let apiUrl = `/paintings/?${filter}search=${query}`;
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

    const timer = setTimeout(() => {
      fetchPaintings();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [
    filter,
    pathname,
    selectedTheme,
    selectedTechnique,
    selectedOrientation,
    priceOrder,
    resetFilters,
    history,
    query,
    resetSearch,
  ]);

  const paintings_filters = (
    <>
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
    </>
  );

  return (
    <Container className="mt-3">
      <Row>
        <Col xs={12} md={12} lg={4} className="mb-3">
          <i className={`fas fa-search ${styles.SearchIcon}`} />
          <Form
            className={styles.SearchBar}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Group controlId="searchPainting">
              <Form.Label className={styles.labelFont}>
                Search painting:
              </Form.Label>
              <Form.Control
                type="text"
                className="mr-sm-2"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Input title or artist's name here"
              ></Form.Control>
            </Form.Group>
          </Form>
        </Col>
        {paintings_filters}
      </Row>
      {hasLoaded ? (
        <>
          {paintings.results.length ? (
            <InfiniteScroll
              style={{ overflow: "hidden" }}
              children={
                <Row>
                  {paintings.results.map((painting) => (
                    <Col
                      sm={12}
                      md={6}
                      lg={4}
                      className="mb-3"
                      key={painting.id}
                    >
                      <PaintingList {...painting} setPaintings={setPaintings} />
                    </Col>
                  ))}
                </Row>
              }
              dataLength={paintings.results.length}
              loader={<Asset spinner />}
              hasMore={!!paintings.next}
              next={() => {
                fetchMoreData(paintings, setPaintings);
              }}
            />
          ) : (
            <>
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
