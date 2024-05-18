import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import { ClassNames } from "@emotion/react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


export default function Home() {
    return (
        <div className="homeContainer">
        <Navbar />
        <h2>Home Page</h2>
        <Alert status="error">
          <AlertIcon/>
          <AlertTitle>Welcome to Stoodyus!</AlertTitle>
          <AlertDescription>Please navigate to "/productivity"</AlertDescription>
        </Alert>
        <div className="infoTabs">
         <Tabs>
  <TabList>
    <Tab>Create Lists</Tab>
    <Tab>Edits to the Max</Tab>
    <Tab>Constant Updates</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>In Stoodyus, you can creat the best to-do lists you've ever seen. Highly customizable with more features continually being added, take advantage of all that's available at your fingetips!</p>
    </TabPanel>
    <TabPanel>
      <p>Indecisive? Not a problem. In fact, this is a key purpose of Stoodyus --  to let you make as many edits as you need to get the job done.</p>
    </TabPanel>
    <TabPanel>
      <p>Please bare with us as we pump out new updates. Come across any issues? Contact us ASAP and we'll help you out!</p>
    </TabPanel>
  </TabPanels>
</Tabs> 
        </div>
        </div>
    )
}