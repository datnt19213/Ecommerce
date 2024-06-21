import {initPlasmicLoader} from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "diwSHPJQ2PKVbTFt5CMn8w", // ID of a project you are using
      token:
        "iVRNWWydOFAdK2vbWuOlp2d90op8RixSO4juH222NgGWWEuYIDft6KAcwQQlz8HrGO9rxqrB7zMKOd1UNxrw", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
