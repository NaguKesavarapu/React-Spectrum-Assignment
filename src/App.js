import React, { Component } from 'react';
import {
  Provider, defaultTheme, Button, TextField, Flex,
  Heading, View, ListView, Item, Divider, Content, ActionButton
} from '@adobe/react-spectrum';
import './App.css';

class App extends Component {
  state = {
      data: [],
      inputValue: ''
    };
  

  handleInputChange = (value) => {
    this.setState({ inputValue: value });
  }

  handleAddData = () => {
    const { data, inputValue } = this.state;
    if (inputValue) {
      this.setState({ data: [...data, { id: Date.now(), text: inputValue }], inputValue: '' });
    }
  }

  handleDeleteData = (id) => {
    this.setState({ data: this.state.data.filter(item => item.id !== id) });
  }

  render() {
    return (
      <Provider theme={defaultTheme}>
        <View padding="size-200">
          <div className="app-container">
          <Heading level={1} className="app-heading">Hava Havai Frontend Assignment</Heading>
          <Divider size="M" />
          <Flex direction="column" gap="size-200" marginTop="size-200">
            <TextField
              label="New Item"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              marginEnd="size-100"
              className="input-field"
            />
            <Button variant="cta" onPress={this.handleAddData} className="add-button">Add Item</Button>
            <ListView
              aria-label="List of items"
              selectionMode="none"
              className="list-view"
            >
              {this.state.data.map(item => (
                <Item key={item.id}>
                  <Content>
                    <Flex direction="row" alignItems="center" justifyContent="space-between">
                      <span>{item.text}</span>
                      <ActionButton isQuiet onPress={() => this.handleDeleteData(item.id)} className="delete-button">Delete</ActionButton>
                    </Flex>
                  </Content>
                </Item>
              ))}
            </ListView>
          </Flex>
          </div>
        </View>
      </Provider>
    );
  }
}

export default App;
