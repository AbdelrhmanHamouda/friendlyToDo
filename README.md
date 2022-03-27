
# Reference
- reference blog can be [found here](https://www.freecodecamp.org/news/how-to-build-a-todo-application-using-reactjs-and-firebase/)

##Deal with firebase
- To get the tools `npm install -g firebase-tools`
- To init the project `firebase init` >> this needs login
  - Select emulator 
  - Select functions
- To test code `firebase serve -p 8090`
- To deploy functions `firebase deploy`
- To get firestore package `npm i firebase-admin`

## JS Express
- get express js into the project `npm i express`

## working with DB locally
When having an active db in firestore and at the same time we are interested in testing locally `firebase serve -p 8090`.
<details open>
<summary>Auth: In case of an auth related error</summary>

  1. Go to the Project Settings (Settings icon at the top left-hand side)    
  2. Go to the service accounts tab  
  3. Down there will be the option of Generating a new key. Click on that option and it will download a file with a JSON extension.
  4. We need to export these credentials to our command line session. Use the command below to do that: 
     1. `export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/[FILE_NAME].json"`
  5. After that run `firebase serve` command. If you still get the error then use the following command: `firebase login --reauth`

</details>

## Deploy 

1. Run `firebase login`
2. Run `firebase deploy`
3. Go to console url displayed in terminal