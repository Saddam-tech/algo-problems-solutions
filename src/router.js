import Algorigthms from "./components/Algorithms";
import LikeButton from "./components/LikeButton";
import SwappingArray from "./components/SwappingArray";

export const router = [
  {
    route: "test1",
    path: "/test1",
    element: <LikeButton />,
  },
  {
    route: "test2",
    path: "/test2",
    element: <Algorigthms />,
  },
  {
    route: "test3",
    path: "/test3",
    element: <SwappingArray />,
  },
];
