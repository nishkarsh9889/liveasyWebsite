// Define the total number of pages
const totalPages = 4;

// Define the total number of items per page
const itemsPerPage = 6;

// Define the current page variable
let currentPage = 1;

// Sample data array
const data = [
    // Add your data objects here (at least 24 items for 4 pages)
    {
        image: 'https://placekitten.com/200/300',
        title: 'Title 1',
        description: 'This is the description of the first item.',
    },
    {
        image: 'https://placekitten.com/200/301',
        title: 'Title 2',
        description: 'This is the description of the second item.',
    },
    {
        image: 'https://placekitten.com/200/302',
        title: 'Title 3',
        description: 'This is the description of the third item.',
    },
    {
        image: 'https://placekitten.com/200/303',
        title: 'Title 4',
        description: 'This is the description of the fourth item.',
    },
    {
        image: 'https://placekitten.com/200/304',
        title: 'Title 5',
        description: 'This is the description of the fifth item.',
    },
    {
        image: 'https://placekitten.com/200/305',
        title: 'Title 6',
        description: 'This is the description of the sixth item.',
    },
    // Add more items as needed...
];

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
        div.classList.add('border', 'rounded-lg', 'p-4');

        // Create and append image
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.classList.add('w-full', 'h-auto', 'rounded-md');
        div.appendChild(img);

        // Create and append title
        const title = document.createElement('h3');
        title.innerText = item.title;
        title.classList.add('mt-2', 'text-lg', 'font-semibold');
        div.appendChild(title);

        // Create and append paragraph
        const paragraph = document.createElement('p');
        paragraph.innerText = item.description;
        paragraph.classList.add('mt-2', 'text-gray-700');
        div.appendChild(paragraph);

        // Create and append read more button
        const button = document.createElement('button');
        button.innerText = 'Read More';
        button.classList.add('mt-2', 'px-3', 'py-2', 'bg-blue-500', 'text-white', 'rounded');
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
            i === currentPage ? 'bg-blue-500' : 'bg-gray-300',
            'text-white'
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
