import React from 'react'
import {Html, Body, Container , Text, Link, Preview } from "@react-email/components";

const WelcomeTemplate = ({name}:{name:string}) => {
  return (
    <Html>
      <Preview>WelCome abord</Preview>
      <Body>
        <Container>
          <Text>Hello World</Text>
          <Link href="https://durowave.co">www.durowave.com</Link>
        </Container>
      </Body>
    </Html>
  )
}

export default WelcomeTemplate
