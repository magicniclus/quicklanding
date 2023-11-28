interface ProjectMeta {
    title: string;
    metaDescription: string;
    metaKeywords: string;
}

interface ProjectInformation {
    logo: string;
    phone: string;
    email: string;
}

interface ProjectData {
    meta: ProjectMeta;
    informations: ProjectInformation;
}

export const projectData: ProjectData[] = [
    {
        meta: {
            title: '', // Add the project title here
            metaDescription: '', // Add the meta description here
            metaKeywords: '', // Add the meta keywords here
        },
        informations: {
            logo: '/logo/logo.png', // Add the URL or path to the logo image here
            phone: '0631420045', // Add the contact phone number here
            email: 'casteranicolas.contact@gmail.com', // Add the contact email here
        },
    },
    // You can add more project objects here
];
