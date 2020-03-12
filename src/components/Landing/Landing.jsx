import React, { Component } from 'react';

import Header from './Header/Header.jsx';
import Block1 from './Block1/Block1.jsx';
import Block2 from './Block2/Block2.jsx';

const map = (value, x1, y1, x2, y2) =>
	((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

class landing extends Component {
	state = {
		SubHeader1: 0,
		SubHeader2: 0,
		opacityHeader: 1, // initial values
		blackoutHeader: 0.1, // initial values
		Block1: false,
		Block2: false
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		if (window.scrollY > window.innerHeight / 5) {
			this.setState({ SubHeader1: 1 });
		} else if (
			window.scrollY < window.innerHeight &&
			this.state.SubHeader1 === 1
		) {
			this.setState({ SubHeader1: 2 });
		}

		if (window.scrollY > window.innerHeight) {
			this.setState({ SubHeader2: 2 });
		} else if (
			window.scrollY < window.innerHeight &&
			this.state.SubHeader2 !== 0
		) {
			this.setState({ SubHeader2: 1 });
		}

		this.setState({
			opacityHeader: map(window.scrollY, 0, window.innerHeight, 1, 0),

			blackoutHeader: map(window.scrollY, 0, window.innerHeight, 0.1, 0.6)
		});
	};

	render() {
		return (
			<>
				<Header
					activate1={this.state.SubHeader1}
					activate2={this.state.SubHeader2}
					opacityHeader={this.state.opacityHeader}
					blackoutHeader={this.state.blackoutHeader}
				/>
				<Block1 activate={this.state.Block1} />
				<Block2 activate={this.state.Block2} />
				<Block1 activate={this.state.Block1} />
				<Block2 activate={this.state.Block2} />
				<Block1 activate={this.state.Block1} />
				<Block2 activate={this.state.Block2} />
				<Block1 activate={this.state.Block1} />
				<Block2 activate={this.state.Block2} />
				<Block1 activate={this.state.Block1} />
				<Block2 activate={this.state.Block2} />
			</>
		);
	}
}

export default landing;
