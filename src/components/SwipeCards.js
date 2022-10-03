import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import MyCard from "./MyCard";
import { Stack } from "@mui/system";
import Divider from "@mui/material/Divider";
import React from "react";

const SwipeCards = (props) => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={0}
    >
      {" "}
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        speed={800}
        spaceBetween={0}
        slidesPerView={
          window.innerWidth > 600
            ? props.data.length < 5
              ? props.data.length
              : 5
            : 3
        }
      >
        {props.data.map((x, i) => (
          <SwiperSlide key={i}>
            <MyCard
              image={x.image}
              title={x.title}
              description={x.description}
              source={x.source}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default SwipeCards;
