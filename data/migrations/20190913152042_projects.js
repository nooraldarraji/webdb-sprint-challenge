
exports.up = function (knex) {
    return knex.schema
        .createTable("projects", table => {
            table.increments()
            table.string("name")
                .notNullable()
            table.string("description")
            table.boolean("completed")
                .defaultTo(false)
        })
        .createTable("tasks", table => {
            table.increments()
            table.string("description")
                .notNullable()
            table.string("notes")
            table.boolean("completed")
                .defaultTo(false)
        })
        .createTable("resources", table => {
            table.increments()
            table.string("name")
                .notNullable()
            table.string("description")
        })
        .createTable("tasks_list", table => {
            table.increments()
            table
                .integer("task_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("tasks")
            table
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
            table.unique(["task_id", "project_id"])
        })
        .createTable("resources_list", table => {
            table.increments()
            table
                .integer("resource_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("resources")
            table
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
        })


}

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("resources_list")
        .dropTableIfExists("tasks_list")
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("projects")
}
