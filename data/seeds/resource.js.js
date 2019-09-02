
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex('resource').insert([
        {
          Name: 'Node JS',
          Description: 'Show expertise in Node JS',
          },
          {
          Name: 'Knex',
          Description: 'Show Expertise in Knex',
          },
          {
          Name: 'Moving in today',
          Description: 'And continues to be sexy',
          },
          {
          Name: 'Becoming a Cat 5',
          Description: 'Relocates the Crackheads in Daytona Beach',	
          }
      ]);
    
};
