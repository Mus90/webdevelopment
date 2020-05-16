import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .news-pic {
    width: 100%;
    margin-bottom: 2em;
  }
  .person-wrapper {
    margin-bottom: 2em;
  }
`;

const NewsPage = () => {
  return (
    <Styles>
      <Image src="/assets/books-in-library.jpg" fluid className="news-pic" />
    </Styles>
  );
};

export default NewsPage;
