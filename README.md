# septa-functions
Firebase functions for septa project. <a href="https://jira.aipiggybot.io/projects/SEPT/issues">Jira</a> is used to track issues.

[![Build Status](https://travis-ci.com/mchirico/septa-functions.svg?branch=develop)](https://travis-ci.com/mchirico/septa-functions)

### Initial Setup
```bash
# Need global tools
npm install -g firebase-tools

# 

cd ~
 
# Clone repo and firebase init
git clone git@github.com:mchirico/septa-functions.git
cd septa-functions/station
firebase init


```


### Updating Tools

```bash
# You should update tools
cd ~/septa-functions/station/functions
npm install firebase-functions@latest firebase-admin@latest --save
```

### Add/Update Functions

Note src is in `septa-functions/station/functions/src/index.ts`, but deploy is usually run from station.

```bash
cd ~/septa-functions/station
firebase deploy --only functions:trainView

```


### Firebase Shell

```bash
cd ~/septa-functions/station
firebase functions:shell

firebase > trainView.get('?trainid=454')
```

### Testing

```bash
cd ~/septa-functions/station/functions
npm install --save-dev firebase-functions-test
npm install --save-dev mocha
```


