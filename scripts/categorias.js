//CATEGORIAS
const categories = {
    portal: {
        name: "Portal",
        description: "Treinamentos relacionados ao Portal."
    },

    proposito: {
        name: "Propósito Missionário",
        description: "Treinamentos sobre o propósito missionário."
    },

    alunos: {
        name: "Alunos",
        description: "Treinamentos e orientações para alunos."
    },

    ministracao: {
        name: "Ministração",
        description: "Treinamentos relacionados à ministração."
    },

    dicas: {
        name: "Dicas",
        description: "Dicas importantes para melhorar sua experiência."
    }
};

//VÍDEOS
const videos = {
    //PORTAL
    portal: [
        {
            title: "Como acessar o Portal",
            description: "Aprenda como acessar e utilizar o Portal.",
            link: "COLE_AQUI_O_LINK_DO_DRIVE"
        },

        {
            title: "Conhecendo o Portal",
            description: "Veja as principais funções disponíveis.",
            link: "COLE_AQUI_O_LINK_DO_DRIVE"
        }
    ],

    // PROPÓSITO MISSIONÁRIO
    proposito: [
        {
            title: "Propósito Missionário - Parte 1",
            description: "Entenda o propósito do trabalho missionário.",
            link: "https://drive.google.com/file/d/1U_BsEzAO3rEXcOSyqV2GUd5bJV2CATdI/view?usp=sharing"
        },

        {
            title: "Propósito Missionário - Parte 2",
            description: "Entenda o propósito do trabalho missionário.",
            link: "https://drive.google.com/file/d/11fWwc1Hs7U5HOXfLTAhs4apXQZD0xU6t/view?usp=sharing"
        },

        {
            title: "Propósito Missionário - Parte 3",
            description: "Entenda o propósito do trabalho missionário.",
            link: "https://drive.google.com/file/d/12e9NQfZnsp9qXaOYrr3NBN8qrqrzcAG2/view?usp=sharing"
        },

        {
            title: "Propósito Missionário - Parte 4",
            description: "Entenda o propósito do trabalho missionário.",
            link: "https://drive.google.com/file/d/1bFp2IOBBzQwFv3NhomwC3oKV6g0VPmI4/view?usp=sharing"
        }
    ],

    //ALUNOS
    alunos: [
        {
            title: "Orientações para alunos",
            description: "Informações importantes para os alunos.",
            link: "COLE_AQUI_O_LINK_DO_DRIVE"
        },

        {
            title: "Primeiros passos",
            description: "Confira os primeiros passos para começar.",
            link: "COLE_AQUI_O_LINK_DO_DRIVE"
        }
    ],

    //MINISTRAÇÃO
    ministracao: [
        {
            title: "Como realizar uma ministração",
            description: "Aprenda os principais pontos da ministração.",
            link: "COLE_AQUI_O_LINK_DO_DRIVE"
        }
    ],

    // DICAS
    dicas: [
        {
            title: "Dica importante",
            description: "Uma dica para melhorar seu trabalho.",
            link: "COLE_AQUI_O_LINK_DO_DRIVE"
        }
    ]
};

//PEGAR A CATEGORIA DA URL
const params =
    new URLSearchParams(
        window.location.search
    );

const categoryId =
    params.get("categoria");

//ELEMENTOS HTML
const categoryTitle =
    document.querySelector(
        "#category-title"
    );

const categoryDescription =
    document.querySelector(
        "#category-description"
    );

const videosContainer =
    document.querySelector(
        "#videos-container"
    );

//VERIFICAR CATEGORIA
const category =
    categories[categoryId];

if (!category) {
    categoryTitle.textContent =
        "Categoria não encontrada";

    categoryDescription.textContent =
        "A categoria que você tentou acessar não existe.";

    videosContainer.innerHTML = `
        <div class="no-videos">
            <p>Não encontramos esta categoria.</p>
        </div>
    `;
} else {
    //MOSTRAR TÍTULO
    categoryTitle.textContent =
        category.name;

    categoryDescription.textContent =
        category.description;

    // PEGAR OS VÍDEOS
    const categoryVideos =
        videos[categoryId] || [];

    //VERIFICAR SE EXISTEM VÍDEOS
    if (
        categoryVideos.length === 0
    ) {

        videosContainer.innerHTML = `
            <div class="no-videos">
                <p>
                    Nenhum treinamento disponível
                    nesta categoria no momento.
                </p>
            </div>
        `;
    } else {
        //CRIAR OS CARDS DOS VÍDEOS
        categoryVideos.forEach(
            (video) => {
                const card =
                    document.createElement(
                        "article"
                    );

                card.classList.add(
                    "video-card"
                );

                card.innerHTML = `
                    <div class="video-thumbnail">
                        <i class="fa-solid fa-play"></i>
                    </div>

                    <div class="video-info">
                        <h3>${video.title}</h3>
                        <p>${video.description}</p>

                        <a
                            href="${video.link}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="watch-button"
                        >
                            <i class="fa-solid fa-play"></i>
                            Assistir vídeo
                        </a>
                    </div>
                `;

                videosContainer.appendChild(
                    card
                );
            }
        );
    }
}