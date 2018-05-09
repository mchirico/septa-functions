# septa-functions
Firebase functions for septa project. <a href="https://jira.aipiggybot.io/projects/SEPT/issues">Jira</a> is used to track issues.

[![Build Status](https://travis-ci.com/mchirico/septa-functions.svg?branch=develop)](https://travis-ci.com/mchirico/septa-functions)

### Initial Setup

A valid credentials file **service-account.json** is needed in
`~septa-functions/station/functions/test`.  That file is not in the repository.

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
npm install 
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
# Note train 454 must be running.

firebase > anyTrain()
```

### Testing

```bash
cd ~/septa-functions/station/functions
npm test
```


