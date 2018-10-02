import React , { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        })
      })
  }
  
  render() {
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <Link to={'/' + post.id}> 
            <div className="post card" key={post.id}>
              <img src={Pokeball} alt="A Pokeball" />
              <div className="card-content">
                <span className="card-title red-text">{post.title}</span>
                <p className="grey-text">{post.body}</p>
              </div>
            </div>
          </Link>  

        )
      })
    ) : (
      <h1 className="center">No Posts Yet!</h1>
    )
    return (
      <div className="container home">
        <h1 className="center">Home</h1>
        {postList}
      </div>
    )
  } 
}

export default Home