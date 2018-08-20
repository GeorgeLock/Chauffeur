import React, { Component } from 'react';
import './ContactForm.scss';
import './bootstrap.min.css';
class Label extends Component {
  render() {
    let InputLabel;
    const LabelRequired = (
      <input
        type={this.props.type}
        className="form-control"
        id={this.props.id}
        name={this.props.name}
        placeholder={this.props.placeholder}
        required
      />
    );
    const NewLabel = (
      <input
        type={this.props.type}
        className="form-control"
        id={this.props.id}
        name={this.props.name}
        placeholder={this.props.placeholder}
      />
    );

    if (this.props.required) {
      InputLabel = LabelRequired;
    } else {
      InputLabel = NewLabel;
    }
    return (
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className={this.props.className} />
            {this.props.fieldName}
          </div>
        </div>

        {InputLabel}
      </div>
    );
  }
}

export default Label;
