import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export class Corousel  extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="./images/image-1.jpg"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./images/image-2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./images/image-3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

