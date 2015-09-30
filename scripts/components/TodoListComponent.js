var React = require('react');
var TodoComponent = require('./TodoComponent');

module.exports = React.createClass({
	render: function() {
    var allTodos = this.props.todos.map(function(item){
      return(<TodoComponent item={item} />)
    });

		return (
			<div className="row">
				<h1>Todos</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Thing to do</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
          {allTodos}
          </tbody>
        </table>
			</div>
		);
	}
});
