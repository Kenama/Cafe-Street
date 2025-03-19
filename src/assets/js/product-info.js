// timer------------------------------------------------------------------------
let countdownDate = new Date("March 31, 2025 23:59:59").getTime(); //target date
let x = setInterval(function() {

  let now = new Date().getTime();
  let distance = countdownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
    alert("Countdown Finished!");
  }
}, 1000);


// tabs-------------------------------------------------------------------------
document.querySelectorAll(".tabs p").forEach(tab => {
  tab.addEventListener("click", () => {
      tab.classList.toggle("active");
  });
});


// comments---------------------------------------------------------------------
// Data for user comments
const comments = [
  {
    avatar: "url('path_to_avatar_image')",
    name: "Nicolas Jensen",
    rating: 5,
    feedback: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it.",
    time: "about 1 hour ago",
    actions: ["Like", "Reply"]
  },
  {
    avatar: "url('path_to_another_avatar_image')",
    name: "Emily Carter",
    rating: 4,
    feedback: "The product was good, but the delivery was delayed.",
    time: "2 days ago",
    actions: ["Like", "Reply"]
  }
];

// Reference to the container where the comments will be appended
const commentsContainer = document.getElementById("comments-container");

// Function to create and append user comments
comments.forEach(comment => {
  const userDiv = document.createElement("div");
  userDiv.classList.add("user");

  // Frame for avatar and name
  const frame747 = document.createElement("div");
  frame747.classList.add("frame747");

  // Avatar placeholder
  const avatar = document.createElement("div");
  avatar.classList.add("avatar_placeholder");
  avatar.style.backgroundImage = comment.avatar;

  // Name and stars container
  const nameStars = document.createElement("div");
  nameStars.classList.add("name-stars");

  // Name
  const name = document.createElement("div");
  name.textContent = comment.name;
  name.classList.add("name");

  // Star rating
  const starRating = document.createElement("div");
  starRating.classList.add("star-rating");
  
  // Append stars based on rating
  for (let i = 0; i < comment.rating; i++) {
    const star = document.createElement("img");
    star.src = '/src/assets/img/star.svg';
    star.classList.add("star-icon");
    starRating.appendChild(star);
  }

  // Append elements
  nameStars.appendChild(name);
  nameStars.appendChild(starRating);
  frame747.appendChild(avatar);
  frame747.appendChild(nameStars);
  userDiv.appendChild(frame747);

  // Feedback
  const feedback = document.createElement("div");
  feedback.textContent = comment.feedback;
  feedback.classList.add("feedback");

  userDiv.appendChild(feedback);

  // Comment Actions (Time, Like, Reply)
  const commentActions = document.createElement("div");
  commentActions.classList.add("comment-actions");

  // Time label
  const timeLabel = document.createElement("span");
  timeLabel.textContent = comment.time;
  timeLabel.classList.add("comment-time");

  commentActions.appendChild(timeLabel);

  // Like and Reply buttons
  comment.actions.forEach(action => {
    const button = document.createElement("button");
    button.textContent = action;
    button.classList.add("action-button");
    commentActions.appendChild(button);
  });

  userDiv.appendChild(commentActions);

  // Append to main container
  commentsContainer.appendChild(userDiv);
});

// Load More Button
const loadMoreButton = document.createElement("button");
loadMoreButton.textContent = "Load More";
loadMoreButton.classList.add("load-more");
commentsContainer.appendChild(loadMoreButton);
