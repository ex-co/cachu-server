const winston = require('winston');
const { format } = require('logform');

const Logger = function(filename) {
    return winston.createLogger({
        transports: [
            new winston.transports.Console({
                format: format.combine(
                    format.colorize(),
                    format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
                    format.printf(info => {
                        return `${info.timestamp} ${filename} ${info.level}: ${info.message}`;
                    })
                )
            }),
        ]
    });
}

module.exports = Logger;