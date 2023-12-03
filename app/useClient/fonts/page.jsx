import { Poppins } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  preload: false,
  fallback: "arial",
});
export default function Page() {
  return (
    <div>
      <p className={poppins.className}>Poppins</p>
      <p className={robotoMono.className}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
        porttitor rhoncus dolor purus non enim. Massa eget egestas purus
        viverra. Fringilla urna porttitor rhoncus dolor purus non enim praesent.
        Aliquet bibendum enim facilisis gravida. Cras tincidunt lobortis feugiat
        vivamus at augue eget. At lectus urna duis convallis convallis tellus id
        interdum velit. Ultricies mi quis hendrerit dolor magna eget est.
        Adipiscing elit duis tristique sollicitudin nibh sit amet. Nibh praesent
        tristique magna sit amet purus. Morbi tristique senectus et netus et
        malesuada fames ac. Egestas integer eget aliquet nibh praesent tristique
        magna. In ornare quam viverra orci sagittis eu volutpat odio facilisis.
        Pretium quam vulputate dignissim suspendisse in est. Tincidunt id
        aliquet risus feugiat. Tempus quam pellentesque nec nam aliquam sem et
        tortor consequat. Pharetra pharetra massa massa ultricies mi quis
        hendrerit. Turpis nunc eget lorem dolor sed viverra ipsum. Amet massa
        vitae tortor condimentum lacinia quis vel. Hendrerit dolor magna eget
        est. Habitasse platea dictumst quisque sagittis purus sit amet volutpat
        consequat. Malesuada proin libero nunc consequat interdum varius sit.
        Ante metus dictum at tempor commodo ullamcorper a. Vitae tempus quam
        pellentesque nec. Enim facilisis gravida neque convallis a. Nunc sed
        velit
      </p>
    </div>
  );
}
