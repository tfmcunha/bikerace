import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Pagination from "react-js-pagination";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./gallery.css";

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoArray: [],   
      activePage: 1,
      ipp: 40   
    };
  }  

  componentDidMount() {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=04a20a2b3cc6df93823ddc27d5e99ef7&tags=bikerace%2C+BoulderBikeTour&format=json&nojsoncallback=1&api_sig=6652e8374297ffb90a9b60a388e615d0')
      .then(response => response.json())
      .then(myjson => {
          this.setState({
            photoArray: myjson.photos.photo
          })
        })
    
  }
  
  handlePageChange = pageNumber => this.setState({ activePage: pageNumber });

  render() {
    let photoArray = this.state.photoArray; 
    
    let ipp = this.state.ipp
    let lastPhoto = this.state.activePage * ipp;
    let firstPhoto = lastPhoto - ipp;
    let photosShown = this.state.photoArray.slice(
      firstPhoto,
      lastPhoto
    );
    return (
          <Row>
            <TransitionGroup className="d-flex align-content-start flex-wrap">
              {photosShown.map(photo => {          
                var srcPath = 'https://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg';
                  return ( 
                      <CSSTransition  
                        key={photo.id}
                        timeout={1000}
                        classNames={"fade"}
                      > 

                        <Col xs={12} sm={4} md={3} key={photo.id}>          
                          <Image src={srcPath} thumbnail />                
                        </Col>    
                      </CSSTransition>    
                  )
                })
              }
            </TransitionGroup>
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={ipp}
                totalItemsCount={photoArray.length}            
                onChange={this.handlePageChange}
                onClick={window.scrollTo(0,0)}
                hideFirstLastPages={true}
                prevPageText={"Previous"}
                nextPageText={"Next"}
              />
            

          </Row>
         
    );
  }
}

export default Gallery;