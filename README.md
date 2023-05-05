# stringNFT

React app that connects to user's Metamask wallet and creates an ERC721 "Composition" token containing a given string.
In development. Created for educational purposes.

## Setting up

Git clone this repo locally.

Go to Remix IDE at ```https://remix.ethereum.org/``` and create a new file ```Composition.sol```. Copy-paste the code of the ```Composition.sol``` file from this repository. Deploy the contract on Sepolia Ethereum test network (or other network of your choice, but I did not test that and you test other networks at your own risk). Then go to Composition.json file of this repo and change the details at the end:

```
"networks": 
{
	"<here number of the used Ethereum network, 11155111 for Sepolia>": {
		"address": "<here enter number of your newly deployed contract>" 
	}
}
```
Run: ```npm run build```. 
This will update the build file of this repo. (for more info see: "Getting Started with Create React App" below)

Host this app somewhere, for instance, you can quickly host it on ```netlify.app```. Create an account, drag and drop the build file and it's done.

Go to your app at a given address from Netlify or other hosting page.

Create a new Metamask wallet (please don’t test my experimental app on your primary Metamask wallet, I take no responsibilty for your real finances)

Go to your new Metamask settings and allow visibility of test networks

Change your network to Sepolia.

Then, you need to get some free coins. You can mint some for free here (running this for 1 minute will be enough):
```https://sepolia-faucet.pk910.de/```

Go to your app address, connect your Metamask wallet by clicking Connect Wallet. You will see your public hash key and your ETH balance available.

Enter some text and click ```Create composition``` (you can of course enter a link to a hosted, preferrably decentralised file, for example on IPFS)

Wait a little bit (even one minute) until you get an alert stating that you are now owner of the token.

Go to https://sepolia.etherscan.io and enter your public hash key, find the latest transaction and go to ```More details``` -> ```+ Click to Show more``` -> ```View input as``` -> ```UTF-8```. You will see your previously written text encoded in an NFT that you now own.

You can add the NFT to your Metamask wallet manually, by providing it the contract number and token number of your NFT.

This is a very quickly created repo, for demonstration purposes in a project, which might contain many bugs, for which I apologise. I intend to further develop this repo in the future, any recommendations are welcome.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
