import localFont from "next/font/local";

export const rebond = localFont({
  src: [
    {
      path: "../assets/fonts/rebond/rebondRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/rebond/rebondMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/rebond/rebondSemibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-rebond",
});

export const jakarta = localFont({
  src: [
    {
      path: "../assets/fonts/jakarta/jakartaRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/jakarta/jakartaMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/jakarta/jakartaSemibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-jakarta",
});
