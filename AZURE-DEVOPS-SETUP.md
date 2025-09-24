# 🚀 Azure DevOps Pipeline Setup Guide

## Overview
This guide shows how to set up Azure DevOps pipelines to deploy both dev and master branches to a single Azure Static Web App service.

## 🏗️ Architecture

```
Azure DevOps Pipeline
├── Master Branch → Production Environment
│   └── URL: https://app01.azurestaticapps.net
├── Dev Branch → Development Environment  
│   └── URL: https://app01.azurestaticapps.net/staging
└── PR Branches → Preview Environments
    └── URL: https://app01.azurestaticapps.net/pr-{number}
```

## 📋 Prerequisites

- Azure DevOps organization and project
- Azure subscription with Static Web Apps
- GitHub repository: `singhmohit14072002/Lentrack-`
- Azure Static Web App: `App01`

## 🔧 Step-by-Step Setup

### 1. Create Azure DevOps Project

1. Go to [Azure DevOps](https://dev.azure.com)
2. Create new project: `Front-01-DevOps`
3. Select Git as version control
4. Choose appropriate visibility

### 2. Connect GitHub Repository

1. In Azure DevOps, go to **Repos** → **Files**
2. Click **Import a repository**
3. Enter repository URL: `https://github.com/singhmohit14072002/Lentrack-.git`
4. Click **Import**

### 3. Get Azure Static Web Apps API Token

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to your Static Web App: `App01`
3. Go to **Overview** → **Manage deployment token**
4. Copy the deployment token (already provided: a0115aa86035ad8304d35f84f03cdb23875d074496d39306376b3ad03eeac12202-ad07f7bc-68d9-4918-89ab-59c7d7bbbdbd0101102046745510)
5. In Azure DevOps, go to **Pipelines** → **Library**
6. Create new variable group: `StaticWebApp-Secrets`
7. Add variable: `AZURE_STATIC_WEB_APPS_API_TOKEN` with value: `a0115aa86035ad8304d35f84f03cdb23875d074496d39306376b3ad03eeac12202-ad07f7bc-68d9-4918-89ab-59c7d7bbbdbd0101102046745510` (mark as secret)

### 4. Create Pipeline

1. In Azure DevOps, go to **Pipelines** → **Pipelines**
2. Click **New pipeline**
3. Select **Azure Repos Git** (your imported repo)
4. Choose **Existing Azure Pipelines YAML file**
5. Select `azure-pipelines-simple.yml`
6. Click **Continue**

### 5. Configure Pipeline Variables

Add these variables to your pipeline:

```yaml
# Pipeline Variables
staticWebAppName: 'App01'
resourceGroupName: 'Practice_RG'
```

### 6. Run Pipeline

1. Click **Save** and **Run**
2. Monitor the pipeline execution
3. Check deployment status

## 📁 Pipeline Files

### `azure-pipelines-simple.yml` (Recommended)
- Simple, single-stage pipeline
- Works for all branches
- Easy to understand and maintain

### `azure-pipelines.yml` (Advanced)
- Multi-stage pipeline with environments
- More complex but offers better control
- Includes deployment gates and approvals

## 🔄 Branch Strategy

### Master Branch
- **Trigger**: Automatic on push
- **Environment**: Production
- **URL**: `https://app01.azurestaticapps.net`
- **Features**: Full production features

### Dev Branch
- **Trigger**: Automatic on push
- **Environment**: Development
- **URL**: `https://app01.azurestaticapps.net/staging`
- **Features**: Debug mode, development features

### Pull Request Branches
- **Trigger**: On PR creation
- **Environment**: Preview
- **URL**: `https://app01.azurestaticapps.net/pr-{number}`
- **Features**: Temporary preview environment

## ⚙️ Pipeline Configuration

### Environment Variables
```yaml
variables:
  staticWebAppName: 'App01'
  resourceGroupName: 'Practice_RG'
  # Secrets stored in Azure DevOps Library
  AZURE_STATIC_WEB_APPS_API_TOKEN: $(AZURE_STATIC_WEB_APPS_API_TOKEN)
```

### Deployment Task
```yaml
- task: AzureStaticWebApp@0
  displayName: 'Deploy to Azure Static Web App'
  inputs:
    app_location: '/'
    api_location: ''
    output_location: ''
    skip_app_build: true
    azure_static_web_apps_api_token: $(AZURE_STATIC_WEB_APPS_API_TOKEN)
```

## 🎯 Environment Detection

The pipeline automatically detects the environment based on the branch:

```bash
# Production (master branch)
if [ "$(Build.SourceBranchName)" = "master" ]; then
  echo "Production deployment"
fi

# Development (dev branch)  
elif [ "$(Build.SourceBranchName)" = "dev" ]; then
  echo "Development deployment"
fi

# Preview (PR branches)
else
  echo "PR Preview deployment"
fi
```

## 🔍 Monitoring and Troubleshooting

### Pipeline Monitoring
1. Go to **Pipelines** → **Pipelines**
2. Click on your pipeline
3. Monitor build status and logs
4. Check deployment history

### Common Issues

1. **Authentication Failed**
   - Verify API token is correct
   - Check token hasn't expired
   - Ensure token has proper permissions

2. **Build Fails**
   - Check YAML syntax
   - Verify file paths
   - Review build logs

3. **Deployment Fails**
   - Check Azure Static Web App status
   - Verify resource group exists
   - Review deployment logs

### Debug Commands
```bash
# Check pipeline variables
echo "Branch: $(Build.SourceBranchName)"
echo "Build ID: $(Build.BuildId)"
echo "Commit: $(Build.SourceVersion)"

# Check deployment status
az staticwebapp list --resource-group Practice_RG
```

## 🔐 Security Best Practices

1. **API Tokens**: Store in Azure DevOps Library as secrets
2. **Access Control**: Use Azure RBAC for pipeline permissions
3. **Branch Protection**: Enable branch policies for master
4. **Code Review**: Require PR reviews for production changes

## 📊 Pipeline Optimization

1. **Caching**: Enable npm/yarn caching for faster builds
2. **Parallel Jobs**: Use parallel deployment for multiple environments
3. **Artifacts**: Store build artifacts for debugging
4. **Notifications**: Set up email/Slack notifications for deployments

## 🎉 Success Criteria

✅ **Pipeline runs successfully on master branch**
✅ **Pipeline runs successfully on dev branch**
✅ **PR previews work correctly**
✅ **Production URL loads: https://app01.azurestaticapps.net**
✅ **Development URL loads: https://app01.azurestaticapps.net/staging**
✅ **Environment badges show correctly**

## 📞 Support Resources

- **Azure DevOps Documentation**: [Azure Pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/)
- **Azure Static Web Apps**: [Deployment Guide](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- **YAML Pipeline Reference**: [Azure Pipelines YAML](https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/)

---

**Your Azure DevOps pipeline is now ready for multi-environment deployment! 🚀**
