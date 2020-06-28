import React from "react";

import Layout from "../components/Layout";
import { circle } from "../templates/circle404";

const NotFoundPage = () => (
  <Layout>
    <div dangerouslySetInnerHTML={{
      __html: circle
    }}/>
  </Layout>
);

export default NotFoundPage;
