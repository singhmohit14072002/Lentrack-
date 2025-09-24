# 🎌 Anime Character Gallery

A beautiful, responsive static web application showcasing popular anime characters with interactive features. Built with HTML, CSS, and JavaScript, optimized for Azure Static Web Apps deployment.

![Anime Character Gallery](https://img.shields.io/badge/Anime-Character%20Gallery-purple?style=for-the-badge&logo=anime)
![Azure Static Web Apps](https://img.shields.io/badge/Azure-Static%20Web%20Apps-blue?style=for-the-badge&logo=microsoft-azure)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Beautiful UI**: Modern gradient design with glass-morphism effects
- 🔍 **Search Functionality**: Find characters by name, series, or tags
- 🏷️ **Category Filters**: Filter by Action, Ninja, Demon, or view all
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🎭 **Interactive Cards**: Click for detailed character information
- ⚡ **Fast Loading**: Optimized for performance
- 🌟 **Smooth Animations**: Engaging user experience

## 🎯 Featured Characters

- **Goku** (Dragon Ball Z) - The legendary Saiyan warrior
- **Itachi Uchiha** (Naruto) - The prodigious Uchiha with Sharingan
- **Naruto Uzumaki** (Naruto) - The future Hokage
- **Tanjiro Kamado** (Demon Slayer) - The kind-hearted demon slayer
- **Vegeta** (Dragon Ball Z) - The Prince of all Saiyans
- **Sasuke Uchiha** (Naruto) - Naruto's rival
- **Luffy** (One Piece) - The aspiring Pirate King
- **Zenitsu Agatsuma** (Demon Slayer) - The thunder breathing demon slayer
- **Ichigo Kurosaki** (Bleach) - The Soul Reaper
- **Kakashi Hatake** (Naruto) - The Copy Ninja and Sixth Hokage

## 🚀 Live Demo

Visit the live website: [Anime Character Gallery](https://your-app-name.azurestaticapps.net)

## 🛠️ Local Development

### Prerequisites
- Node.js (v14 or higher)
- Git

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/singhmohit14072002/Lentrack-.git
   cd Lentrack-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
Lentrack-/
├── index.html              # Main HTML file
├── styles.css              # CSS styling and animations
├── script.js               # JavaScript functionality
├── staticwebapp.config.json # Azure Static Web Apps configuration
├── package.json            # Project metadata and scripts
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml # GitHub Actions workflow
└── README.md               # Project documentation
```

## ☁️ Azure Static Web Apps Deployment

This project is configured for easy deployment to Azure Static Web Apps.

### Automatic Deployment (Recommended)

1. **Fork this repository** to your GitHub account
2. **Create Azure Static Web App** in Azure Portal
3. **Connect to GitHub** during creation
4. **Select this repository** and branch (master/main)
5. **Deploy automatically** - GitHub Actions will handle the rest!

### Manual Deployment

1. Install Azure CLI:
   ```bash
   az extension add --name staticwebapp
   ```

2. Login to Azure:
   ```bash
   az login
   ```

3. Deploy to Azure:
   ```bash
   az staticwebapp create \
     --resource-group myResourceGroup \
     --name my-static-app \
     --source https://github.com/singhmohit14072002/Lentrack-.git \
     --location "Central US" \
     --branch master
   ```

### Configuration

The `staticwebapp.config.json` file includes:
- **SPA routing** support for single-page applications
- **Custom headers** for optimal caching
- **MIME type** configurations
- **Navigation fallback** for client-side routing

## 🎨 Customization

### Adding New Characters

Edit the `animeCharacters` array in `script.js`:

```javascript
{
    id: 11,
    name: "Your Character",
    series: "Anime Series",
    description: "Character description...",
    image: "path/to/image.jpg",
    category: "action", // or "ninja", "demon"
    tags: ["Tag1", "Tag2", "Tag3"]
}
```

### Styling

Modify `styles.css` to customize:
- Color schemes
- Layout and spacing
- Animations
- Typography

### Functionality

Enhance `script.js` to add:
- New search features
- Additional filters
- Character interactions
- API integrations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Character images from various anime series
- Icons and fonts from Google Fonts
- Inspiration from anime communities worldwide

## 📞 Support

If you have any questions or need help with deployment, please:
- Open an issue on GitHub
- Contact the maintainer

---

**Made with ❤️ for anime fans worldwide**
