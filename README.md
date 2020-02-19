<p align="center">


  <img align="center" alt="Mockup" title="Mockup" src="https://i.imgur.com/2b3yJRI.png" width="200" height="200"/>

</p>
  
<h1 align="center">TrapLearn</h1> 
<p align="center">

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat&logo=EXPO&labelColor=ffffff&logoColor=000)](https://github.com/expo/expo)
![.github/workflows/main.yml](https://github.com/xlanor/trapdoor-knapsack-encryption/workflows/.github/workflows/main.yml/badge.svg?branch=develop)
[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=for-the-badge&logo=APPLE&labelColor=000&logoColor=fff)](https://github.com/expo/expo)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=for-the-badge&logo=ANDROID&labelColor=000&logoColor=fff)](https://github.com/expo/expo)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
</p>


A react-native application bootstrapped with expo.

Kindly note that expo has issues with node@13, use node@12.xx instead.

### Requirements

- AVD (Android emulator) or Simulator (iOS emulator)
- nodeJS version 12.x

### Running the Application
- Install nodejs & npm. **Make sure that nodeJS is on 12.x.x LTS**
- If you use macOS, `brew install nodejs` is going to give you node13 - pour the tap for node@12 directly to avoid this!
- Clone the source code directory and navigate to it
- `npm install --save` to install the relevant libraries from npm
- `npm install -g expo-cli` to install expo
- Prepare your simulator (for android, use the AVD in android studio, for macOS, use the simulator from xcode)
- run `expo start` in the directory
- Please dont ever run npm as sudo to avoid screwing up your `$PATH`.

![expo](https://i.imgur.com/8s8x1lu.gif)




### Directory Layout
```
---
 |
 |- __tests__ # for Tests, if we have time
 |- actions
 |- assets
 |- components
 |- constants
 |- navigation
 |- reducers
 |- screens
 |- store
```

### Redux directories
Redux is utilized in order to handle state management across multiple classes/components, storing the state in a central store. Although react now has hooks which basically does the same thing without the need for a third party library, the benefit of utilizing redux is that we can use `redux-persist` to persist the state utilizing `AsyncStorage` on the device, without the need for a separate database.

When the state is persisted, we can then rehydrate the store from the persisted store, allowing us to keep track of the progress of the user throughout the app.

The redux directories are as follows
- actions
  - actions are payloads of information that send data to the store using `dispatch`. They can contain payloads, but more importantly, should contain a `type` that is usually stored as a `constant` to ensure that the `reducer` knows what mutation to perform to the state.
- constants
  - constants are used in redux to list the types of actions that can be performed. We store them as strings here.
- reducers
  - reducers are key, because as actions described what happened, reducers change the state *based on* the actions.
- store
  - Holds the application state, and mainly handles the creation of state as well as juggles the broadcast (dispatch, listeners) 

Redux is a little daunting to work with if you're not familiar with it, but looking at a couple of medium articles and practicing should make it fairly simple.

I don't recommend YouTube videos for redux because they take 3 hours to explain what you could read in 10 minutes. Read and practice. It's much faster.

### React directories
- assets
  - We store things like images and fonts here. As the name suggests, our assets goes here.
- components
  - probably one of the most important parts of the application. All component logic (components can be compartmentalized according to views, but for simplicity sake we normally define each component as a tab for learnscreen, due to the intricate state management required.)
- screens
  - the base of the window, which is utilized in navigation stacks.
  - In our app we don't really have screens, because of the nature of the design, the learnscreen is one giant screen that is then managed directly by redux 
- navigation
  - navigation stacks are defined here, and the flow of transition from one screen to another occurs here


### License
This project will be published under the AGPL-v3 license upon submission of the FYP project and the source code publicly avaliable on Github for future use by any educators interested in the application.



