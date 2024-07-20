const currentYear = new Date().getFullYear();
const data = {
    sitename: "Grayband Pro",
    sitetagline: "",
    siteurl: "https://graybandpro.com",
    sitelogo: "",
    title: "Coming Soon!",
    description: "",
    newsletterheading: "",
    copyrightText: `Copyright © ${currentYear} | Design By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://www.barondoss.com">Baron Doss</a>`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/graybandpro/",
        },
        {
            icon: "twitter",
            link: "https://twitter.com/Graybandpro",
        },
        {
            icon: "instagram",
            link: "https://www.instagram.com/graybandpro/",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
