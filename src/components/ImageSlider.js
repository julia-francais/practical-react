import React from 'react';

export default class ImageSlider extends React.Component {
    state = {
        images: [
            'https://www.gettyimages.fr/gi-resources/images/500px/983794168.jpg',
            'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1188621876.jpg',
            'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
            'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
        ],
        index: 0
    };

    handleNext = () => {
        console.log(this.state);
        this.setState({
            index: this.state.index +1
        })
    };

    render(){
        return (
            <div>
              <button onClick={()=> {
                  this.setState({
                      index: this.state.index -1
                  });
              }}>Previous image</button>
                <img 
                    style={{
                    width: 400,
                    height: 400
                    }}    
                    src={this.state.images[this.state.index]}
                />
                <button onClick={this.handleNext}>Next image</button>
            </div>
        )
    }
}