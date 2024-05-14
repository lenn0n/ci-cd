## CREATING VM REPO (OESPH)
Step 1: Login To SSH (via PowerShell):
>     ssh dev@192.168.1.103

Step 2: Paste the script below: 
>     target_dir="checkout"
>     source_dir="oleplatformv4-web"
>     
>     mkdir /var/www/html/dev/repository/${target_dir}
>     cd /var/www/html/dev/repository/${target_dir}
>     git init
>     cp /var/www/html/dev/repository/${source_dir}/.git/config /var/www/html/dev/repository/${target_dir}/.git/config
>     cd .git
>     cd hooks
>     
>     cat > post-receive-script << EOL
>     #!/bin/bash
>     BRANCH="master"
>     
>     while read oldrev newrev ref
>     do
>             # only checking out the master (or whatever branch you would like to deploy)
>             if [ "$ref" = "refs/heads/$BRANCH" ];
>             then
>                     echo "Ref $ref received. Deploying ${BRANCH} branch to production..."
>                     git --work-tree=/var/www/html/dev/${target_dir}/ --git-dir=/var/www/html/dev/repository/${target_dir}/.git checkout -f $BRANCH
>             else
>                     echo "Ref $ref received. Doing nothing: only the ${BRANCH} branch may be deployed on this server."
>             fi
>     EOL
>     echo "Repo created: ssh://dev@192.168.1.103/var/www/html/dev/repository/${target_dir}/.git"
>     cd ..





## JMETER STRESS TESTING

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

## ROLLING OUT DEPLOYMENTS
>		 #!/bin/bash
> 
>		 # Define the namespace
>		 NAMESPACE="your-namespace"
> 
>		 # Get a list of deployments in the specified namespace
>		 DEPLOYMENTS=$(kubectl get deployments -n $NAMESPACE -o=jsonpath='{.items[*].metadata.name}')
> 
>		 # Iterate through the deployments and trigger a rollout restart
>		 for DEPLOYMENT in $DEPLOYMENTS; do
>		     echo "Rolling out restart for deployment: $DEPLOYMENT"
>		     kubectl rollout restart deployment $DEPLOYMENT -n $NAMESPACE
>		 
>		     # Wait for the rollout to complete
>		     while ! kubectl rollout status deployment $DEPLOYMENT -n $NAMESPACE | grep "successfully rolled out"; do
>		         echo "Waiting for rollout of $DEPLOYMENT to complete..."
>		         sleep 5
>		     done
> 		
>		     echo "Rollout for $DEPLOYMENT completed"
>		 done

## KUBECTL COMMANDS

Enter Pod's shell:
>     kubectl exec --stdin --tty shell-demo -- /bin/bash

POD in a specific container
>     kubectl cp <file-spec-src> <file-spec-dest> -c <specific-container>

Copy /tmp/foo local file to /tmp/bar in a remote pod in namespace
>     kubectl cp /tmp/foo <some-namespace>/<some-pod>:/tmp/bar

Copy /tmp/foo from a remote pod to /tmp/bar locally
>     kubectl cp <some-namespace>/<some-pod>:/tmp/foo /tmp/bar

*Example Copy Files*
>     kubectl cp api-php-7f48bb7997-7286l:checkout/public_html/exports/logs/api-php.csv api-php.csv

EXTRACTING DATA FROM KUBECTL TO YAML
>     kubectl get serviceaccounts default -o yaml > ./sa.yam

CREATE SECRET FROM EXISTING DATA
>     kubectl create secret generic _NAME_--from-file=.dockerconfigjson=_PATH_TO_/.docker/config.json --type=kubernetes.io/dockerconfigjson

If you need to pull an image from a private **Docker Hub** repository, you can use the following.

- CREATE SECRET KEY FROM DOCKERHUB

>     kubectl create secret docker-registry dockerhub --docker-server=DOCKER_REGISTRY_SERVER --docker-username=DOCKER_USER --docker-password=DOCKER_PASSWORD --docker-email=DOCKER_EMAIL

- RETRIEVE CURRENT SERVICE ACCOUNT
>     kubectl get serviceaccounts default -o yaml > ./sa.yaml

- EDIT sa.yaml AND ADD **ImagePullSecrets** AFTER SECRETS
>     imagePullSecrets:
>     - name: dockerhub

- UPDATE SERVICE ACCOUNT
>     kubectl replace serviceaccount default -f ./sa.yaml

CREATE DATA FROM FILE
>     kubectl create secret generic server-a --from-file=FILE_LOCATION




## CREATING K8S INGRESS:

- First install NGINX-INGRESS CONTROLLER
>     kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.0/deploy/static/provider/cloud/deploy.yaml

- Create YAML file and apply to cluster
>     apiVersion: networking.k8s.io/v1
>     kind: Ingress
>     metadata:
>       name: frontend-ingress
>       namespace: default
>     spec:
>       ingressClassName: nginx
>       rules:
>       - host: lennontest.com
>         http:
>           paths:
>           - backend:
>               service:
>                 name: frontend-service
>                 port:
>                   number: 30000
>             path: /
>             pathType: Prefix





## CREATE SSL CERT WITH LET'S ENCRYPT
- INSTALL CERT MANAGER
>     kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.12.0/cert-manager.yaml

- CREATE CLUSTER ISSUER YAML FILE AND APPLY TO CLUSTER
>     apiVersion: cert-manager.io/v1
>     kind: ClusterIssuer
>     metadata:
>       name: letsencrypt-prod
>       namespace: cert-manager
>     spec:
>       acme:
>         email: gameoveralisa@gmail.com
>         server: https://acme-v02.api.letsencrypt.org/directory
>         privateKeySecretRef:
>           name: letsencrypt-cluster-issuer
>         solvers:
>         - http01:
>             ingress:
>               class: nginx


- CREATE CERTIFICATE YAML FILE AND APPLY TO CLUSTER
>     apiVersion: cert-manager.io/v1
>     kind: Certificate
>     metadata:
>       name: letsencrypt-prod
>       namespace: default
>     spec:
>       secretName: secure-lenn0n-xyz-tls
>       duration: 2160h # 90d
>       renewBefore: 360h # 15d
>       subject:
>         organizations:
>           - lenn0n-xyz
>       isCA: false
>       privateKey:
>         algorithm: RSA
>         encoding: PKCS1
>         size: 2048
>       usages:
>         - server auth
>         - client auth
>       dnsNames:
>         - lenn0n.xyz
>       issuerRef:
>         name: letsencrypt-prod
>         kind: ClusterIssuer
>         group: cert-manager.io


- UPDATE INGRESS AND ADD TLS OBJECT AND USE SECRETNAME **secure-lenn0n-xyz-tls**
>       tls:
>       - hosts:
>         - lenn0n.xyz
>         secretName: secure-lenn0n-xyz-tls


FOR NGINX + UBUNTU SERVER, FOLLOW CERT-BOT:
>   https://certbot.eff.org/instructions?ws=nginx&os=ubuntuxenial




## SELF-SIGNED CERTS USING CERT-MANAGER

- INSTALL CERT-MANAGER IN CLUSTER USING MANIFEST
>     kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.14.4/cert-manager.yaml

- CREATE KEY AND CERT FROM URL
	* KEY: 
  >     openssl genrsa -out ca.key 2048
	* CRT: 
  >     openssl req -x509 -new -nodes -key ca.key -sha256 -subj "//CN=URL" - days 1024 -out ca.crt

- CREATE SECRET ca-key-pair TO CLUSTER
>     kubectl create secret tls ca-key-pair --key=ca.key --cert=ca.crt

- CREATE ISSUER YAML FILE AND APPLY TO CLUSTER
>     apiVersion: cert-manager.io/v1
>     kind: Issuer
>     metadata:
>      name: ca-issuer
>      namespace: default
>     spec:
>      ca:
>       secretName: ca-key-pair

- CREATE CERTIFICATE YAML FILE AND APPLY TO CLUSTER
>     apiVersion: cert-manager.io/v1
>     kind: Certificate
>     metadata:
>      name: lenn0n-xyz
>      namespace: default
>     spec:
>      secretName: lenn0n-xyz-tls
>      issuerRef:
>       name: ca-issuer
>       kind: Issuer
>      commonName: lenn0n.xyz
>      dnsNames:
>       - www.lenn0n.xyz

- USE secretName: lenn0n-xyz-tls IN INGRESS FILE
>       tls:
>       - hosts:
>         - lenn0n.xyz
>         secretName: lenn0n-xyz-tls




## TROUBLESHOOTING
Enable Docker HyperVisor
>     bcdedit /set 




## LINUX COMMANDS

- RESTART SSH 
>     sudo systemctl restart sshd

- REBOOT VM
>     sudo reboot

- ADD USER
>     adduser NAME_OF_USER

- SWITCH TO USER
>     su - NAME_OF_USER

- CHANGE PW OF CURRENT USER
>     passwd

- ADD PASSWORD AUTH IN SSH CONFIG
>     vim /etc/ssh/sshd_config
>     PasswordAuthentication yes
>     PubkeyAuthentication yes

- ADD PERMISSION TO USER TO CREATE FOLDER
>     sudo usermod -aG sudo NAME_OF_USER

- ADD PERMISSION TO USER TO EXECUTE COMMANDS INSIDE THE FOLDER
>     sudo chmod -R 777 PATH_OF_FOLDER

- REMOVE 'SUDO' TO USER WHEN EXECUTING COMMANDS
>     sudo visudo -f /etc/sudoers.d/NAME_OF_USER dev ALL=(ALL) NOPASSWD: /usr/sbin/service nginx start,/usr/sbin/service nginx stop,/usr/sbin/service nginx restart

- REMOVE AUTOSTART NGINX
>     sudo update-rc.d -f nginx disable

- ALLOW NGINX HTTP
>     sudo ufw allow 'Nginx HTTP'




## CREATE SIMPLE EXPRESS SERVER IN TYPESCRIPT

1. Install packages
>     git init
>     npm init
>     npm install express cors dotenv
>     npm install @types/cors @types/express @types/node typescript nodemon ts-node tsconfig-paths -D

2. Add script object inside package.json
>     "scripts": {
>       "start": "nodemon -r tsconfig-paths/register src/app.ts"
>     },

3. Add .gitignore in root folder:
>     node_modules 

4. Add tsconfig and updated
*npx --init*
or
*tsc --init*

>     "ts-node": {
>       "require": ["tsconfig-paths/register"]
>     },
>     compilerOptions: {
>       "baseUrl": ".",
>       "paths": {
>         "@*": ["./src/*"],
>       },
>       "outDir": "./dist",
>     },
>     "include": [
>       "./src/**/*"
>     ]

5. Create .env in root folder
>     SERVER_HOST='localhost'
>     SERVER_PORT='5000'

6. Create file in /src/app.ts
>     import express from "express"
>     import routes from "@routes/api-routes"
>     import cors from 'cors';
> 
>     require('dotenv').config();
> 
>     const app = express();
>     const expressParseOptions = {
>       limit: '500mb',
>     };
> 
>     app.use(express.json(expressParseOptions));
>     app.use(cors());
>     app.use("/api", routes);
> 
>     app.listen(process.env.SERVER_PORT, ()=> {
>       console.info(`API Server is now running on port ${process.env.SERVER_PORT}.`)
>     })

7. Create file in /src/routes/api-routes.ts
>       import { Router } from "express";
>       import { NextFunction, Request, Response } from "express";
> 
>       const router = Router();
> 
>       const welcome = async (req: Request, res: Response, next: NextFunction) => {
>         return res.status(200).json({ message: "Welcome to CI/CD" })
>       }
> 
>       router.get("/", welcome)
> 
>       export default router;




## IMPLEMENTING CI/CD USING GITHUB ACTIONS 
- Create any instance in cloud service provider (alibaba, aws, azure)
- Configure VM, install packages like node, npm, nginx
- Setup VPC and enable 0.0.0.0:80
- Create folder for Runners (eg: /var/www/frontend) inside your virtual machine
- Create git repo and go to **'Settings' > 'Actions' > 'Runners'**, follow the given instruction.
- Setup github action workflows, **/.github/workflows/node.js.yml**
>     name: Node.js CI
>     
>     # Controls when the workflow will run
>     on:
>       # Triggers the workflow on push or pull request events but only for the "main" branch
>       push:
>         branches: [ "master" ]
>       pull_request:
>         branches: [ "master" ]
>     
>       # Allows you to run this workflow manually from the Actions tab
>       workflow_dispatch:
>     
>     # A workflow run is made up of one or more jobs that can run sequentially or in parallel
>     jobs:
>       # This workflow contains a single job called "build"
>       build:
>         # The type of runner that the job will run on
>         runs-on: self-hosted
>     
>         # Steps represent a sequence of tasks that will be executed as part of the job
>         steps:
>           # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
>           - uses: actions/checkout@v3
>     
>           - name: Set up Node.js
>             uses: actions/setup-node@v3
>             with:
>               node-version: 12.22.9
>               cache: 'npm'
>     
>           - name: npm install, build and test
>             run: |
>               npm i
>               pm2 stop 0
>               pm2 start 0
>               pm2 save

- Allow user (non-root) to use PORT 1024 below
>     sudo apt-get install libcap2-bin
>     sudo setcap cap_net_bind_service=+ep /usr/local/bin/node 

- Install PM2 inside your VM
>     sudo npm install pm2@latest -g
*Push Updated / Changes to Repository before running PM2 instance.*

- Run for the first time
>     pm2 start npm --name "mywebapp" -- run start
>     pm2 save


## NGINX REVERSE PROXY
>     nano /etc/nginx/sites-available/lenn0n.io.conf
- Paste code below: 
>     server {
>       root /var/www/_work/ci-cd/ci-cd/src/frontend/build;
>       index index.html index.htm;
>       server_name 8.220.128.99;

>       location / {
>         try_files $uri $uri/ /index.html;
>       }

>       location /api {
>         proxy_pass http://localhost:5000/api;
>         proxy_http_version 1.1;
>         proxy_set_header Upgrade $http_upgrade;
>         proxy_set_header Connection 'upgrade';
>         proxy_set_header Host $host;
>         proxy_cache_bypass $http_upgrade;
>       }
>     }

- LINK TO SITES ENABLED
>     ln -s /etc/nginx/sites-available/lenn0n.io.conf /etc/nginx/sites-enabled/

- RESTART NGINX SERVICE
>     sudo systemctl restart nginx


## GETTING STARTED WITH DIGITAL OCEAN K8S

- DOWNLOAD K8S CONFIG FILE

- FOR MANUAL MODE, ALWAYS INCLUDE KUBECONFIG
>     kubectl --kubeconfig=/<pathtodirectory>/k8s-1-29-1-do-0-sgp1-1709538228227-kubeconfig.yaml get nodes

- UPDATE **/.kube/config** file with above yaml file values

- INSTALL KUBERNETES DASHBOARD
>     kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml

- CREATE ACCESS TOKEN FROM **API > ACCESS KEYS**

- ACCESS DASHBOARD
>     http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login

- INSTALL CERT-MANAGER
>     kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.14.3/cert-manager.yaml


## NSFW-ROOP AI 
- DOWNLOAD PYTHON 3.10.9 and GIT, GIT LFS
	- >   https://www.python.org/ftp/python/3.10.9/python-3.10.9-amd64.exe
	- >   https://git-scm.com/downloads
  - >   https://github.com/git-lfs/git-lfs/releases/download/v3.4.0/git-lfs-windows-v3.4.0.exe

- CLONE NSFW-ROOP
  - >   https://github.com/GosuDRM/nsfw-roop.git

- CREATE PYTHON VENV
	- >     python -m venv NAME_OF_VENV
	- >     activate NAME_OF_VENV\Scripts\activate.bat

- UPDATE PIP - make sure you are in VENV
	- >     python -m pip install --upgrade pip

- GET MICROSOFT VISUAL C++ 2015
	- >     winget install -e --id Microsoft.VCRedist.2015+.x64

- DOWNLOAD VISUAL CPP BUILD TOOLS
	- >    https://visualstudio.microsoft.com/visual-cpp-build-tools/
	- After opening visual studio installler, check:
		* GET 'Visual Studio Build Tools', modify individual components
		- .NET Framework 4.7.2 targeting pack
		- .NET Framework 4.8 SDK
		- Code Tools: Text Template Transformation
		- Compilers - C++ 2022 Redistributable Update
		- Compilers - C++ Clang Compiller for Windows (14.0.5)
		- Compilers - C++ Clang-cl from v143 build tools (x64/x86)
		- Compilers - CMake tools for windows
		- Compilers - Modules for v143 build tools (x64/x86 - experimental)
		- Compilers - C++ /CLI suppoer for v143 build tools (Latest)
		- Compilers - MSVC v143 - VS 2022 C++ x64/x86 build tools (Latest)
		- Debugging - C++ AddressSanitizer
		- Debugging - Testing tools core features - Build Tools
		- Development - C++ Build Tools core features
		- Development - C++ core features
		- SDK - C++ ATL for latest v143 build tools (x86 & x64)
		- SDK - C++ MFC for atest v143 build toolls (x86 & x64)
		- Windows 'X' SDK
		- Windows Universal C Runtime

- GET FFMPEG
	- >     winget install -e --id Gyan.FFmpeg
	- manually https://github.com/GyanD/codexffmpeg/releases and add to PATH
	- >     shutdown /r

- DOWNLOAD CUDNN
  - >    https://huggingface.co/MonsterMMORPG/SECourses/resolve/main/cudnn%208.7.0.84.zip
	- PUT INTO **C:\NVIDIA\CUDNN\8.7.0.84\bin**
	- ADD TO ENV PATH

- DOWNLOAD MODEL
	- >    https://huggingface.co/ezioruan/inswapper_128.onnx/resolve/main/inswapper_128.onnx
	- PUT TO **/models/inswapper_128.onnx**

- DOWNLOAD GFPGAN
	- >    https://github.com/TencentARC/GFPGAN/releases/download/v1.3.4/GFPGANv1.4.pth
  - PUT TO **/models/GFPGANv1.4.pth**

- FOR AMD ONLY
- >       pip install onnxruntime-directml==1.15.1

- DOWNLOAD CUDA ToolKit 11.8
	- >    https://developer.nvidia.com/cuda-11-8-0-download-archive?target_os=Windows&target_arch=x86_64&target_version=11&target_type=exe_local

- DOWNLOAD TORCH
	- >    https://download.pytorch.org/whl/cu118/torch-2.0.1%2Bcu118-cp310-cp310-win_amd64.whl
	- >     pip install torch-2.0.1%2Bcu118-cp310-cp310-win_amd64.whl
	- >     pip3 install torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

- INSTALL requirements.txt
-   >     pip install -r requirements.txt

- RUN
	- USE **--execution-provider** dml IF YOU HAVE GPU, ELSE YOU CAN USE DIRECTML 
	- **--S** MUST BE IMAGE, --T MUST BE VIDEO
	- python run.py **--s** content/x.jpg **--t** content/x.mp4 **--o** content/EDITED_NSFW.mp4 **--execution-provider** dml **--execution-threads** 1 **--frame-processor** face_swapper face_enhancer
	- python run.py **--s** content/jj2.jpg **--t** content/video2.mp4 **--o** content/EDITED_NSFW_LOW2.mp4 **--execution-provider** cpu **--frame-processor** face_swapper


- CUSTOM REQUIREMENTS

>	--extra-index-url https://download.pytorch.org/whl/cu118

>	numpy==1.23.5
>	opencv-python==4.7.0.72
>	onnx==1.14.0
>	insightface==0.7.3
>	psutil==5.9.5
>	tk==0.1.0
>	customtkinter==5.1.3
>	pillow==9.5.0
>	onnxruntime==1.15.0; sys_platform == 'darwin' and platform_machine != 'arm64'
>	onnxruntime-silicon==1.13.1; sys_platform == 'darwin' and platform_machine == 'arm64'
>	onnxruntime-gpu==1.15.0; sys_platform != 'darwin'
>	tensorflow==2.13.0rc1; sys_platform == 'darwin'
>	tensorflow==2.12.0; sys_platform != 'darwin'
>	opennsfw2==0.10.2
>	protobuf==4.23.2
>	tqdm==4.65.0
>	gfpgan==1.3.8
