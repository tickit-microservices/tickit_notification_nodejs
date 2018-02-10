import { config } from 'config';
import * as request from 'request-promise';

export const projectService = {

    async getTickStatistic() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const today = [year, month, day].join('-');

        const url = config.serviceUrl.project + '/projects/ticks?date=' + today;

        const response = await request.get({url: url, json: true});

        return response.data;
    }
};