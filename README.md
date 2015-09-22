# goplem
A Linkedin app to manage skills in the company. More info on http://gop-community.github.io/goplem

## Dev ##
`gulp watch`, then open localhost:8080

## Configuration ##
Before running the app, some configuration is needed.

### Create config.json ###
You have to create a config.json file in the config folder. This file contains ids and keys needed to authenticate on
Linkedin's REST API. It **should not** be visible in the public repository.

Example:

```
{
  "apiKey": "myapikey1523"
}
```

### Required parameters ###

#### apiKey ####

Each app is given an api key to authenticate on the API.
