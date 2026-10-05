
// MOBILE MENU


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");


// Open / close mobile menu

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

    const isOpen =
        !mobileMenu.classList.contains("hidden");

    menuBtn.setAttribute(
        "aria-expanded",
        isOpen
    );

});


// Close mobile menu when a link is clicked

const mobileLinks =
    mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// TEAM MEMBERS


const team = [

    {
        name: "Achref",
        role: "Coach",
        img: "assets/images/couach Achref.png",
        featured: false
    },

    {
        name: "Bilel",
        role: "Coach",
        img: "assets/images/couachBilel.png",
        featured: true
    },

    {
        name: "Rahma",
        role: "Coach",
        img: "assets/images/couach RAHMA.png",
        featured: false
    },

    {
        name: "Moncef",
        role: "Coach",
        img: "assets/images/couachMoncef.png",
        featured: false
    }

];


// Camera icon

const cameraIcon = `
<svg
    viewBox="0 0 24 24"
    class="w-11 h-11 opacity-60 fill-gray-400"
>
    <path
        d="M9 3l-1.5 2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.5L15 3H9zm3 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"
    />
</svg>
`;


// Instagram icon

const igIcon = `
<svg
    viewBox="0 0 24 24"
    class="w-4 h-4 fill-white"
>
    <path
        d="M12 2c2.7 0 3 .01 4.1.06 1.1.05 1.85.23 2.5.48.68.27 1.25.62 1.82 1.19.57.57.92 1.14 1.19 1.82.25.65.43 1.4.48 2.5.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.23 1.85-.48 2.5a4.9 4.9 0 0 1-1.19 1.82 4.9 4.9 0 0 1-1.82 1.19c-.65.25-1.4.43-2.5.48-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.85-.23-2.5-.48a4.9 4.9 0 0 1-1.82-1.19 4.9 4.9 0 0 1-1.19-1.82c-.25-.65-.43-1.4-.48-2.5C2.01 15 2 14.7 2 12s.01-3 .06-4.1c.05-1.1.23-1.85.48-2.5.27-.68.62-1.25 1.19-1.82A4.9 4.9 0 0 1 5.55 2.39c.65-.25 1.4-.48 2.5-.48C9.15 2.01 9.45 2 12.15 2H12zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
    />
</svg>
`;


// Create team card

function createTeamCard(member) {

    const width =
        member.featured
            ? "w-72"
            : "w-64";

    const height =
        member.featured
            ? "h-[380px]"
            : "h-[340px]";


    const card =
        document.createElement("div");


    card.className =
        `flex-none ${width} snap-start text-center`;


    card.innerHTML = `

        <div
            class="relative ${height} w-full overflow-hidden bg-neutral-900 group"
        >

            <img
                src="${member.img}"
                alt="${member.name}"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />


            <div
                class="fallback hidden absolute inset-0 flex-col items-center justify-center gap-2 bg-neutral-900"
            >

                ${cameraIcon}

                <span
                    class="text-gray-400 text-xs tracking-wide uppercase"
                >
                    Add a photo
                </span>

            </div>


            <div
                class="absolute bottom-2 left-2 w-8 h-8 rounded bg-black/55 flex items-center justify-center"
            >

                ${igIcon}

            </div>

        </div>


        <h3
            class="text-white font-black uppercase tracking-wide text-xl mt-4"
        >
            ${member.name}
        </h3>


        <p
            class="text-[#c98a4b] font-bold text-xs tracking-[2px] uppercase mt-1"
        >
            ${member.role}
        </p>

    `;


    // Image fallback

    const img =
        card.querySelector("img");

    const fallback =
        card.querySelector(".fallback");


    img.addEventListener("error", () => {

        img.remove();

        fallback.classList.remove("hidden");

        fallback.classList.add("flex");

    });


    return card;

}


// Render team

const row =
    document.getElementById("team-row");


team.forEach(member => {

    row.appendChild(
        createTeamCard(member)
    );

});




// PRICING


const plans = {

    muscu: [

        {
            duration: "1 Month",
            price: "59",
            promo: false
        },

        {
            duration: "3 Months",
            price: "159",
            promo: true
        },

        {
            duration: "6 Months",
            price: "299",
            promo: true
        },

        {
            duration: "1 Year",
            price: "499",
            promo: true
        }

    ],


    libre: [

        {
            duration: "1 Month",
            price: "79",
            promo: false
        },

        {
            duration: "3 Months",
            price: "199",
            promo: true
        },

        {
            duration: "6 Months",
            price: "379",
            promo: true
        },

        {
            duration: "1 Year",
            price: "659",
            promo: true
        }

    ]

};


// Pricing elements

const pricingRow =
    document.getElementById("pricing-row");

const tabMuscu =
    document.getElementById("tab-muscu");

const tabLibre =
    document.getElementById("tab-libre");


// Create pricing card

function createPriceCard(plan, isLast) {

    const card =
        document.createElement("div");


    const cardBg =
        isLast
            ? "bg-black border-2 border-[#d81e2c]"
            : "bg-neutral-900";


    card.className =
        `${cardBg} rounded-xl p-6 flex flex-col`;


    card.innerHTML = `

        ${
            plan.promo
                ? `
                    <p
                        class="text-[#d81e2c] font-bold text-xs uppercase tracking-wide mb-1"
                    >
                        Promo
                    </p>
                `
                : ""
        }


        <p
            class="text-white font-bold uppercase text-sm mb-4"
        >
            ${plan.duration}
        </p>


        <p
            class="text-4xl font-black text-white"
        >

            ${plan.price}

            <span
                class="text-lg text-[#d81e2c]"
            >
                DT
            </span>

        </p>

    `;


    return card;

}


// Render plans

function renderPlans(category) {

    pricingRow.innerHTML = "";


    plans[category].forEach(
        (plan, index) => {

            const isLast =
                index ===
                plans[category].length - 1;


            pricingRow.appendChild(
                createPriceCard(
                    plan,
                    isLast
                )
            );

        }
    );

}


// Change active tab

function setActiveTab(category) {

    const isMuscu =
        category === "muscu";


    tabMuscu.className =
        `tab-btn px-6 py-2 rounded-full font-bold uppercase text-sm ${
            isMuscu
                ? "bg-[#d81e2c] text-white"
                : "bg-neutral-800 text-gray-300"
        }`;


    tabLibre.className =
        `tab-btn px-6 py-2 rounded-full font-bold uppercase text-sm ${
            !isMuscu
                ? "bg-[#d81e2c] text-white"
                : "bg-neutral-800 text-gray-300"
        }`;


    renderPlans(category);

}


// Pricing events

tabMuscu.addEventListener(
    "click",
    () => setActiveTab("muscu")
);


tabLibre.addEventListener(
    "click",
    () => setActiveTab("libre")
);


// Default plan

setActiveTab("muscu");



// PROGRAMS

const programs = [

    {
        name: "Bodybuilding",
        img: "assets/images/bodyBuilding.jpg",
        description:
            "Build muscle and strength with structured training and expert guidance on form and progression."
    },

    {
        name: "CrossFit",
        img: "assets/images/hard tarining.jpg",
        description:
            "High-intensity functional workouts that build endurance, power, and full-body performance."
    },

    {
        name: "Kickboxing",
        img: "assets/images/kickBoxing.jpg",
        description:
            "Sharpen technique, burn fat, and build discipline through dynamic striking and conditioning."
    },

    {
        name: "Zumba",
        img: "assets/images/zumba.jpg",
        description:
            "Dance-based cardio that makes burning calories fun, energetic, and easy to stick with."
    }

];


// Create program card

function createProgramCard(program) {

    const card =
        document.createElement("div");


    card.className =
        "card bg-neutral-900 rounded-xl overflow-hidden shadow-lg";


    card.innerHTML = `

        <figure class="h-56">

            <img
                src="${program.img}"
                alt="${program.name}"
                class="w-full h-full object-cover"
            />

        </figure>


        <div class="card-body p-5">

            <h3
                class="text-white font-black uppercase tracking-wide text-lg"
            >
                ${program.name}
            </h3>


            <p class="text-gray-400 text-sm">
                ${program.description}
            </p>

        </div>

    `;


    return card;

}


// Render programs

const programsRow =
    document.getElementById("programs-row");


programs.forEach(program => {

    programsRow.appendChild(
        createProgramCard(program)
    );

});



const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}