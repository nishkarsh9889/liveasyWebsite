// Define the total number of pages
const totalPages = 4;

// Define the total number of items per page
const itemsPerPage = 6;

// Define the current page variable
let currentPage = 1;

//Add blog titles here: 
const titles = [
    'How digitization helps in cutting down Freight cost?',
    'The Future of Logistics',
    'Optimizing Routes with AI',
    'Paperless Processes in Logistics',
    'Real-Time Tracking Benefits',
    'Cost-Effective Transportation Solutions',
    'Impact of Technology on Freight',
    'Improving Supply Chain Efficiency',
    'Sustainable Logistics Practices',
    'Digital Transformation in Logistics',
    'Innovative Freight Solutions',
    'The Rise of Smart Logistics',
    'Enhancing Warehouse Management',
    'Digitization and Cost Savings',
    'Revolutionizing Freight Management',
    'Real-Time Insights in Logistics',
    'The Power of Freight Analytics',
    'Efficient Route Planning',
];
//Add Blog Descriptions here: 
const descriptions = [
    'Liveasy revolutionizes logistics with digitization, cutting freight costs via real-time tracking, route optimization, and paperless processes.',
    'Discover the latest trends and innovations shaping the future of the logistics industry.',
    'Learn how AI-driven route optimization is changing the logistics landscape.',
    'Explore the benefits of paperless processes for streamlining logistics operations.',
    'Understand the advantages of real-time tracking for efficient freight management.',
    'Find out how cost-effective transportation solutions can benefit your business.',
    'Examine the impact of technology on modern freight operations.',
    'Learn how to improve supply chain efficiency through strategic planning.',
    'Discover sustainable logistics practices for a greener future.',
    'Explore the digital transformation of the logistics industry.',
    'Get insights into innovative freight solutions that can drive success.',
    'Learn about the rise of smart logistics and its benefits.',
    'Discover how to enhance warehouse management with technology.',
    'Learn about the cost savings achieved through digitization in logistics.',
    'Find out how to revolutionize freight management with modern approaches.',
    'Get real-time insights for effective logistics decision-making.',
    'Explore the power of freight analytics for data-driven strategies.',
    'Learn how efficient route planning can lead to successful logistics.',
];

const data = [];
//modify i for additional blogs 
for (let i = 1; i <= 18; i++) {
    const imageURL = `../files/blog_${i}_carousel.png`; //retain image format as blog_[num]_carousel

    data.push({
        image: imageURL,
        title: titles[i - 1],
        description: descriptions[i - 1],
    });
}

console.log(data);

// Function to render content based on the current page
function renderContent() {
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = ''; // Clear the existing content

    // Calculate the start and end index of data to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Loop through the data items for the current page and create internal divs
    data.slice(startIndex, endIndex).forEach(item => {
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
        title.classList.add('px-4','py-2','mt-2', 'text-lg','text-[--liveasy-blue]', 'font-semibold');
        div.appendChild(title);

        // Create and append paragraph
        const paragraph = document.createElement('p');
        paragraph.innerText = item.description;
        paragraph.classList.add('px-4','py-2','mt-2', 'text-gray-700','hidden','lg:block');
        div.appendChild(paragraph);

        // Create and append read more button
        const button = document.createElement('button');
        button.innerText = 'Read More';
        button.classList.add('ml-4','mt-2','mb-4', 'px-3', 'py-2', 'bg-[--liveasy-green]', 'text-white', 'rounded');
        div.appendChild(button);

        // Append the internal div to the content container
        contentContainer.appendChild(div);
    });
}

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
document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown button and content elements
    const dropdownButton = document.querySelector('#dropdownButton');
    const dropdownContent = document.querySelector('#dropdownContent');

    // Add click event listener to the dropdown button
    dropdownButton.addEventListener('click', function() {
        // Toggle the visibility of the dropdown content
        dropdownContent.classList.toggle('hidden');
    });

    // Add click event listener to the document to hide dropdown content when clicking outside of the dropdown
    document.addEventListener('click', function(event) {
        // Check if the click was outside the dropdown button and content
        const isClickOutside = !dropdownButton.contains(event.target) && !dropdownContent.contains(event.target);
        if (isClickOutside) {
            // Hide the dropdown content
            dropdownContent.classList.add('hidden');
        }
    });
});