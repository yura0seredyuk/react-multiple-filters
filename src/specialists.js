const specialists = [
  {
    id: 0,
    userPhoto: '/src/apps/client/ui/pages/PsychologistBio/images/user.png',
    name: 'Анна Петрова',
    profession: 'Психолог',
    experience: '3 года',
    price: '1 000 ₴',
    townLocation: 'Киев',
    format: 'Онлайн / Офлайн',
    lang: 'Русский',
    gender: 'Женский',
    tel: '+380777777777',
    mail: 'aandrew@exemple.com',
    info: [
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/userIcon.png',
        alt: 'user icon',
        info: '32 года'
      },
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/shield-tick.png',
        alt: 'shield',
        info: '4 года опыта'
      },
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/pin.png',
        alt: 'pin',
        info: 'Киев'
      },
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/compass.png',
        alt: 'compass',
        info: 'Печерский район'
      }
    ],
    workWithTexts: [
      {
        workWith: {
          ua: 'Пошук себе',
          ru: 'Поиск себя',
          en: 'Finding yourself'
        }
      },
      {
        workWith: {
          ua: 'Депресивні стани',
          ru: 'Депрессивные состояния',
          en: 'Depressive states'
        }
      },
      {
        workWith: {
          ua: 'Інше',
          ru: 'Другое',
          en: 'Other'
        }
      },
      {
        workWith: {
          ua: 'Інше',
          ru: 'Другое',
          en: 'Other'
        }
      },
      {
        workWith: {
          ua: "Кар'єра, професійне зростання",
          ru: 'Карьера, профессиональный рост',
          en: 'Career, professional growth'
        }
      },
      {
        workWith: {
          ua: 'Розлади харчової поведінки',
          ru: 'Расстройства пищевого поведения',
          en: 'Eating disorders'
        }
      }
    ],
    workWithAnother: [
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/smile.png',
        alt: 'smile',
        text: {
          ua: 'Працює з дітьми',
          ru: 'Работает с детьми',
          en: 'Works with children'
        }
      },
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/hearth.png',
        alt: 'hearth',
        text: {
          ua: 'Працює з парами',
          ru: 'Работает с парами',
          en: 'Works with pairs'
        }
      },
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/star.png',
        alt: 'star',
        text: {
          ua: 'Індивідуальні сесії',
          ru: 'Индивидуальные сессии',
          en: 'Individual sessions'
        }
      }
    ],
    about: [
      {
        id: 'bio',
        aboutTitle: {
          ua: 'Біо',
          ru: 'Био',
          en: 'Bio'
        },
        // eslint-disable-next-line max-len
        textFirstPart:
          'В работе с клиентами в первую очередь я руководствуюсь принципами нарративного подхода в психотерапии, опираюсь на ценности клиента и его видение ситуации.\n' +
          'Я считаю, что клиент сам является экспертом в своей жизни, а я проводник и помощник в его путешествии к себе.\n',
        // eslint-disable-next-line max-len
        textSecondPart:
          'Думаю, у любого человека есть своя предпочитаемая история, то, как он видит свою жизнь в самых лучших надеждах и мечтах, есть собственная авторская позиция. А проблема – это то, что мешает воплощать свои мечты в реальность, нарушает то, что для него важно и ценно.'
      },
      {
        id: 'approachesUsed',
        aboutTitle: {
          ua: 'Використовувані підходи',
          ru: 'Используемые подходы',
          en: 'Approaches used'
        },
        // eslint-disable-next-line max-len
        textFirstPart:
          'В работе с клиентами в первую очередь я руководствуюсь принципами нарративного подхода в психотерапии, опираюсь на ценности клиента и его видение ситуации.\n' +
          'Я считаю, что клиент сам является экспертом в своей жизни, а я проводник и помощник в его путешествии к себе.\n'
        // eslint-disable-next-line max-len
      },
      {
        id: 'education',
        aboutTitle: {
          ua: 'Освіта',
          ru: 'Образование',
          en: 'Education'
        },
        // eslint-disable-next-line max-len
        textFirstPart:
          'В работе с клиентами в первую очередь я руководствуюсь принципами нарративного подхода в психотерапии, опираюсь на ценности клиента и его видение ситуации.\n' +
          'Я считаю, что клиент сам является экспертом в своей жизни, а я проводник и помощник в его путешествии к себе.\n',
        // eslint-disable-next-line max-len
        textSecondPart:
          'Думаю, у любого человека есть своя предпочитаемая история, то, как он видит свою жизнь в самых лучших надеждах и мечтах, есть собственная авторская позиция. А проблема – это то, что мешает воплощать свои мечты в реальность, нарушает то, что для него важно и ценно.'
      },
      {
        id: 'experience',
        aboutTitle: {
          ua: 'Досвід роботи',
          ru: 'Опыт работы',
          en: 'Work experience'
        },
        // eslint-disable-next-line max-len
        textFirstPart:
          'В работе с клиентами в первую очередь я руководствуюсь принципами нарративного подхода в психотерапии, опираюсь на ценности клиента и его видение ситуации.\n' +
          'Я считаю, что клиент сам является экспертом в своей жизни, а я проводник и помощник в его путешествии к себе.\n'
        // eslint-disable-next-line max-len
      }
    ]
  },
  {
    id: 1,
    userPhoto:
      '/src/apps/client/ui/components/PsychologistCard/images/userPhoto.png',
    name: 'Иван Иванов',
    profession: 'Психолог',
    experience: '3 года',
    price: '1 000 ₴',
    townLocation: 'Львів',
    format: 'Онлайн / Офлайн',
    lang: 'Русский',
    gender: 'Мужской',
    tel: '+380777777777',
    mail: 'aandrew@exemple.com',
    info: [
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/userIcon.png',
        alt: 'user icon',
        info: '32 года'
      },
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/shield-tick.png',
        alt: 'shield',
        info: '4 года опыта'
      },
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/pin.png',
        alt: 'pin',
        info: 'Киев'
      },
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/compass.png',
        alt: 'compass',
        info: 'Печерский район'
      }
    ],
    workWithTexts: [
      {
        workWith: {
          ua: 'Пошук себе',
          ru: 'Поиск себя',
          en: 'Finding yourself'
        }
      },
      {
        workWith: {
          ua: 'Депресивні стани',
          ru: 'Депрессивные состояния',
          en: 'Depressive states'
        }
      },
      {
        workWith: {
          ua: 'Інше',
          ru: 'Другое',
          en: 'Other'
        }
      },
      {
        workWith: {
          ua: 'Інше',
          ru: 'Другое',
          en: 'Other'
        }
      },
      {
        workWith: {
          ua: "Кар'єра, професійне зростання",
          ru: 'Карьера, профессиональный рост',
          en: 'Career, professional growth'
        }
      },
      {
        workWith: {
          ua: 'Розлади харчової поведінки',
          ru: 'Расстройства пищевого поведения',
          en: 'Eating disorders'
        }
      }
    ],
    workWithAnother: [
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/smile.png',
        alt: 'smile',
        text: {
          ua: 'Працює з дітьми',
          ru: 'Работает с детьми',
          en: 'Works with children'
        }
      },
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/hearth.png',
        alt: 'hearth',
        text: {
          ua: 'Працює з парами',
          ru: 'Работает с парами',
          en: 'Works with pairs'
        }
      },
      {
        img: '/src/apps/client/ui/pages/PsychologistBio/images/star.png',
        alt: 'star',
        text: {
          ua: 'Індивідуальні сесії',
          ru: 'Индивидуальные сессии',
          en: 'Individual sessions'
        }
      }
    ],
    about: [
      {
        id: 'bio',
        aboutTitle: {
          ua: 'Біо',
          ru: 'Био',
          en: 'Bio'
        },
        // eslint-disable-next-line max-len
        textFirstPart:
          'В работе с клиентами в первую очередь я руководствуюсь принципами нарративного подхода в психотерапии, опираюсь на ценности клиента и его видение ситуации.\n' +
          'Я считаю, что клиент сам является экспертом в своей жизни, а я проводник и помощник в его путешествии к себе.\n',
        // eslint-disable-next-line max-len
        textSecondPart:
          'Думаю, у любого человека есть своя предпочитаемая история, то, как он видит свою жизнь в самых лучших надеждах и мечтах, есть собственная авторская позиция. А проблема – это то, что мешает воплощать свои мечты в реальность, нарушает то, что для него важно и ценно.'
      },
      {
        id: 'approachesUsed',
        aboutTitle: {
          ua: 'Використовувані підходи',
          ru: 'Используемые подходы',
          en: 'Approaches used'
        },
        // eslint-disable-next-line max-len
        textFirstPart:
          'В работе с клиентами в первую очередь я руководствуюсь принципами нарративного подхода в психотерапии, опираюсь на ценности клиента и его видение ситуации.\n' +
          'Я считаю, что клиент сам является экспертом в своей жизни, а я проводник и помощник в его путешествии к себе.\n'
        // eslint-disable-next-line max-len
      },
      {
        id: 'education',
        aboutTitle: {
          ua: 'Освіта',
          ru: 'Образование',
          en: 'Education'
        },
        // eslint-disable-next-line max-len
        textFirstPart:
          'В работе с клиентами в первую очередь я руководствуюсь принципами нарративного подхода в психотерапии, опираюсь на ценности клиента и его видение ситуации.\n' +
          'Я считаю, что клиент сам является экспертом в своей жизни, а я проводник и помощник в его путешествии к себе.\n',
        // eslint-disable-next-line max-len
        textSecondPart:
          'Думаю, у любого человека есть своя предпочитаемая история, то, как он видит свою жизнь в самых лучших надеждах и мечтах, есть собственная авторская позиция. А проблема – это то, что мешает воплощать свои мечты в реальность, нарушает то, что для него важно и ценно.'
      },
      {
        id: 'experience',
        aboutTitle: {
          ua: 'Досвід роботи',
          ru: 'Опыт работы',
          en: 'Work experience'
        },
        // eslint-disable-next-line max-len
        textFirstPart:
          'В работе с клиентами в первую очередь я руководствуюсь принципами нарративного подхода в психотерапии, опираюсь на ценности клиента и его видение ситуации.\n' +
          'Я считаю, что клиент сам является экспертом в своей жизни, а я проводник и помощник в его путешествии к себе.\n'
        // eslint-disable-next-line max-len
      }
    ]
  }
];

export default specialists;
