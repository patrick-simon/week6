var React = require('react')

var Card = React.createClass({

  render: function() {
    return (
      <div className="col-sm-2">
        <img className="img-responsive" src={"http://golearntocode.com/images/cards/face_down.png"} />
      </div>
    )
  }

})

module.exports = Card
