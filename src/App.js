import styles from "./App.module.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";
import "./api/axiosDefaults";
import RegistrationForm from "./pages/auth/RegistrationForm";
import LogInForm from "./pages/auth/LogInForm";
import PaintingCreateForm from "./pages/paintings/PaintingCreateForm";
import PaintingPage from "./pages/paintings/PaintingPage";
import PaintingsPage from "./pages/paintings/PaintingsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PaintingEditForm from "./pages/paintings/PaintingEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ModalAlert from "./components/ModalAlert";
import { useState } from "react";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

import { Redirect } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import About from "./components/About";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div>
      <div className={styles.App}>
        <NavBar onModalShow={() => setModalShow(true)} />
        <ModalAlert show={modalShow} onHide={() => setModalShow(false)} />

        <Container className={styles.Main}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <PaintingsPage message="No results found. Adjust your search options." />
              )}
            />
            <Route
              exact
              path="/favourites"
              render={() => (
                <PaintingsPage
                  message="No results found. Adjust the search keyword or add an artist to Faves."
                  filter={`owner__followed__owner__profile=${profile_id}&`}
                />
              )}
            />
            <Route
              exact
              path="/watchlist"
              render={() => (
                <PaintingsPage
                  message="No results found. Adjust the search keyword or click on the eye under the painting to follow it up."
                  filter={`observations__owner__profile=${profile_id}&ordering=-observations__created_at&`}
                />
              )}
            />
            <Route
              exact
              path="/registration"
              render={() => <RegistrationForm />}
            />
            <Route exact path="/login" render={() => <LogInForm />} />
            <Route exact path="/about" render={() => <About />} />
            <Route
              exact
              path="/paintings/create"
              render={() => <PaintingCreateForm />}
            />
            <Route
              path="/paintings/:id/edit"
              render={() => <PaintingEditForm />}
            />
            <Route
              exact
              path="/paintings/:id"
              render={() => <PaintingPage />}
            />
            <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
            <Route
              exact
              path="/profiles/:id/edit/password"
              render={() => <UserPasswordForm />}
            />
            <Route
              exact
              path="/profiles/:id/edit"
              render={() => <ProfileEditForm />}
            />

            <Route exact path="/404" component={NotFoundPage} />

            <Route render={() => <Redirect to="/404" />} />
          </Switch>
        </Container>
        <Footer />
      </div>
      <NotificationContainer />
    </div>
  );
}

export default App;
