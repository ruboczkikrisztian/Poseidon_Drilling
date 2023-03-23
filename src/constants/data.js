import images from './images';

const information = [
  {
    title: 'Jótállás',
    tags: 'Az általam készített kutakra 2 év jótállást vállalok.',
  },
  {
    title: 'Árak',
    tags: 'Árajánlattal kapcsolatosan keressen bizalommal',
  },
  {
    title: 'Munkavállalási terület',
    tags: 'Kifejezetten Csepel-Sziget és környékén dolgozok ugyanis a megfelelő munkavégzéshez elengedhetetlenek tartom a talajviszonyok ismeretét.',
  }
];

const moreinformation = [
  {
    title: 'Kivitelezés',
    tags: 'Szárazfúrásos technológiát alkalmazunk, melynek előnye, hogy a munka során nem keletkezik annyi furadék anyag. Továbbá nincs nagy helyigénye az eszközeinknek.',
  },
  {
    title: "Engedélyek",
    tags: 'A kútfúrás minden esetben engedély köteles',
  }
];

const services = [
  {
    imgUrl: images.locsolokut,
    title: 'Locsoló kutak kiépítése',
    
  },
  {
    imgUrl: images.kuttisztitas,
    title: 'Kutak tisztítása',
 
  },
  {
    imgUrl: images.kutatofuras,
    title: 'Kutatófúrás',
 
  },
  {
    imgUrl: images.kutengedely,
    title: 'Kút engedélyeztetés',
 
  },
];

export default { information, moreinformation, services };
