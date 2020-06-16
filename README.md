Repo for example of usage of GKE and github actions

Build project for prod:

Run yarn build:production

Build the image:

docker build -t <YOUR DOCKERUSERNAME>/zopa-gke-example .

To run:

docker run -p 8080:8080 <YOUR DOCKERUSERNAME>/zopa-gke-example

Create secrets to access GKE instance:

GKE_EMAIL go to the IAM screen and create a service account, create a key which you will need below

GKE_KEY RSA key generated for the service account
Go to the folder where the json downloaded in your terminal and type:
base64 <filename.json>

Then next go to your github repo and add the following secrets:

https://cloud.google.com/kubernetes-engine/docs/tutorials/authenticating-to-cloud-platform more info on authenticating

GKE_PROJECT: Your GKE project link, you can find it on the main panel on GCS
