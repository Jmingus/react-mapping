var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.qb.get('name')}</td>
				<td>{this.props.qb.get('team')}</td>
				<td>{this.props.qb.get('attempts')}</td>
				<td>{this.props.qb.get('completions')}</td>
				<td>{this.props.qb.get('yards')}</td>
				<td>{this.props.qb.get('touchdowns')}</td>
				<td>{this.props.qb.get('interceptions')}</td>
				<td>{this.props.qb.get('sacks')}</td>
			</tr>
		);
	}
})
