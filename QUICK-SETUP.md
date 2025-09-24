# 🚀 Quick Setup Guide - App01 Static Web App

## Your Configuration Details

**Static Web App Name**: `App01`  
**API Token**: `a0115aa86035ad8304d35f84f03cdb23875d074496d39306376b3ad03eeac12202-ad07f7bc-68d9-4918-89ab-59c7d7bbbdbd0101102046745510`  
**Resource Group**: `Practice_RG`

## 🌐 Your URLs

- **Production**: https://app01.azurestaticapps.net
- **Development**: https://app01.azurestaticapps.net/staging
- **PR Previews**: https://app01.azurestaticapps.net/pr-{number}

## 🔧 Azure DevOps Pipeline Setup

### 1. Create Variable Group
1. Go to Azure DevOps → Pipelines → Library
2. Create new variable group: `StaticWebApp-Secrets`
3. Add variable:
   - **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Value**: `a0115aa86035ad8304d35f84f03cdb23875d074496d35f84f03cdb23875d074496d39306376b3ad03eeac12202-ad07f7bc-68d9-4918-89ab-59c7d7bbbdbd0101102046745510`
   - **Mark as secret**: ✅

### 2. Create Pipeline
1. Azure DevOps → Pipelines → New Pipeline
2. Select `azure-pipelines-simple.yml`
3. Add pipeline variables:
   - `staticWebAppName`: `App01`
   - `resourceGroupName`: `Practice_RG`

### 3. Run Pipeline
- **Master branch** → Production deployment
- **Dev branch** → Development deployment
- **PR branches** → Preview deployments

## ✅ Ready to Deploy!

Your configuration is complete and ready for deployment! 🎉
