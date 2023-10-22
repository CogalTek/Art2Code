// pb_hooks/main.pb.js

routerAdd("GET", "/hello", () => {
    return c.json(200, { "message": "Hello" })
})
