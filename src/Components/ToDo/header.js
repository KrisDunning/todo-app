import React from 'react';
import {Navbar, Text} from '@mantine/core';

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
      Home    Settings
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
