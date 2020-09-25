import React, { Component } from "react";

import classes from "./Main.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Modal from "../../components/UI/Modal/Modal";
import Tasks from "../../components/Tasks/Tasks";
import Layout from "../../components/Layout/Layout";

class Main extends Component {
  state = {
    tasks: [],
    taskInputValue: "",
    modalOpen: false,
    idCounter: 1,
  };

  showModalHandler = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  inputHandler = (e) => {
    this.setState({ taskInputValue: e.target.value });
  };

  addTaskHandler = () => {
    if (!this.state.taskInputValue) {
      return;
    }
    const task = {
      id: "t" + this.state.idCounter,
      value: this.state.taskInputValue,
    };
    this.setState({
      ...this.state,
      tasks: this.state.tasks.concat(task),
      idCounter: this.state.idCounter + 1,
      taskInputValue: "",
    });

    this.showModalHandler();
  };

  deleteTaskHandler = (e) => {
    const oldState = [...this.state.tasks];
    const itemToDelete = this.state.tasks.findIndex(
      (task) => task.id === e.target.id
    );

    if (itemToDelete !== -1) {
      oldState.splice(itemToDelete, 1);
      this.setState({
        tasks: oldState,
      });
    }
  };

  render() {
    return (
      <main className={classes.Main}>
        <Layout />
        {this.state.modalOpen ? (
          <Modal
            modalOpen={this.state.modalOpen}
            backdropClicked={this.showModalHandler}
          >
            <Input taskInput={this.inputHandler} />
            <Button btnName="Add" btnClicked={this.addTaskHandler} />
          </Modal>
        ) : null}
        <Tasks
          deleteTask={(e) => this.deleteTaskHandler(e)}
          tasks={this.state.tasks}
        />
        <Button btnName="+" btnClicked={this.showModalHandler} />
      </main>
    );
  }
}

export default Main;
