/************************
 * Made by [MR Ferry™]  *
 * on April 2020        *
 ************************/

import React, { Component } from "react";
import { FacebookProvider, Comments } from "react-facebook";

export default class Comment extends Component {
  render() {
    return (
      <FacebookProvider appId="wrtie_your_fb_id_here">
        <Comments href={this.props.href} orderBy="reverse_time" mobile={true} width="100%" colorScheme="dark" />
      </FacebookProvider>
    );
  }
}
