var React = require('react');
var ReactDOM = require('react-dom');

var ReactBootstrap = require('react-bootstrap');
var PageHeader = ReactBootstrap.PageHeader;

var ListComponent = require('./ListComponent.jsx');
var SumComponent = require('./SumComponent.jsx');
var FormComponent = require('./FormComponent.jsx');

class Main extends React.Component{

  render() {
    return (
      <div>
        <PageHeader>
          React + Reflux Demo
        </PageHeader>
        <ListComponent/>
        <SumComponent/>
        <FormComponent/>
      </div>
    )
  }

}

ReactDOM.render(<Main />, document.getElementById('main'));
