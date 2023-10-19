/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aruwkid4kafc9p8")

  // remove
  collection.schema.removeField("y9dedhkc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "flnrikp9",
    "name": "telephone",
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
  const collection = dao.findCollectionByNameOrId("aruwkid4kafc9p8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y9dedhkc",
    "name": "telephone",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("flnrikp9")

  return dao.saveCollection(collection)
})
