/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r4ha33aj0kl1mh3",
    "created": "2023-10-24 11:03:44.764Z",
    "updated": "2023-10-24 11:03:44.764Z",
    "name": "Couleur",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("r4ha33aj0kl1mh3");

  return dao.deleteCollection(collection);
})
