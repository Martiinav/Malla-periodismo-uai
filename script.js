document.addEventListener("DOMContentLoaded", () => {
  const estadoRamos = JSON.parse(localStorage.getItem("estadoRamos")) || {};

  const mallaLicenciatura = [
    {
      anio: "Primer año",
      semestres: [
        {
          nombre: "1 semestre",
          ramos: [
            { id: "civilizacion1", nombre: "CORE: Civilización contemporánea I" },
            { id: "escritura", nombre: "CORE: Escritura argumentativa" },
            { id: "emociones", nombre: "Comportamiento Humano, Emociones y Cognición" },
            { id: "comunicacion", nombre: "Ciencias de la comunicación" },
            { id: "creativos", nombre: "Contenidos Creativos" },
            { id: "redaccion", nombre: "Redacción" },
            { id: "industrias", nombre: "Industrias de la comunicación y Poder" },
            { id: "deporte1", nombre: "Deporte I" }
          ]
        },
        {
          nombre: "2 semestre",
          ramos: [
            { id: "civilizacion2", nombre: "CORE: Civilización contemporánea II", reqs: ["civilizacion1"] },
            { id: "cambioSocial", nombre: "Cambio y Procesos Sociales" },
            { id: "sociedadDigital", nombre: "Sociedad y Cultura Digital" },
            { id: "razonamiento", nombre: "Razonamiento con Datos" },
            { id: "narrativasSonoras", nombre: "Media Lab: Narrativas Sonoras" },
            { id: "reporteo", nombre: "Reporteo y Relatos informativos", reqs: ["redaccion"] },
            { id: "estrategica", nombre: "Comunicación estratégica y Stakeholders" },
            { id: "deporte2", nombre: "Deporte II", reqs: ["deporte1"] }
          ]
        }
      ]
    },
    {
      anio: "Segundo año",
      semestres: [
        {
          nombre: "3 semestre",
          ramos: [
            { id: "lit1", nombre: "CORE: Literatura y Humanidades I", reqs: ["civilizacion2"] },
            { id: "filo", nombre: "Electivo filosofía", reqs: ["civilizacion2"] },
            { id: "cambioPolitico", nombre: "Cambio y procesos políticos" },
            { id: "experienciaDigital", nombre: "Comportamiento humano y experiencia digital" },
            { id: "cuantitativos", nombre: "Métodos cuantitativos en comunicación", reqs: ["razonamiento"] },
            { id: "audiovisual", nombre: "Media Lab: Narrativas audiovisuales" },
            { id: "marketing", nombre: "Comunicaciones integradas de Marketing" },
            { id: "deporte3", nombre: "Deporte III", reqs: ["deporte2"] }
          ]
        },
        {
          nombre: "4 semestre",
          ramos: [
            { id: "lit2", nombre: "CORE: Literatura y Humanidades II", reqs: ["civilizacion2"] },
            { id: "historia", nombre: "Electivo historia", reqs: ["civilizacion2"] },
            { id: "globales", nombre: "Cambio y procesos globales" },
            { id: "politicadigital", nombre: "Comunicación política y entorno digital" },
            { id: "cualitativos", nombre: "Métodos cualitativos en comunicación" },
            { id: "narrativasEscritas", nombre: "Media Lab: Narrativas escritas", reqs: ["redaccion"] },
            { id: "electivo4", nombre: "Electivo" },
            { id: "deporte4", nombre: "Deporte IV", reqs: ["deporte3"] }
          ]
        }
      ]
    },
    {
      anio: "Tercer año",
      semestres: [
        {
          nombre: "5 semestre",
          ramos: [
            { id: "ciencias", nombre: "CORE: Ciencias", reqs: ["civilizacion2"] },
            { id: "etica", nombre: "CORE: Ética", reqs: ["civilizacion2"] },
            { id: "arteylit", nombre: "Electivo Arte y literatura" },
            { id: "analisisDigital", nombre: "Métodos y análisis de plataformas y audiencias digitales" },
            { id: "storytelling", nombre: "Storytelling transmedial" },
            { id: "estrategiaCorp", nombre: "Principios de la Estrategia Corporativa" },
            { id: "electivo5", nombre: "Electivo" },
            { id: "deporte5", nombre: "Deporte V", reqs: ["deporte4"] }
          ]
        },
        {
          nombre: "6 semestre",
          ramos: [
            { id: "arteHumanidades", nombre: "CORE: Arte y humanidades", reqs: ["lit2"] },
            { id: "electivoCiencias", nombre: "Electivo ciencias" },
            { id: "eco", nombre: "Electivo Ciencias sociales: Economía" },
            { id: "eticaReg", nombre: "Ética y regulación: Desafíos actuales y futuros" },
            { id: "estrategiaRedes", nombre: "Estrategia digital y redes sociales" },
            { id: "electivo6", nombre: "Electivo" },
            { id: "aprendizajeServicio", nombre: "Proyecto aprendizaje de servicio" },
            { id: "liderazgo", nombre: "Liderazgo" },
            { id: "deporte6", nombre: "Deporte VI", reqs: ["deporte5"] }
          ]
        }
      ]
    }
  ];

  const mallaProfesional = [
    {
      anio: "Cuarto año",
      semestres: [
        {
          nombre: "7 semestre",
          bimestres: [
            {
              nombre: "Bimestre 1",
              ramos: [
                { id: "emprendimiento1", nombre: "Emprendimiento" },
                { id: "tendencias", nombre: "Tendencias y formatos emergentes en comunicación" },
                { id: "electivo7a", nombre: "Electivo" },
                { id: "convergenteAudio1", nombre: "Taller de periodismo convergente: Audio" },
                { id: "politico", nombre: "Taller de periodismo político" },
                { id: "eticaPeriodistica", nombre: "Ética periodística" },
                { id: "electivoMencion1", nombre: "Electivo mención profesional" }
              ]
            },
            {
              nombre: "Bimestre 2",
              ramos: [
                { id: "emprendimiento2", nombre: "Emprendimiento" },
                { id: "experiencias", nombre: "Diseño de experiencias de comunicación" },
                { id: "electivo7b", nombre: "Electivo" },
                { id: "convergenteAudio2", nombre: "Taller de periodismo convergente: Audio" },
                { id: "economico", nombre: "Taller de periodismo económico" },
                { id: "noFiccion", nombre: "Narración escrita de no ficción" },
                { id: "electivoMencion2", nombre: "Electivo mención profesional" }
              ]
            }
          ]
        },
        {
          nombre: "8 semestre",
          bimestres: [
            {
              nombre: "Bimestre 3",
              ramos: [
                { id: "gestionEcosistemas", nombre: "Gestión de proyectos en ecosistemas digitales" },
                { id: "gestionMedios", nombre: "Gestión integrada de medios de comunicación" },
                { id: "convergenteAudiovisual1", nombre: "Taller de periodismo convergente: Audiovisual" },
                { id: "investigacion", nombre: "Taller de periodismo de investigación" },
                { id: "factChecking", nombre: "Fact-checking y desinformación" },
                { id: "electivoMencion3", nombre: "Electivo mención profesional" }
              ]
            },
            {
              nombre: "Bimestre 4",
              ramos: [
                { id: "gestionEcosistemas2", nombre: "Gestión de proyectos en ecosistemas digitales" },
                { id: "datos", nombre: "Comunicación de datos" },
                { id: "convergenteAudiovisual2", nombre: "Taller de periodismo convergente: Audiovisual" },
                { id: "investigacion2", nombre: "Taller de periodismo de investigación" },
                { id: "ia", nombre: "Periodismo, inteligencia artificial y otros desarrollos" },
                { id: "electivoMencion4", nombre: "Electivo mención profesional" }
              ]
            }
          ]
        },
        {
          nombre: "Trimestre verano",
          ramos: [
            { id: "practica", nombre: "Práctica profesional" }
          ]
        }
      ]
    }
  ];

  function renderMalla(malla, containerId) {
    const container = document.getElementById(containerId);

    malla.forEach(anio => {
      const anioDiv = document.createElement("div");
      anioDiv.className = "anio";

      const titulo = document.createElement("h2");
      titulo.textContent = anio.anio;
      anioDiv.appendChild(titulo);

      const semestresDiv = document.createElement("div");
      semestresDiv.className = "semestres";

      anio.semestres.forEach(semestre => {
        const semDiv = document.createElement("div");
        semDiv.className = "semestre";

        const sub = document.createElement("h3");
        sub.textContent = semestre.nombre;
        semDiv.appendChild(sub);

        if (semestre.bimestres) {
          const bimestresDiv = document.createElement("div");
          bimestresDiv.className = "bimestres";

          semestre.bimestres.forEach(bimestre => {
            const bimDiv = document.createElement("div");
            bimDiv.className = "bimestre";

            const btitle = document.createElement("h4");
            btitle.textContent = bimestre.nombre;
            bimDiv.appendChild(btitle);

            bimestre.ramos.forEach(ramo => crearRamo(ramo, bimDiv));
            bimestresDiv.appendChild(bimDiv);
          });

          semDiv.appendChild(bimestresDiv);
        } else {
          semestre.ramos.forEach(ramo => crearRamo(ramo, semDiv));
        }

        semestresDiv.appendChild(semDiv);
      });

      anioDiv.appendChild(semestresDiv);
      container.appendChild(anioDiv);
    });
  }

  function crearRamo(ramo, parentDiv) {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.id;
    div.textContent = ramo.nombre;

    // Verificar requisitos y bloquear ramos si es necesario
    if (ramo.reqs && !ramo.reqs.every(id => estadoRamos[id])) {
      div.classList.add("locked");
    } else if (estadoRamos[ramo.id]) {
      div.classList.add("approved");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("locked")) return;
      div.classList.toggle("approved");
      estadoRamos[ramo.id] = div.classList.contains("approved");
      localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
    });

    parentDiv.appendChild(div);
  }

  renderMalla(mallaLicenciatura, "malla-licenciatura");
  renderMalla(mallaProfesional, "malla-profesional");
});
