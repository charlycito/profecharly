const sesionesManejoDatos = [
  {
    numero: 1,
    titulo: "Los datos están en todas partes",
    pdf: "https://drive.google.com/file/d/1pKgymGHbDeOMdNji5448NfGCAUhdfhEc/preview",
    abrir: "https://drive.google.com/file/d/1pKgymGHbDeOMdNji5448NfGCAUhdfhEc/view?usp=sharing",
    descargar: "https://drive.google.com/uc?export=download&id=1pKgymGHbDeOMdNji5448NfGCAUhdfhEc"
  },
  {
    numero: 2,
    titulo: "Diseño del instrumento de recolección de datos",
    pdf: "https://drive.google.com/file/d/1XiDCvB9CBHZkDclnqDoGUGrTd9Pm_6nu/preview",
    abrir: "https://drive.google.com/file/d/1XiDCvB9CBHZkDclnqDoGUGrTd9Pm_6nu/view?usp=sharing",
    descargar: "https://drive.google.com/uc?export=download&id=1XiDCvB9CBHZkDclnqDoGUGrTd9Pm_6nu",
    materiales: [
      {
        tipo: "Instrumento de trabajo",
        titulo: "Instrumento para la recolección de datos",
        descripcion: "Documento que utilizarás para organizar y registrar la información de la actividad.",
        abrir: "https://drive.google.com/file/d/1trhBbW-zblAqW2tK0cZ9Osje8WkXZjg_/view?usp=sharing"
      },
      {
        tipo: "Manual de apoyo",
        titulo: "Manual del analista: diseño del instrumento de recolección de datos",
        descripcion: "Guía de consulta para comprender los criterios y pasos del diseño del instrumento.",
        abrir: "https://drive.google.com/file/d/1hwJeH8PovV4l9bO8BKYBjozeeWXv9llL/view?usp=sharing"
      }
    ]
  },
  {
    numero: 3,
    titulo: "Construcción, validación y publicación de formularios digitales",
    pdf: "https://drive.google.com/file/d/1vqFvdwVkJ2877LoQwbH9TLrYG67uNHHN/preview",
    abrir: "https://drive.google.com/file/d/1vqFvdwVkJ2877LoQwbH9TLrYG67uNHHN/view?usp=sharing",
    descargar: "https://drive.google.com/uc?export=download&id=1vqFvdwVkJ2877LoQwbH9TLrYG67uNHHN",
    materiales: [
      {
        tipo: "Manual de apoyo",
        titulo: "Manual del analista No. 2: Construcción, validación y publicación de formularios digitales",
        descripcion: "Guía para construir, revisar, probar y publicar correctamente el formulario digital del equipo.",
        abrir: "https://drive.google.com/file/d/1PW6Rry-vSMu24-3PnzeihEQEEOPYSTmT/view?usp=sharing"
      },
      {
        tipo: "Bitácora de trabajo",
        titulo: "Bitácora del Analista No. 2: Construcción y validación del formulario digital",
        descripcion: "Documento para registrar la construcción, prueba piloto, observaciones y correcciones del formulario.",
        abrir: "https://drive.google.com/file/d/15HbY6EWmfIDSsT6wbFDr8V7AAAKVvtHF/view?usp=sharing"
      },
      {
        tipo: "Guía práctica · PNG",
        titulo: "10 errores que debes evitar al construir un formulario digital",
        descripcion: "Infografía de consulta rápida para detectar errores antes de compartir el formulario.",
        abrir: "https://drive.google.com/file/d/1xIvH8RbMgm_yZC-8KH2UA2ZYL29xFHBt/view?usp=sharing"
      }
    ]
  },
  {
    numero: 4,
    titulo: "Organización y depuración de una base de datos",
    pdf: "https://drive.google.com/file/d/1rGXzGK3tRnCGnHnA4vPdZboUyg6te0yW/preview",
    abrir: "https://drive.google.com/file/d/1rGXzGK3tRnCGnHnA4vPdZboUyg6te0yW/view?usp=sharing",
    descargar: "https://drive.google.com/uc?export=download&id=1rGXzGK3tRnCGnHnA4vPdZboUyg6te0yW",
    materiales: [
      {
        tipo: "Bitácora de trabajo",
        titulo: "Bitácora del Analista No. 3: Organización y depuración de una base de datos",
        descripcion: "Documento para registrar el proceso de revisión, organización y limpieza de la base de datos del equipo.",
        abrir: "https://drive.google.com/file/d/1M_X9oGkP6DwV3d7a1MCcG9px79H5L4DA/view?usp=sharing"
      },
      {
        tipo: "Manual de apoyo",
        titulo: "Manual del Analista No. 3: Organización y depuración de una base de datos",
        descripcion: "Guía de consulta para organizar la información y aplicar criterios de depuración antes del análisis.",
        abrir: "https://drive.google.com/file/d/1anR26tjTpfWqwsjWP3GRV8bQOGlVsqtZ/view?usp=sharing"
      },
      {
        tipo: "Guía práctica",
        titulo: "10 errores que debes evitar al organizar y depurar una base de datos y conceptos que todo analista debe recordar",
        descripcion: "Material de consulta rápida para reconocer errores frecuentes y recordar los conceptos esenciales de la sesión.",
        abrir: "https://drive.google.com/file/d/1c3mMKvZWzau3Rxw0X1_i9UIPb0Ygsx00/view?usp=sharing"
      }
    ]
  },
  {
    numero: 5,
    titulo: "Creación e interpretación inicial de tablas dinámicas",
    pdf: "https://drive.google.com/file/d/1-VaIIrkJeb4j-TeXZ0xb8eyvMug5WFSf/preview",
    abrir: "https://drive.google.com/file/d/1-VaIIrkJeb4j-TeXZ0xb8eyvMug5WFSf/view?usp=sharing",
    descargar: "https://drive.google.com/uc?export=download&id=1-VaIIrkJeb4j-TeXZ0xb8eyvMug5WFSf",
    materiales: [
      {
        tipo: "Bitácora de trabajo",
        titulo: "Bitácora del Analista No. 4: Creación e interpretación inicial de tablas dinámicas",
        descripcion: "Documento para registrar la creación de tablas dinámicas y las primeras interpretaciones obtenidas a partir de los datos.",
        abrir: "https://drive.google.com/file/d/18J69_4-tou2N2_rVe9_7Pp4iB1iBuj04/view?usp=sharing"
      },
      {
        tipo: "Manual de apoyo",
        titulo: "Manual del Analista No. 4: Creación e interpretación inicial de tablas dinámicas",
        descripcion: "Guía de consulta para construir tablas dinámicas correctamente y comenzar a interpretar sus resultados.",
        abrir: "https://drive.google.com/file/d/1Zh59yUt_4jbKxrI50y7tByTPQ8j1G4k3/view?usp=sharing"
      },
      {
        tipo: "Guía práctica",
        titulo: "Guía Práctica No. 4: Cómo crear e interpretar tablas dinámicas",
        descripcion: "Material de consulta rápida con el procedimiento y los conceptos esenciales para trabajar con tablas dinámicas.",
        abrir: "https://drive.google.com/file/d/1M3E_Hgg2m3fERFrw7itB5JvD_AcrObN6/view?usp=sharing"
      },
      {
        tipo: "Lista de comprobación",
        titulo: "Creación e interpretación de tablas dinámicas",
        descripcion: "Instrumento para verificar que la tabla dinámica esté correctamente construida y que su interpretación sea clara y pertinente.",
        abrir: "https://drive.google.com/file/d/1hZ_v5yP9YGvfQO_XM8mTzsoI56V-Ti6Y/view?usp=sharing"
      }
    ]
  }
];
