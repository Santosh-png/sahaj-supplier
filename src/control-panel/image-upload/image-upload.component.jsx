import React, { Component } from 'react';
import './image-upload.style.scss';

import firebase from '../../firebase/firebase.utils';
class ImageUpload extends Component {
    constructor(){
        super();
        this.state = {
            files: null
        }
    }

    onChangeHandler =(e) => {
        this.setState({
            files: e.target.files
        });

    }
    onClickHandler =(event) => {
        event.preventDefault();
        let bucketName = 'image';
        let file = this.state.files[0];
        let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
        let uploadTask = storageRef.put(file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);
            /* ()=>{
                let downloadURL = uploadTask.snapshot.downloadURL;
            })*/

            this.setState({file: null});

    }
    
    render(){
        return(
            <div className='image-upload'>
                <input type='file' onChange={this.onChangeHandler} />
                <button className='upload-image-btn' onClick={this.onClickHandler}>Upload Image</button>
            </div>
        );
    }
}
export default ImageUpload;