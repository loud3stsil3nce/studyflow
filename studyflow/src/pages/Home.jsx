import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import { ClassNames } from "@emotion/react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'


export default function Home() {
    return (
        <div className="homeContainer">
        <Navbar />
        <h2>Home Page</h2>
        <Alert status="error">
          <AlertIcon/>
          <AlertTitle>This site is still under construction!</AlertTitle>
          <AlertDescription>Please bear with me as I fix some bugs. Please navigate to "/productivity"</AlertDescription>
        </Alert>
 
        </div>
    )
}