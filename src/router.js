import CodingTest from "./components/2MEU_CODING_TEST";
import Algorigthms from "./components/Algorithms";
import BinarySearch from "./components/BinarySearch";
import CalcMissing from "./components/CalcMissing";
import CalcSteps from "./components/CalcSteps";
import LikeButton from "./components/LikeButton";
import LinearSearch from "./components/LinearSearch";
import NamedOne from "./components/NamedOne";
import OddNum from "./components/OddNum";
import SearchEngine from "./components/SearchEngine";
import SwappingArray from "./components/SwappingArray";
import UseCallBack from "./components/UseCallback";

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
  {
    route: "test4",
    path: "/test4",
    element: <OddNum />,
  },
  {
    route: "test5",
    path: "/test5",
    element: <CalcSteps />,
  },
  {
    route: "test6",
    path: "/test6",
    element: <CalcMissing />,
  },
  {
    route: "test7",
    path: "/test7",
    element: <NamedOne />,
  },
  {
    route: "test8",
    path: "/test8",
    element: <BinarySearch />,
  },
  {
    route: "test9",
    path: "/test9",
    element: <LinearSearch />,
  },
  {
    route: "test10",
    path: "/test10",
    element: <CodingTest />,
  },
  {
    route: "test11",
    path: "/test11",
    element: <SearchEngine />,
  },
  {
    route: "test12",
    path: "/test12",
    element: (
      <UseCallBack
        names={[
          "Justin Bieber",
          "Andrew Tate",
          "Tristan Tate",
          "Donald Trump",
          "Elon Musk",
        ]}
      />
    ),
  },
];
