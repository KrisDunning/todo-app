import React from 'react';
import {Navbar, Text} from '@mantine/core';
import {Link} from "react-router-dom";

const TheHeader = (incomplete) => {
  return (
    <>
    <Navbar
      height={60}
      p="xs"
      data-testid="todo-header"
    >
    <Navbar.Section>
    <Text>
    <Link to="/">Home</Link>    
    <Link to="/settings">Settings</Link>
    </Text>
    </Navbar.Section>
    <Navbar.Section>
    <h1 data-testid="todo-h1">
      To Do List: {incomplete} items pending
    </h1>
    </Navbar.Section>
    </Navbar>
    </>
  )
}

export default TheHeader;
