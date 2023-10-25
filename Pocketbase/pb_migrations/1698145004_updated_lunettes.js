/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrq6b9zozmz0imj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yeawx9k1",
    "name": "id_materiau_cadre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rbm9xh3yhwfkplq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nwmolslk",
    "name": "id_utilisateur",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rbm9xh3yhwfkplq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yhakqrfm",
    "name": "id_materiau_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rbm9xh3yhwfkplq",
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
  collection.schema.removeField("yeawx9k1")

  // remove
  collection.schema.removeField("nwmolslk")

  // remove
  collection.schema.removeField("yhakqrfm")

  return dao.saveCollection(collection)
})
