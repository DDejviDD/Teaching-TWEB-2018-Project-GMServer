# TWEB - Project 1 - "There's no holidays"  

> Authors : Frueh Loic - Muaremi Dejvid  
> Teacher : Monsieur Ntawuruhunga Nthimemuka Paul Aimé   
> Minion : Miguel Santamaria   
> Date : 28.10.2018  
> **[Our Api is hosted here.](https://tweb-lfdm-project.herokuapp.com/)**  

## What is this ?
This is our backend Api that will be used to communicate with the github Api or our MongoDB database. We love this *Apiception*.


## What does it do ?
Like I said, we have a server.js that will communicate with the github api to fetch the infos about certains users from certain country. The choosen ones are in the utils/sample.js file.

Once the datas are gatered, we go through them and count the number of line for every languages found. Once it's done the result is send as a JSON to the caller.
We have a mongodb database to keep the fresh data up to one hour. Once they are expired, we clean the database and fetch the new ones. This makes the successive research a lot faster.

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
1. Clone the repo in a project directory. 
``` bash
git clone https://github.com/DDejviDD/Teaching-TWEB-2018-Project-GMServer.git
```
2. Update the **.env** file by adding your **git access token**.
3. Install all the dependencies.
```bash
npm install
```
4. Ruin your holidays.
 *`Open the project in your IDE and work on it`*
5. Once you're done, you can deploy it on heroku.
 - Create the **Procfile** with the following line inside.
 *`web: node server.js`*
 This will tell heroku what to do with the app.
 - Login to your heroku account.
 ```bash
 heroku login
 ```
 - Create a new app for your project.
 ```bash
 heroku create (name)
 ```
 Don't forget the name of your app. The name is optionnal.
 - Add the remote repository to your git and push your app.
 ``` bash
 git remote add heroku  https://git.heroku.com/name.git
 git add .
 git commit -m "Deploy on heroku"
 git push heroku master
 ```
5. Open your favourite browser and play with the Api on **[https://name.herokuapp.com/](https://name.herokuapp.com/)** Replace the name by the name of your app.

> *Now your disappointment is immeasurable, and your holidays are ruined.*  

## Hey, I just want to play with your Api, how do I do that ?
That's easy. You just need to go to our web app : **[https://tweb-lfdm-project.herokuapp.com/](https://tweb-lfdm-project.herokuapp.com/)**

The following country are actually usable : [*afrique*, *bresil*, *chine*, *inde*, *japon*, *russie*, *suisse*, *suede*, *usa*].

> We hope you've ruined your holidays well.
> Sincerely yours,
> Loïc and Dejvid 