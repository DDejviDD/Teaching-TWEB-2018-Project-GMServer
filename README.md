# TWEB - Project 1 - "There's no hollidays"  

> Authors : Frueh Loic - Muaremi Dejvid  
> Teacher : Monsieur Ntawuruhunga Nthimemuka Paul Aimé   
> Minion : Miguel Santamaria   
> Date : 28.10.2018  
> **[Our Api is hosted here.](http:// )**  

## What is this ?
This is our backend Api that will be used to communicate with the github Api or our MongoDB database. We love the Apiception.

## What does it do ?
Like I said, we have a server.js that will communicate with the github api to fetch the infos about certains users. The choosen ones are in the utils/sample.js file. The communication is done in the ustils/GithubAgent.js.

Once the infos are fetched they are kept in a mongo database up to 1 hour. If we call the server with the following url : `/request/:country`, the first time we fetch the datas from git and add them to the database and the next times we fetch them from the database. It's a lot faster because we don't need to do the calculation.

## Hey, I'm a bad developper and I want to steal your app, how do I do that ? 
Hey, bad developper, if you're really desperate, I'll try to teach you how to work on our Api.

### What do I need to start ?
1. **[git](https://git-scm.com/)**          to pull and push the project
2. **[mongo](https://www.mongodb.com)**     to manage a local database
2. **[nodejs](https://nodejs.org/en/)**     to run the project 
3. **[npm](https://www.npmjs.com/)**        to install the dependencies
4. **[heroku](https://www.heroku.com/)**    to deploy the project
5. **[holidays](http://bfy.tw/Ka8s)**       to ruin them

Look at their official documentation to install them. Once you have installed everything you're ready to ~~ruin your holidays~~ work on the project.

### Now what do I do ?
1. Clone the repo in a project directory. `git clone https://github.com/DDejviDD/Teaching-TWEB-2018-Project-GMServer.git`
2. Update the .env file by adding your access token.
2. Install all the dependencies `npm install`
3. Ruin your holidays `Open the project in your IDE and work on it`
4. Once you're done, you can deploy it on heroku.
 - Create the *Procfile* with the following line inside `web: node server.js`
 - Login to your heroku account `heroku login`
 - Create a new app for your project. `heroku create (name)` look carefully at the name of your app.
5. Open your favourite browser and play with the Api on **[https://"name".herokuapp.com/request/"country"](https://"name".herokuapp.com/request/"country")** The name is the name of your app, and the country is one of the one that the app supports.

Now your disappointment is immeasurable, and your hollidays are ruined.  

## Hey, I just want to play with your Api, how do I do that ?
That's a easy one. You just need to go to our web app : **[https://.herokuapp.com/request/suisse](https://https://.herokuapp.com/request/suisse)**