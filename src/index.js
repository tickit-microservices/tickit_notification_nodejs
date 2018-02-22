import 'babel-polyfill';
import { projectService } from 'services/project';
import { notificationService } from 'services/notification';

projectService.getTickStatistic().then(projects => {
    console.log('There are ' + projects.length + ' projects in total');

    notificationService.notify(projects);
});