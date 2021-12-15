
![Logo](https://i.ibb.co/zsFVy1Y/12.png)


# Apigee Weather API - test assignment

This is a repository for my test assignment Apigee Weather API.
Target API: https://openweathermap.org/current




## How to use
1. Generate an API key: https://home.openweathermap.org/api_keys

2. Generate access_token:
```http
  POST https://34.120.110.39.nip.io/oauth2/v1/access_token?grant_type=client_credentials
```
### Query Params
| Key | Value     |
| :-------- | :------- | 
| `grant_type` | `client_credentials` | 

### Body

| Key | Value     | Description  |
| :-------- | :------- | :-------------------------------- |
| `client_id` | `{cliend_id}` |  `You can find it in oauth2app in Apps (Apigee UI)` |
| `client_secret` | `{client_secret}` | `You can find it in oauth2app in Apps (Apigee UI)` |

3. Make a request:

```http
  GET https://34.120.110.39.nip.io/v1/test-task?q={city}&appid={API key}
```

### Request example:

```http
  GET https://34.120.110.39.nip.io/v1/test-task?q=Lviv&appid={API key}
```

### Query Params
| Key | Value     | Description  |
| :-------- | :------- | :-------------------------------- |
| `q` | `{your city}` | `Enter desired city here` |
| `appid` | `{API key}` | `API key generated in step 1` |




### Headers:
 - for API key Verification:
   
   | Key | Value     | Description  |
   | :-------- | :------- | :-------------------------------- |
   | `apikey` | `{cliend_id}` |  `You can find it in oauth2app in Apps (Apigee UI) or in step 2` |
   
 - for oAuth2:
   
   | Key | Value     |
   | :-------- | :------- | 
   | `Authorization` | `Bearer {access_token}` | 
   
