/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8cuej9vy699j7bh",
    "created": "2023-10-24 11:15:49.078Z",
    "updated": "2023-10-24 11:15:49.078Z",
    "name": "Couleur_de_la_branche",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, Lunettes.couleur_branches AS Couleur_branche\nFROM Lunettes"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8cuej9vy699j7bh");

  return dao.deleteCollection(collection);
})
