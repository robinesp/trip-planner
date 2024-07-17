Please answer these questions once you have finished the assignment.

**What did you think of the assignment?**

The assignment was interesting, not too complex but still extensive enough to cover all the basic aspects of a UI, with data fetching, reactive design and user interaction.

**Which part did you consider the most difficult, or did you spend most of your time on?**

- The dependencies that are already included in the provided source code have some incompatibilities and vulnerabilities caused by outdated libraries that cause some errors when first installing the application. It gave me some troubles when adding new dependencies and getting the project running.
- Imgix was new for me, it was interesting to have a look at how its optimization works and how to use it together with `srcset` and `sizes` to optimize for different sizes. It took me some time to figure that out, also because part of the Imgix parameters are already stored as part of the image URL in the provided DB.

**Which parts were you not able to fully implement?**

The project should be fully functional, all filters and dynamic resizing described in the assignments should work.

**What would you add or improve if you had more time?**

- Add testing: it was not explicitely required in the assignemnt so didn't prioritize it. Given more time I would have added some e2e and regression tests, probably using Cypress.
- Date filter: the UX is not the best, as only the first n available dates are shown, according to the specifications, but the user doesn't have any information about the additional ones that are hidden. I would implement some kind of scroller so that the additional dates could also be accessed.
- Loading state: I would implement some better visualization of the loading states for the various components. At the moment the UI just shows some text but it could be replaced with visual spinners for a better user experience.

**What would you do differently if it was a bigger application?**

- A development framework: something like Next.js could help in the development of a larger scale application, to improve the developer experience when working on routing, data fetching and such. It would also bring notable performance improvement if used in combination with server components.
- Tooling: I would switch out `react-scripts` for something like `Vite`, which in my experience always works smoothly to bootstrap the project and provides far bettter performaces for local development.
- State management: I would introduce a library such a Zustand or Redux to handle the application state. For the current implementation it wouldn't add any value, but if it was a bigger application it would definitely be needed to manage user and session data.
- Uniform styling: there are a few places in the code where colors are defined ad-hoc in the code (e.g for the header, footer, buttons). In a bigger application it would make sense to define those as global css variables in order to reuse them across components.
