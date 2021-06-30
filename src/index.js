import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state ={lat:null, long:null, errorMsg: ''};
    // }

    state ={lat:null, long:null, errorMsg: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (postition)=>this.setState({ lat: postition.coords.latitude,long: postition.coords.longitude }),
            (err)=>this.setState({ errorMsg:err.message})
            );
    }

    renderContent(){
        if(!this.state.lat && !this.state.long && this.state.errorMsg)
        return( <div>Error Messgae : {this.state.errorMsg}</div>);

      if(this.state.lat && this.state.long && !this.state.errorMsg)
      return(
          <SeasonDisplay lat={this.state.lat} long={this.state.long}></SeasonDisplay>
          // <div>
          //      Latitude : {this.state.lat} ,
          //      Longitude : {this.state.long}
          // </div>
      );

     return(<Spinner message="Please accept location request"></Spinner>);
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
   }
}

ReactDOM.render(<App></App>,document.querySelector('#root'));

