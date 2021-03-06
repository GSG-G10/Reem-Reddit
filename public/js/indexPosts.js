const postsContainer = document.querySelector('.posts');
const generateElement = (tag, parentNode, className) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

// eslint-disable-next-line max-len
const createCards = (postContent, postTime, username, picture, votes, postImage) => {
  const post = generateElement('div', postsContainer, 'post-container');
  const votesContainer = generateElement('div', post, 'vote');
  const topIconBtn = generateElement('a', votesContainer, 'ele');
  topIconBtn.href = '/like';
  const icon1 = generateElement('img', topIconBtn, 'ele');
  icon1.src = '../icons/up.svg';
  const counter = generateElement('span', votesContainer, 'ele');
  counter.textContent = votes;
  const downIconBtn = generateElement('a', votesContainer, 'ele');
  downIconBtn.href = '/dislike';
  const icon2 = generateElement('img', downIconBtn, 'ele');
  icon2.src = '../icons/down.svg';
  const insidePost = generateElement('div', post, 'post');
  const userInfo = generateElement('div', insidePost, 'user');
  const userImg = generateElement('img', userInfo, 'ele');
  userImg.src = picture;
  userImg.alt = 'user image';
  const userName = generateElement('a', userInfo, 'ele');
  userName.href = `/profile:${username}`;
  userName.textContent = username;
  const postDate = generateElement('span', userInfo, 'ele');
  postDate.textContent = `${postTime.split('T')[0]}  ${postTime.split('T')[1].split('.')[0]}`;
  const postText = generateElement('p', insidePost, 'new');
  postText.textContent = postContent;
  if (postImage) {
    const postImg = generateElement('img', insidePost, 'post-img');
    postImg.src = postImage;
  }
};
// Create Post
const createPosts = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    createCards(array[i].post_content,
      array[i].post_time,
      array[i].username,
      array[i].picture,
      array[i].votes,
      array[i].post_img);
  }
};

// Fetch posts
const fetchPosts = () => {
  fetch('/posts')
    .then((res) => res.json())
    .then((result) => createPosts(result))
    .catch((error) => error);
};
fetchPosts();
