import React from "react";

class userprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onRouteChange } = this.props;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80"></main>
      </article>
    );
  }
}

export default userprofile;
