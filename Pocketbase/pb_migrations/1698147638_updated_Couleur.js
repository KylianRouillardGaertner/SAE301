/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r4ha33aj0kl1mh3")

  // remove
  collection.schema.removeField("ybbbmhrv")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r4ha33aj0kl1mh3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ybbbmhrv",
    "name": "Code_HEX",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
