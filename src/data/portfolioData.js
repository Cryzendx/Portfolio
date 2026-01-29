
import internshipImg from '../assets/internship_project.png';
import virtualizationImg from '../assets/virtualization_project.png';

export const portfolioData = {
    profile: {
        name: "Adrien LAGARRIGUE",
        role: "Étudiant - BUT Informatique (Parcours DACS)",
        bio: "Étudiant de 21 ans passionné par le déploiement d'applications communicantes et sécurisées. Je maîtrise l'administration système et la cybersécurité. Créatif et persévérant, j'aime concevoir des infrastructures robustes.",
        email: "adrienlagarrigue2004@gmail.com",
        phone: "07 68 46 66 67",
        address: "1 rue Bonnat, Toulouse 31400",
        linkedin: "https://www.linkedin.com/in/adrien-lagarrigue-9a5b702a3/",
        github: "https://github.com/Cryzendx",
    },
    competencies: [
        {
            id: "C1",
            title: "Réaliser",
            description: "Développer des applications informatiques complexes.",
            fullDescription: "Concevoir, coder, tester et intégrer une solution informatique. Expérience en développement Web (PHP/Symfony), Java, C, et Python.",
            projects: ["P1", "P4"]
        },
        {
            id: "C2",
            title: "Optimiser",
            description: "Proposer des applications optimisées.",
            fullDescription: "Améliorer les performances et limiter l'impact environnemental. Automatisation et gestion de stockage.",
            projects: ["P1"]
        },
        {
            id: "C3",
            title: "Administrer",
            description: "Administrer des systèmes communicants complexes.",
            fullDescription: "Installation et configuration de services réseaux (Switchs, Routeurs). Gestion de parc et support.",
            projects: ["P1", "P3"]
        },
        {
            id: "C4",
            title: "Gérer",
            description: "Gérer des données de l'information.",
            fullDescription: "Gestion du stockage client et maintenance de sites web professionnels.",
            projects: ["P1"]
        },
        {
            id: "C5",
            title: "Conduire",
            description: "Conduire un projet de développement.",
            fullDescription: "Travail en équipe, gestion de tickets clients et support technique.",
            projects: ["P1", "P2"]
        },
        {
            id: "C6",
            title: "Collaborer",
            description: "Travailler en équipe informatique.",
            fullDescription: "Communication efficace, relation client et travail collaboratif.",
            projects: ["P1", "P3"]
        }
    ],
    projects: [
        {
            id: "P1",
            title: "Stage - Pôle Dév & Infra",
            type: "Expérience Professionnelle",
            summary: "Développement Symfony et Gestion Infrastructure.",
            description: "Travail au sein du Pôle Développement & Infrastructure.\n\n• Développement Web : Maintenance et évolution d'un site web professionnel en PHP / Symfony (ajout de fonctionnalités).\n\n• Infrastructure & Support : Gestion des tickets clients, intervention sur équipements réseaux (réinitialisation et configuration de switchs/routeurs), gestion du stockage des clients et du parc informatique.",
            technologies: ["PHP", "Symfony", "Switchs/Routeurs", "Support Client", "Gestion Stockage"],
            competencies: ["C1", "C3", "C4", "C5", "C6"],
            image: internshipImg
        },
        {
            id: "P2",
            title: "Projet de Virtualisation",
            type: "Projet Académique",
            summary: "Mise en place d'environnement virtualisé.",
            description: "Création et gestion de machines virtuelles. Simulation de réseaux d'entreprise et tests de sécurité.",
            technologies: ["Virtualisation", "Linux", "Réseau"],
            competencies: ["C3", "C5"],
            image: virtualizationImg
        },
        {
            id: "P3",
            title: "SAE - Évolution Infrastructure",
            type: "Projet Académique",
            summary: "Configuration de services réseaux sur Raspberry Pi.",
            description: "Mise en place d'une infrastructure complète avec services réseau. Configuration de DHCP, DNS et Wi-Fi (sur Raspberry). Sécurisation des accès.",
            technologies: ["Raspberry Pi", "DNS", "DHCP", "Wi-Fi"],
            competencies: ["C3", "C6"],
            image: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "P4",
            title: "Projets de Programmation",
            type: "Projet Académique",
            summary: "Développement dans divers langages.",
            description: "Réalisation de divers projets algorithmiques et applicatifs en Java, C, Python et Ada durant le cursus.",
            technologies: ["Java", "C", "Python", "Ada"],
            competencies: ["C1"],
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
        }
    ]
};
