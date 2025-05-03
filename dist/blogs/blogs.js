// Define the total number of pages
const totalPages = 4;

// Define the total number of items per page
const itemsPerPage = 6;

// Define the current page variable
let currentPage = 1;

//Add blog titles here: 
const titles = [
    "Streamlining Procurement and Indent Management: The Power of Automated Solution",
    "Eco-Friendly Logistics: Reducing Carbon Footprint through Digital Innovation",
    "Say Goodbye to Invoicing Hassles: How Automation Improves Logistics Management",
    "Breaking Barriers: Overcoming Challenges in Implementing Digital Logistics Solutions",
    "Digital Transformation Strategies for Logistics Company",
    "Optimizing Resources and Safety: The Role of Automation in In-Plant Vehicle Movement",
    "How Digitization Helps in Cutting Down Freight Cost?",
    "How to Choose the Right TMS: A Buyer's Guide",
    "Big Data and Predictive Analytics in Logistics: A Game Changer for Achieving End-to-End Supply Chain Visibility",
    "Why Freight Cost is More in Steel Industries?",
    "National Logistics Policy 2022",
    "Efficiency at Every Step: Automated Invoicing and Simplifying Logistics Company",
    "The Benefits of Automated Indent Management for Procurement",
    "How to Streamline Yard Management with In-Plant Optimization",
    "Achieving End-to-End Visibility with Logistics Tracking Solutions",
    "The Power of Data-Driven Logistics Analytics and Insights",
    "How to Leverage Digital Proof of Delivery for Faster Invoicing",
    "Top Techniques for Optimizing Last Mile Delivery Logistics",
    "Elevating Warehouse Efficiency: The Path to Digital Transformation",
    "Ways to Seamlessly Integrate Transportation and Warehouse Management Systems",
    "Streamlining logistics operations: the benefits of automated indent management",
    "How Freight Sourcing and Reverse Auctions Cut Transportation Spending",
    "Mastering Multi-Carrier Shipments and Orders: Best Practices",
    "Revolutionizing Logistics: How Automation is Transforming the Freight Transport Industry"

];

const descriptions = [
    "Experience the efficiency of CargoPro's automated procurement and indent management solutions.",
    "Revolutionize logistics with CargoPro: optimized routes, efficient fleet management, and sustainable practices. Experience a greener future.",
    "Transform logistics with CargoPro's invoicing automation, streamlining processes, ensuring accuracy, and enhancing customer experience.",
    "Navigate digital logistics with CargoPro, addressing costs, change resistance, and data security.",
    "Transform logistics with CargoPro's digital solutions—data-driven decisions, intelligent automation, seamless collaboration, and sustainability.",
    "Revolutionize in-plant vehicle movement with CargoPro's automation, ensuring efficiency, safety, and cost reduction.",
    "CargoPro revolutionizes logistics with digitization, cutting freight costs via real-time tracking, route optimization, and paperless processes.",
    "CargoPro guides you through the intricate process of selecting the ideal Transportation Management System (TMS).",
    "CargoPro's analytics provide powerful insights for efficient logistics and supply chain management.",
    "Elevated freight costs in the steel industry result from factors like weight, specialized handling, and raw material distribution.",
    "The National Logistics Policy 2022 targets cutting logistics costs, fostering digital transformation, and driving economic development.",
    "CargoPro's automated invoicing boosts accuracy and efficiency, ensuring prompt payments.",
    "Elevate procurement efficiency with CargoPro's automated indent management.",
    "CargoPro's in-plant optimization revolutionizes yard management, ensuring real-time visibility.",
    "CargoPro Logistics' advanced tracking solutions offer real-time precision, optimized resource allocation.",
    "CargoPro's data-driven logistics analytics optimize routes, manage inventory, detect fraud, and mitigate risks.",
    "CargoPro streamlines logistics invoicing through digital proof of delivery, ensuring accuracy.",
    "CargoPro Logistics transforms last-mile delivery with real-time route efficiency, dynamic capacity adjustments.",
    "CargoPro Logistics transforms warehouses with digitization, automation, and strategic layouts.",
    "CargoPro Logistics transforms logistics by integrating TMS and WMS, ensuring real-time efficiency.",
    "Revolutionize logistics with CargoPro's Automated Indent Management, ensuring accuracy, efficiency, and time savings. Seamlessly collaborate.",
    "In the intricate dance of business operations, the rhythm of efficient transportation is paramount to keep supply chains moving seamlessly.",
    "In the dynamic realm of modern logistics, mastering shipments and orders across multiple carriers is a puzzle that demands innovative solutions",
    "The freight transportation industry is undergoing a major transformation thanks to automation."
];

// Define an array of links for the "Read More" buttons in the renderContent() function
const readMoreLinks = [
    '../blogs/blog1_StreamliningProcurement.html',
    '../blogs/blog2_EcoFriendly.html',
    '../blogs/blog3_invoicingHassle.html',
    '../blogs/blog4_breakingBarriers.html',
    '../blogs/blog5_digitalTransformationStrategies.html',
    '../blogs/blog6_optimizingResources.html',
    '../blogs/blog7_cuttingFreightCosts.html',
    '../blogs/blog8_choosetheRightTMS.html',
    '../blogs/blog9_bigDataNAnalysis.html',
    '../blogs/blog10_FreightCost.html',
    '../blogs/blog11_policy.html',
    '../blogs/blog12_automatedInvoice.html',
    '../blogs/blog13_benefits.html',
    '../blogs/blog14_streamlineYard.html',
    '../blogs/blog15_EndToEnd.html',
    '../blogs/blog16_dataDriven.html',
    '../blogs/blog17_digitalProof.html',
    '../blogs/blog18_optimizingDelivery.html',
    '../blogs/blog19_warehouseEfficiency.html',
    '../blogs/blog20_integrateTransportation.html',
    '../blogs/blog21_StreamliningOperations.html',
    '../blogs/blog22_FreightSourcing.html',
    '../blogs/blog23_multiCarrier.html',
    '../blogs/blog24_revolutionizingLogistics.html'
];


const data = [];
//modify i for additional blogs 
for (let i = 1; i <= 24; i++) {
    const imageURL = `../files/blog_${i}_thumbnail.png`; //retain image format as blog_[num]_carousel

    data.push({
        image: imageURL,
        title: titles[i - 1],
        description: descriptions[i - 1],
    });
}

console.log(data);

// Define an array of data for the additional div
const additionalDivData = [
    {
        image: '../files/blog_header_1.png',
        title: 'Revolutionizing logistics: how automation is transforming the freight transport industry',
        description: 'Discover the game-changing impact of CargoPro automation on freight transportation. From boosting efficiency and cutting costs to elevating customer satisfaction, our technology.',
        link: '../blogs/blog24_revolutionizingLogistics.html',
    },
    {
        image: '../files/blog_header_2.png',
        title: 'Streamlining logistics operations: the benefits of automated indent management',
        description: 'Revolutionize logistics with CargoPro Automated Indent Management, ensuring accuracy, efficiency, and time savings. Seamlessly collaborate, optimize inventory, and scale operations with adaptability.',
        link: '../blogs/blog21_StreamliningOperations.html',
    },
    {
        image: '../files/blog_header_3.png',
        title: 'How Freight Sourcing and Reverse Auctions Cut Transportation Spending',
        description: 'Liveasy Logistics redefines logistics efficiency with freight sourcing and reverse auctions, cutting costs through carrier competition. Embrace innovation, optimize your supply chain.',
        link: '../blogs/blog22_FreightSourcing.html',
    },
    {
        image: '../files/blog_header_4.png',
        title: 'Mastering Multi-Carrier Shipments and Orders: Best Practices',
        description: 'Liveasy revolutionizes multi-carrier logistics with a centralized platform, optimizing processes and ensuring transparency.',
        link: '../blogs/blog23_multiCarrier.html',
    },
];

// Function to render additional div above the content container
function renderAdditionalDiv() {
    const containerDiv = document.getElementById('content-container').parentNode; // Get the container div
    let additionalDiv = document.getElementById('additional-div'); // Try to get the existing additional div

    // If an existing additional div is present, remove it
    if (additionalDiv) {
        additionalDiv.remove();
    }

    // Create a new additional div element
    additionalDiv = document.createElement('div');
    additionalDiv.id = 'additional-div'; // Assign an ID for easy access in the future

    // Customize the additional div with classes for styling
    additionalDiv.classList.add('flex', 'flex-col', 'md:flex-row', 'items-center', 'mt-4', 'mb-16', 'p-8', 'rounded-lg');

    // Get the data for the additional div for the current page
    const currentData = additionalDivData[currentPage - 1];

    // Create an image element for the left side
    const img = document.createElement('img');
    img.src = currentData.image; // Use the image URL from the additional div data
    img.alt = currentData.title; // Use the title as the alt text
    img.classList.add('md:w-2/3', 'w-full', 'h-auto', 'rounded-lg', 'mx-4', 'my-4'); // Add classes for styling
    additionalDiv.appendChild(img);

    // Create a div for the right side content
    const rightSideDiv = document.createElement('div');
    rightSideDiv.classList.add('flex', 'flex-col', 'px-4');

    // Create and append title
    const title = document.createElement('h3');
    title.innerText = currentData.title; // Use the title from the additional div data
    title.classList.add('text-2xl', 'text-[--liveasy-blue]', 'font-semibold', 'mb-2');
    rightSideDiv.appendChild(title);

    // Create and append paragraph
    const paragraph = document.createElement('p');
    paragraph.innerText = currentData.description; // Use the description from the additional div data
    paragraph.classList.add('text-gray-700', 'text-lg', 'mb-2');
    rightSideDiv.appendChild(paragraph);

    // Create an anchor element for the "Read More" button
    const anchor = document.createElement('a');
    anchor.href = currentData.link; // Set the link to the current data's URL

    // Create and append read more button
    const button = document.createElement('button');
    button.innerText = 'Read More';
    button.classList.add('px-3', 'py-2', 'bg-[--liveasy-green]', 'text-white', 'rounded');

    // Append the button to the anchor
    anchor.appendChild(button);

    // Append the anchor to the right side div
    rightSideDiv.appendChild(anchor);

    // Append the right side div to the additional div
    additionalDiv.appendChild(rightSideDiv);

    // Insert the additional div before the content container
    containerDiv.insertBefore(additionalDiv, containerDiv.firstChild);
}

// Function to render content based on the current page
function renderContent() {
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = ''; // Clear the existing content

    // Call the function to render the additional div
    renderAdditionalDiv();

    // Calculate the start and end index of data to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Loop through the data items for the current page and create internal divs
    data.slice(startIndex, endIndex).forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('rounded-xl', 'lg:mx-4', 'my-4', 'shadow-lg');

        // Create and append image
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.classList.add('w-full', 'h-48');
        div.appendChild(img);

        // Create and append title
        const title = document.createElement('h3');
        title.innerText = item.title;
        title.classList.add('px-4', 'py-2', 'mt-2', 'text-lg', 'text-[--liveasy-blue]', 'font-semibold');
        div.appendChild(title);

        // Create and append paragraph
        const paragraph = document.createElement('p');
        paragraph.innerText = item.description;
        paragraph.classList.add('px-4', 'py-2', 'mt-2', 'text-gray-700', 'hidden', 'lg:block');
        div.appendChild(paragraph);

        // Create an anchor element for the "Read More" button
        const anchor = document.createElement('a');
        anchor.href = readMoreLinks[startIndex + index]; // Set the link for the current item

        // Create and append read more button
        const button = document.createElement('button');
        button.innerText = 'Read More';
        button.classList.add('ml-4', 'mt-2', 'mb-4', 'px-3', 'py-2', 'bg-[--liveasy-green]', 'text-white', 'rounded');

        // Append the button to the anchor
        anchor.appendChild(button);

        // Append the anchor to the div
        div.appendChild(anchor);

        // Append the internal div to the content container
        contentContainer.appendChild(div);
    });
}

// Initial rendering
renderContent();
renderPagination();


// Function to render pagination buttons
function renderPagination() {
    const paginationButtons = document.getElementById('pagination-buttons');
    paginationButtons.innerHTML = ''; // Clear existing pagination buttons

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.classList.add(
            'px-3',
            'py-2',
            'rounded-full',
            'mx-1',
            'font-semibold',
            i === currentPage ? 'bg-[--liveasy-blue]' : 'bg-gray-300',
            i === currentPage ? 'text-white' : 'text-black',
        );
        button.addEventListener('click', () => changePage(i - currentPage));
        paginationButtons.appendChild(button);
    }
}

// Function to change the current page and re-render content and pagination
function changePage(delta) {
    currentPage += delta;

    // Ensure current page is within valid bounds
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    // Re-render content and pagination
    renderContent();
    renderPagination();
}

// Initial rendering
renderContent();
renderPagination();


//Sign Up - Navbar - Critical for Navbar Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Get the dropdown button and content elements
    const dropdownButton = document.querySelector('#dropdownButton');
    const dropdownContent = document.querySelector('#dropdownContent');

    // Add click event listener to the dropdown button
    dropdownButton.addEventListener('click', function () {
        // Toggle the visibility of the dropdown content
        dropdownContent.classList.toggle('hidden');
    });

    // Add click event listener to the document to hide dropdown content when clicking outside of the dropdown
    document.addEventListener('click', function (event) {
        // Check if the click was outside the dropdown button and content
        const isClickOutside = !dropdownButton.contains(event.target) && !dropdownContent.contains(event.target);
        if (isClickOutside) {
            // Hide the dropdown content
            dropdownContent.classList.add('hidden');
        }
    });
});

// Font Awesome Script
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://kit.fontawesome.com/5b8b6a5d60.js';
fontAwesomeScript.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(fontAwesomeScript);