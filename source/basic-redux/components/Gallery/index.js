// Core
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import cx from "classnames";

// Instruments
import Styles from "./styles.m.css";

// Store
import { store } from "../../init/store";

// Action
import {
    showPrevPhoto,
    showNextPhoto,
    showSelectedPhoto
} from "../../bus/gallery/actions";

@hot(module)
export default class Gallery extends Component {
    _showPrevPhoto = () => {
        store.dispatch(showPrevPhoto);
        this.forceUpdate();
    };
    _showNextPhoto = () => {
        store.dispatch(showNextPhoto);
        this.forceUpdate();
    };

    _showSelectedPhoto = (photoIndex) => {
        store.dispatch(showSelectedPhoto(photoIndex));
        this.forceUpdate();
    };

    render () {
        const {
            gallery: { photos, selectedPhotoIndex },
        } = store.getState();

        const selectedPhoto = photos.find(
            (_, index) => index === selectedPhotoIndex
        );

        const buttonStyle1 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 0,
        });
        const buttonStyle2 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 1,
        });
        const buttonStyle3 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 2,
        });
        const buttonStyle4 = cx({
            [Styles.buttonActive]: selectedPhotoIndex === 3,
        });

        return (
            <section className = { Styles.gallery }>
                <img src = { selectedPhoto.url } />
                <div>
                    <button onClick = { this._showPrevPhoto }>←</button>
                    <button
                        className = { buttonStyle1 }
                        value = '0'
                        onClick = { () => this._showSelectedPhoto(0) }>
                        1
                    </button>
                    <button
                        className = { buttonStyle2 }
                        value = '1'
                        onClick = { () => this._showSelectedPhoto(1) }>
                        2
                    </button>
                    <button
                        className = { buttonStyle3 }
                        value = '2'
                        onClick = { () => this._showSelectedPhoto(2) }>
                        3
                    </button>
                    <button
                        className = { buttonStyle4 }
                        value = '3'
                        onClick = { () => this._showSelectedPhoto(3) }>
                        4
                    </button>
                    <button onClick = { this._showNextPhoto }>→</button>
                </div>
            </section>
        );
    }
}
