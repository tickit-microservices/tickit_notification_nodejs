import 'babel-polyfill';
import { projectService } from 'services/project';
import { notificationService } from 'services/notification';

projectService.getTickStatistic().then(projects => notificationService.notify(projects));