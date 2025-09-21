How to run the project

1. Use node 20.19.1 version
2. Run this command to install dependencies
```bash
npm install
```
3. Create .env file in root and copy the secret key here (https://drive.google.com/file/d/1fhHRc25jl3uDZ0zZROwYgoiIBIccNL-W/view?usp=sharing)
4. Use this command to run the app
```bash
node --env-file=.env server.mjs
```
5. Use postman and test this API http://localhost:3000/scrape with POST method with this request body
```bash
{
    "url": "https://www.ebay.com/sch/i.html?_from=R40&_nkw=nike&_sacat=0&rt=nc&_pgn=1",
    "page": 1,
    "size": 10
}
```
6. The result will be like this
```bash
{
    "result": "....."
}
```
The video is available here
https://drive.google.com/file/d/1pL7KzRpVgjdb7RCDEq_hy5tA5fkMwZk7/view?usp=sharing
