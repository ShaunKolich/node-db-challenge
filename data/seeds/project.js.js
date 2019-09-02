
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
        // Inserts seed entries
        return knex('projects').insert([
        {
          Name: 'Shaun Kolich',
          Description: 'Node Challenge',
        },
        {
          Name: 'JB',
          Description: 'Grade Node Challenge',
        },
        {
          Name: 'Roomate',
          Description: 'Move in',
        },
        {
          Name: 'Dorian',
          Description: 'Visit Orlando',
        }
      ]);

};
