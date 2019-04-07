import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Masonry from 'react-masonry-component';
import Pagination from "react-js-pagination";
import "./css/gallery.css";

class Gallery extends Component {

  constructor(props) {    
    super(props);
    this.state = {      
      photoArray: [],   
      activePage: 1,           
      ipp: 40,
      totalPhotos: "",
      loaded: false
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }  

  fetchPhotos() {
    const apikey = process.env.REACT_APP_FLICKR_API_KEY;
     fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=bikerace%2C+BoulderBikeTour&per_page=${this.state.ipp}&page=${this.state.activePage}&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(myjson => {
          this.setState({
            photoArray: myjson.photos.photo,
            totalPhotos: myjson.photos.total,
            loaded: true
          })
        })
  }

  componentDidMount() { 
    this.fetchPhotos();
  }
  
  handlePageChange(pageNumber) {        
    this.setState({activePage: pageNumber, loaded: false}, () => {this.fetchPhotos()})            
  }

  render() {    
    let photoArray = this.state.photoArray;
    return (
          <Row>
            <Col>
              <h1>#BOULDERBIKETOUR</h1>
            {this.state.loaded === true ?
              
              <Masonry>
                {photoArray.map(photo => {          
                  var srcPath = 'https://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg';
                    return ( 
                          
                            <div class="w-25"><a href={srcPath}><Image src={srcPath} thumbnail/></a></div>                
                         
                    )
                  })
                }
              </Masonry>            
            :
              <div class="w-50 mx-auto" >
                <Image src="/images/loading.jpg" fluid />
              </div>
            }
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.ipp}
                totalItemsCount={this.state.totalPhotos}            
                onChange={this.handlePageChange}
                onClick={window.scrollTo(0,0)}
                hideFirstLastPages={true}
                prevPageText={"Previous"}
                nextPageText={"Next"}
              />
            
            </Col>
          </Row>         
    );
  }
}

export default Gallery;