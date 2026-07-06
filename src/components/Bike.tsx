import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import bike from "@/assets/animations/Bike.lottie"
export default function Loader() {
  return (
    <DotLottieReact
      src={bike}
      loop
      autoplay
    />
  );
}