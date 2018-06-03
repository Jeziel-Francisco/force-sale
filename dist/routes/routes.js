"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = (express) => {
    express.route('/api/v1/user')
        .get((req, res) => {
        res.status(200).json({ get: 'OK' });
    })
        .post((req, res) => {
        res.status(200).json({ post: 'OK' });
    })
        .put((req, res) => {
        res.status(200).json({ put: 'OK' });
    })
        .delete((req, res) => {
        res.status(200).json({ delete: 'OK' });
    });
};
exports.CompanyRoutes = (express) => {
    express.route('/api/v1/company')
        .get((req, res) => {
        res.status(200).json({ get: 'OK' });
    })
        .post((req, res) => {
        res.status(200).json({ post: 'OK' });
    })
        .put((req, res) => {
        res.status(200).json({ put: 'OK' });
    })
        .delete((req, res) => {
        res.status(200).json({ delete: 'OK' });
    });
};
