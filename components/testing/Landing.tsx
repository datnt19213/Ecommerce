import axios from "axios";
import React, {useEffect} from "react";

const Landing = () => {
  const query = new URLSearchParams([
    ["hydrate", "1"],
    ["embedHydrate", "1"],
    [
      "componentProps",
      JSON.stringify({
        // Your component props
      }),
    ],
    [
      "globalVariants",
      JSON.stringify([
        // Your global variants
        {
          name: "Theme",
          value: "Dark",
        },
      ]),
    ],
  ]);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://codegen.plasmic.app/api/v1/loader/html/preview/3QZpf3MbTGi4A8PTJbVNgi/Homepage?hydrate=1&embedHydrate=1&prepass=1&maxAge=600",
        {
          headers: {
            // Your project ID and public API token
            "x-plasmic-api-project-tokens":
              "3QZpf3MbTGi4A8PTJbVNgi:ZuPqHy97ouX2O2bpcGWRlIAGdBynAy0g8ORRv51WeNwcKBrZz6JPrc2bB8uCl6URA4dr1iE34fZQAfWFx55Vw",
            // You can find your PROJECT token by visiting
            // https://studio.plasmic.app/projects/[3QZpf3MbTGi4A8PTJbVNgi]/docs/loader#showToken=true
          },
        }
      );

      document.body.innerHTML = response.data.html;
    };
    fetch();
  }, []);
  return <div>Landing</div>;
};

export default Landing;
