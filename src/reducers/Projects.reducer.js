const initialState = [
   {
      title: '17th-street',
      url: '/17th-street',
      icon: require('images/ntwrk07.jpg'),
      tags: ['architecture']
   },
   {
      title: 'dualscape',
      url: '/dualscape',
      icon: require('images/01_glazesouth.jpg'),
      tags: ['architecture', 'text']
   },
   {
      title: 'collective-authorship',
      url: '/collective-authorship',
      icon: require('images/kowloon01.jpg'),
      tags: ['design', 'text']
   }
];

const tagToString = {
   'architecture': 'arch',
   'text': 'txt',
   'design': 'design'
};

export const getTitleWithTags = (title, tags) => {
   return tags.reduce((previous, current, index) => (
         previous + '.' + (tagToString[current] || current)
   ), title);
};

export const getVisibleProjects = (projects, filters) => {
   return projects.map((project) => {
         return {...project, visible: isProjectVisible(project, filters) }
   });
};


const isProjectVisible = (project, filters) => {
   return project.tags.reduce((previous, current) => {

         if (previous) { return previous };
         return filters.reduce((previous, current) => {

               if (previous) { return previous };
               return (current.visible && project.tags.indexOf(current.filter) >= 0);

         }, false)
   }, false);
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
