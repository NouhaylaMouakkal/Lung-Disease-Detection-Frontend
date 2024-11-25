import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  diseases = [
    {
      title: 'Atelectasis',
      image: 'https://www.respiratorytherapyzone.com/wp-content/uploads/2022/06/Lobar-Atelectasis-Lungs-vector-illustration.png',
      description: "Atelectasie est une affection où une partie du poumon s'effondre, souvent à cause d'un blocage des voies respiratoires ou d'une compression du poumon.",
      detailedInfo: {
        description: "L'atelectasie est une affection où une partie du poumon s'effondre, souvent à cause d'un blocage des voies respiratoires ou d'une compression du poumon.",
        symptoms: "Essoufflement, douleur thoracique, respiration rapide, cyanose (coloration bleue de la peau).",
        treatment: "Le traitement dépend de la cause sous-jacente. Il peut inclure des exercices respiratoires, de la physiothérapie, ou parfois une intervention chirurgicale si nécessaire."
      }
    },
    {
      title: 'Consolidation',
      image: 'https://img2.tfd.com/mk/L/X2604-L-32A.png',
      description: "La consolidation désigne un processus par lequel les poumons deviennent denses et pleins de liquide, souvent à cause d'une infection, comme la pneumonie.",
      detailedInfo: {
        description: "La consolidation désigne un processus par lequel les poumons deviennent denses et pleins de liquide, souvent à cause d'une infection, comme la pneumonie.",
        symptoms: "Fièvre, toux, douleurs thoraciques, expectoration de mucus ou de sang.",
        treatment: "Antibiotiques pour traiter les infections bactériennes ou antiviraux pour les infections virales. L'hospitalisation peut être nécessaire pour les cas graves."
      }
    },
    {
      title: 'Fibrose pulmonaire',
      image: 'https://img.passeportsante.net/600x382/2024-08-28/fibrose-pulmonaire.jpg',
      description: 'La fibrose pulmonaire est une cicatrisation progressive du tissu pulmonaire qui empêche les poumons de fonctionner correctement. Les symptômes incluent l\'essoufflement, la toux sèche, la fatigue et les douleurs thoraciques.',
      detailedInfo: {
        description: "La fibrose pulmonaire est une cicatrisation progressive du tissu pulmonaire qui empêche les poumons de fonctionner correctement.",
        symptoms: "Essoufflement, toux sèche, fatigue, douleurs thoraciques.", 
        treatment: " Il n'existe pas de traitement curatif. Les traitements visent à gérer les symptômes, comme les médicaments antifibrotiques ou la transplantation pulmonaire dans les cas graves.",  
      }
    },
    {
      title: 'Pneumothorax',
      image: 'https://static.vecteezy.com/ti/vecteur-libre/p1/34997880-pneumothorax-une-poumon-maladie-soins-de-sante-medical-infographie-banniere-illustration-vecteur-vectoriel.jpg',
      description: 'Un pneumothorax survient lorsqu\'il y a une fuite d\'air dans la cavité pleurale, ce qui provoque un effondrement partiel ou complet du poumon. Les symptômes incluent la douleur thoracique aiguë, l\'essoufflement et une fréquence cardiaque rapide.',
      detailedInfo: {
        description: "Un pneumothorax survient lorsqu'il y a une fuite d'air dans la cavité pleurale, ce qui provoque un effondrement partiel ou complet du poumon.",
        symptoms: "Douleur thoracique aiguë, essoufflement, fréquence cardiaque rapide.", 
        treatment: "Un pneumothorax léger peut se résoudre seul, mais un pneumothorax plus grave peut nécessiter une intervention chirurgicale ou l'insertion d'un drain pleural pour évacuer l'air.",  
      }
    },
    {
      title: 'Oedème pulmonaire',
      image: 'https://thumbs.dreamstime.com/z/oed%C3%A8me-pulmonaire-fluide-dans-des-alv%C3%A9oles-plan-anatomique-vectoriel-comparaison-saine-et-suffisance-poumons-liquides-style-197281305.jpg',
      description: 'L\'œdème pulmonaire est l\'accumulation de liquide dans les poumons, souvent causée par une insuffisance cardiaque. Les symptômes incluent essoufflement, respiration sifflante, toux avec expectoration mousseuse, et gonflement des jambes.',
      detailedInfo: {
        description: " L'œdème pulmonaire est une accumulation de liquide dans les poumons, souvent causée par une insuffisance cardiaque.",
        symptoms: "Essoufflement, respiration sifflante, toux avec expectoration mousseuse, gonflement des jambes.", 
        treatment: "Médicaments pour traiter la cause sous-jacente (par exemple, diurétiques pour éliminer le liquide). En cas grave, une assistance respiratoire peut être nécessaire.",  
      }
    },
    {
      title: 'Emphysème',
      image: 'https://lh6.googleusercontent.com/proxy/WS4o6tEygud448AgLT8okaw7_4tWUWSwddYePTduwt7JQ9gibwXC2YGBNoo4eopW8SHSLZpA_Tz1MHe6LNTdVfQI_MWkCC7QxwII_8w',
      description: 'L\'emphysème est une maladie pulmonaire chronique où les alvéoles (sacs d\'air dans les poumons) sont endommagées, ce qui réduit la surface disponible pour l\'échange gazeux. Les symptômes incluent l\'essoufflement, la toux et la respiration sifflante.',
      detailedInfo: {
        description: "L'emphysème est une maladie pulmonaire chronique où les alvéoles (sacs d'air dans les poumons) sont endommagées, ce qui réduit la surface disponible pour l'échange gazeux.",
        symptoms: " Essoufflement, toux, respiration sifflante.", 
        treatment: "Arrêt du tabac, bronchodilatateurs, oxygénothérapie, réhabilitation pulmonaire.",  
      }
    },
    {
      title: 'Effusion pleurale',
      image: 'https://media01.stockfood.com/largepreviews/NDM2NTE4NTAy/14081242-Pleural-effusion-illustration.jpg',
      description: 'L\'épanchement pleural est l\'accumulation de liquide entre les membranes qui entourent les poumons (plèvres). Les symptômes incluent la douleur thoracique, l\'essoufflement et la toux.',
      detailedInfo: {
        description: " L'épanchement pleural est l'accumulation de liquide entre les membranes qui entourent les poumons (plèvres).",
        symptoms: "Douleur thoracique, essoufflement, toux.", 
        treatment: "Traitement de la cause sous-jacente (infection, cancer, insuffisance cardiaque). Parfois, un drainage du liquide est nécessaire.",  
      }
    },
    {
      title: 'Pneumonie',
      image: 'https://diagnostics.labosalem.dz/wp-content/uploads/2021/01/pneumonie-schema-1024x827.jpeg',
      description: 'La pneumonie est une infection des poumons causée par des bactéries, des virus ou des champignons. Les symptômes incluent la fièvre, la toux productive, la douleur thoracique et l\'essoufflement.',
      detailedInfo: {
        description: "La pneumonie est une infection des poumons qui peut être causée par des bactéries, des virus ou des champignons.",
        symptoms: "Fièvre, toux productive, douleur thoracique, essoufflement.", 
        treatment: "Antibiotiques ou antiviraux en fonction de l'agent infectieux. Les hospitalisations peuvent être nécessaires pour les cas graves.",  
      }
    },
    {
      title: 'Épaississement pleural',
      image: 'https://www.mesolawsuitafterdeath.com/wp-content/uploads/2019/10/Pleural-thickening.png',
      description: 'L\'épaississement pleural se produit lorsque la membrane pleurale devient plus épaisse, souvent en raison d\'une inflammation chronique ou d\'exposition à des substances comme l\'amiante. Les symptômes incluent la douleur thoracique, l\'essoufflement et la toux.',
      detailedInfo: {
        description: " L'épaississement pleural se produit lorsque la membrane pleurale devient plus épaisse, généralement en raison d'une inflammation chronique ou de l'exposition à des substances comme l'amiante.",
        symptoms: "Douleur thoracique, essoufflement, toux.", 
        treatment: "Aucun traitement spécifique n'existe, mais la gestion des symptômes peut inclure l'utilisation d'analgésiques ou de traitements respiratoires.",  
      }
    },
    {
      title: 'Cardiomégalie',
      image: 'https://c8.alamy.com/compfr/pa6g73/cardiomegalie-illustration-comparaison-entre-une-europe-elargie-et-frequence-cardiaque-normale-pa6g73.jpg',
      description: 'La cardiomégalie est une hypertrophie du cœur, souvent associée à une insuffisance cardiaque ou à une hypertension pulmonaire. Les symptômes incluent l\'essoufflement, la fatigue et les douleurs thoraciques.',
      detailedInfo: {
        description: "La cardiomégalie est une hypertrophie du cœur, souvent associée à une insuffisance cardiaque ou à une hypertension pulmonaire",
        symptoms: "Essoufflement, fatigue, douleurs thoraciques.", 
        treatment: "Traitement de l'insuffisance cardiaque ou de la cause sous-jacente, comme les médicaments pour abaisser la pression artérielle et améliorer la fonction cardiaque.",  
      }
    },
    {
      title: 'Nodule pulmonaire',
      image: 'https://uploads.unify.uno/content/2022/7/4/cancer-trait-4673a9585c7362d2.jpeg',
      description: 'Un nodule pulmonaire est une petite masse de tissu dans le poumon qui peut être bénigne ou maligne. En général, il n\'y a pas de symptômes, mais parfois une toux persistante ou une douleur thoracique peut se manifester.',
      detailedInfo: {
        description: "Un nodule pulmonaire est une petite masse de tissu dans le poumon qui peut être bénigne ou maligne.",
        symptoms: "En général, aucun symptôme. Parfois, une toux persistante ou une douleur thoracique peut se manifester.", 
        treatment: "Le traitement dépend du type de nodule. Il peut inclure une surveillance régulière, une biopsie ou une chirurgie pour retirer le nodule.",  
      }
    },
    {
      title: 'Hernie diaphragmatique',
      image: 'https://cdn1.chirurgie-bariatrique.paris/wp-content/uploads/2020/12/types-hernies-dr-stephane-servajean-paris-1.jpg',
      description: 'Une hernie diaphragmatique se produit lorsque des organes abdominaux, comme l\'estomac, s\'infiltrent dans la cavité thoracique à travers un défaut du diaphragme. Les symptômes incluent la douleur abdominale, l\'essoufflement et des douleurs thoraciques.',
      detailedInfo: {
        description: "Une hernie diaphragmatique se produit lorsque des organes abdominaux, comme l'estomac, s'infiltrent dans la cavité thoracique à travers un défaut du diaphragme.",
        symptoms: " Douleur abdominale, essoufflement, douleurs thoraciques.", 
        treatment: " Intervention chirurgicale pour réparer la hernie et replacer les organes dans leur position correcte.",  
      }
    },
    {
      title: 'Infiltration',
      image: 'https://c8.alamy.com/compfr/2r240gp/image-radiographique-du-thorax-humain-pour-un-diagnostic-medical-montre-la-zone-de-douleur-avec-du-rouge-radiographie-du-thorax-pour-l-examen-des-poumons-pa-vers-le-haut-a-droite-2r240gp.jpg',
      description: "L'infiltration désigne la présence de substances anormales dans le tissu pulmonaire. Cela peut être dû à une infection, une inflammation ou une tumeur.",
      detailedInfo: {
        description: "L'infiltration pulmonaire est une condition où des substances comme des cellules ou du liquide pénètrent dans le tissu pulmonaire, souvent en raison de maladies comme le cancer ou l'infection.",
        symptoms: "Toux persistante, essoufflement, perte de poids.",
        treatment: "Le traitement dépend de la cause sous-jacente (cancer, infection). Cela peut inclure la chimiothérapie, la radiothérapie ou des antibiotiques."
      }
    }
  ];

  selectedDisease: any = null;

  toggleDiseaseInfo(disease: any) {
    this.selectedDisease = this.selectedDisease === disease ? null : disease;
  }
}