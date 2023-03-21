import React,{lazy} from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Routes, Route } from "react-router-dom";

const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const GoMain = lazy(() => import('./GoMain'));
export function App() {

    return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="*" element={<GoMain></GoMain>} />
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    );

} 
