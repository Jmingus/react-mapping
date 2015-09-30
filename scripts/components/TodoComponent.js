var React = require('react');

module.exports = React.createClass({
	render: function() {
    return(
    <tr>
      <td>{this.props.item.get('description')}</td>
      <td>{this.props.item.get('completed').toString()}</td>
    </tr>
    )
	}
})
