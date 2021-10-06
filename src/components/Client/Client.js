import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import './client.css'
import img24 from '../../images/34.png'
import img25 from '../../images/35.png'

const items = [
  {
    src: img24,
    review:"It is my favourite grocery store. Their produce top notch and the hot food bar and soups are always super tasty! Great place for organic food.",
  },
  {
    src: img25,
    review:"Great independent grocery store with a wide variety of gourmet items and hard to find food stuffs. A great butcher offering local seafood and grass fed meats. There a good variety of organic fruits and vegetables but not always the freshest ",
  },
  {
    src: img24,
    review:"Amazing selections of produce and deli food. We're weekly shoppers often finding everything from vegan meals and products to grass Fed organic meats and whole grain pasta. We buy our toiletries and cleaners really everything. The staff are always friendly and seem genuinely happy to help and be there.",
  },
  {
    src: img25,
    review:"It does not lack choices for health food grocery stores and Staff of Life is another excellent option. Plenty of fresh, local and organic groceries to choose from and the employees and friendly.",
  },
  {
    src: img24,
    review:"Always the freshest produce and meats, locally sourced when available. The staff is very helpful, and knowledgeable about the items in stock. Great selection of organic foods and an amazing wellness department.",
  },
  {
    src: img24,
    review:"Staff allows me to live out my dreams of becoming a zero-waster. The best bulk selection around. Organic, beautiful produce. They will have the best prices and you will be able to find the most unique hard to find items here as well. ",
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
      <div className="client_padding">
        <div className="client_topic">Our Client Says</div>
          <div class="flip-card mar">
              <div class="flip-card-inner">
                  <div class="flip-card-front">
                      <img src={item.src} className="img_carousel"></img>                
                  </div>
                  <div class="flip-card-back">
                      <div className="text">{item.review}</div>
                  </div>
              </div>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;