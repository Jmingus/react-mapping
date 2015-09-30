var React = require('react');
var CatComponent = require('./CatComponent');

module.exports = React.createClass({
	render: function() {
			var allCats = this.props.cats.map(function(model){
	    		return (
	    				<CatComponent cat={model} />
	    			)
	    });
		return (
			<div className="row">
				<h1>Cats</h1>
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Picture</th>
						</tr>
					</thead>
					<tbody>
						{allCats}
					</tbody>
				</table>
			</div>
		);
	}
});
