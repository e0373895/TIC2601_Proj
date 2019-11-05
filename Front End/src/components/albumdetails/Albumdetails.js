import React from "react";

class Albumdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataresults: []
    };
  }

  onMusicClick = event => {
    //Download Codes here
  };

  componentDidMount() {
    console.log(this.props.title);
    fetch("http://localhost:3000/searchalbdetails", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: ""
      })
    })
      .then(response => response.json())
      .then(output => {
        if (output) {
          this.setState({
            dataresults: output
          });
          console.log(this.state.dataresults);
        }
      });
  }

  render() {
    // const imgsrc = "http://localhost:3000/albumimages/" + this.props.imgsrc;
    return (
      <main>
        <div>
          <div className="flex dt pa3 pa4-ns" style={{ textAlign: "left" }}>
            <h2 className="f3 fw4 mv0" style={{ widtYh: "100px" }}>
              {/* {this.props.title} */} HELLO
            </h2>
            <h4 className="f5 fw4 mv0">{/*Artist Will come here*/}</h4>
            <div class="aspect-ratio aspect-ratio--1x1 mb4">
              <img
                // src = image file location here
                alt="IMAGE HERE"
              />
            </div>
            {/* SONG LIST WILL CREATE HERE */}
            {this.state.dataresults.map((Album, i) => {
              return (
                // SOng LISt FORMAT WILL COME HERE
                <div>
                  <div>
                    <p>{i}</p>
                    <a
                    //href="#" /*Download COmmand Link  will be populated here */
                    >
                      SONG NAME
                    </a>
                    <br />>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => {
              this.props.onRouteChange("allist");
            }}
          >
            BACK
          </button>
        </div>
      </main>
    );
  }
}

export default Albumdetails;
