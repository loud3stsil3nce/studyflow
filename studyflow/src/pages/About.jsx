import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

export default function AboutPage() {
    return (
        <>
        <div className="aboutContainer">
        <Navbar />
        <h2>About Page!</h2>
        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Welcome to STUDYFLOW.
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
In STUDYFLOW, you have access to the best productivity and schedule services -- for free. 
Create a schedule, make a to-do list, or two, or three, or take advantage of the many other 
features available. Take control of your time now.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
How Do I Begin?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className="aboutLink">
      No, you don't need a credit card, or go through several hoops to use STUDYFLOW. All you 
      need is an email and a password! Click on the button below to get started.
      <button ><li><a href="/auth">Sign Up or Log In</a></li></button>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</div>
        </>
    )
}