# Vibee

Making life socially connected.

## Idea

Vibee is a website for social interaction through remote means. Its main idea is to connect with neighbourly people and play games, talk and tell stories, deepen friendships and meet new and interesting people from various areas . Well, this website being an app for connecting the people, provides the people with an opportunity to spend countless hours mostly networking and gaming and plugging their own rooms without any disturbances.

## Tech Stack Used

 - [Random Data API](https://random-data-api.com/documentation)
 - [React JS](https://reactjs.org/)
 - [Node.JS](https://nodejs.org/en/)
 - [Express.Js](https://expressjs.com/)
 - [MongooseJS](https://mongoosejs.com/)
 - [Auth0](https://auth0.com/) `authentication provider`

## Inspiration behind this

How many of us have longed to reach out to others, while being either stuck at home and/or distant? How many of us can’t find people to play random games with amidst this pandemic? The Vibee app brings the idea of creating rooms for interaction between people after which they can decide to play some games together to stay connected. The intent of this website is to foster community which can offer widespread interaction and forge new friendships. This app also keeps in sight the statistics of the all the games played and offers many more.


## UI Design

![](https://i.imgur.com/igCUg8r.jpg)
---
![](https://i.imgur.com/s8SdTpG.png)
---
![](https://i.imgur.com/gScLpyT.jpg)

# Setting Up Locally

```
git clone https://github.com/<user-name>/Vibee.git

cd Vibee

cd client

# install dependencies required for the project
npm install
npm run start

```

Our Website uses Auth0 for Authentication, you need to configure the `config.json`
- Rename the config.example.json file to config.json file.
```
{
    "domain": "<username>.us.auth0.com",
    "clientId": "",
    "audience": "https://<user-namme>.us.auth0.com/api/v2/"
}
```

![](https://cdn2.auth0.com/docs/1.12869.0/media/articles/dashboard/client_settings.png)

- `audience`
![](https://i.imgur.com/dE79hGC.png)
## Video Demo



https://user-images.githubusercontent.com/43869046/160275259-88f25360-c42b-4950-8821-7947fc38c07f.mp4


# Members 

- [Siddhant Prateek](https://github.com/siddhantprateek)
- [Suvangi Paul](https://github.com/suvangipaul)
- [Barat Nikhita](https://github.com/NikhitaBarat)
- [Venkateshh M](https://github.com/VenkateshhM)
