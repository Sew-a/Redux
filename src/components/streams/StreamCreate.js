import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class StreamCreate extends Component {
  renderInput({input, label}) {
    return (
      <div className="field">
        <label>{label}</label>
      <input
        {...input}
      />
      </div>
    );
  }

  onSubmit(formValues){
    console.log(formValues);
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.renderInput} label="Enter Title" />
        <Field name='desciption' component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate  = (formValues) => {
  const errors = {}

  if(!formValues.title){
    errors.title = "You must enter a title"
  }
  if(!formValues.description){
    errors.description = "You must enter a description"
  }
  
  return errors
}


export default reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);
