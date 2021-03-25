import React, { Component } from 'react'
import axios from 'axios'
import './PostModale.css'

class PostModale extends Component {
    state={
        loadPost :null
    }
componentDidUpdate(){
 //   console.log('update')
 if(this.props.id){
     //pour éviter boucle infiner
     if(!this.state.loadPost || (this.state.loadPost && this.state.loadPost.id !== this.props.id)){
        axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
        .then(respose=>{
           // console.log(respose)
           this.setState({
               loadPost:respose.data
           })
        })
     }
    
 }
}

    render () {

        return (
            this.state.loadPost && this.props.toggle?
                <div className="PostComplet">
                    <h1>{this.state.loadPost.title}</h1>
                    <p> {this.state.loadPost.body}</p>
            
                    <button className="btn btn-danger my-3 btnPost"
                    onClick={this.props.cache}
                    >Fermer</button>
                
                </div>
            :null
            )
        
    
    }
}

export default PostModale;
