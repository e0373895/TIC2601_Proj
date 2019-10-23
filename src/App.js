import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  render(){
      return (
      <div className="App">
          {/* Start: Header Dark */}
          <div>
              <div className="header-dark" style= {{height : 680}}>
                  <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                      <div className="container"><a className="navbar-brand" href="#">Music Store</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                          <div className="collapse navbar-collapse"
                              id="navcol-1">
                              <ul className="nav navbar-nav">
                                  <li className="nav-item" role="presentation"><a className="nav-link" href="#">Albums</a></li>
                              </ul>
                              <form className="form-inline mr-auto" target="_self">
                                  <div className="form-group"><label for="search-field"><i className="fa fa-search"></i></label><input className="form-control search-field" type="search" id="search-field" name="search" /></div>
                              </form><span className="navbar-text"><a className="login" href="#">Log In</a></span><a className="btn btn-light action-button" role="button" href="#">Sign Up</a></div>
                      </div>
                  </nav>
                  <div className="container hero">
                      <div className="row">
                          <div className="col-md-8 offset-md-2">
                              <h1 className="text-center">New Releases</h1>
                              <div className="carousel slide" data-ride="carousel" id="carousel-1">
                                  <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active"><img className="w-100 d-block" src={'img/d7f9b43755bdb0272b77c37bab7314bf0c46b84e.jpeg'} width="50px" height="500px" style={{width: 250 ,height: 400}} /></div>
                                      <div className="carousel-item"><img className="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" /></div>
                                      <div className="carousel-item"><img className="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" /></div>
                                  </div>
                                  <div>
                                      {/* <!-- Start: Previous --> */}
                                      <a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></a>
                                      {/* <!-- End: Previous --> */}
                                      {/* <!-- Start: Next --> */}
                                      <a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></a>
                                      {/* <!-- End: Next --> */}
                                  </div>
                                  <ol className="carousel-indicators">
                                      <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                                      <li data-target="#carousel-1" data-slide-to="1"></li>
                                      <li data-target="#carousel-1" data-slide-to="2"></li>
                                  </ol>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- End: Header Dark -->. */}
          <main>
              <div>
                    <h3 className="text-left" style= {{fontsize: 13, lineheight: 39, backgroundcolor: 'rgba(170,170,170,0)' , margin: 0, margintop: 20, marginbottom: 10, marginleft: 30}}>Best Sellers - Monthly</h3>
              </div>
              <div>
                  {/* <!-- Start: Animated Pretty Product List (v1.2) --> */}
                  <div className="container">
                      {/* <!-- Start: Animated Pretty Product List --> */}
                      <div className="row product-list dev">
                          {/* <!-- Start: Slide Top Left --> */}
                          <div className="col-sm-6 col-md-4 product-item animation-element slide-top-left" data-bs-hover-animate="pulse">
                              <div className="product-container">
                                  <div className="row">
                                      <div className="col-md-12"><a className="product-image" href="#"><img src="img/Hollywood%20Bleeding.png"/></a></div>
                                  </div>
                                  <div className="row">
                                      <div className="col-8">
                                          <h2><a href="#">Hollywood Bleeding</a></h2>
                                      </div>
                                      <div className="col-4"><a className="small-text" href="#">compare </a></div>
                                  </div>
                                  <div className="product-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i><a className="small-text" href="#">10 reviews</a></div>
                                  <div className="row">
                                      <div className="col-12">
                                          <div className="row">
                                              <div className="col-6"><button className="btn btn-light" type="button">Buy Now!</button></div>
                                              <div className="col-6">
                                                  <p className="product-price">$16.99</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                               {/* End: Slide Top Left */}
                               {/* Start: Rotate Clockwise */}
                          <div className="col-sm-6 col-md-4 product-item animation-element slide-rotate-clockwise" data-bs-hover-animate="pulse">
                              <div className="product-container">
                                  <div className="row">
                                      <div className="col-md-12"><a className="product-image" href="#"><img src="img/220px-Thank_U,_Next_album_cover.png"/></a></div>
                                  </div>
                                  <div className="row">
                                      <div className="col-8">
                                          <h2><a href="#">Thank you Next</a></h2>
                                      </div>
                                      <div className="col-4"><a className="small-text" href="#">compare </a></div>
                                  </div>
                                  <div className="product-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i><a className="small-text" href="#">13 reviews</a></div>
                                  <div className="row">
                                      <div className="col-12">
                                          <div className="row">
                                              <div className="col-6"><button className="btn btn-light" type="button">Buy Now!</button></div>
                                              <div className="col-6">
                                                  <p className="product-price">$16.99</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                               {/* End: Rotate Clockwise
                               Start: Slide Top Right */}
                          <div className="col-sm-6 col-md-4 product-item animation-element slide-top-right" data-bs-hover-animate="pulse">
                              <div className="product-container">
                                  <div className="row">
                                      <div className="col-md-12"><a className="product-image" href="#"><img src="img/d7f9b43755bdb0272b77c37bab7314bf0c46b84e.jpeg"/></a></div>
                                  </div>
                                  <div className="row">
                                      <div className="col-8">
                                          <h2><a href="#">Don't Smile at me</a></h2>
                                      </div>
                                      <div className="col-4"><a className="small-text" href="#">compare </a></div>
                                  </div>
                                  <div className="product-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i><a className="small-text" href="#">82 reviews</a></div>
                                  <div className="row">
                                      <div className="col-12">
                                          <div className="row">
                                              <div className="col-6"><button className="btn btn-light" type="button">Buy Now!</button></div>
                                              <div className="col-6">
                                                  <p className="product-price">$16.99</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                               {/* End: Slide Top Right
                               Start: Fade Slow */}
                          <div className="col-sm-6 col-md-4 product-item animation-element slide-fade-slow" data-bs-hover-animate="pulse">
                              <div className="product-container">
                                  <div className="row">
                                      <div className="col-md-12"><a className="product-image" href="#"><img src="img/when-we-all-fall-asleep-new-album-release-stream-billie.jpg"/></a></div>
                                  </div>
                                  <div className="row">
                                      <div className="col-8">
                                          <h2><a href="#">When we all fall asleep where do we go</a></h2>
                                      </div>
                                      <div className="col-4"><a className="small-text" href="#">compare </a></div>
                                  </div>
                                  <div className="product-rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i><a className="small-text" href="#">82 reviews</a></div>
                                  <div className="row">
                                      <div className="col-12">
                                          <div className="row">
                                              <div className="col-6"><button className="btn btn-light" type="button">Buy Now!</button></div>
                                              <div className="col-6">
                                                  <p className="product-price">$16.99</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                            {/* End: Fade Slow */}
                      </div>
                      {/* End: Animated Pretty Product List */}
                  </div>
                  {/* End: Animated Pretty Product List (v1.2) */}
              </div>
          </main>
          <footer></footer>
      </div>
    );
  }
}

export default App;
