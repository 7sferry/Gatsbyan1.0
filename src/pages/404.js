import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found Broo" />
    <h1>Page Not Found</h1>
    <p>
      <i>Oops! Page you want to access just not available right now. Sorry <span role="img" aria-label="cry">😥</span></i>
    </p>
  </Layout>
);

export default NotFoundPage;
