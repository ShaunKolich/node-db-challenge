
exports.seed = function(knex) {
  // Deletes ALL existing entries
        return knex('task').insert([
        {
            id:'1',
            description: 'Build Everything from Scratch',
          notes: 'Show expertese in Node JS',
          },
          {
            id:'2',
            description: 'Initialize Knex',
          notes: 'Use npx knex:init',
          },
          {
            id:'3',
            description: 'Steal the Pop Tarts',
          notes: 'They are Smores and Sharing is Caring',
          },
          {
            id:'4',
            description: 'Get the Barbeque Started',
          notes: 'Hotdogs and Hamburgers Hell Yah!',	
          }
      ]);
    
};
