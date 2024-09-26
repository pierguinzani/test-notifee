# Notifee Progress Notification Bug

This project demonstrates a bug that occurs in versions 9.0.0 and 9.0.2 of the Notifee library when triggering a progress notification on Android. The app crashes 3 minutes after the notification is sent.

## Getting Started

These instructions will help you set up and run the project on your local machine to reproduce the bug.

### Prerequisites

Ensure you have the following installed:

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- Android Studio (for Android emulator)

### Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:pierguinzani/test-notifee.git
   cd test-notifee
   ```
### Install dependencies:

If you are using Yarn:
 ```bash
   yarn install
```

If you are using npm:
 ```bash
   npm install
```

### Install dependencies:

Run on Android:
 ```bash
   yarn android
```
or
 ```bash
   npm run android
```
