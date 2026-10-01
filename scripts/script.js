///DADOS DOS TREINAMENTOS
const categories = [
    {
        id: "portal",
        name: "Portal",
        icon: "🌐",
        description: "Treinamentos relacionados ao Portal."
    },

    {
        id: "proposito",
        name: "Propósito Missionário",
        icon: "🎯",
        description: "Treinamentos sobre o propósito missionário."
    },

    {
        id: "alunos",
        name: "Alunos",
        icon: "🎓",
        description: "Treinamentos e orientações para alunos."
    },

    {
        id: "ministracao",
        name: "Ministração",
        icon: "📖",
        description: "Treinamentos relacionados à ministração."
    },

    {
        id: "dicas",
        name: "Dicas",
        icon: "💡",
        description: "Dicas importantes para melhorar sua experiência."
    }
];


//VÍDEOS
const videos = {
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


    ministracao: [

        {
            title: "Como realizar uma ministração",
            description: "Aprenda os principais pontos da ministração.",
            link: "COLE_AQUI_O_LINK_DO_DRIVE"
        }

    ],


    dicas: [

        {
            title: "Dica importante",
            description: "Uma dica para melhorar seu trabalho.",
            link: "COLE_AQUI_O_LINK_DO_DRIVE"
        }

    ]

};


//ELEMENTOS HTML
const categoriesContainer =
    document.querySelector(
        "#categories-container"
    );

const videosContainer =
    document.querySelector(
        "#videos-container"
    );

const categoriesSection =
    document.querySelector(
        "#categories-section"
    );

const videosSection =
    document.querySelector(
        "#videos-section"
    );

const categoryTitle =
    document.querySelector(
        "#category-title"
    );

const categoryDescription =
    document.querySelector(
        "#category-description"
    );

const backButton =
    document.querySelector(
        "#back-button"
    );


///MOSTRAR CATEGORIAS
function displayCategories() {

    categoriesContainer.innerHTML = "";
    categories.forEach(category => {

        const card =
            document.createElement("article");

        card.classList.add("category-card");

        card.innerHTML = `

            <div class="category-icon">
                ${category.icon}
            </div>

            <h3>
                ${category.name}
            </h3>

            <p>
                ${category.description}
            </p>

        `;

        card.addEventListener(
            "click",
            () => {
                displayVideos(category);
            }
        );

        categoriesContainer.appendChild(card);
    });

}


///MOSTRAR VÍDEOS
function displayVideos(category) {

    categoriesSection.classList.add(
        "hidden"
    );

    videosSection.classList.remove(
        "hidden"
    );

    categoryTitle.textContent =
        category.name;

    categoryDescription.textContent =
        category.description;

    videosContainer.innerHTML = "";

    const categoryVideos =
        videos[category.id] || [];


    /* Se não houver vídeos */

    if (categoryVideos.length === 0) {

        videosContainer.innerHTML = `

            <div class="no-videos">

                <p>
                    Nenhum treinamento disponível
                    nesta categoria no momento.
                </p>

            </div>

        `;

        return;
    }


    /* Criar cards dos vídeos */

    categoryVideos.forEach(
        (video, index) => {

            const card =
                document.createElement("article");

            card.classList.add(
                "video-card"
            );

            card.innerHTML = `

                <div class="video-thumbnail">
                    ▶
                </div>

                <div class="video-info">

                    <h3>
                        ${video.title}
                    </h3>

                    <p>
                        ${video.description}
                    </p>

                    <a
                        href="${video.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="watch-button"
                    >
                        Assistir vídeo
                    </a>

                </div>

            `;

            videosContainer.appendChild(card);
        }
    );
}


//VOLTAR PARA CATEGORIAS
backButton.addEventListener(
    "click",
    () => {

        videosSection.classList.add(
            "hidden"
        );

        categoriesSection.classList.remove(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


///INICIAR SITE
displayCategories();