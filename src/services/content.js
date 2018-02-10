import { config } from 'config';
import Twig from 'twig';
import arrayShuffle from 'array-shuffle';
import missingTemplate from 'templates/missing.json';

export const contentService = {

    getMissingSubject(project, user) {
        const fullName = user.firstName + ' ' + user.lastName;
        const today = (new Date()).toLocaleDateString();

        const subjectTemplate = Twig.twig({data: missingTemplate.subject});

        return subjectTemplate.render({
            projectName: project.name,
            fullName,
            date: today
        });
    },

    getMissingContent(project, user) {
        const today = (new Date()).toLocaleDateString();
        const link = config.serviceUrl.clientApp + '/projects/' + project.id;
        const lastMessage = this.getLastMessage(project);

        const bodyTemplate = Twig.twig({data: missingTemplate.body});

        return bodyTemplate.render({
            firstName: user.firstName,
            date: today,
            link,
            lastMessage
        });
    },

    getLastMessage(project) {
        const maxPeople = 3;

        if (project.tickedUsers.length === 0) {
            return 'Become the first people to fill in!';
        }

        const tickedUserNames = project.tickedUsers.map(user => user.firstName);

        if (tickedUserNames.length <= maxPeople) {
            return tickedUserNames.join(', ') + ' filled in.';
        }

        const others = tickedUserNames.length - maxPeople;
        return arrayShuffle(tickedUserNames).slice(0, maxPeople).join(', ') + ' and ' + others + ' others filled in.';
    }
};
