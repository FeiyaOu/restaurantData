        const jsonServer = require('json-server');
        const server = jsonServer.create();
        const router = jsonServer.router('db.json');
        const middlewares = jsonServer.defaults();
        const port = process.env.PORT || 3000; // Use process.env.PORT for Render

        server.use(middlewares);
        server.use(router);
        server.listen(port, () => {
            console.log(`JSON Server is running on port ${port}`);
        });