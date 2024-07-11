# Mallen

![mallenheader](https://github.com/hyddeos/Mallen/assets/39992041/ab2b5193-a980-42a4-84fa-aca1e728f7f5)

# Demo

[View live page](https://mallen.eshtropy.se/)). See more screenshots below

# Features

✅ Get done in ~10min\* <br />
✅ Pagespeed - 100/100/100/100 <br />
✅ 4 color themes(or add your own) <br />
✅ Mobile friendly <br />
✅ Tailwind <br />
✅ Astro Icons <br />

Really friendly for beginners or people in a hurry.

\*_provided that you already have images, data and about text ready._

# Quick guide

- Install
- Choose color-scheme in **index.astro** _(optional)_
- Add your data to the preconfigured variabels in **index.astro**
- Add text to the **about.astro** _(optional)_
- Deploy

# About

Mallen is theme/template for **Astro** and with **Tailwind** for css. This template is crafted with ease of use and speed in mind, making it ideal for those who want to deploy a clean and simple page quickly. It works perfectly as a temporary "Currently under construction" page or as a digital business card page for individuals or small companies who just want their basic information online.

The idea is that the developer only should need to open the **pages/index.astro** file to get everything done. Although one might need to open the **components/About.astro** component as well if you want some _about_ text added.

Four color-schemes includes or just add your own. For more information see the section under Files **styles/themes.css**

# Files

The important files for this project

## pages/index.astro

Here you configure almost everything about the page content. Below you can see all the settings

```
// Basic Info.
const  basic  = {
theme:  "blue", // Choose between: dark, light, blue, red or make your own. See src/styles/themes.css for details
title:  "Quick Repair", // Page name
description:  "Your Local Car Repair Shop. All brands as well as new and old cars are welcome", // Page description
slogan:  "Your local Car Repair Shop"  // slogan or short description, is displayed under Title on the page
}

//Header.
import  logo  from  '../assets/logo.svg'; // add your logo image in /src/assets or remove this import if there is no logo, The title will be displayed instead
const  header  = {
exists:  true, // Set to false you don´t need this component
logo:  logo, // remove this line if you want your site title displayed instead of a logo
}

// Background image.
import  car  from  '../assets/car.webp'  // add your own image in /src/assets or remove this import if there is no image
const  background  = {
exists:  true, // Set to false you don´t need this component
image:  car, // Change your added image
alt:  "a car in a repair shop"  // Add a alt description of the image
}

// Contact.
const  contact  = {
exists:  true, // Set to false you don´t need this component
mail:  "repairman@repair.now",
phone:  "08 - 34 40 80",
adress:  "Storgatan 44",
adress2:  "64530 Strängnäs"  // Use this part as well to get some better styling on the adress
}

// Social medias. Insert the full URL. if varible is empty logo wont be displayed, instagram: "";
const  social  = {
exists:  true, // Set to false you don´t need this component
instagram:  "https://instagram.com/sampleaccount/",
facebook:  "https://facebook.com/sampleaccount/",
snapchat:  "https://snapchat.com/sampleaccount/",
linkedin:  "https://linkedin.com/company/sampleaccount/",
}

// About. Add and edit the about text inside the About.astro component.
const  about  = {
exists:  true  // Set to false if there is no About info
}

// Footer.
const  footer  = {
exists:  true, // Set to false you don´t need this component
madeBy:  "Theme By ESH", // Feel free to change to whatever you like, no need to attribute
madeByUrl:  "https://eshtropy.se/"
}

```

## components/About.astro

Add your own html/css styled about text.

## styles/themes.css

Includes 4 color themes from the start: _dark, light, blue, red_. Change the theme simply by edit the `theme:  "Color",` in the index.Astro file under the Basic section. You simply add or modify your own color theme here in this file.

# Screenshots (colors themes)

### Dark

<img src="https://github.com/hyddeos/Mallen/assets/39992041/a7aa1774-c098-4271-80c8-91ee6fa6a978" width=600 />

### Light

<img src="https://github.com/hyddeos/Mallen/assets/39992041/f3cc3bcf-b499-4dd4-9d9e-d3918d8020b1" width=600 />

### Red

<img src="https://github.com/hyddeos/Mallen/assets/39992041/0ed01f58-4854-4aa2-9449-ec678415fd0f" width=600 />

### Blue

<img src="https://github.com/hyddeos/Mallen/assets/39992041/988a4b9c-4fbc-4f2b-b308-9f488cf14fd8" width=600 />

# How to / installation

### 1. Clone Repo

```
git clone https://github.com/hyddeos/Mallen ProjectName
```

### 2. Install dependencies

```
npm install
```

### 3. Run local

```
npm run start
```

### 4. Build page

```
npm build
```

# Credits

Sample image by cottonbro studio, [Link](https://www.pexels.com/sv-se/foto/bil-fordon-fixa-reparera-4489704/)

# Contribute or Coffee?

There surely is tons of ways this theme even better and I would be glad for any suggestions, contributions or bug reports.

Using this theme is completely free and I hope that you will enjoy it but if you want you can buy me a coffee.

[Buy Me Coffee ](https://www.buymeacoffee.com/eshtropy)

❤️ ESH
