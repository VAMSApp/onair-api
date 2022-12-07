import * as winston  from 'winston';
import chalk from 'chalk';

export type LoggerConfig = {
    logLevel?: string;
    logToConsole?: boolean;
}

export type Meta = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key:string]: any;
}

export class Logger {
    private logger: winston.Logger | undefined;

    private Config = {
        logLevel: 'info',
        logToConsole: false,
    }

    constructor(cfg:LoggerConfig) {
        this.Config = {
            ...this.Config,
            ...cfg
        };

        this.initialize();

        this.debug = this.debug.bind(this);
        this.info = this.info.bind(this);
        this.warn = this.warn.bind(this);
        this.error = this.error.bind(this);

    }

    private initialize() {
        if (this.logger) return;
        const { combine, timestamp, printf, } = winston.format;

        const consoleFormat = printf(({ level, message, }) => {
            const levelUpper = level.toUpperCase();
            switch (levelUpper) {
            case 'DEBUG':
                message = chalk.green(message);
                level = chalk.greenBright.bold(level);
                break;
            case 'INFO':
                message = chalk.white(message);
                level = chalk.whiteBright.bold(level);
                break;

            case 'WARN':
                message = chalk.yellow(message);
                level = chalk.black.bgYellowBright.bold(level);
                break;

            case 'ERROR':
                message = chalk.red(message);
                level = chalk.black.bgRedBright.bold(level);
                break;

            default:
                break;
            }

            return `[${level}]: ${chalk.blue('OnAirApi()')}: ${message}`;
        });

        const consoleTransport = new winston.transports.Console({
            level: this.Config.logLevel,
            format: combine(
                timestamp(),
                consoleFormat
            )
        });

        this.logger = winston.createLogger({
            level: this.Config.logLevel,
            format: combine(
                timestamp(),
                winston.format.splat(),
                consoleFormat
            ),
            transports: [consoleTransport]
        });
    }

    public setLevel(level: string) {
        if (this.logger === undefined) this.initialize();
        this.Config.logLevel = level;
    }

    public debug(message: string, ...meta: Meta[]) {
        if (this.logger === undefined) {
            this.initialize();
            this.debug(message, meta);
        } else {
            if (this.Config.logToConsole === false) return;
            this.logger.debug(message, meta);
        }
    }

    public info(message: string, ...meta: Meta[]) {
        if (this.logger === undefined) {
            this.initialize();
            this.info(message, meta);
        } else {
            if (this.Config.logToConsole === false) return;
            this.logger.info(message, meta);
        }
    }

    public warn(message: string, ...meta: Meta[]) {
        if (this.logger === undefined) {
            this.initialize();
            this.warn(message, meta);
        } else {
            if (this.Config.logToConsole === false) return;
            this.logger.warn(message, meta);
        }
    }

    public error(message: string, ...meta: Meta[]) {
        if (this.logger === undefined) {
            this.initialize();
            this.error(message, meta);
        } else {
            if (this.Config.logToConsole === false) return;
            this.logger.error(message, meta);
        }
    }
}

export default Logger;
