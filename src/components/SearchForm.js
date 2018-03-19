import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react'


class SearchForm extends Component {
  render() {
    return (
      <Container >
        <Form onSubmit={this.props.handleOnSubmit}>
          <Form.Field>
            <label>Search for a City</label>
            <input type='text' value={this.props.search_term} onChange={this.props.handleOnChange}/>
          </Form.Field>
          <Button type='submit'>Search</Button>
        </Form>
      </Container>
    )
  }
}

export default SearchForm;
