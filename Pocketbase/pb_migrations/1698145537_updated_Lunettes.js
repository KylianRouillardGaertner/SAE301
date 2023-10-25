/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrq6b9zozmz0imj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fwqra8nj",
    "name": "couleur_cadre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "r4ha33aj0kl1mh3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dnwjnqgk",
    "name": "couleur_branches",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "r4ha33aj0kl1mh3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6splmgh",
    "name": "couleur_verres",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "r4ha33aj0kl1mh3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrq6b9zozmz0imj")

  // remove
  collection.schema.removeField("fwqra8nj")

  // remove
  collection.schema.removeField("dnwjnqgk")

  // remove
  collection.schema.removeField("f6splmgh")

  return dao.saveCollection(collection)
})
