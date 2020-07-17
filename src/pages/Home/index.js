// React Basic and Bootstrap
import React, { Component } from 'react';

// import generic componenets
import Landing from "./landing";
import About from "./About"
import Benefits from "./Benefits"
import Services from "./Services"
import Contact from "./contact"
import Pricing from "./Pricing"


class Index extends Component {

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
      }

       // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
     }

      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }

    render() {

        return (
            <React.Fragment>

                {/* Hero Start */}

                  <Landing />

                  <About />

                  <Benefits />

                  <Services />

                  <Contact />

      













                {/* Counter */}




            </React.Fragment>
        );
    }
}

export default Index;
