# Node.js Service deployment

## Setup Azure VM using Terraform

### 1. Set up version.tf
    Terraform will use azurerm provider version 4.31.0

### 2. Authenticate Azure for Terraform using Azure CLI login
    ``` 
    az login
    ```

### 3. Set up deploy.tf for deployment of VM 
    1. Create SSH key pair locally to add to VM
    2. Add public IP, security group to allow SSH
    3. Use tf to inject dynamic values into inventory.tml

### 4. Initialize terraform
```
    # Initialize project
    terraform init

    # Preview changes
    terraform plan

    # Apply configurations
    terraform apply
```

## Set up ansible playbook

### 1. Make setup.yml playbook 
It runs Ansible roles (base & app) with superuser previleges on all hosts, automating server configuration

### 2. Create roles folder with the roles

### Create a base role
  - Base role responsible for setting up utilities like nodejs.
  
### Create the app role
  - Clone repo from github
  - Install npm dependencies & build app
  - Create systemd service for easier management

## Set up github workflows (Due to insufficient access control, unable to automate terraform )
- Set up secrets for ssh private key
- Run and deploy ansible playbook on push

