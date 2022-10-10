import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'hats',
    route: 'shop/hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
  },
  {
    id: 2,
    title: 'jackets',
    route: 'shop/jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
  },
  {
    id: 3,
    title: 'sneakers',
    route: 'shop/sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
  },
  {
    id: 4,
    title: 'womens',
    route: 'shop/womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
  },
  {
    id: 5,
    title: 'mens',
    route: 'shop/mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
  }
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map(category => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
