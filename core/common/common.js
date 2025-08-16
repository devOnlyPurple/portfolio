const AppConstants = require("../constants/app_constants");
const axios = require("axios");

require("dotenv").config();
class Common {
  static errorModel(err) {
    return {
      message: err.msg,
      field: err.path,
    };
  }

  static getProjects() {
    const projects = [
      {
        key: 1,
        name: "Kondjigbale",
        type: "Mobile",
        screen:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754335258/portfolio/ozs5k2bg90slw7ahapf2.jpg",
        cover:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754512050/portfolio/hkbdzsnkmsrfhvxucsnr.png",
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
        screen:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754513613/portfolio/fnby4gcbvnvkgavcxbs9.png",
        cover:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754510878/portfolio/i6yx9cnwtmcrxbz4eek2.png",
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
        screen:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754335719/portfolio/l7pcsloadsbprxylumxl.jpg",
        cover:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754512304/portfolio/erk32vxsvc5kl8633xrh.png",
        details: {
          link: "app_link",
          description:
            "PrestUp est une application mobile de mise en relation des prestataires de toutes catégories confondues aux potentiels demandeurs de prestations. Notre plateforme offre aux prestataires la possibilité de promouvoir leurs services et d'attirer de nouveaux clients, tout en offrant aux clients un moyen simple, sûr et efficace de trouver des prestataires qualifiés pour leurs projets.",
        },
      },
      {
        key: 4,
        name: "Kedo Travel",
        type: "mobile",
        screen:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754335719/portfolio/l7pcsloadsbprxylumxl.jpg",
        cover:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754512304/portfolio/erk32vxsvc5kl8633xrh.png",
        details: {
          link: "app_link",
          description:
            "Kedo Travel est une plateforme numérique conçue pour faciliter la découverte, la réservation et la gestion d'expériences touristiques. Elle connecte les voyageurs à une variété d’offres locales — circuits, hébergements, guides touristiques, transports et activités culturelles — tout en offrant aux prestataires une interface simple pour promouvoir et gérer leurs services.",
        },
      },
      {
        key: 5,
        name: "Cygne client",
        type: "Mobile",
        screen:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754335719/portfolio/l7pcsloadsbprxylumxl.jpg",
        cover:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754516217/portfolio/hdaiiuefr1erewtdiazo.png",
        details: {
          link: "app_link",
          description:
            "Cygne Client est une application permettant d’effectuer des transactions financières de manière simple et sécurisée.",
        },
      },
      {
        key: 6,
        name: "Cygne agent",
        type: "Mobile",
        screen:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754335719/portfolio/l7pcsloadsbprxylumxl.jpg",
        cover:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754516265/portfolio/u59dvtgmfkirvaxxqmt8.png",
        details: {
          link: "app_link",
          description:
            "Cygne Agent est une application conçue pour permettre aux agents de gérer les opérations financières des clients, comme les dépôts, retraits et envois d’argent.",
        },
      },
      {
        key: 7,
        name: "Chocoland",
        type: "Mobile",
        screen:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754335719/portfolio/l7pcsloadsbprxylumxl.jpg",
        cover:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754516299/portfolio/ukchapde8st2kisbp179.png",
        details: {
          link: "app_link",
          description:
            "Chocoland est une application mobile permettant aux utilisateurs de découvrir et acheter des produits agricoles, principalement du cacao et ses dérivés (grains, chocolat artisanal, produits dérivés). Elle relie directement les producteurs locaux aux consommateurs, offrant une expérience fluide, sécurisée et transparente.",
        },
      },
      {
        key: 8,
        name: "Belham Beauty",
        type: "Site web",
        screen:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754517289/portfolio/f3fhigrzovg4fxr2a5b9.png",
        cover:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754517631/portfolio/movcrqby0wxrlujjygbc.png",
        details: {
          link: "https://belhambeauty.shop/",
          description:
            "Belham Beauty est un site vitrine/catalogue présentant des cosmétiques naturels pour cheveux texturés. Inspiré d’un parcours personnel, il valorise les soins sains et le bien-être capillaire.",
        },
      },
      {
        key: 9,
        name: "Car App",
        type: "Mobile",
        screen:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754517289/portfolio/f3fhigrzovg4fxr2a5b9.png",
        cover: Common.getUrlAsset("images/carApp.png"),
        details: {
          link: "https://belhambeauty.shop/",
          description:
            "CarApp est une application conçue pour aider les utilisateurs à gérer efficacement leurs véhicules. Elle permet de planifier les entretiens (vidanges, contrôles techniques, etc.), de recevoir des rappels importants, de suivre l’historique des interventions, et d’avoir une vue d’ensemble sur l’état et la gestion de sa flotte ou de ses véhicules personnels.",
        },
      },
      {
        key: 10,
        name: "GoTeach",
        type: "Mobile",
        screen:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754517289/portfolio/f3fhigrzovg4fxr2a5b9.png",
        cover: Common.getUrlAsset("images/goTeach.png"),
        details: {
          link: "https://belhambeauty.shop/",
          description:
            "GoTeach est une application de réservation dédiée au soutien scolaire. Elle permet aux parents de réserver facilement des séances de répétition ou d’accompagnement éducatif pour leurs enfants, en fonction de leur niveau, de leurs matières et de leurs disponibilités. L’objectif : connecter familles et enseignants qualifiés pour un suivi personnalisé et flexible.",
        },
      },
      {
        key: 11,
        name: "GoTeach Pro",
        type: "Mobile",
        screen:
          "https://res.cloudinary.com/dr8wumlkr/image/upload/v1754517289/portfolio/f3fhigrzovg4fxr2a5b9.png",
        cover: Common.getUrlAsset("images/goTeach2.png"),
        details: {
          link: "https://belhambeauty.shop/",
          description:
            "GoTeach Pro est l’application dédiée aux répétiteurs inscrits sur la plateforme GoTeach.Elle leur permet de gérer leurs disponibilités, consulter les réservations des parents, suivre les séances effectuées, et interagir avec les élèves de manière professionnelle et structurée. GoTeach Pro facilite l’organisation, optimise le planning et permet aux enseignants de se concentrer sur l’essentiel : transmettre efficacement leur savoir",
        },
      },
    ];
    return projects;
  }

  static getUrlAsset(asset) {
    if (!asset) return null;
    return `${AppConstants.BASE_URL}/${asset}`;
  }

  static async sendMailApi(email, subject, content, title, name) {
    try {
      const apiSecret = process.env.MAILZEET_API_SECRET;
      let data = JSON.stringify({
        recipients: [
          {
            email: email,
            name: name,
          },
        ],
        subject: subject,
        text: title,
        html: `<b>${content}</b>`,

        params: {
          company: "OnlyPurple",
        },
      });
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://api.mailzeet.com/v1/mails",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiSecret}`,
        },
        data: data,
      };
      const response = await axios(config); // Manquait !
      console.log("Mailzeet response:", response.data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

module.exports = Common;
