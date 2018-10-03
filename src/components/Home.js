import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    console.log(this.props)
    const { posts } = this.props
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)