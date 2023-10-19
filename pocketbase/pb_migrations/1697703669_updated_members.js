/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("njzdmaq7xhub8x2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9xrtj5rr",
    "name": "tel",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zafrmqm3",
    "name": "ecole",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nwwisnkn",
    "name": "annee",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("njzdmaq7xhub8x2")

  // remove
  collection.schema.removeField("9xrtj5rr")

  // remove
  collection.schema.removeField("zafrmqm3")

  // remove
  collection.schema.removeField("nwwisnkn")

  return dao.saveCollection(collection)
})
