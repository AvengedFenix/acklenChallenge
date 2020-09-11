const withImages = require("next-images");

module.exports = withImages({
	env: {
		MONGO_URI:
			"mongodb+srv://mario:acklenDB@cluster0.wci2l.mongodb.net/acklenChallenge?retryWrites=true&w=majority",
		AUTH0_DOMAIN: "maslz98.us.auth0.com",
		AUTH0_CLIENT_ID: "4T1TbPEte0vUOAy0iVOKAV1hxmFmQMsr",
		AUTH0_CLIENT_SECRET: "0ZqnieDk8scoPLJR9qZgUwva0FKhcLph_zHRyJUn43ocg1xFdm5k5vnt84m1ZgwA",
		COOKIE_SECRET: "la-galleta-del-tigre-tiene-el-nombre-de-oracle",
		REDIRECT_URI: "http://localhost:3000/api/callback",
		POST_LOGOUT_REDIRECT_URI: "http://localhost:3000/"
	},
});
