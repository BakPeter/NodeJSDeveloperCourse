import winston from 'winston';
import { SeqTransport } from '@datalust/winston-seq';

export const logger = winston.createLogger({
  format: winston.format.combine(
    /* This is required to get errors to log with stack traces. See https://github.com/winstonjs/winston/issues/1498 */
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { application: 'web-server' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new SeqTransport({
      serverUrl: 'http://127.0.0.1:5341',
      // apiKey: 'FEvn39ftwXUZxBqsMo4s0',
      onError: (e) => {
        console.error(e);
      },
      handleExceptions: true,
      handleRejections: true,
    }),
  ],
});
