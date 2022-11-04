import { NumberInput, Switch, Box, Group, Button, TextInput, Text, Card } from "@mantine/core";
import { useForm } from '@mantine/form';
import React from "react";
import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/settingsContext';
import { When } from 'react-if';


const SettingsPage = () => {
  const {
    hideComplete,
    setHideComplete,
    numberItemsShown,
    setNumberItemsShown,
    sortDefault,
    setSortDefault,
  } = useContext(SettingsContext);

  const [showSettingsResult, setShowSettingsResult] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    setShowSettingsResult(true);
  }

  return (
    <>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={(e) => handleSubmit(e)}>
          <Switch 
            label='Show Complete ToDos'
            checked={hideComplete}
            onChange={(e) => setHideComplete(e.target.checked)}
          />
          <NumberInput
            label="Items Per Page"
            max={6}
            min={1}
            onChange={(value) => setNumberItemsShown(value)}
          />
          <TextInput
            label= {'Sort ToDos By :'}
            onChange={(e) => setSortDefault(e.target.value)}
            placeholder={sortDefault}
          />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
      <When condition={showSettingsResult}>
      <Group>
      <Box>
        <Text>Show Completed ToDos : {hideComplete.toString()}</Text>
        <Text>Items Per Page : {numberItemsShown}</Text>
        <Text>Sort Word : {sortDefault}</Text>  
      </Box>
      </Group>
      </When>
    </>

  );
}


export default SettingsPage;
