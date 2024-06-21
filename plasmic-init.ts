import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import {Topbar} from "./components/topbar";
import {Menu} from "./components/menu";
import Buttons from "./components/test/Button";
import Link from "./components/test/ButtonLink";
import {SearchDrawer, ShopDrawer} from "./components/drawer";
import FlexContainer from "./components/test/FlexContainer";
import ComboButtonMenu from "./components/test/ComboButtonMenu";
import Home from "./components/test/Home";
import Categories from "./components/test/CategoriesHome";
import ScrollBanner from "./components/test/ScrollBanner";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "diwSHPJQ2PKVbTFt5CMn8w",
      token:
        "iVRNWWydOFAdK2vbWuOlp2d90op8RixSO4juH222NgGWWEuYIDft6KAcwQQlz8HrGO9rxqrB7zMKOd1UNxrw",
    },
  ],

  preview: false,
});

PLASMIC.registerComponent(Topbar, {
  name: "TopBar",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
PLASMIC.registerComponent(Menu, {
  name: "Menu",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
PLASMIC.registerComponent(Buttons, {
  name: "Buttons",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
PLASMIC.registerComponent(Link, {
  name: "ButtonLink",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
PLASMIC.registerComponent(SearchDrawer, {
  name: "SearchDrawer",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
PLASMIC.registerComponent(ShopDrawer, {
  name: "ShopDrawer",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
PLASMIC.registerComponent(FlexContainer, {
  name: "FlexContainer",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
PLASMIC.registerComponent(ComboButtonMenu, {
  name: "ComboButtonMenu",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
PLASMIC.registerComponent(Home, {
  name: "Home",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
PLASMIC.registerComponent(Categories, {
  name: "Categories",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
PLASMIC.registerComponent(ScrollBanner, {
  name: "Scroll Banner",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});