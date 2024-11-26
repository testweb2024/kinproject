// Array to store books
let books = [];

// Function to display books
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear current table content
    
    // Loop through the books and add them to the table
    books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.Quanity}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editBook(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteBook(${index})">Delete</button>
            </td>
        `;
        bookList.appendChild(row);
    });
}

// Function to add a book
function addBook(event) {
    event.preventDefault(); // Prevent form submission
    
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const year = document.getElementById('bookYear').value;
    const Quanity = document.getElementById('bookQuanity').value;
    if (title && author && year&&Quanity) {
        const newBook = { title, author, year,Quanity };
        books.push(newBook);
        
        // Clear form fields
        document.getElementById('book-form').reset();
        
        // Display updated book list
        displayBooks();
        
        // Show success message
        Swal.fire({
            icon: 'success',
            title: 'Book Added',
            text: 'The book has been successfully added.',
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Missing Fields',
            text: 'Please fill in all fields.',
        });
    }
}

// Function to delete a book
function deleteBook(index) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'This will delete the book permanently.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
        if (result.isConfirmed) {
            books.splice(index, 1); // Remove book from the array
            displayBooks(); // Update the table
            Swal.fire(
                'Deleted!',
                'The book has been deleted.',
                'success'
            );
        }
    });
}

// 1Function to edit a book addbook
function editBook(index) {
    const book = books[index];
    const title = prompt("Edit book title:", book.title);
    const author = prompt("Edit book author:", book.author);
    const year = prompt("Edit book year:", book.year);
    const Quanity = prompt("Edit book year:", book.Quanity);
    
    if (title && author && year&&Quanity) {
        books[index] = { title, author, year,Quanity }; // Update book data
        displayBooks(); // Refresh the table
        Swal.fire({
            icon: 'success',
            title: 'Book Updated',
            text: 'The book has been updated successfully.',
        });
    }
}

// Listen for the form submission
document.getElementById('book-form').addEventListener('submit', addBook);


// Initial call to display any existing books
displayBooks();
