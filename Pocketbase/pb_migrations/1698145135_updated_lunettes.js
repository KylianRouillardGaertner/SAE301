/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrq6b9zozmz0imj")

  collection.name = "Lunettes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrq6b9zozmz0imj")

  collection.name = "lunettes"

  return dao.saveCollection(collection)
})
