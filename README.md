# 🚫 notox

<img src="https://github.com/gmlunesa/notox/blob/master/images/NotoxPreview.png" height="320" alt="Notox Preview">

## About

Notox is a chat application that uses artificial intelligence to filter out negative messages to fellow users. The project uses the [Tensorflow toxicity model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity) to detect whether the messages contain insults, obscenities or threatening language and stops such messages from being sent to others. This approach is an improved solution compared to a dictionary-based filtering method, since the model distinguishes the context specific mappings of adjectives and attributes because a word can have multiple senses.

No rudeness. <br />
No toxicity. <br />
Notox.

### Stack

| <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/frameworks/react.svg" width="100" height="100" alt="React"> | <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/cloud/firebase.svg" width="100" height="100" alt="Firebase"> | <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" width="100" height="100" alt="Tensorflow"> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |

> This project uses the [Techst](https://github.com/gmlunesa/techst/) template, which lets anyone set up a real-time private chat application within minutes.

## Setup

The following are the steps on running the application. You may find a more in-depth guide in the [Techst](https://github.com/gmlunesa/techst/wiki) wiki.

1. Clone the repository.

   ```
   git clone https://github.com/gmlunesa/techst.git
   ```

2. Install Node modules.

   ```
   npm install
   ```

3. Go to the [Firebase Console](https://console.firebase.google.com) and click "Add project".
4. [Firebase Console] Under the `Build` product category, select `Authentication`.
5. [Firebase Console] Under the `Sign-in method` tab, enable `Email/Password` option.
6. [Firebase Console] Under the `Build` product category, select `Firestore Database`.
7. [Firebase Console] Click the `Create Database` button and set up the database accordingly.
8. [Firebase Console] Under the `Build` product category, select `Storage`.
9. [Firebase Console] Click the `Get Started` button and set up the cloud storage accordingly.
10. [Firebase Console] In the `Project Overview`, add an app by selecting the `Web` button.
11. Copy the Firebase configuration that has been generated.
12. Open the `firebase.js` file, paste and replace the Firebase configuration under the `// TODO: Replace` comment.

    ```
    // Import the firebase package
    import firebase from 'firebase';

    // TODO: Replace
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      appId: 'YOUR_APP_ID',
    ```

13. Rename the `firebase.sample.js` file to `firebase.js`.
14. Run the application.
    ```
    npm start
    ```

## License

[MIT 🌱 Fully open-source](https://github.com/gmlunesa/techst/blob/main/LICENSE)

---

Made with 💫✨ by [gmlunesa](https://gmlunesa.com)
