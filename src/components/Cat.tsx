import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import confetti from "@/assets/animations/Loading_Cat.lottie"
export default function Loader() {
  return (
    <DotLottieReact
      src={confetti}
      loop
      autoplay
    />
  );
}