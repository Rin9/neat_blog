import React from "react";
import { Heading } from "@chakra-ui/react";

const HeadingComponent = ({ modifiedText, index, type, variant }) => {
  return (
    <Heading as={type} key={index} variant={variant}>
      {modifiedText.map((item, i) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </Heading>
  );
};

export default HeadingComponent;
