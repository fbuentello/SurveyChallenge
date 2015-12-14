module.exports = {
	development: {
		host: "mysql://b907f8f6c3eb11:ebd9d53b@us-cdbr-iron-east-03.cleardb.net/heroku_b430b97b825ed4f?reconnect=true",
		options: {
	        dialect: "mysql",
	        port: 3306,
	        host: 'us-cdbr-iron-east-03.cleardb.net',
	        logging: console.log,
	        pool: {
	            maxConnections: 1,
	            maxIdleTime: 10
	        }
	    },
	    defaultUser: {
	    	username: 'sumoMe',
            password: 'test'
	    },
	    serverKey: 'xSlD5zGlZdKSijW5r0m3'
	}
}