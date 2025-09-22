# Azure App Service Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Prepare Your Files
- Download the provided ZIP file
- Extract to your local machine
- Ensure Docker is installed

### 2. Build Docker Image
```bash
cd frontend
docker build -t ayush-portfolio .
```

### 3. Test Locally (Optional)
```bash
docker run -p 3000:3000 ayush-portfolio
```
Visit http://localhost:3000 to verify

### 4. Azure Container Registry
```bash
# Login to Azure
az login

# Create resource group
az group create --name rg-ayush-portfolio --location "East US"

# Create container registry
az acr create --resource-group rg-ayush-portfolio --name ayushportfolio --sku Basic --admin-enabled true

# Get login server
az acr show --name ayushportfolio --resource-group rg-ayush-portfolio --query loginServer --output table

# Tag image
docker tag ayush-portfolio ayushportfolio.azurecr.io/ayush-portfolio:latest

# Push image
az acr login --name ayushportfolio
docker push ayushportfolio.azurecr.io/ayush-portfolio:latest
```

### 5. Create App Service
```bash
# Create app service plan
az appservice plan create --name plan-ayush-portfolio --resource-group rg-ayush-portfolio --sku B1 --is-linux

# Create web app
az webapp create --resource-group rg-ayush-portfolio --plan plan-ayush-portfolio --name ayush-portfolio-app --deployment-container-image-name ayushportfolio.azurecr.io/ayush-portfolio:latest

# Configure container settings
az webapp config appsettings set --resource-group rg-ayush-portfolio --name ayush-portfolio-app --settings WEBSITES_PORT=3000
```

### 6. Access Your Site
Your portfolio will be available at: `https://ayush-portfolio-app.azurewebsites.net`

## 🔧 Troubleshooting

### Container Not Starting
- Check if port 3000 is exposed in Dockerfile
- Verify WEBSITES_PORT=3000 is set in App Service settings

### Build Failures
- Ensure all dependencies are in package.json
- Check Docker build logs
- Verify Node.js version compatibility

### Custom Domain (Optional)
```bash
# Add custom domain
az webapp config hostname add --webapp-name ayush-portfolio-app --resource-group rg-ayush-portfolio --hostname yourdomain.com
```

## 📊 Performance Tips

1. **Enable gzip compression** in App Service settings
2. **Configure CDN** for static assets
3. **Set up Application Insights** for monitoring
4. **Enable auto-scaling** if needed

## 🔒 Security

- HTTPS is enabled by default
- No backend dependencies = reduced attack surface
- All data is static/client-side
- No database connections to secure

## 💰 Cost Optimization

- Use B1 pricing tier for basic needs
- Scale down during low usage
- Monitor resource usage in Azure portal
- Consider consumption-based plans for variable traffic

---

*Deployment guide for Ayush Gupta's Cloud Engineer Portfolio*