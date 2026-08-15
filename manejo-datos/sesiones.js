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
        descripcion: "Material de consulta rápida para reconocer errores frecuentes y recordar los conceptos esenciales de la semana.",
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
  },
  {
    numero: 6,
    titulo: "Gráficos dinámicos e interpretación de resultados",
    pdf: "https://drive.google.com/file/d/16t_OTRQGemwlqqNOK3lyyY0H72onvRnX/preview",
    abrir: "https://drive.google.com/file/d/16t_OTRQGemwlqqNOK3lyyY0H72onvRnX/view?usp=sharing",
    descargar: "https://drive.google.com/uc?export=download&id=16t_OTRQGemwlqqNOK3lyyY0H72onvRnX",
    materiales: [
      {
        tipo: "Bitácora de trabajo",
        titulo: "Bitácora del Analista No. 5: Gráficos dinámicos e interpretación de resultados",
        descripcion: "Documento para registrar la creación de gráficos dinámicos y la interpretación de los resultados obtenidos.",
        abrir: "https://drive.google.com/file/d/1dVYTgReMuMpfYKpDT6w0W2oKIgzvuVh4/view?usp=sharing"
      },
      {
        tipo: "Manual de apoyo",
        titulo: "Manual del Analista No. 5: Gráficos dinámicos e interpretación de resultados",
        descripcion: "Guía de consulta para elegir, crear y analizar gráficos dinámicos a partir de las tablas dinámicas del proyecto.",
        abrir: "https://drive.google.com/file/d/1QVNnV6cIzsZvtBEd3rdi7gEN6ojoSiwm/view?usp=sharing"
      },
      {
        tipo: "Guía práctica",
        titulo: "Guía Práctica No. 5: Gráficos dinámicos — elige, crea y comunica información con claridad",
        descripcion: "Material de consulta rápida para seleccionar el gráfico adecuado y comunicar los resultados con claridad.",
        abrir: "https://drive.google.com/file/d/1O_w4UWXl0JqXKxjQ49GCqOTO4pMjBdXy/view?usp=sharing"
      },
      {
        tipo: "Lista de comprobación",
        titulo: "Lista de Comprobación No. 5: Revisión del archivo antes de entregar la Evidencia 1.2",
        descripcion: "Instrumento para revisar el dashboard, sus gráficos dinámicos y los elementos requeridos antes de la entrega.",
        abrir: "https://drive.google.com/file/d/1-DuzwBVFyn5bT_mPCyCYfknzfpiiDEEJ/view?usp=sharing"
      }
    ],
    video: {
      titulo: "Orientaciones para realizar un dashboard",
      descripcion: "Video del Profe Charly con indicaciones para organizar y construir el dashboard de la Evidencia 1.2.",
      youtube: "https://www.youtube-nocookie.com/embed/jGZn2YB0k6I",
      abrir: "https://www.youtube.com/watch?v=jGZn2YB0k6I"
    }
  },
  {
    numero: 7,
    titulo: "Análisis estadístico y correlación",
    pdf: "https://drive.google.com/file/d/1OnwVRsJuEL2U4XCYL_MLuzdjq4mu67Hh/preview",
    abrir: "https://drive.google.com/file/d/1OnwVRsJuEL2U4XCYL_MLuzdjq4mu67Hh/view?usp=sharing",
    descargar: "https://drive.google.com/uc?export=download&id=1OnwVRsJuEL2U4XCYL_MLuzdjq4mu67Hh",
    materiales: [
      {
        tipo: "Bitácora de trabajo",
        titulo: "Bitácora del Analista No. 6: Análisis estadístico y correlación",
        descripcion: "Documento para registrar los cálculos, comparaciones, correlaciones e interpretaciones obtenidas durante el análisis de los datos.",
        abrir: "https://drive.google.com/file/d/1c6o1AccOu8eOY5v63N_B5ZouNxQbudD5/view?usp=sharing"
      },
      {
        tipo: "Manual de apoyo",
        titulo: "Manual del Analista No. 6: Análisis estadístico y correlación",
        descripcion: "Guía de consulta para aplicar estadística básica, analizar relaciones entre variables e interpretar los resultados con sentido.",
        abrir: "https://drive.google.com/file/d/1qfleG5RMVBxgX01pgAe6ZGK2QjB8d_B4/view?usp=sharing"
      },
      {
        tipo: "Guía práctica",
        titulo: "Guía Práctica No. 6: Análisis estadístico — resume, compara e interpreta datos con sentido",
        descripcion: "Material de consulta rápida para calcular medidas estadísticas, comparar resultados y redactar interpretaciones claras.",
        abrir: "https://drive.google.com/file/d/1zrbBCth1A-iwXEj4w0DDUQZg8Q-Kvcwv/view?usp=sharing"
      },
      {
        tipo: "Lista de comprobación",
        titulo: "Lista de Comprobación No. 6: Análisis estadístico y correlación — revisión del avance para continuar en la Semana 8",
        descripcion: "Instrumento para comprobar que los cálculos, gráficos, correlaciones e interpretaciones estén listos antes de continuar con la entrega final.",
        abrir: "https://drive.google.com/file/d/14GE-hatEq7DeMPqTKMM9HQPU_eomzkbU/view?usp=sharing"
      },
      {
        tipo: "Ruta de trabajo",
        titulo: "Ruta de Trabajo del Estudiante — Semana 7: Estadística básica y correlación",
        descripcion: "Secuencia de actividades, recursos y productos que orienta el trabajo del estudiante durante la semana.",
        abrir: "https://drive.google.com/file/d/12FTI2VmEKvEr7HW_EZi6eOJhY4EZ3g0_/view?usp=sharing"
      }
    ],
    video: {
      titulo: "Estadística básica y correlación",
      descripcion: "Video de apoyo para reforzar el análisis estadístico y la interpretación de la correlación en los datos del proyecto.",
      youtube: "https://www.youtube-nocookie.com/embed/xfpok0kI2S8",
      abrir: "https://www.youtube.com/watch?v=xfpok0kI2S8"
    }
  },
  {
    numero: 8,
    titulo: "Comunicar resultados con responsabilidad",
    pdf: "https://drive.google.com/file/d/1ihcF1g12o9zJqiCUdkubCyMz3sIgGeu2/preview",
    abrir: "https://drive.google.com/file/d/1ihcF1g12o9zJqiCUdkubCyMz3sIgGeu2/view?usp=sharing",
    descargar: "https://drive.google.com/uc?export=download&id=1ihcF1g12o9zJqiCUdkubCyMz3sIgGeu2",
    materiales: [
      {
        tipo: "Bitácora de trabajo",
        titulo: "Bitácora del Analista No. 7: Integración y comunicación del informe final",
        descripcion: "Documento para integrar los resultados del equipo, redactar conclusiones y comunicar el informe final con responsabilidad.",
        abrir: "https://drive.google.com/file/d/1qKC4RjC-E6I-f9F5s_5H4vJVZV6aKUNm/view?usp=sharing"
      },
      {
        tipo: "Manual de apoyo",
        titulo: "Manual del Analista No. 7: Integramos y comunicamos el análisis final",
        descripcion: "Guía para organizar los hallazgos, comparar resultados y presentar conclusiones claras, verificables y responsables.",
        abrir: "https://drive.google.com/file/d/1t0ag2ERG08BXPlzTddX5EGGn8OfkOIeA/view?usp=sharing"
      },
      {
        tipo: "Guía práctica",
        titulo: "Guía Práctica No. 7: Integramos y comunicamos el análisis final",
        descripcion: "Material de consulta rápida para revisar cómo se integran los resultados y cómo se comunican sin alterar el sentido de los datos.",
        abrir: "https://drive.google.com/file/d/1p9jveOipu5CpKfib1uUCnJ9ySApsllfy/view?usp=sharing"
      },
      {
        tipo: "Lista de comprobación",
        titulo: "Lista de Comprobación No. 7: Revisión final de la Evidencia 1.3",
        descripcion: "Instrumento final para verificar que el informe incluya evidencias, comparaciones, interpretaciones, conclusiones y los elementos solicitados.",
        abrir: "https://drive.google.com/file/d/11XdF06C33t6YOXKA4mtwaBj-LCtrS-wl/view?usp=sharing"
      },
      {
        tipo: "Ruta de trabajo",
        titulo: "Ruta de Trabajo del Estudiante: Integramos y comunicamos nuestro análisis",
        descripcion: "Secuencia de actividades, recursos y productos que orienta el cierre del análisis y la integración del informe final.",
        abrir: "https://drive.google.com/file/d/1iySAXcGY5WGgPycO-hbBL7yLq5wMtU-B/view?usp=sharing"
      }
    ]
  }
];
