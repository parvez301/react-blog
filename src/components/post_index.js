import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPosts } from '../actions';

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	componentWillMount() {

	}

	render(){
		console.log(this.props.fetchPosts;
		return (
				<div>
					Post Index
				</div>
			);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts }
}

export default connect(null, { FetchPosts })(PostsIndex)