# TransportCanada it-02 process website
Built for the hiring process for TransportCanada IT-02 Process \# 20-MOT-EA-HRS-98277-2

## How to deploy website
### Prerequisites
- [Node.js version 16.14.1](https://nodejs.org/dist/v16.14.1/)
- NPM 8.5.0 (should be included with Node.js)
- Server should have an internet connection to install the NPM package

### Deployment Steps
1. Extract the whole directory anywhere on your machine
   - Make sure executables have read access
2. Open a terminal or command prompt and navigate to the inside of said directory (
   - For example if you put it under *C:\\* and kept the name of the directory, you would navigate to *C:\\tcit02website* (on windows you would `cd C:\\tcit02website`)
3. From the terminal/command prompt, type `npm install` and wait until it installs everything it needs
4. From the same terminal type `npm start`
5. Website server is active, leave the terminal open to let it run
6. You can access the website from the same computer by going to [http://localhost:3001/](http://localhost:3001/) if you're on the same machine or by going to \[serverIp\]:3001 if you're accessing from another machine


Written by @Guillaume_Houde