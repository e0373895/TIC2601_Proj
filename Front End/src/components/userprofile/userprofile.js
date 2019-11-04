import React from "react";



class userprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        //hits: [],
        keyword: "",
        AlList: []
    };
  }


  componentDidMount(){
      fetch("http://localhost:3000/userProfile",{
        method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        keyword: ""
      })
    })
      .then(response => response.json())
      .then(output => {
        if (output) {
          this.setState({
            AlList: output
          });
          console.log(this.state.AlList);
        }
      });
      // .then(response => response.json())
      // .then(data => this.setState({ hits: data.hits }));
      
  }

  edit() {
    this.setState({
      editing: true
    })
  }

  render() {
    const { onRouteChange } = this.props;
    ///const { hits } = this.state; 
    const { AlList } = this.state;
    return (
      <article className="br1 ba b--black-10 mv4 w-200 w-100-m w-50-2 mw7 shadow-5 center">
        <main className="pa4 black-90">
          <div>
                <table className="table table-bordered table-responsive" style={{ display: "block" }}>
                  
                  <thread style ={{display: "table-header-group"}}>
                    <tr>
                      <th>Name</th>
                      <th>UserName</th>
                      <th>Password</th>
                      <th>Email</th>
                    </tr>
                  </thread>
                  <tbody style={{display: "table-row-group"}}>
                    {this.state.AlList.map((user, i) =>{
                      return(
                        <tr>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.password}</td>
                          <td>{user.email}</td>
                          <td><input
                            onClick={""}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Save"
                          />
                          </td>
                          <td><input
                            onClick={""}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Delete"
                          />
                          </td>
                        </tr>
                      );
                    })}
                    
                  </tbody>
                </table>
            
            <article >
            </article>
          </div>
          
        </main>
      </article>
    );
  }
}

export default userprofile;
