import React from 'react';
import { TextInput, Slider, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';



 const TodoForm= (addItem)=> {
  const form = useForm({
    initialValues: {
      text: '',
      assignee: '',
      difficulty:0,
    },
  });

  return (
    <>
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => addItem(values))}>
        <TextInput
          label="To Do Item"
          placeholder="Item Details"
          {...form.getInputProps('text')}
          />
        <TextInput
          label="Assigned To"
          placeholder="Assignee Name"
          {...form.getInputProps('assignee')}
          />
        <Slider {...form.getInputProps('difficulty')}
          min={0}
          max={5}
          step={1}
          marks={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
          ]}
          />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
    </>
  );
}

export default TodoForm;

///////////////////////////////
{/* <form onSubmit={handleSubmit}>

<h2>Add To Do Item</h2>

<label>
  <span>To Do Item</span>
  <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
</label>

<label>
  <span>Assigned To</span>
  <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
</label>

<label>
  <span>Difficulty</span>
  <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
</label>

<label>
  <button type="submit">Add Item</button>
</label>
</form> */}
///////////////////////////////