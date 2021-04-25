import React from 'react'
import styled from 'styled-components'
import { CustomButton, TopBanner } from '../../Components'
import GoogleMapReact from 'google-map-react';
import { ReactComponent as House } from "../../images/house.svg"; 
import { ReactComponent as Mail } from "../../images/mail.svg"; 
import { ReactComponent as Telephone } from "../../images/telephone.svg"; 

class ContactPage extends React.Component { 

    
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      }

      render() {
          return (
              <Wrapper>
                  <TopBanner>Contact Us</TopBanner>  
                  <div className="map-container">
                        <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        >
                        </GoogleMapReact>
                  </div> 
                  <div className="contact-container">
                      <form>
                          <h1>Get in Touch</h1> 
                          <textarea  placeholder="Enter Message"></textarea> 
                          <div className="personal-info">
                            <input type="text" placeholder="Enter you name"/> 
                            <input type="email" placeholder="Email"/> 
                          </div>
                          <input type="text" placeholder="Enter Subject" className="subject" />  <br/> <br/>
                          <CustomButton search>SEND</CustomButton>
                      </form>
                      <div className="contact-info">
                            <div className="ctn">
                                 <House className="icon" />
                                 <div>
                                    <h5>Tunisia, Tunis.</h5>
                                    <span>Farhet hached</span>
                                 </div>
                            </div>
                            <div className="ctn">
                                 <Telephone className="icon" />
                                 <div>
                                    <h5>+216 92 183 047 </h5>
                                    <span>Mon to Fri 9am toh5pm</span>
                                 </div>
                            </div>
                            <div className="ctn">
                                 <Mail className="icon"  />
                                 <div>
                                    <h5>support@cake.com</h5>
                                    <span>Send us your query anytime!</span>
                                 </div>
                            </div>
                      </div>
                  </div>
              </Wrapper>
          )
      }
}

export default ContactPage


const Wrapper = styled.div`
    min-height: 100vh; 

    .map-container {
        width: 80%; 
        height: 50vh; 
        margin: 0 8rem;
    }

    .contact-container {
        margin: 3rem 8.5rem; 
        display:flex; 
        align-items: center; 
        flex-wrap: wrap; 
    }

    form {
        width: 60%;
        margin-right: 5rem ;
        h1 {
            color: #1d1d1d; 
            font-family: "Quicksand", sans-serif;

        }
        textarea {
            width: 100%; 
            height: 30vh; 
            border: 1px solid #e7e7e7;  
            padding: 0.5rem; 
            outline: none; 
            margin-top: 1rem; 
        }

        input {
            width: 100%; 
            height: 3rem; 
            margin: 1.5rem 0; 
            border: 1px solid #e7e7e7;
            padding: 0 0.5rem; 
            outline: none; 
        }

        .personal-info {
            display: grid; 
            grid-template-columns: repeat(2, 1fr);  
            column-gap: 2rem; 
        }
    } 

    .ctn {
        margin: 2rem;  
        display: flex; 
        align-items: center; 
        color: #414040;;

        .icon {
            width: 2rem; 
            fill: #414040;
            margin-right: 1rem; 
        }
    }
`