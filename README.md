#### JMETER STRESS TESTING

> .\jmeter -n -t ole-config.jmx -l logs.txt

- N tells the jMeter to run in CLI MODE
- T template to be used
- L store logs

*In thread group, you can specify the count of users that will interact to the stress testing.*
> Potion > Add > Thread Users > Thread Group

*In sampler, you can specify the host and port to be used in recoding of actions thru FIREFOX Browser. It is recommended to use FIREFOX to avoid some errors while performing the record actions. **NOTE: Add server name (URL) and path*** 

> Settings > Add > Sampler > HTTP Request
> Potion > Add > Non-Test Elements > HTTPS Test Script Recorder
> Settings > Add > Logic Controller > Recording Controller

Open Firefox Browser > Add Proxy

> HTTP Proxy: localhost
> Port: 8181 (or any port you've set)
> App use proxy to all protocols as well.

Add certificates in Firefox if not set:

> Goto certificates section in your browser
> Authorities > Import  > CERT IN BIN folder
> HTTPS Test Script Recorder > Add > Listener > View Results Tree
> HTTPS Test Script Recorder  > [SELECT TARGET CONTROLLER]

#### KUBECTL COMMANDS

Enter Pod's shell:
> kubectl exec --stdin --tty shell-demo -- /bin/bash

POD in a specific container
> kubectl cp <file-spec-src> <file-spec-dest> -c <specific-container>

Copy /tmp/foo local file to /tmp/bar in a remote pod in namespace
> kubectl cp /tmp/foo <some-namespace>/<some-pod>:/tmp/bar

Copy /tmp/foo from a remote pod to /tmp/bar locally
> kubectl cp <some-namespace>/<some-pod>:/tmp/foo /tmp/bar

*Example Copy Files*
> kubectl cp api-php-7f48bb7997-7286l:checkout/public_html/exports/logs/api-php-7f48bb7997-7286l.csv api-php-7f48bb7997-7286l.csv


#### TROUBLESHOOTING
Enable Docker HyperVisor
> bcdedit /set 


#### LINUX COMMANDS
Change file permission:
> chmod -R 777 /var/www


#### CREATE SIMPLE EXPRESS SERVER IN TYPESCRIPT

1. Install packages
> git init
> npm init
> npm install express cors dotenv
> npm install @types/cors @types/express @types/node typescript nodemon ts-node tsconfig-paths -D

2. Add script object inside package.json
> "scripts": {
>    "start": "nodemon -r tsconfig-paths/register src/app.ts"
> },

3. Add .gitignore in root folder:
> node_modules 

4. Add tsconfig and updated
*npx --init*
or
*tsc --init*

> "ts-node": {
>   "require": ["tsconfig-paths/register"]
> },
> compilerOptions: {
>  "baseUrl": ".",
>  "paths": {
>   "@*": ["./src/*"],
>  },
>  "outDir": "./dist",
> },
> "include": [
>   "./src/**/*"
> ]

. Create .env in root folder
> SERVER_HOST='localhost'
> SERVER_PORT='5000'

6. Create file in /src/app.ts
> import express from "express"
> import routes from "@routes/api-routes"
> import cors from 'cors';
> 
> require('dotenv').config();
> 
> const app = express();
> const expressParseOptions = {
>   limit: '500mb',
> };
> 
> app.use(express.json(expressParseOptions));
> app.use(cors());
> app.use("/api", routes);
> 
> app.listen(process.env.SERVER_PORT, ()=> {
>   console.info(`API Server is now running on port ${process.env.SERVER_PORT}.`)
> })

7. Create file in /src/routes/api-routes.ts
> import { Router } from "express";
> import { NextFunction, Request, Response } from "express";
> 
> const router = Router();
> 
> const welcome = async (req: Request, res: Response, next: NextFunction) => {
>   return res.status(200).json({ message: "Welcome to CI/CD" })
> }
> 
> router.get("/", welcome)
> 
> export default router;


#### IMPLEMENTING CI/CD USING GITHUB ACTIONS 8.220.128.99
- Create any instance in cloud service provider (alibaba, aws, azure)
- Configure VM, install packages like node, npm, nginx
- Setup VPC and enable 0.0.0.0:80
- Create folder for Runners (eg: /var/www/frontend) inside your virtual machine
- Create git repo and go to 'Settings' > 'Actions' > 'Runners', follow the given instruction.
- Setup github action workflows, /.github/workflows/node.js.yml
> name: Node.js CI

> # Controls when the workflow will run
> on:
>   # Triggers the workflow on push or pull request events but only for the "main" branch
>   push:
>     branches: [ "master" ]
>   pull_request:
>     branches: [ "master" ]
> 
>   # Allows you to run this workflow manually from the Actions tab
>   workflow_dispatch:
> 
> # A workflow run is made up of one or more jobs that can run sequentially or in parallel
> jobs:
>   # This workflow contains a single job called "build"
>   build:
>     # The type of runner that the job will run on
>     runs-on: self-hosted
> 
>     # Steps represent a sequence of tasks that will be executed as part of the job
>     steps:
>       # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
>       - uses: actions/checkout@v3
> 
>       - name: Set up Node.js
>         uses: actions/setup-node@v3
>         with:
>           node-version: 12.22.9
>           cache: 'npm'
> 
>       - name: npm install, build and test
>         run: |
>           npm i
>           pm2 stop 0
>           pm2 start 0
>           pm2 save
> 
- Install PM2 inside your VM
sudo npm install pm2@latest -g

- Push Changes to Repo

- Run for the first time
pm2 start npm --name "mywebapp" -- run start
pm2 save


* HELPFUL TIPS *

- RESTART SSH 
sudo systemctl restart sshd

- REBOOT VM
sudo reboot

- ADD USER
adduser NAME_OF_USER

- SWITCH TO USER
su - NAME_OF_USER

- CHANGE PW OF CURRENT USER
passwd

- ADD PASSWORD AUTH IN SSH CONFIG
vim /etc/ssh/sshd_config
PasswordAuthentication yes
PubkeyAuthentication yes

- ADD PERMISSION TO USER TO CREATE FOLDER
sudo usermod -aG sudo NAME_OF_USER

- ADD PERMISSION TO USER TO EXECUTE COMMANDS INSIDE THE FOLDER
sudo chmod -R 777 PATH_OF_FOLDER

- REMOVE 'SUDO' TO USER WHEN EXECUTING COMMANDS
sudo visudo -f /etc/sudoers.d/NAME_OF_USER
dev ALL=(ALL) NOPASSWD: /usr/sbin/service nginx start,/usr/sbin/service nginx stop,/usr/sbin/service nginx restart
