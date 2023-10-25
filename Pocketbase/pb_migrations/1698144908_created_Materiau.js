/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rbm9xh3yhwfkplq",
    "created": "2023-10-24 10:55:08.608Z",
    "updated": "2023-10-24 10:55:08.608Z",
    "name": "Materiau",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hhdxjqdi",
        "name": "libelle_materiau",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rbm9xh3yhwfkplq");

  return dao.deleteCollection(collection);
})
