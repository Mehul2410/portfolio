import React from "react";
import BaseLayout from "../../component/layouts/BaseLayout";
import axios from "axios";

import { withRouter } from "next/router";

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    let post = {};
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${query.id}`
      );
      post = res.data;
    } catch (e) {
      console.error(e);
    }

    return { portfolio: post };
  }

  render() {
    const { portfolio } = this.props;
    return (
      <BaseLayout>
        <h1>i am portolio page</h1>
        <h2>{portfolio.title}</h2>
        <h2>body{portfolio.body}</h2>
        <h2>id {portfolio.id}</h2>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
