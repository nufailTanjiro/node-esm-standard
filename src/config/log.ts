import logger from "#/service/winston.service";

export const morganConfig = {
  stream: {
    write: (message: string) => {
      logger.info(message.trim());
    },
  },
};
