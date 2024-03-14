import styles from "./App.module.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";
import "./api/axiosDefaults";
import RegistrationForm from "./pages/auth/RegistrationForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />

      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Artworks</h1>} />
          <Route
            exact
            path="/registration"
            render={() => <RegistrationForm />}
          />
          <Route exact path="/login" render={() => <h1>Log in</h1>} />
          <Route exact path="/about" render={() => <h1>About</h1>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
