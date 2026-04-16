import internshipImg from '../assets/internship_project.png';
import virtualizationImg from '../assets/virtualization_project.png';

export const portfolioData = {
    profile: {
        name: "Adrien Lagarrigue",
        role: "Étudiant en informatique — Spécialité Réseaux & Sécurité",
        bio: "Passionné par l'infrastructure réseau et la cybersécurité, je conçois et déploie des environnements robustes et sécurisés. Actuellement en dernière année de BUT Informatique à Toulouse, je recherche des opportunités pour mettre mes compétences en pratique.",
        email: "adrienlagarrigue2004@gmail.com",
        phone: "07 68 46 66 67",
        address: "1 rue Bonnat, Toulouse 31400",
        linkedin: "https://www.linkedin.com/in/adrien-lagarrigue-9a5b702a3/",
        github: "https://github.com/Cryzendx",
    },
    competencies: [
        {
            id: "C1",
            title: "Développement d'applications",
            description: "Concevoir et développer des solutions logicielles.",
            fullDescription: "Conception, développement et intégration d'applications web et logicielles. Expérience en PHP/Symfony pour le développement web professionnel, ainsi qu'en Java, C et Python pour des projets algorithmiques et applicatifs.",
            projects: ["P1", "P4"]
        },
        {
            id: "C2",
            title: "Optimisation & Performance",
            description: "Améliorer l'efficacité des systèmes.",
            fullDescription: "Optimisation des performances applicatives et systèmes. Automatisation des processus, gestion efficace du stockage et réduction de l'empreinte des déploiements.",
            projects: ["P1"]
        },
        {
            id: "C3",
            title: "Administration réseau & système",
            description: "Déployer et gérer des infrastructures.",
            fullDescription: "Installation et configuration d'équipements réseau (switchs, routeurs, points d'accès Wi-Fi). Gestion de parcs informatiques, services DNS/DHCP et virtualisation d'environnements.",
            projects: ["P1", "P3", "P5"]
        },
        {
            id: "C4",
            title: "Gestion des données",
            description: "Organiser et sécuriser l'information.",
            fullDescription: "Gestion du stockage et de la sauvegarde des données. Maintenance de bases de données et de sites web professionnels, avec une attention particulière à la sécurité et la continuité de service.",
            projects: ["P1"]
        },
        {
            id: "C5",
            title: "Gestion de projet",
            description: "Piloter et organiser les missions.",
            fullDescription: "Planification et suivi de projets techniques, en équipe ou en autonomie. Gestion de tickets, priorisation des tâches et communication avec les parties prenantes.",
            projects: ["P1", "P2", "P5"]
        },
        {
            id: "C6",
            title: "Travail en équipe",
            description: "Collaborer efficacement.",
            fullDescription: "Communication claire avec les collègues et les clients. Capacité à m'intégrer rapidement dans une équipe technique et à contribuer dans un environnement professionnel exigeant.",
            projects: ["P1", "P3", "P5"]
        }
    ],
    projects: [
        {
            id: "P5",
            title: "Stage Telespazio — Infrastructure Réseau & Système",
            type: "Expérience professionnelle",
            summary: "Déploiement de l'infrastructure réseau d'un nouveau bâtiment chez Telespazio France.",
            description: "Stage au sein de la DSI de Telespazio France à Toulouse. Déploiement complet de l'infrastructure réseau et système d'un nouveau bâtiment de 5 étages pour 200 salariés : installation et configuration de switchs et points d'accès Wi-Fi UniFi, mise en place du data center (20 baies, onduleurs), urbanisation réseau, configuration de 16 salles de visioconférence. Documentation, supervision et amélioration du réseau et du SOC France.",
            technologies: ["UniFi", "Réseau", "Wi-Fi", "Data Center", "Supervision", "SOC"],
            competencies: ["C3", "C5", "C6"],
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "P1",
            title: "Stage — Développement & Infrastructure",
            type: "Expérience professionnelle",
            summary: "Développement Symfony et gestion d'infrastructure réseau en entreprise.",
            description: "Stage au sein d'un pôle Développement & Infrastructure. Développement web en PHP/Symfony (maintenance et évolution d'un site professionnel), configuration d'équipements réseau, gestion du parc informatique et support aux utilisateurs.",
            technologies: ["PHP", "Symfony", "Réseau", "Support", "Stockage"],
            competencies: ["C1", "C3", "C4", "C5", "C6"],
            image: internshipImg
        },
        {
            id: "P2",
            title: "Environnement virtualisé & conteneurisé",
            type: "Projet académique",
            summary: "Mise en place d'environnements virtualisés et automatisés.",
            description: "Création et gestion de machines virtuelles pour simuler des réseaux d'entreprise. Utilisation de Vagrant, Docker et Kubernetes pour l'automatisation et la haute disponibilité.",
            technologies: ["Vagrant", "Docker", "Kubernetes", "Ansible", "Linux"],
            competencies: ["C3", "C5"],
            image: virtualizationImg
        },
        {
            id: "P3",
            title: "Infrastructure réseau complète",
            type: "Projet académique",
            summary: "Déploiement de services réseau sur Raspberry Pi.",
            description: "Mise en place d'une infrastructure complète avec services DHCP, DNS, Wi-Fi, messagerie et supervision. Sécurisation des accès et mise en place de sauvegardes pour la continuité de service.",
            technologies: ["Raspberry Pi", "DNS", "DHCP", "Wi-Fi", "Supervision"],
            competencies: ["C3", "C6"],
            image: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "P4",
            title: "Projets de programmation",
            type: "Projet académique",
            summary: "Développement dans plusieurs langages.",
            description: "Réalisation de projets algorithmiques et applicatifs en Java, C, Python et Ada, couvrant la conception, le développement et les tests.",
            technologies: ["Java", "C", "Python", "Ada"],
            competencies: ["C1"],
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
        }
    ]
};
