class Common {
  static errorModel(err) {
    return {
      message: err.msg,
      field: err.path,
    };
  }

  static getProjects(lang = "fr") {
    const projects = [
      {
        key: 1,
        name: "Kondjigbale",
        type: "Mobile",
        cover:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754335258/portfolio/ozs5k2bg90slw7ahapf2.jpg",
        details: {
          link: "app_link",
          description:
            "KONDJIGBALẼ est une solution de santé numérique , mettant l'accent sur le bien-être des patients. Notre plateforme offre aux médecins les outils nécessaires pour prodiguer des soins exceptionnels, poser des diagnostics précis et intervenir rapidement. Elle permet également aux patients d'accéder facilement à leurs informations médicales, de recevoir des soins personnalisés et de bénéficier d'un suivi ...",
        },
      },
      {
        key: 2,
        name: "Ethica advisory",
        type: "Site web",
        cover:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754335334/portfolio/zfeysaopphmszdwsgk2q.png",
        details: {
          link: "app_link",
          description:
            "ETHICA ADVISORY est un cabinet de conseil spécialisé dans l’accompagnement des entreprises pour intégrer des pratiques durables, innovantes et éthiques dans leur gestion quotidienne.",
        },
      },
      {
        key: 3,
        name: "PrestUp",
        type: "Mobile",
        cover:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754335719/portfolio/l7pcsloadsbprxylumxl.jpg",
        details: {
          link: "app_link",
          description:
            "PrestUp est une application mobile de mise en relation des prestataires de toutes catégories confondues aux potentiels demandeurs de prestations. Notre plateforme offre aux prestataires la possibilité de promouvoir leurs services et d'attirer de nouveaux clients, tout en offrant aux clients un moyen simple, sûr et efficace de trouver des prestataires qualifiés pour leurs projets.",
        },
      },
    ];
    return projects;
  }
}

module.exports = Common;
