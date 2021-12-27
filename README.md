A credit card input field for React

Install
With npm

```
npm i react-card-number
```
or
```
yarn add react-card-number
```
Usage
```
import {Card} from 'react-card-number';
 
<Card
        title="title"
        className={{
            rootClassName:"aa",
            labelClassName:"bb",
            inputClassName:"cc"
        }} 
        style={{
          rootStyles:{},
          labelStyles:{},
          inputStyles:{}
        }}
        maxLength={19}
        splitter="_" />
```

Contributing
Contributing to react-card-number is easy! With four simple steps:

Create a branch
Fork the repository
git clone <your-repo-url> to clone your GitHub repo to your local one
git pull origin master to pull the latest code
npm install to install the project's dependencies
git checkout -b the-name-of-my-branch to create a branch (use something short and comprehensible.
git remote add upstream https://github.com/behzadsoleimani/react-card-number.git and git pull upstream master to update your fork from this source.
Make the change

