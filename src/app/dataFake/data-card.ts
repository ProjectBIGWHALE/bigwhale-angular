export const dataFakeCard = [
  {
    id: 'design',
    title: 'Design',
    cards: [
      {
        id: 1,
        icon: 'imagesmode',
        title: 'Mudar cor de Imagem',
        description:
          'Você pode facilmente retirar o plano de fundo indesejado e obter imagens com transparência.',
        router: '/design/alter-color',
      },
      {
        id: 2,
        icon: 'palette',
        title: 'Gerar paleta de cores',
        description:
          'Para extrair automaticamente as cores principais da sua imagem e obter inspiração para os seus projetos de design.',
        router: '/design/colors-palette',
      },
    ],
  },

  {
    id: 'documents',
    title: 'Documentos',
    cards: [
      {
        id: 1,
        icon: 'photo_library',
        title: 'Converter Imagem',
        description:
          'Converta imagens em vários formatos de forma rápida e prática.',
        router: '/documents/image-converter',
      },
      {
        id: 2,
        icon: 'folder_zip',
        title: 'Converter ZIP',
        description:
          'Converta facilmente um arquivo .ZIP em outro formato de compressão do seu interesse!',
        router: '/documents/compact-converter',
      },
      {
        id: 3,
        icon: 'school',
        title: 'Gerar Certificado',
        description:
          'Você pode criar certificados personalizados de forma rápida e fácil para reconhecimento e autenticação.',
        router: '/documents/certificate-generator',
      },
    ],
  },

  {
    id: 'security',
    title: 'Segurança',
    cards: [
      {
        id: 1,
        icon: 'lock',
        title: 'Proteger Arquivos',
        description:
          'Proteja seu arquivo criptografando e descriptografando-o com uma chave que ninguém mais conhece.',
        router: '/security/cryptograph',
      },
      {
        id: 2,
        icon: 'qr_code',
        title: 'Gerar QR-CODE',
        description: 'Você pode gerar um QR-CODE personalizado com facilidade.',
        router: '/security/qrcode-generator',
      },
    ],
  },
];
