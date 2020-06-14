export interface User {
  id: number;
  name: string;
  user: string;
  avatar: string;
}

const fakeData: Array<User> = [
  {
    id: 1,
    name: 'Louis Pasteur',
    avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
    user: '@louis_ptur',
  },
  {
    id: 2,
    name: 'Martin',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    user: '@martin',
  },
  {
    id: 3,
    name: 'July',
    avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
    user: '@jjy',
  },
];

export default fakeData;
