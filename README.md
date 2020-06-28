# Gatsbyan1.0
I decide to share my blog template as open source on github. Access the web preview at 
https://7sferry-gatsby-contentful-starters.netlify.app/
You also can access my blog at
https://ferry.now.sh

![](https://github.com/7sferry/Gatsbyan1.0/blob/master/static/example.png?raw=true)

## Tech used: 
- GatsbyJS
- React
- Contentful CMS
- Lodash
- Facebook comment
- and many others, you can check the pakcage.json

## Requirements:
- Node JS - I used Node v12.8.1
- Gatsby CLI - I used gatsby-cli v2.10.10
- Git
- Contentful CMS account
- Facebook account - optional for blog comment

## Step to Install:
- run 'git clone https://github.com/7sferry/Gatsbyan1.0.git'
- type 'cd Gatbsyan1.0' and enter
- run 'npm install'
- create file .env on your root projects directory
- set your spaceId and token from contenful CMS on '.env'
(you can look at [here](https://github.com/7sferry/Gatsbyan1.0#step-to-get-spaceid-and-token))
- you could change every properties on config at 'config.js' or modify SEO variables at '/src.components/SEO.js'
- you also could change facebook appId with your appId for comment section at '/src.components/Comment.js'
- execute 'npm run develop' on cli
- your site would be run on http://localhost:8000

## Step to get SpaceId and Token:
- after login and open the homepage content, click burger menu on the top left

![](https://github.com/7sferry/Gatsbyan1.0/blob/master/static/click%20burger%20menu.jpg?raw=true)
- create new space

![](https://github.com/7sferry/Gatsbyan1.0/blob/master/static/2.%20create%20space.jpg?raw=true)
- choose space type

![](https://github.com/7sferry/Gatsbyan1.0/blob/master/static/3.%20choose%20space%20type.jpg?raw=true)
- write down your space name and choose 'create an example' then choose blog tab and click proceed

![](https://github.com/7sferry/Gatsbyan1.0/blob/master/static/4.%20write%20down%20your%20space%20name%20and%20choose%20create%20an%20example%20and%20choose%20blog.jpg?raw=true)

- after everything has been set, go to content tab and you will see 4 default contents

![](https://github.com/7sferry/Gatsbyan1.0/blob/master/static/5.%20go%20to%20content%20tab%20and%20there%20shoulde%20be%204%20default%20contents.png?raw=true)
- go to media tab and publish all draft images (by default heroImage is required and you can't build your site with 
unpublished images)

![](https://github.com/7sferry/Gatsbyan1.0/blob/master/static/6.%20go%20to%20media%20tab%20and%20publish%20all%20images.png?raw=true)
- open setting tab and choose 'API keys'. Click 'Add api key' on the top right. Copy space ID and token to your '.env'
file you created before

![](https://github.com/7sferry/Gatsbyan1.0/blob/master/static/7.%20open%20setting%20and%20add%20api%20key%20copy-paste%20spaceid%20and%20token%20to%20env.jpg?raw=true)

- execute 'npm run develop' on cli
- now you should be able to access your content at http://localhost:8000


You can deploy your site to any static site hosting like netlify, vercel, or anywhere. There is webhook on netlify 
and you can set this up later to your site hosting for content update everytime you publish your content.

If you having trouble setting this up, don't hesitate to contact me 😎
