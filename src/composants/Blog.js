import React, { Component } from 'react'
import NvPost from './NvPost/NvPost'
import PostModale from './PostModale/PostModale'
import './Blog.css'
import axios from 'axios'
import Post from './Post/Post'
class Blog extends Component {
    state={
        posts: [],
        selectPostId: null,
        toggle:false //pour le bouton fermer
    }
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        const article =response.data.slice(0,4)
        const postAuteur =article.map(post=>{
            return {
                ...post,
                auteur:'Huge'
            }
        })
this.setState({
    posts:postAuteur
})
    })
}
selectId = id =>{
this.setState({
    selectPostId:id,
})
this.setState({
    toggle:true, //si on a clique sur un araticle
})
}
//fonction pour bouton fermer
toggeModele=()=>{
    this.setState({toggle:false})
}

    render () {
        const posts =this.state.posts.map(e=>{
            return <Post auteur={e.auteur}
             key={e.id} titre={e.title}
             clicked={() => this.selectId(e.id)}
             />
        })

        return (
            <div>
                <section>
                <NvPost />
                </section>
                <h2 className="text-center my-5">Choisissez un post ...</h2>
                <PostModale 
                cache={this.toggeModele}
                toggle={this.state.toggle}
                id={this.state.selectPostId}  />
                <section className="Posts">
                    {posts}
                </section>

            </div>
        );
    }
}

export default Blog;