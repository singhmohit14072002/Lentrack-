# 🚀 Multi-Environment Deployment Guide

## Overview
This guide explains how to deploy your anime character gallery to Azure Static Web Apps with multiple environments (branches) in a single Static Web App.

## 🏗️ Architecture

```
Azure Static Web App: Front-01
├── Production Environment (master branch)
│   └── URL: https://front-01.azurestaticapps.net
├── Development Environment (dev branch)  
│   └── URL: https://front-01.azurestaticapps.net/staging
└── Pull Request Previews
    └── URL: https://front-01.azurestaticapps.net/pr-{number}
```

## 📋 Prerequisites

- Azure subscription with Static Web Apps enabled
- GitHub repository: `singhmohit14072002/Lentrack-`
- Two branches: `master` (production) and `dev` (development)

## 🔧 Setup Instructions

### 1. Create Azure Static Web App

1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web Apps"
4. Click "Create"

### 2. Configure Basic Settings

```
Subscription: Practice-Sub-01
Resource Group: Practice_RG (or create new)
Name: Front-01
Plan type: Free (or Standard)
Region: Global
```

### 3. Configure Deployment Source

```
Source: GitHub
Organization: singhmohit14072002
Repository: Lentrack-
Branch: master (this will be your production branch)
```

### 4. Configure Build Details

```
App location: /
API location: (leave empty)
Output location: (leave empty)
```

### 5. Review and Create

- Review all settings
- Click "Review + create"
- Click "Create"

## 🌿 Branch Strategy

### Master Branch (Production)
- **Purpose**: Production environment
- **URL**: `https://front-01.azurestaticapps.net`
- **Deployment**: Automatic on push
- **Environment Badge**: Green "PRODUCTION"

### Dev Branch (Development)
- **Purpose**: Development/staging environment  
- **URL**: `https://front-01.azurestaticapps.net/staging`
- **Deployment**: Automatic on push
- **Environment Badge**: Orange "DEVELOPMENT"

### Pull Request Branches
- **Purpose**: Feature previews
- **URL**: `https://front-01.azurestaticapps.net/pr-{number}`
- **Deployment**: Automatic on PR creation
- **Environment Badge**: Blue "STAGING"

## 🔄 Deployment Process

### Automatic Deployment
1. **Push to master** → Deploys to production
2. **Push to dev** → Deploys to staging environment
3. **Create PR** → Creates preview environment
4. **Close PR** → Cleans up preview environment

### Manual Deployment
```bash
# Switch to dev branch
git checkout dev

# Make changes
git add .
git commit -m "feat: new feature"
git push origin dev

# Switch to master branch
git checkout master

# Merge dev changes
git merge dev
git push origin master
```

## 🎯 Environment Configuration

### Production Environment (master)
```javascript
{
  environment: 'production',
  debugMode: false,
  features: {
    analytics: true,
    errorReporting: true,
    performanceMonitoring: true
  }
}
```

### Development Environment (dev)
```javascript
{
  environment: 'development', 
  debugMode: true,
  features: {
    analytics: false,
    errorReporting: true,
    performanceMonitoring: false
  }
}
```

## 🔍 Monitoring Deployments

### GitHub Actions
1. Go to your repository
2. Click "Actions" tab
3. Monitor deployment status
4. View logs for troubleshooting

### Azure Portal
1. Go to your Static Web App
2. Click "Functions" (if using)
3. Click "Overview" for status
4. Click "Deployment history" for logs

## 🛠️ Troubleshooting

### Common Issues

1. **Deployment Fails**
   - Check GitHub Actions logs
   - Verify Azure Static Web Apps API token
   - Ensure repository permissions

2. **Environment Not Switching**
   - Clear browser cache
   - Check config.js file
   - Verify branch deployment

3. **Assets Not Loading**
   - Check staticwebapp.config.json
   - Verify file paths
   - Check MIME types

### Debug Commands
```bash
# Check current branch
git branch

# Check deployment status
git log --oneline -5

# Check Azure CLI status
az staticwebapp list --resource-group Practice_RG
```

## 📱 Testing Environments

### Production Testing
- URL: `https://front-01.azurestaticapps.net`
- Features: Full production features
- Analytics: Enabled

### Development Testing  
- URL: `https://front-01.azurestaticapps.net/staging`
- Features: Debug mode enabled
- Console logs: Visible

### PR Preview Testing
- URL: `https://front-01.azurestaticapps.net/pr-{number}`
- Features: Latest PR changes
- Temporary environment

## 🔐 Security Considerations

1. **API Keys**: Store in Azure Key Vault
2. **Environment Variables**: Use Azure Static Web Apps configuration
3. **CORS**: Configure in staticwebapp.config.json
4. **HTTPS**: Enabled by default

## 📊 Performance Optimization

1. **CDN**: Global distribution included
2. **Caching**: Configured in staticwebapp.config.json
3. **Compression**: Automatic
4. **Images**: Optimize before upload

## 🎉 Success Criteria

✅ **Production URL loads successfully**
✅ **Development environment shows orange badge**
✅ **Pull request previews work**
✅ **GitHub Actions deploy automatically**
✅ **Environment-specific configurations apply**

## 📞 Support

- **Azure Documentation**: [Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- **GitHub Actions**: [Azure Static Web Apps Action](https://github.com/Azure/static-web-apps-deploy)
- **Issues**: Create GitHub issue for bugs

---

**Your multi-environment setup is now ready! 🚀**
