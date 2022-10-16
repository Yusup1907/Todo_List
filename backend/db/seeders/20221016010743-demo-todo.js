"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "TODOS",
      [
        {
          title: "Hari senin ada tugas kuliah",
          priority: "very-high",
          activity_group_id: 1,
          isactive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("TODOS", null, {});
  },
};
