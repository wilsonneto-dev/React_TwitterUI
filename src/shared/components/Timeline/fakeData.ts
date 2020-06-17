interface ITweet {
  avatar: string;
  name: string;
  user: string;
  date: string;
  text: string;
  image?: string;

  likes: number;
  commetns: number;
  retweets: number;
}

const fakeDataTweets: Array<ITweet> = [
  {
    avatar: "https://avatars3.githubusercontent.com/u/20674439?v=4",
    name: "Wilson Neto",
    user: "@wilsonneto.dev",
    date: "05/06",
    text:
      "Cras vitae consequat erat, ac convallis erat. Aliquam at libero lacus. Suspendisse potenti. In vitae ipsum eget nibh maximus interdum. Etiam eleifend maximus nulla et ornare. Integer fermentum pretium luctus. Nullam nibh mi, pulvinar et ante quis, consequat vehicula magna.",

    likes: 10,
    commetns: 55,
    retweets: 23,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Hebert Seven",
    user: "@seveen",
    date: "03/06",
    text:
      "In quis tristique purus. Proin sit amet rhoncus massa. Nunc tincidunt sollicitudin lobortis.",
    image: "https://loremflickr.com/600/400?random=1",

    likes: 366,
    commetns: 20,
    retweets: 56,
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    name: "Caroline Steff",
    user: "@steffcaroll",
    date: "02/06",
    text:
      "pellentesque in massa non ornare. Proin sit amet quam faucibus, congue diam in, aliquet ipsum. Nunc laoreet, turpis a dapibus pretium,",
    image: "https://loremflickr.com/600/200?random=2",

    likes: 1,
    commetns: 5,
    retweets: 2,
  },
];

export default fakeDataTweets;
