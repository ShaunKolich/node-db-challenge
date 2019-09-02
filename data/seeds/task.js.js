
exports.seed = function(knex) {
  // Deletes ALL existing entries
        return knex('task').insert([
        {
          description: 'Build Everything from Scratch',
          notes: 'Show expertese in Node JS',
          },
          {
          description: 'Initialize Knex',
          notes: 'Use npx knex:init',
          },
          {
          description: 'Steal the Pop Tarts',
          notes: 'They are Smores and Sharing is Caring',
          },
          {
          description: 'Get the Barbeque Started',
          notes: 'Hotdogs and Hamburgers Hell Yah!',	
          }
      ]);
    
};
