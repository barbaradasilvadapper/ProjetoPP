import React from 'react';
import { Fundo, HomeContainer, HomeGrid, IconesSize, IconSize } from './styled';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import HomeIcon from '../../assets/HomeIcon.png'
import AddIcon from '../../assets/AddIcon.png'
import InfoIcon from '../../assets/InfoIcon.png'
import ProfileIcon from '../../assets/ProfileIcon.png'

function Menu() {
  return (
    <>
        <Fundo>
        <Tabs variant='soft-rounded' size='sm' colorScheme='blackAlpha' marginTop='0.6vh' align='center'>
          <TabList w='90vw' justifyContent='space-between' align='center'>
            <Tab><IconSize src={HomeIcon}/></Tab>
            <Tab><IconSize src={AddIcon}/></Tab>
            <Tab><IconSize src={InfoIcon}/></Tab>
            <Tab><IconSize src={ProfileIcon}/></Tab>
          </TabList>
        </Tabs>
        </Fundo>
    </>
  );
}

export default Menu;
