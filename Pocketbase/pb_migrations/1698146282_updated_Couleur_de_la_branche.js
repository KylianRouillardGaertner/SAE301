/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8cuej9vy699j7bh")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, Couleur.libelle_couleur AS Couleur_branche\nFROM Lunettes, Couleur\nWHERE Lunettes.couleur_branches = Couleur.id"
  }

  // remove
  collection.schema.removeField("mx6pliac")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vrksypj2",
    "name": "Couleur_branche",
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
  const collection = dao.findCollectionByNameOrId("8cuej9vy699j7bh")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, Lunettes.couleur_branches AS Couleur_branche\nFROM Lunettes, Couleur\nWHERE Lunettes.couleur_branches = Couleur.id"
  }

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

  // remove
  collection.schema.removeField("vrksypj2")

  return dao.saveCollection(collection)
})
