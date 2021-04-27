import React, { Component } from 'react';
import Navbar from "./Navbar"
import NavbarItem from "./Navbar/NavbarItem"
// import { Flipper } from "react-flip-toolkit"
import DropdownContainer from "./DropdownContainer"
import CompanyDropdown from "./DropdownContents/CompanyDropdown"
import DevelopersDropdown from "./DropdownContents/DevelopersDropdown"
import ProductsDropdown from "./DropdownContents/ProductsDropdown"
// import styled from 'styled-components'

const navbarConfig = [
    { title: "Products", dropdown: ProductsDropdown },
    { title: "Developers", dropdown: DevelopersDropdown },
    { title: "Company", dropdown: CompanyDropdown }
  ];
  


class AnimatedNavbar extends Component {
    state = {
      activeIndices: []
    };
  
    onMouseEnter = i => {
      if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
        return
      this.setState(prevState => ({
        activeIndices: prevState.activeIndices.concat(i)
      }));
    };
  
    onMouseLeave = () => {
      this.setState({
        activeIndices: []
      });
    };
  
    render() {
      let CurrentDropdown;
  
      const currentIndex = this.state.activeIndices[
        this.state.activeIndices.length - 1
      ];
     
      console.log(this.state.activeIndices);
      console.log(this.state.activeIndices.length);
      console.log(currentIndex);
      console.log(this.state.activeIndices[this.state.activeIndices.length]);
  
      if (typeof currentIndex === "number")
        CurrentDropdown = navbarConfig[currentIndex].dropdown;
  
      return (
        <Navbar onMouseLeave={this.onMouseLeave}>
          {navbarConfig.map((n, index) => {
            return (
              <NavbarItem
                title={n.title}
                index={index}
                key={index}
                onMouseEnter={this.onMouseEnter}
              >
                {currentIndex === index && (
                  <DropdownContainer>
                    <CurrentDropdown />
                  </DropdownContainer>
                )}
              </NavbarItem>
            );
          })}
        </Navbar>
      );
    }
  }

  export default AnimatedNavbar 