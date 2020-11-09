This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It manages state using useReducer Hook. Navigation is achieved using conditional rendering.<br />
Redux and React Router were not used to reduce external packages as stated in the requirements.

# Goal
    An application that displays trivia questions with multiple-choice answers to select from. 

## Complexties to look out for
    * Each round provides randomly shuffled set of 10 questions.

    * Multi-choice answers shuffle positions randomly. Be quick when choosing options.

    * If you fail a question, random (sometimes harsh) comments are accompanied by the correct answer.

## Future Planned Improvements
    * Types using Typescript
    * Sound Interactions (to Timer, right and wrong answers etc).
    * Animations using GSAP or Framer 
    * Emojis to remarks
    * Accessibility
    * Page transitions using React Router
    * State Management using Redux.
    * End to End tests using Cypress.

    React Router and Redux were not used to keep the package simple as stated in the requirements.

## Dependencies

    * System Dependencies
        * Node.js

    * Application Dependencies
        * React.js: v16.13.1
        * React-DOM: v16.9.8
        * Node-sass: v4.14.1

    * Development Dependencies
        * React Testing Library
            * User Event: v7.2.1
            * Jest DOM: v4.2.4
            * React: v9.5.0

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

