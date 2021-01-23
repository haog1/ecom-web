import React from 'react';
import styles from './FeatureCarousel.module.css';
import { Image, Carousel } from 'antd';
import SlideImage1 from 'assets/images/mock/carousel_1.jpg';
import SlideImage2 from 'assets/images/mock/carousel_2.jpg';
import SlideImage3 from 'assets/images/mock/carousel_3.jpg';

export const FeatureCarousel: React.FC = () => {
  return (
    <Carousel
      autoplay
      adaptiveHeight={false}
      draggable={true}
      className={styles.slider}
    >
      <Image src={SlideImage1} />
      <Image src={SlideImage2} />
      <Image src={SlideImage3} />
    </Carousel>
  );
};
