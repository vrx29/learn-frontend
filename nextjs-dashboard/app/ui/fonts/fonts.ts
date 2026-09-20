import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";
import localFont from "next/font/local";

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const inter = Inter({ subsets: ["latin"] });

export const mazzard = localFont({
  src: [
    {
      path: "./mazzard/MazzardH-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./mazzard/MazzardH-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./mazzard/MazzardH-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./mazzard/MazzardH-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./mazzard/MazzardH-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./mazzard/MazzardH-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./mazzard/MazzardH-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./mazzard/MazzardH-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./mazzard/MazzardH-Black.otf",
      weight: "900",
      style: "normal",
    }, // Italics
    //
    {
      path: "./mazzard/MazzardH-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./mazzard/MazzardH-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./mazzard/MazzardH-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./mazzard/MazzardH-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./mazzard/MazzardH-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./mazzard/MazzardH-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./mazzard/MazzardH-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./mazzard/MazzardH-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./mazzard/MazzardH-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-mazzard-h",
});
