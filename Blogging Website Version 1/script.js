// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("create-button")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the form elements
var titleInput = document.getElementById("title");
var descriptionInput = document.getElementById("description");
var submitButton = document.getElementById("submit");

// Get the blog container element
var blogContainer = document.getElementsByClassName("blog-container")[0];

// A variable to store the current blog post being edited (if any)
var currentBlogPost = null;

// A function to open the modal
function openModal() {
  // Clear the form inputs
  titleInput.value = "";
  descriptionInput.value = "";

  // Change the submit button text to "Create"
  submitButton.textContent = "Create";

  // Set the current blog post to null
  currentBlogPost = null;

  // Display the modal
  modal.style.display = "block";
}

// A function to close the modal
function closeModal() {
  // Hide the modal
  modal.style.display = "none";
}

// A function to create a new blog post element from a title and a description
function createBlogPost(title, description) {
  // Create a div element for the blog post card
  var blogPostCard = document.createElement("div");
  blogPostCard.className = "blog-card";

  // Create an h3 element for the title
  var blogPostTitle = document.createElement("h3");
  blogPostTitle.textContent = title;

  // Create a p element for the description
  var blogPostDescription = document.createElement("p");
  blogPostDescription.textContent = description;

  // Create a button element for editing the blog post
  var editButton = document.createElement("button");
     editButton.textContent = "Edit";
  // Add an event listener to the edit button
     editButton.addEventListener("click", function() {
    // Open the modal
    openModal();

    // Fill the form inputs with the current blog post data
    titleInput.value = blogPostTitle.textContent;
    descriptionInput.value = blogPostDescription.textContent;

    // Change the submit button text to "Update"
    submitButton.textContent = "Update";

    // Set the current blog post to this blog post element
    currentBlogPost = blogPostCard;
  });

  // Append the title, description and edit button to the blog post card
  blogPostCard.appendChild(blogPostTitle);
  blogPostCard.appendChild(blogPostDescription);
  blogPostCard.appendChild(editButton);

  // Return the blog post card element
  return blogPostCard;
}

// A function to handle the form submission
function handleSubmit(event) {
  // Prevent the default form behavior
  event.preventDefault();

  // Get the title and description from the form inputs
  var title = titleInput.value;
  var description = descriptionInput.value;

  // Check if the title and description are not empty
  if (title && description) {
    // Check if there is a current blog post being edited
    if (currentBlogPost) {
      // Update the current blog post with the new title and description
      currentBlogPost.children[0].textContent = title;
      currentBlogPost.children[1].textContent = description;
    } 
    else {
      // Create a new blog post element with the given title and description
      var newBlogPost = createBlogPost(title, description);

      // Prepend it to the blog container element
      blogContainer.prepend(newBlogPost);
        }

    // Close the modal
    closeModal();
  } 
}