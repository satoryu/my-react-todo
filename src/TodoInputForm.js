import React from 'react'

export default class TodoInputForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      task: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ task: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.task)
    this.setState({task: ''})
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.task} onChange={this.onChange} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
