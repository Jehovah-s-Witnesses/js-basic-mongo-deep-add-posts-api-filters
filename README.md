# js-basic-mongo-deep-add-posts-api-filters

## Steps

### Run mongo with docker

### After that run migration script(this script add some data to database)
```bash
  npm run migrate
```

## Access to mongo db

1. Should have installed [docker desktop](https://www.docker.com/products/docker-desktop/)
2. Need to check in terminal the next command(If you try after install, relaunch terminal)
```bash
docker-compose
```
or
```bash
docker compose
```
3. If command works, run ```docker-compose up``` or ```docker compose up```
4. After that you can use mongo db with next credentials

Host - localhost

Port - 27019

Username - root

Password - example

Or just use this connection string
```mongodb://root:example@localhost:4401/```

For stopping container with mongo you can use ```CTRL + C``` in an active terminal window where you run command above

Or just click on the stop button in the GUI interface of docker desktop

## Instruction

### After cloning and installing dependencies with database in docker, run migration script

```bash
npm run migrate
```

## Task

### You need implement basic pagination for endpoint `/api/posts`.

Need to add 2 query params.
The first one should have name `limit` and value of type number(be better use integer for validation schema, minimum value `1`, maximum `10`)
The second one should have name `offset` and value of type integer too(minimum `0`)
All of this are required

### Example(use postman for testing)
#### Correct

`http://127.0.0.1:4043/api/posts?limit=2&offset=3`
`http://127.0.0.1:4043/api/posts?limit=10&offset=20`
`http://127.0.0.1:4043/api/posts?limit=9&offset=1000`

#### Incorrect

`http://127.0.0.1:4043/api/posts?limit=100&offset=3`
`http://127.0.0.1:4043/api/posts?limit=absd&offset=20`
`http://127.0.0.1:4043/api/posts?limit=9&offset=sdgsdg`

### You need to change the response

Now we have response with array of posts, but neef to change in next format

```json
{
  "count": 0,
  "items": [{}]
}
```

All data need send in `items` property but for count need get count of documents and set to field `count` in response. Check link about it in this doc


### Links

[Limit in mongo](https://mongoosejs.com/docs/api/query.html#Query.prototype.limit())
[Skip in mongo](https://mongoosejs.com/docs/api/query.html#Query.prototype.skip())
[Count of documents in mongo](https://mongoosejs.com/docs/api/query.html#Query.prototype.countDocuments())
