/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r4ha33aj0kl1mh3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ksckvrso",
    "name": "libelle_couleur",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r4ha33aj0kl1mh3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ksckvrso",
    "name": "nom_couleur",
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
