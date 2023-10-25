/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8cuej9vy699j7bh")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, Lunettes.couleur_branches AS Couleur_branche\nFROM Lunettes, Couleur\nWHERE Lunettes.couleur_branches = Couleur.id"
  }

  // remove
  collection.schema.removeField("ebami7bb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mx6pliac",
    "name": "Couleur_branche",
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
  const collection = dao.findCollectionByNameOrId("8cuej9vy699j7bh")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, Lunettes.couleur_branches AS Couleur_branche\nFROM Lunettes"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ebami7bb",
    "name": "Couleur_branche",
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

  // remove
  collection.schema.removeField("mx6pliac")

  return dao.saveCollection(collection)
})
