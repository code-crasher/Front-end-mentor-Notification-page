const notificationContainer = document.querySelector(".notification-container");
const countEl = document.querySelector("#count__el");
const btn= document.getElementById("all__read");
let count = countEl.innerText;


const users = [
  {
    name: "Mark Webber",
    image: "images/avatar-mark-webber.webp",
    text: "reacted to your recent post",
    description: "user avatar image",
    link: "My first tournament today!",
    datePosted: "1 m ago",
    hasBeenRead: false,
  },
  {
    name: "Angela Grey",
    image: "images/avatar-angela-gray.webp",
    description: "user avatar image",
    text: "followed you",
    datePosted: "5 m ago",
    hasBeenRead: false,
  },
  {
    name: "Jacob Thompson",
    image: "images/avatar-jacob-thompson.webp",
    description: "user avatar image",
    text: "has joined your group",
    link: "Chess Club",
    datePosted: "1 day ago",
    hasBeenRead: false,
  },
  {
    name: "Rizky Hasanuddin",
    image: "images/avatar-rizky-hasanuddin.webp",
    description: "user avatar image",
    text: "sent you a private message",
    datePosted: "5 days ago",
    hasBeenRead: true,
    message:
      "Hello,thanks for setting the Chess Club.I've been a member for few weeks now and I'm already having lots of fun and improving my game",
  },
  {
    name: "Kimberly Smith",
    image: "images/avatar-kimberly-smith.webp",
    description: "user avatar image",
    text: "commented on your picture",
    datePosted: "2 weeks ago",
    hasBeenRead: true,
    picture: "images/image-chess.webp",
  },
  {
    name: "Nathan Peterson",
    image: "images/avatar-nathan-peterson.webp",
    description: "user avatar image",
    text: "reacted to your post",
    link: "5 end-game strategies to increase your win rate",
    datePosted: "1 week ago",
    hasBeenRead: true,
  },
  {
    name: "Anna Kim",
    image: "images/avatar-anna-kim.webp",
    description: "user avatar image",
    text: "left the",
    link: "Chess Club",
    datePosted: "2 weeks ago",
    hasBeenRead: true,
  },
];

users.forEach((user) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("card");
  const notificationWrapper = document.createElement("div");
  notificationWrapper.classList.add("notification-card");
  if(user.hasBeenRead == false){
    notificationWrapper.classList.add("text__not-read");
  }
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("card-img");
  const userAvatar = document.createElement("img");
  userAvatar.src = user.image;
  userAvatar.alt = user.description;
  const notificationTextWrapper = document.createElement("div");
  notificationTextWrapper.classList.add("card-txt");
  const notificationText = document.createElement("p");
  const userNameText = document.createElement("span");
  userNameText.classList.add("txt-bold");
  userNameText.classList.add("user-name");
  userNameText.textContent = user.name;
  const userText = document.createElement("span");
  userText.classList.add("user-text");
  userText.textContent = user.text;
  const dateNotificationPosted = document.createElement("p");
  dateNotificationPosted.classList.add("sub-txt");
  dateNotificationPosted.textContent = user.datePosted;
  

  notificationText.append(userNameText);
  notificationText.appendChild(userText);
  const notificationLink = document.createElement("a");
  notificationLink.href = "#";
  notificationLink.textContent = user.link;
  notificationText.appendChild(notificationLink);

  if(user.hasBeenRead == false){
    notificationLink.classList.add("not__read");
  } else{
    notificationLink.classList.add("text__read")
  }
  
  notificationTextWrapper.appendChild(notificationText);
  notificationTextWrapper.appendChild(dateNotificationPosted);
  if(user.message){
  const privateMsg =document.createElement('p');
  privateMsg.classList.add("text-msg");
  privateMsg.textContent=user.message;
  notificationTextWrapper.appendChild(privateMsg);
}
  if(user.picture){
  const pictureLink =document.createElement('a');
  pictureLink.classList.add("link-img");
  pictureLink.href="#";
  const linkImg =document.createElement("img");
  linkImg.src=user.picture;
  linkImg.alt="link image"
  pictureLink.appendChild(linkImg)
  notificationTextWrapper.appendChild(pictureLink);
}

  imageContainer.appendChild(userAvatar);

  notificationWrapper.appendChild(imageContainer);
  notificationWrapper.appendChild(notificationTextWrapper);
  

  wrapper.appendChild(notificationWrapper);

  notificationContainer.append(wrapper);

  if(user.hasBeenRead == false){
    count++
    countEl.textContent = count;
  }

  notificationWrapper.addEventListener("click",()=>{
    if(user.hasBeenRead == false){
      notificationWrapper.classList.remove("text__not-read");
      notificationLink.classList.remove("not__read");
      if(count !=0){
        count--
      }else{
        count = count;
      }
      countEl.textContent = count;
    }
  });

  btn.addEventListener("click",()=>{
    if(notificationWrapper.classList.contains("text__not-read")==true){
      notificationWrapper.classList.remove("text__not-read")
    }
    if(notificationLink.classList.contains("not__read")==true){
      notificationLink.classList.remove("not__read");
    }
    if(count !=0){
        count--
      }else{
        count = count;
      }
      countEl.textContent = count;
  })

});
