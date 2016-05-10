const initialState = [
   { 
      title: 'dualscape',
      url: '/dualscape',
      icon: require('images/01_glazesouth.jpg'),
      tags: ['architecture', 'text']
   },
   { 
      title: '17th-street',
      url: '/17th-street',
      icon: require('images/ntwrk07.jpg'),
      tags: ['architecture']
   }
];

const tagToString = {
   'architecture': 'arch',
   'text': 'txt'
};

export const getTitleWithTags = (title, tags) => {
   return tags.reduce((previous, current, index) => (
         previous + '.' + (tagToString[current])
   ), title);
};

/**
 * Features
 *
 * @param {Array}  state
 * @param {Object} action
 *
 * @return {Array}
 */
export function Projects(state = initialState, action) {
  return state;
}
