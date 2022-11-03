import { NumberInput, Switch, Box, Group, Button } from "@mantine/core";
import { useForm } from '@mantine/form';
import React from "react";
import { useContext } from 'react';
import { SettingsContext } from '../../Context/settingsContext';

const SettingsPage=()=>{
  const { hideComplete, setHideComplete,numberItemsShown,setNumberItemsShown,sortDefault,setSortDefault } = useContext(SettingsContext);
  


  const form = useForm({    
    initialValues: {
      hideCompleted: 'false',
      itemsShown: 3,
      sortBy: 'name'
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Switch label = 'Show Complete ToDos'
        //{...form.getInputProps('hideCompleted')}
       //checked={hideComplete} 
        onChange={(e) => setHideComplete(e.currentTarget.checked)} 
 
        />
      <NumberInput
       // {...form.getInputProps('itemsShown ')}
        label="Items Per Page"
        // value={numberItemsShown}
        max={6}
        min={1}
        onChange={(value) => console.log(value)}
      />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default SettingsPage;
