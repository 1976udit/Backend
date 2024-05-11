import express from 'express';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 5000;
app.use(cors());
// const data = {
//     "login": "1976udit",
//     "id": 165473837,
//     "node_id": "U_kgDOCdzuLQ",
//     "avatar_url": "https://avatars.githubusercontent.com/u/165473837?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/1976udit",
//     "html_url": "https://github.com/1976udit",
//     "followers_url": "https://api.github.com/users/1976udit/followers",
//     "following_url": "https://api.github.com/users/1976udit/following{/other_user}",
//     "gists_url": "https://api.github.com/users/1976udit/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/1976udit/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/1976udit/subscriptions",
//     "organizations_url": "https://api.github.com/users/1976udit/orgs",
//     "repos_url": "https://api.github.com/users/1976udit/repos",
//     "events_url": "https://api.github.com/users/1976udit/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/1976udit/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 3,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 1,
//     "created_at": "2024-03-30T10:39:47Z",
//     "updated_at": "2024-04-20T13:17:34Z"
//   }

const list = [
    {
        name : "udit",
        id : 100,
        branch : "DS"
    },
    {
        name : "kt",
        id : 200,
        branch : "EC"
    },
    {
        name : "aryan",
        id : 500,
        branch : "CSE"
    }
]

app.get('/' , (req,res)=>{
      res.send("hey");
})

app.get('/git' , (req,res)=>{
    res.json(data);
})

app.get('/api/list',(req,res)=> {
    res.json(list);
})

app.listen(port,() => {
    console.log("this server is live")
})