// Environment configuration for different branches
const config = {
  // Production environment (master branch)
  production: {
    environment: 'production',
    apiUrl: 'https://your-api.azurewebsites.net',
    debugMode: false,
    features: {
      analytics: true,
      errorReporting: true,
      performanceMonitoring: true
    },
    branding: {
      title: 'Anime Character Gallery',
      subtitle: 'Production Environment'
    }
  },
  
  // Development environment (dev branch)
  development: {
    environment: 'development',
    apiUrl: 'https://your-dev-api.azurewebsites.net',
    debugMode: true,
    features: {
      analytics: false,
      errorReporting: true,
      performanceMonitoring: false
    },
    branding: {
      title: 'Anime Character Gallery',
      subtitle: 'Development Environment'
    }
  }
};

// Determine current environment based on branch or URL
function getCurrentEnvironment() {
  // Check if we're in development mode
  if (window.location.hostname.includes('dev') || 
      window.location.search.includes('env=dev')) {
    return config.development;
  }
  
  // Default to production
  return config.production;
}

// Export configuration
window.AppConfig = getCurrentEnvironment();

// Log environment info in development
if (window.AppConfig.debugMode) {
  console.log('🚀 Environment:', window.AppConfig.environment);
  console.log('⚙️ Configuration:', window.AppConfig);
}
