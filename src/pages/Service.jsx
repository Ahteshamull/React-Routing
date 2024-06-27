import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  
} from "keep-react";

const Service = () => {
  return (
    <div className="">
      <Card>
        <CardHeader>
          <img
            src="https://via.placeholder.com/600x400"
            alt="image"
            width={600}
            height={400}
          />
        </CardHeader>
        <CardContent className="space-y-3">
          <CardTitle>Lorem ipsum dolor sit</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam
            animi voluptas perspiciatis quidem esse!
          </CardDescription>
          <Button size="sm" color="secondary">
            Buy Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Service