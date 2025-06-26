# Node.js Service deployment

## Setup Azure VM using Terraform

### 1. Set up version.tf
    Terraform will use azurerm provider version 4.31.0

### 2. Authenticate Azure for Terraform using Azure CLI login
    ``` 
    az login
    ```

### 3. Set up deploy.tf for deployment of VM 
    1. Add public IP, security group to allow SSH
    2. Use tf to inject dynamic values into inventory.tml

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
It runs Ansible roles (base, nginx, app & ssh) with superuser previleges on all hosts, automating server configuration

### 2. Create roles folder with the roles

### Create a base role
  Base role responsible for setting up utilities, update server, install fail2ban.

### Create nginx role
  1. Install and configure Nginx.
  2. Create template file nginx.conf.j2 for Nginx configuration
  3. Create handler that will restart Nginx(For when config changes)

### Create the app role
  

### Create ssh role
  Adds public SSH key to the server.