import React from "react";

import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-react";

const CarouselComponent = () => {
  return (
    <div>
      <Carousel>
        <CarouselSlides>
          {[1, 2, 3, 4, 5].map((slide) => (
            <CarouselItem key={slide}>
              <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20 dark:border-metal-900 dark:bg-metal-900">
                <h1 className="text-heading-1 font-medium text-metal-900 dark:text-white">
                  {slide}
                </h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselSlides>
        <CarouselControl>
          <CarouselButtons>
            <CarouselPrevButton />
            <CarouselNextButton />
          </CarouselButtons>
          <CarouselIndicators />
        </CarouselControl>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
