import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';

import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import { TabPanel } from '@mui/joy';

export default function Signup() {
  return (
    <>
    <Header />
    <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent', mt:16,alignItems:'center',}}>
      <TabList
        disableUnderline
        sx={{
          p: 0.5,
          gap: 0.5,
          borderRadius: 'xl',
          bgcolor: 'background.level1',
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: 'sm',
            bgcolor: 'background.surface',
          },
        }}
      >
        <Tab disableIndicator>Login</Tab>
        <Tab disableIndicator>Register</Tab>
        
      </TabList>
      <TabPanel value={0}>
            <Login />
          </TabPanel>
          <TabPanel value={1}>
            
          </TabPanel>
    </Tabs>
    <Footer />
    </>
    
  );
}