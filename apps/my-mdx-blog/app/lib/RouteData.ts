type RouteItem = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};

export const RouteData: RouteItem[] = [
  {
    name: 'Javascript functions',
    items: [
      {
        name: 'array-prototype-filter',
        slug: 'javascript-functions/array-prototype-filter',
        description: 'Create UI that is shared across routes',
      },
   
      {
        name: 'array-prototype-reduce',
        slug: 'javascript-functions/array-prototype-reduce',
        description: 'Create UI that is shared across routes',
      },
   
      
    ],
  },
  {
    name: 'Topics',
    items: [
      {
        name: 'Call, Apply, and Bind',
        slug: 'topics/call-apply-bind',
        description: 'dadasdfsafas',
      },
    
      
    ],
  }
];
