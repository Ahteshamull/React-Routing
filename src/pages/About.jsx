import React from 'react'
import {
  Button,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "keep-react";

const About = () => {
  return (
    <div>
      <Empty>
        <EmptyImage>
          <img
            src="https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg"
            height={234}
            width={350}
            alt="404"
          />
        </EmptyImage>
        <EmptyTitle>This page isn't available right now</EmptyTitle>
        <EmptyDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry.
        </EmptyDescription>
        <Button>Go to home</Button>
      </Empty>
    </div>
  );
}

export default About