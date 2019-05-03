# Setup
` 
git config --global user.name "gm80474"
git config --global user.email "gm80474@gmail.com"
` 
` 
git clone "https://github.com/gm80474/Helloworld.git" Helloworld1
cd Helloworld
` 
# edit \Helloworld1\package.json
` 
{
  "name": "nodejsheroku",
  "version": "0.0.1",
  "description": "deploying node js to heroku platform",
  "main": "server.js",
  "author": {
    "name": "gm80474",
    "email": "gm80474@gmail.com"
  },
  "engines": {
    "node": "6.10.3",
    "npm": "3.10.10"
  },
  "dependencies": {
    "express": "4.13.x",
    "ws": "^3.0.0"
  }
}
`

# edit \Helloworld1\rocfile
`
"web: node server.js"
`
