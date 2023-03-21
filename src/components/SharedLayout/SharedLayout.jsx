import { Container, Header, MainLink } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import MainSceleton from "../MainSceleton";
export function SharedLayout() {
    return (
      <Container>
      <Header>
        <nav>
          <MainLink to="/">Home</MainLink>
          <MainLink to="/movies">Movies</MainLink>
        </nav>
      </Header>
      <Suspense fallback={<MainSceleton></MainSceleton>}>
        <Outlet />
      </Suspense>
    </Container>
    );
}