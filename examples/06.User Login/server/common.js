module.exports = {
	implementation: "hello",
	debug: true,
	utBus: {serviceBus: {jsonrpc: {domain: true, utLogin: false}}},
	apiGateway: {
		discover: true,
		api: [
			'/oauth2-redirect.html',
			'/api/{path*}',
			'/rpc/subject/{path*}'
		]
	},
	utHello: {
		orchestrator: true,
		gateway: true
	},
	utLogin: {
		orchestrator: true,
		gateway: true,
		jwtToken: 'jwtToken'
	},
	utUser: {
		orchestrator: true,
		gateway: true
	}
};
