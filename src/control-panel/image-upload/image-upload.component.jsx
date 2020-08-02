import React, { Component } from 'react';
import './image-upload.style.scss';

import {storage} from '../../firebase/firebase.utils';
class ImageUpload extends Component {
    constructor(){
        super();
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
    }

    onChangeHandler =(e) => {
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(()=>({image}));
        }

    }

    onClickHandler =(event) => {

        event.preventDefault();
        const fileName = document.getElementById('fileName').value;
        if(fileName===''){
            console.log('select image');
            document.getElementById('response-message').innerHTML='Please Select Image First!';
        }
       else{
        const {image}=this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
        (snapshot)=>{
            //progress function
            const progress =Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
            document.getElementById('pReport').innerHTML=progress + "% done";
            this.setState({progress})
        }, (error)=>{
            //error function
            console.log(error);
        },()=>{
           // complete function
            storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                console.log(url);
                this.setState({url});
                if(url){
                    document.getElementById('response-message').innerHTML="Uploaded successfully!";
                }
            });
        });
        
        
        
   }
    }

    downloadHandler = (e) => {
       
    }
    
    render(){
        return(
            <div className='image-upload'>
                <div>
                <progress value={this.state.progress} max="100" /><span id='pReport'></span>
                </div><br/>
                <div>
                <input type='file' id='fileName' onChange={this.onChangeHandler} />
                <button className='upload-image-btn' onClick={this.onClickHandler}>Upload Image</button>
               
                <button className='download-image-btn' onClick={this.downloadHandler}>Download Image</button>
                <br/>
                <span id='response-message'></span>
                </div> <br/>              
                <img src={this.state.url || 'https://via.placeholder.com/500x500'} id='new-img' alt='uploaded' height='500' width='500'/>
         
              
            </div>
        );
    }
}
export default ImageUpload;