import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { category as cate } from "../api/tmbApi";
import MovieGrid from "../components/MovieGrid";

function Catalog(props) {
  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>

      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} type />
        </div>
      </div>
    </>
  );
}

export default Catalog;
