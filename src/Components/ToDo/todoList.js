import React from "react";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function DisplayList(pageList,toggleComplete) {
  return (  
    <>
      {pageList.map(item => (         
        // <div key={item.id}>
        // <p>{item.text}</p>
        // <p><small>Assigned to: {item.assignee}</small></p>
        // <p><small>Difficulty: {item.difficulty}</small></p>
        // <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        // <hr />
        // </div>
        <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
        <Badge color="pink" variant="light" onClick={() => toggleComplete(item.id)}>
          {item.complete?'Complete':'Pending'}
        </Badge>
        <Text>
          {item.assignee}
        </Text>
        </Card.Section>
        <Card.Section>
        <Text>
          {item.text}
        </Text>
        <Text>
          {item.difficulty}
        </Text>
        </Card.Section>

        </Card>
      ))}
    </>    
    )
}


export default DisplayList;